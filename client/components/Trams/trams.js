import React from "react";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './trams.module.sass'

export default class Trams extends React.Component {


    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.image}/>
                    <div className={styles.trams}/>
                    <div className={styles.trams}/>
                    <div className={styles.trams}/>
                    <div className={styles.trams}/>
                    <div className={styles.trams}/>
                    <div className={styles.trams}/>
                    <div className={styles.trams}/>
                </div>
            </div>

        )
    }

}

