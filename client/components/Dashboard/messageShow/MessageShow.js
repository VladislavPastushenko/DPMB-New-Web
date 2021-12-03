import React from "react";
import {connect} from "react-redux";
import styles from "./messageShow.module.sass"
import {Modal, Form, Input, Select, Button, message} from "antd"
import { LoadingOutlined } from '@ant-design/icons'
import { fetchQuestionsFromUsers } from "../../../store/questionsFromUsers/actions";
import { ResponsiveContainer } from "recharts";
import { DataGrid } from "@material-ui/data-grid"

const { TextArea } = Input;

class MessageShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            askModal: false,
            res: 'preparing',
            data: [],
        };

        this.props.fetchQuestionsFromUsers().then(
            (res) => {
              this.setState({data: res})
              console.log("this.state.data")

              console.log(this.state.data)
            },
            (err) => {
              this.setState({errMsg: err})
            }
  
          );
    }
    handleOk = () => {
        this.setState({askModal: false});
        message.success({
            type: 'error',
            content: 'Message successfully send',
            duration: 3
        })
    };

    render() {
        return (
            <>
                <a onClick={() => {this.setState({isModalOpen: true})}}>
                    Show message
                </a>
                <Modal title="Message from user" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={[
                        <Button key="back" type="primary" onClick={() => {this.setState({ isModalOpen: false }); this.setState({askModal: true})}}>
                          Odpovědět
                        </Button>]}>
                    <Form initialValues={{
                            message: this.props.message.message
                        }}
            
                    >
                        <Form.Item
                            name="message"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                        >
                            <TextArea size="large" disabled/>
                        </Form.Item>
                    </Form>
                </Modal>
                <Modal title="Message from user" visible={this.state.askModal} onCancel={() => {this.setState({ askModal: false })}} footer={[
                    <Button key="back" onClick={this.handleOk}>
                      Send
                    </Button>]}>
                    <Form
            
                    >
                        <Form.Item
                            name="message"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                        >
                            <TextArea size="large" />
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        carriers: state.carrier.carriers,
        res: state.questionsFromUsers.res,
    }
  }
  export default connect(mapStateToProps, {fetchQuestionsFromUsers
  }) (MessageShow);