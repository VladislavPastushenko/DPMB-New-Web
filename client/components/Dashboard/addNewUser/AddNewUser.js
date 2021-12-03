import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./../addNewStop/addNewStop.module.sass"
import { Form, Button, Modal, Input, Result } from 'antd'
import { signup } from "../../../store/users/actions";

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
        span: 5,
        offset: 0,
      },
      sm: {
        span: 5,
        offset: 1,
      },
    },
  };

class AddNewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
            isModalVisible: false,
            success: false,
            errorStatus: false
        };
    }

    handleOk = () => {
        this.setState({
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
        });
    };

    handleChangeRole = (value) => {
        console.log("value: " + value)
        this.setState({role: value})
    }

    handleChangeStatus = (value) => {
        console.log("value: " + value)
        this.setState({status: value})
    }


    onFinish = (values) => {
        console.log("values")
        console.log(values)

        if (values.name === undefined) {
          values.name = null
        }
        if (values.surname === undefined) {
          values.surname = null
        }
        if (values.name === null && values.surname === null) {
          values.full_name = null
        } else {
          values.full_name = values.name + " " + values.surname
        }
        delete values.name
        delete values.surname
        delete values.agreement
        delete values.confirm
    
        this.props.signup(values).then(
          (res) => {
            this.setState({success: true})
          },
          (err) => {
            this.setState({errorStatus: true})
            console.log(err)
          }
        )
      };
    
    render() {
        if (!this.state.success && !this.state.errorStatus) {
        return (
            <div className={styles.newStop}>
                <Form
                    className={styles.addStopForm}
                    {...formItemLayout}
                    encType='application/x-www-form-urlencoded'
                    name="register"
                    onFinish={this.onFinish}
                    scrollToFirstError
                    >
                    <Form.Item
                        name="email"
                        label="E-mail"
                        tooltip="After registration, a confirmation mail will be sent to your email"
                        rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        tooltip="The password must be at least 8 characters long and must have a large letter, a small letter and a number"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            var smallLetters = "qwertyuiopasdfghjklzxcvbnm";
                            var bigLetters = "QWERTYUIOPLKJHGFDSAZXCVBNM";
                            var digits = "0123456789";
                            var isSmall = false;
                            var isBig = false;
                            var isDigit = false; 

                            for (var i = 0; i < value.length; i++) {
                                if (!isSmall && smallLetters.indexOf(value[i]) != -1) isSmall = true;
                                else if (!isBig && bigLetters.indexOf(value[i]) != -1) isBig = true;
                                else if (!isDigit && digits.indexOf(value[i]) != -1) isDigit = true;
                            } 
                            
                            if (value.length < 8) {
                                return Promise.reject(new Error('The password must be at least 8 characters long'));
                            }
                            if (isSmall === true && isBig === true && isDigit === true) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Your password must have a large letter, a small letter and a number'));
                            },
                        }),
                        
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            } 
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                        {
                            required: false,
                            message: 'Please input your name!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="surname"
                        label="Surname"
                        rules={[
                        {
                            required: false,
                            message: 'Please input your surname!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item {...tailFormItemLayout} className={styles.addStopItem}>
                        <Button type="primary" htmlType="submit" className={styles.addStopButton}>
                        Create
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
        } else if (this.state.errorStatus) {
            return (
            <div className={styles.newStop}>  
              <Result
              status="error"
              title="Something went wrong!"
              extra={[
                <Button type="primary" key="try" onClick={() => this.setState({ errorStatus: false})}>
                  Try again
                </Button>,
            ]}
            ></Result>
            </div>
            );
          } else {
            return (
            <div className={styles.newStop}>  
              <Result
                status="success"
                title="Your registration was successful!"
                subTitle="A confirmation email has been sent to your email address"
                extra={[
                <Link href='/dashboar' key='back home'>
                <Button type="primary" key="console">
                  Main Page
                </Button>,
                </Link>
                ]}
              />
            </div>
              );
          }
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.res,
    }
  }

export default connect(mapStateToProps, {signup
}) (AddNewUser);

