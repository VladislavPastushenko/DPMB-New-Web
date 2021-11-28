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

    render() {
        return (
            <div className={styles.newCarrier}>
                <h1 className={styles.addCarrierTitle}>New City</h1>
                <form className={styles.addCarrierForm}>
                    <div className={styles.addCarrierItem}>
                    <label>City Name</label>
                    <input type="text" placeholder="Name of city" />
                    </div>
                    <button className={styles.addCarrierButton}>Create</button>
                </form>
            </div>
        );
    }
}