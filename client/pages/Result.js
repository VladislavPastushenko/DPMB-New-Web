import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

export default class RegistrationForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    render() {
        return (
            <Result
                status="success"
                title="Your registration was successful!"
                extra={[
                    <Button type="primary" key="console">
                        Start Working
                    </Button>,
                ]}
            />
        )
    }
}