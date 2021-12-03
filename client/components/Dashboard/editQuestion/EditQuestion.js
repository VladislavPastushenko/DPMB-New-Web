import React from "react";
import {connect} from "react-redux";
import {Modal, Form, Input, Select, Button, message} from "antd"
import { LoadingOutlined } from '@ant-design/icons'
import { fetchFAQs } from "../../../store/FAQs/actions";

const { TextArea } = Input;

class EditQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            data: [],
        };

        this.props.fetchFAQs().then(
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
            content: 'Otázka úspěšně editovana',
            duration: 3
        })
    };

    render() {
        return (
            <>
                <a onClick={() => {this.setState({isModalOpen: true})}}>
                    Text otázky
                </a>
                <Modal title="Text otázky" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={[
                        <Button key="back" type="primary" onClick={this.handleOk}>
                          Editovat
                        </Button>]}>
                    <Form initialValues={{
                            question: this.props.question.question
                        }}
            
                    >
                        <Form.Item
                            name="question"
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
        res: state.FAQs.res,
    }
  }
  export default connect(mapStateToProps, {fetchFAQs
  }) (EditQuestion);