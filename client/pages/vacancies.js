// Author: Tomason Viktoryia
// Login: xtomas34
import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "../Api";
import {UserAddOutlined} from '@ant-design/icons';
import {Col, Row, Form, Input, Button, message} from 'antd';
import { fetchVacancies, editVacancy} from "../store/vacancies/actions";
import {lookupUserInStorage, fetchLoggedUser} from '../store/users/actions'

import TextArea from "antd/lib/input/TextArea";


import styles from './styles/table.module.sass'
const api = new Api;



class Vacancy extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        edit: false,
        el: this.props.el
    }
}

onFinish = (values) => {
    values.id = this.props.el.id
    this.props.editVacancy(values).then(
        res => {
            this.setState({edit: false, el: values})
            message.open({
                type: 'success',
                content: "Editace probehla uspesne",
            })
        },
        err => {
            console.log(err)
            message.open({
                type: 'error',
                content: "Error while editing FAQ",
            })
        }
    )
}

render() {
    if (!this.state.edit) {
        return (
            <>
                <div className={styles.title} style={{borderRadius:'4px', padding: '0.5em 0', color: 'white', fontWeight : '600'}}>
                    <div className='fontSizeMd' align='center'>{(this.state.el.name)}</div>
                </div>
                <div className='fontSizeSm' align='left' style={{ marginTop: '2em', borderColor: 'rgb(75, 146, 147)' }}>
                    <div style={{marginBottom: '1em'}}>
                        POŽADUJEME:
                        <br/>
                        <div style={{marginLeft: '1em'}}>
                            {this.state.el.requirements}
                        </div>
                        NABÍZÍME:
                        <div style={{marginLeft: '1em'}}>
                            {this.state.el.offers}
                        </div>
                    </div>
                </div>
                {this.props.loggedUser &&
                <div align='right'>
                    <Button size="large" onClick={() => {this.setState({edit: true})}}>
                        Upravit
                    </Button>
                </div>}
            </>
        )
    }
    else {
        return (
            <div>
                <Form initialValues={{
                        name: this.state.el.name,
                        requirements: this.state.el.requirements,
                        offers: this.state.el.offers,
                    }}
                onFinish={this.onFinish}
                >
                    <div className={'fontSizeSm'} align='left'>
                        Profesí:
                    </div>
                    <Form.Item
                        name="name"
                        rules={[{
                            required: true,
                            message: 'Please input profession',
                        },]}
                    >
                        <Input placeholder="Profesí" />
                    </Form.Item>
                    <div className={'fontSizeSm'}>
                        Předpis:
                    </div>
                    <Form.Item
                        name="requirements"
                        rules={[{
                            required: true,
                            message: 'Please input requirements',
                        },]}
                    >
                        <TextArea size="large" style={{height: '300px'}} placeholder="Předpis" />
                    </Form.Item>

                    <div className={'fontSizeSm'} align='left'>
                        Nabídka:
                    </div>
                    <Form.Item
                        name="offers"
                        rules={[{
                            required: true,
                            message: 'Please input offers',
                        },]}
                    >
                        <TextArea size="large" style={{height: '300px'}} placeholder="Nabídka" />
                    </Form.Item>

                    <div align='right'>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large">
                                Upravit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        )
    }
}
}
class Vacancies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: [],
            offers: [],
            requirements: [],
            loggedUser: null
        }

        this.props.fetchVacancies().then(
            (res) => {
                this.setState({data: res})
            },
            (err) => {
                this.setState({errMsg: err})
            }

        );

        this.props.lookupUserInStorage().then(
            (token) => {
                this.props.fetchLoggedUser(token)
                .then(
                    (res) => {this.setState({loggedUser: res});}
                )
            }
        )
    }

    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>Zamestnani</title>
                </Head>
                <p className='fontSizeLg' align='center' >
                        Přidáš se k nám?</p>
                <Row style={{height: '100%', overflow: 'hidden'}} gutter={[0,40]} align='center'>
                    <Col xs={22} md={20} lg={10} xl={10} xxl={10}  align='center'>
                    <UserAddOutlined  style={{ fontSize: '48px', color: 'white',backgroundColor:'rgb(75, 146, 147)', borderRadius:'50%', width: '100px',height: '100px',lineHeight: '110px'}}/>
                            <p className='fontSizeMd'style={{paddingTop:'2vh'}}> <b>Nabídky pracovních příležitostí</b></p>
                            <p className='fontSizeSm'>
                                Hledáte práci v rozvíjející se a stabilní firmě s jistotou dobrého výdělku?<br/>
                                Přidejte se do našeho týmu a začněte svoji profesní kariéru u nás!<br/>
                                Rádi Vás u nás přivítáme!<br/>
                           </p>
                            {this.state.data.map(el => {
                                return (
                                    <div key={el.id} style={{marginBottom: '8rem'}}>
                                        <Vacancy el={el} editVacancy={this.props.editVacancy} loggedUser={this.state.loggedUser}></Vacancy>
                                    </div>
                                )
                            })}
                     </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        res: state.vacancies.res,
    }
}
export default connect(mapStateToProps, {fetchVacancies, editVacancy, lookupUserInStorage, fetchLoggedUser
}) (Vacancies);


