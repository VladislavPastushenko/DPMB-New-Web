import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.min.css';
import styles from './styles/login.module.sass'
import { Form, Input, Button, Checkbox } from "antd";
import {connect} from "react-redux";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from "../store/users/actions";


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
    this.state = {}
  }

    onFinish = (values) => {
      console.log('Received values of form: ', values);
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
          name="name"
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
export default connect(mapStateToProps, {login
}) (normalLoginForm);