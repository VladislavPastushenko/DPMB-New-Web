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
            content: 'Zpráva úspěšně odeslána',
            duration: 3
        })
    };

    render() {
        return (
            <>
                <a onClick={() => {this.setState({isModalOpen: true})}}>
                    Zobrazit zprávu
                </a>
                <Modal title="Zpráva od uživatele" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={[
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
                <Modal title="Odpověď pro uživatele" visible={this.state.askModal} onCancel={() => {this.setState({ askModal: false })}} footer={[
                    <Button key="send" type="primary" onClick={this.handleOk}>
                      Odeslat
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
        res: state.questionsFromUsers.res,
    }
  }
  export default connect(mapStateToProps, {fetchQuestionsFromUsers
  }) (MessageShow);