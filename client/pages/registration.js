import React, {useState} from "react";
import {connect} from "react-redux";

import ReactDOM from "react-dom";
import 'antd/dist/antd.min.css';
import styles from './styles/registration.module.sass'
import { signup } from "../store/users/actions";
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
  } from 'antd';
 
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

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onFinish = (values) => {
    values.full_name = values.name + " " + values.surname
    delete values.name
    delete values.surname
    delete values.agreement
    delete values.confirm
    console.log('Received values of form: ', values);

    this.props.signup(values).then(
      (res) => {
        console.log(this.props.res)
        console.log(res)
      },
      (err) => {
        console.log(err)
      },

    )
  };
  render() {
  return (
    <Form
      {...formItemLayout}
      encType='application/x-www-form-urlencoded'
      name="register"
      onFinish={this.onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
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
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
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
        tooltip="Your name"
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
        tooltip="Your surname"
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
      
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
  }
};

const mapStateToProps = state => {
  return {
      users: state.users.res,
  }
}
export default connect(mapStateToProps, {signup
}) (RegistrationForm);