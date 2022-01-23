// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import styles from "./newsEdit.module.sass"
import {Modal, Form, Input, Button, message} from "antd"
import { editNews } from '../../../store/news/actions'
import { LoadingOutlined } from '@ant-design/icons'
import TextArea from "antd/lib/input/TextArea";


class NewsEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            res: 'preparing',
        };
    }

    onFinish = (values) => {
        values.id = this.props.news.id
        this.setState({res: 'loading'})
        this.props.editNews(values).then(
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
                    content: "Error while editing news",
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
                <Modal title="Upravit uživatelská data" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={null}>
                    {this.state.res === 'preparing' &&
                    <Form initialValues={{
                        name: this.props.news.name,
                        text: this.props.news.text,
                    }}
                        onFinish={this.onFinish}
                    >
                        <div className={'fontSizeXs'}>
                            News-name:
                        </div>
                        <Form.Item
                            name="name"
                            rules={[
                            {
                                required: true,
                                message: 'Please input news-name',
                            },
                            ]}
                        >
                            <Input placeholder="News-name" />
                        </Form.Item>

                        <div className={'fontSizeXs'}>
                            Text:
                        </div>
                        <Form.Item
                            name="text"
                            rules={[
                            {
                                required: true,
                                message: 'Please input text',
                            },
                            ]}
                        >
                            <TextArea size="large" style={{height: '300px'}} placeholder="Text" />
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
                        Novinka byla úspěšně upravena
                    </div>}
                </Modal>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        res: state.news.res,
    }
  }
  export default connect(mapStateToProps, { editNews
  }) (NewsEdit);