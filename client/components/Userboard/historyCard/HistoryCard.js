import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./historyCard.module.sass"
import { Card, List } from 'antd'

const data = [
    'Brno-Hlavni nadrazi -> Praha-Florenc',
    'Praha-Florenc -> Brno-Hlavni nadrazi',
    'Praha-Florenc -> Brno-Hlavni nadrazi',
    'Praha-Florenc -> Brno-Hlavni nadrazi',
    'Praha-Florenc -> Brno-Hlavni nadrazi',

];

export default class MiddleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        
        return (
            <Card title="My history" bordered={false}>
                <div className={styles.userShow}>
                    <div>
                        <List
                        size="small"
                        header="Last trips"
                        bordered={false}
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </div>
                </div><br/>
                <div className={styles.container}>
                    <button className={styles.historyShowButton} onClick={() => {this.props.changeLocation('historyList')}}>Show history</button>
                </div>
                

                


            </Card>
        );
        
    }
}

