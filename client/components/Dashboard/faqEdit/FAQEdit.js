// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import styles from "./faqEdit.module.sass"
import {Modal, Form, Input, Select, Button, message} from "antd"
import { FAQedit } from '../../../store/FAQs/actions'
import { LoadingOutlined } from '@ant-design/icons'
import TextArea from "antd/lib/input/TextArea";

class FAQEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            res: 'preparing',
        };
    }

    onFinish = (values) => {
        values.id = this.props.FAQ.id
        this.setState({res: 'loading'})
        this.props.FAQedit(values).then(
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
                    content: "Error while editing FAQ",
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
                            question: this.props.FAQ.question,
                            answer: this.props.FAQ.answer,
                        }}
                        onFinish={this.onFinish}
                    >
                        <div className={'fontSizeXs'}>
                            Otazka:
                        </div>
                        <Form.Item
                            name="question"
                            rules={[{
                                required: true,
                                message: 'Please input question',
                        }]}>
                            <TextArea size="large" style={{height: '300px'}} placeholder="Otazka" />
                        </Form.Item>

                        <div className={'fontSizeXs'}>
                            Odpoved:
                        </div>
                        <Form.Item
                            name="answer"
                            rules={[{
                                required: true,
                                message: 'Please input answer',
                            },]}
                        >
                            <TextArea size="large" style={{height: '300px'}} placeholder="Odpoved" />
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
                        FAQ byl úspěšně upraven
                    </div>}
                </Modal>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        res: state.FAQs.res,
    }
  }
  export default connect(mapStateToProps, { FAQedit
  }) (FAQEdit);