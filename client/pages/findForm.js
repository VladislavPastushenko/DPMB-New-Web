import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.min.css';
import styles from './styles/login.module.sass'
import { Form, Input, Button, Checkbox } from "antd";
import {connect} from "react-redux";
import { UserOutlined, LockOutlined } from '@ant-design/icons';


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

class findForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

    onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    render() {
    return (
        <div>hello</div>
    );
  };
}

const mapStateToProps = state => {
  return {
      users: state.users.res,
  }
}
export default connect(mapStateToProps, {
}) (findForm);