import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./addNewNews.module.sass"
import { Button, Modal, Input, Form, Result } from 'antd'
import { createNews } from "../../../store/news/actions";

const { TextArea } = Input;

const formItemLayout = {
    labelCol: {
      xs: {
        span: 2,
      },
      sm: {
        span: 2,
      },
    },
    wrapperCol: {
      xs: {
        span: 6,
      },
      sm: {
        span: 6,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 15,
        offset: 0,
      },
      sm: {
        span: 15,
        offset: 0,
      },
    },
  };

class NewNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
            isModalVisible: false,
            success: false,
            errorStatus: false,
            data: [],
        };

    }
    handleOk = () => {
        this.setState({
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
        });
    };

    handleChange = (value) => {
        this.setState({city_id: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("data")
        console.log(e.target.elements.value)

        let data = {
            name: e.target.elements.name.value,
            text: this.state.data,

        }
        console.log(data)

        this.props.createNews(data).then(
            (res) => {
                this.setState({isSuccessModalVisible: true});
                e.target.elements.name.value = null;

            },
            (err) => {
                console.log(err);
                this.setState({isErrorModalVisible: true});
            ;},
        )
    }

    takeValue = (e) => {
        this.setState({data: e.target.value})

    }

    render() {
        return (
            <div className={styles.newStop}>
                <h1 className={styles.addStopTitle}>Nová Novinka</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addStopItem}>
                    <label>Název novinky</label>
                    <input type="text" name="name" placeholder="Název novinky" />
                    </div>
                    <Form className={styles.addStopForm} {...formItemLayout}>
                        <Form.Item
                            name="new"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <TextArea size="medium" onChange={this.takeValue}/>
                        </Form.Item>
                    </Form>
                    <button className={styles.addStopButton}>Vytvořit</button>
                </form>
                <Modal title="Success" visible={this.state.isSuccessModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                        <Button key="back" onClick={this.handleOk}>
                          OK
                        </Button>]}>
                            <p>Novinka úspěšně přidána</p>
                </Modal>
                <Modal title="Success" visible={this.state.isErrorModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                    <Button key="back" onClick={this.handleOk}>
                      OK
                    </Button>]}>
                        <p>Novinka úspěšně přidána</p>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.res,
    }
  }

export default connect(mapStateToProps, {createNews,
}) (NewNews);
