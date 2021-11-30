import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.min.css';
import styles from './styles/login.module.sass'
import { Form, Input, Button, Checkbox, message } from "antd";
import {connect} from "react-redux";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { loginUser } from "../store/users/actions";
import Router from 'next/router'


const formItemLayout = {
    labelCol: {
      xs: {
        span: 8,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 8,
      },
      sm: {
        span: 8,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 8,
        offset: 0,
      },
      sm: {
        span: 8,
        offset: 8,
      },
    },
  };

class normalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errMsg: null
    }
  }

    onFinish = (values) => {
      delete values.remember

      this.props.loginUser(values).then(
        (res) => {
          console.log(res)
          message.open(
            {
              type: 'success',
              content: 'You were successfully logged in',
              duration: 3,
              onClose: () => {Router.push('/')}
            }
          )
        },
        (err) => {
          this.setState({errMsg: err})
        }

      )

    };
    render() {
    return (
      <Form
        {...formItemLayout}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
      >
        <Form.Item
          {...tailFormItemLayout}
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your E-mail',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          {...tailFormItemLayout}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {this.state.errMsg &&
          <p className='fontSizeSm' align='center' style={{color: 'red', fontWeight: '300'}}> {this.state.errMsg} </p>}
        <Form.Item {...tailFormItemLayout}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button> &nbsp;
          Or <a href="/registration">register now!</a>
        </Form.Item>
      </Form>
    );
  };
}

const mapStateToProps = state => {
  return {
      users: state.users.res,
  }
}
export default connect(mapStateToProps, {loginUser
}) (normalLoginForm);