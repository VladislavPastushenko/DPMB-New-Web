import React from "react";
import {connect} from "react-redux";
import styles from "./editNews.module.sass"
import {Modal, Form, Input, Select, Button, message} from "antd"
import { LoadingOutlined } from '@ant-design/icons'
import { fetchNews } from "../../../store/news/actions";

const { TextArea } = Input;

class EditNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            data: [],
        };

        this.props.fetchNews().then(
            (res) => {
              this.setState({data: res})
              console.log("data")
              console.log(this.state.data)

            },
            (err) => {
              this.setState({errMsg: err})
            }
  
          );
    }
    handleOk = () => {
        this.setState({isModalOpen: false});
        message.success({
            type: 'error',
            content: 'Novinka úspěšně editovana',
            duration: 3
        })
    };

    render() {
        return (
            <>
                <a onClick={() => {this.setState({isModalOpen: true})}}>
                    Text novinky
                </a>
                <Modal title="Text novinky" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={[
                        <Button key="back" type="primary" onClick={this.handleOk}>
                          Editovat
                        </Button>]}>
                    <Form initialValues={{
                            text: this.props.text.text
                        }}
            
                    >
                        <Form.Item
                            name="text"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                        >
                            <TextArea size="large"/>
                        </Form.Item>
                    </Form>
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
  export default connect(mapStateToProps, {fetchNews
  }) (EditNews);