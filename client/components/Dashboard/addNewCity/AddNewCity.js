import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./addNewCity.module.sass"
import { Form, Button, Input, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export default class NewCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: e.target.elements.name.value 
        }

        console.log(data)
        return false;
        }
    render() {
        return (
            <div className={styles.newCarrier}>
                <h1 className={styles.addCarrierTitle}>New City</h1>
                <form className={styles.addCarrierForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addCarrierItem}>
                    <label>City Name</label>
                    <input type="text" name='name' placeholder="Name of city" />
                    </div>
                    <button type='submit' className={styles.addCarrierButton}>Create</button>
                </form>
            </div>
        );
    }
}