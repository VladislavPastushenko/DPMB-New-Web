// Author: Pastushenko Vladislav
// Login: xpastu04

import React from "react";
import {Row, Col, Divider, Skeleton, Form, Input, Button, message} from "antd";
import Head from 'next/head';
import {fetchNewsById, editNews} from '../../store/news/actions';
import {lookupUserInStorage, fetchLoggedUser} from '../../store/users/actions'

import { connect } from "react-redux";
import TextArea from "antd/lib/input/TextArea";


class News extends React.Component {

    constructor(props) {
        super(props)
        this.state = {item: null, edit: false}

        this.props.fetchNewsById(this.props.id)
            .then(res => this.setState({item: res}))

        this.props.lookupUserInStorage().then(
            (token) => {
                this.props.fetchLoggedUser(token)
                .then(
                    (res) => {this.setState({loggedUser: res});}
                )
            }
        )
    }

    onFinish = (values) => {
        values.id = this.props.news.id

        this.props.editNews(values).then(
            res => {
                this.setState({edit: false, item: values})
                message.open({
                    type: 'success',
                    content: "Novinka byla editovana",
                })
            },
            err => {
                console.log(err)
                message.open({
                    type: 'error',
                    content: "Error while editing news",
                })
            }
        )
    }


    static async getInitialProps({ query }) {
        const id = query.id;
        return { id };
    }

    render() {
        if (!this.state.edit) {
            return (
                <div>
                    <Head>
                        <title> Novinky </title>
                    </Head>
                    <Row align='center' style={{marginTop: '5vh'}}>
                        <Col xxl={12} xl={15} lg={18} md={20} xs={22}>
                            <Skeleton loading={!this.state.item} active>
                                {this.state.item &&
                                <div>
                                    <h1 style={{fontWeight: '600'}} className='fontSizeLg'>
                                        {this.state.item.name}
                                    </h1>
                                    <p className='fontSizeSm' style={{fontWeight: 200}}>
                                        {new Date(this.props.news.date).toLocaleString('default', { month: 'short', day: '2-digit' })} {new Date(this.props.news.date).getFullYear()}
                                    </p>
                                    <article className='fontSizeSm'>
                                        {this.state.item.text}
                                    </article>
                                    <div align='right'>
                                        <Button size="large" onClick={() => {this.setState({edit: true})}}>
                                            Editovat
                                        </Button>
                                    </div>
                                </div>}
                            </Skeleton>
                        </Col>
                    </Row>
                    <Divider/>
                </div>
            )
        } else {
            return (
            <div>
                <Head>
                    <title> Novinky </title>
                </Head>
                <Row align='center' style={{marginTop: '5vh'}}>
                    <Col xxl={12} xl={15} lg={18} md={20} xs={22}>
                        <Skeleton loading={!this.state.item} active>
                            {this.state.item &&
                            <div>
                                <Form initialValues={{
                                    name: this.state.item.name,
                                    text: this.state.item.text,
                                }}
                                onFinish={this.onFinish}
                                >
                                    <h1 style={{fontWeight: '600'}} className='fontSizeMd'>
                                        Nazev
                                    </h1>
                                    <Form.Item
                                        name="name"
                                        rules={[{
                                            required: true,
                                            message: 'Please input news-name',
                                        },]}
                                    >
                                        <Input placeholder="News-name"/>
                                    </Form.Item>

                                    <h1 style={{fontWeight: '600'}} className='fontSizeMd'>
                                        Text
                                    </h1>
                                    <Form.Item
                                        name="text"
                                        rules={[{
                                            required: true,
                                            message: 'Please input text',},
                                        ]}
                                    >
                                        <TextArea size="large" style={{height: '300px'}} placeholder="Text"/>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" size="large">
                                            Upravit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>}
                        </Skeleton>
                    </Col>
                </Row>
                <Divider/>
            </div>
            )
        }
    }
}


const mapStateToProps = state => {
    return {
        news: state.news.news,
    }
}


export default connect(mapStateToProps, {fetchNewsById, editNews, lookupUserInStorage, fetchLoggedUser})(News);