// Author: Pastushenko Vladislav
// Login: xpastu04

import React from "react";
import {Row, Col, Divider, Skeleton, Button, Form, Input, message} from "antd";
import TextArea from "antd/lib/input/TextArea";

import Head from 'next/head';
import {fetchFAQs, FAQedit} from '../store/FAQs/actions';
import { connect } from "react-redux";
import {lookupUserInStorage, fetchLoggedUser} from '../store/users/actions'


class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            el: this.props.el
        }
    }

    onFinish = (values) => {
        values.id = this.props.el.id
        this.props.FAQedit(values).then(
            res => {
                this.setState({edit: false, el: values})
                message.open({
                    type: 'success',
                    content: "Otazka byla editovana",
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
                <div>
                    <div style={{fontWeight: '600'}}>
                        {this.state.el.question}
                    </div>
                    <div>
                        {this.state.el.answer}
                    </div>
                    <div align='right'>
                        <Button size="large" onClick={() => {this.setState({edit: true})}}>
                            Editovat
                        </Button>
                    </div>
                    <Divider/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Form initialValues={{
                            question: this.state.el.question,
                            answer: this.state.el.answer,
                        }}
                        onFinish={this.onFinish}
                    >
                        <div className={'fontSizeMd'}>
                            Otazka:
                        </div>
                        <Form.Item
                            name="question"
                            rules={[{
                                required: true,
                                message: 'Please input question',
                        }]}>
                            <TextArea size="large" style={{height: '100px'}} placeholder="Otazka" />
                        </Form.Item>

                        <div className={'fontSizeMd'}>
                            Odpoved:
                        </div>
                        <Form.Item
                            name="answer"
                            rules={[{
                                required: true,
                                message: 'Please input answer',
                            },]}
                        >
                            <TextArea size="large" style={{height: '100px'}} placeholder="Odpoved" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large">
                                Upravit
                            </Button>
                        </Form.Item>
                    </Form>
                    <Divider/>
                </div>
            )
        }
    }
}

class FAQ extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            faqs: [],
            loggedUser: null
        }

        this.props.fetchFAQs()
            .then(res => this.setState({faqs: res}))

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
                <Head>
                    <title> Q&A </title>
                </Head>
                <Row align='center' style={{marginTop: '5vh'}}>
                    <Col xxl={12} xl={15} lg={18} md={20} xs={22}>
                        <h1 className='fontSizeLg'>
                            Otázky a odpovědi
                        </h1>
                        <Divider/>
                        <Skeleton loading={this.state.faqs.length == 0} active>
                        <div className='fontSizeMd'>
                            {this.state.faqs.map(el => {
                                return (
                                    <div key={el.question}>
                                        <Question el={el} FAQedit={this.props.FAQedit} loggedUser={this.state.loggedUser}/>
                                    </div>
                                )
                            })}
                        </div>
                        </Skeleton>
                    </Col>
                </Row>
                <Divider/>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        faqs: state.FAQs.faqs,
    }
}


export default connect(mapStateToProps, {fetchFAQs, lookupUserInStorage, fetchLoggedUser, FAQedit})(FAQ);