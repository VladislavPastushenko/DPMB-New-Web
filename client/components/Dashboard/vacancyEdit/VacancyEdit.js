// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import styles from "./vacancyEdit.module.sass"
import {Modal, Form, Input, Select, Button, message} from "antd"
import { editVacancy } from '../../../store/vacancies/actions'
import { LoadingOutlined } from '@ant-design/icons'
import TextArea from "antd/lib/input/TextArea";

class VacancyEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            res: 'preparing',
        };
    }

    onFinish = (values) => {
        values.id = this.props.vacancy.id
        this.setState({res: 'loading'})
        this.props.editVacancy(values).then(
            res => {
                this.setState({res: 'OK'})
                this.props.handleUpdate()
                setTimeout(() => {
                        this.setState({ isModalOpen: false, res: 'preparing' })
                    }, 1200)
            },
            err => {
                console.log(err)
                message.open({
                    type: 'error',
                    content: "Error while editing stop",
                })
            }
        )
    }
    render() {
        return (
            <>
                <a onClick={() => {this.setState({isModalOpen: true})}}>
                    Upravit
                </a>
                <Modal title="Upravit data" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={null}>
                    {this.state.res === 'preparing' &&
                    <Form initialValues={{
                        name: this.props.vacancy.name,
                        requirements: this.props.vacancy.requirements,
                        offers: this.props.vacancy.offers,
                    }}
                        onFinish={this.onFinish}
                    >
                    
                        <div className={'fontSizeXs'}>
                            Profesí:
                        </div>
                        <Form.Item
                            name="name"
                            rules={[
                            {
                                required: true,
                                message: 'Please input profession',
                            },
                            ]}
                        >
                            <Input placeholder="Profesí" />
                        </Form.Item>
                        
                        <div className={'fontSizeXs'}>
                            Předpis:
                        </div>
                        <Form.Item
                            name="requirements"
                            rules={[
                            {
                                required: true,
                                message: 'Please input requirements',
                            },
                            ]}
                        >
                            <TextArea size="large" style={{height: '300px'}} placeholder="Předpis" />
                        </Form.Item>

                        <div className={'fontSizeXs'}>
                            Nabídka:
                        </div>
                        <Form.Item
                            name="offers"
                            rules={[
                            {
                                required: true,
                                message: 'Please input offers',
                            },
                            ]}
                        >
                            <TextArea size="large" style={{height: '300px'}} placeholder="Nabídka" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={styles.addStopButton}>
                            Upravit
                            </Button>
                        </Form.Item>
                    </Form>}
                    {this.state.res === 'loading' &&
                    <div className='fontSizeLg' align='center' style={{padding: '2em'}}>
                        <LoadingOutlined/>
                    </div>}
                    {this.state.res === 'OK' &&
                    <div className='fontSizeLg' align='center' style={{padding: '2em'}}>
                        Profesí byla úspěšně upravena
                    </div>}
                </Modal>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        res: state.vacancies.res,
    }
  }
  export default connect(mapStateToProps, { editVacancy
  }) (VacancyEdit);