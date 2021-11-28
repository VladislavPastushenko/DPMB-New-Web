import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./home.module.sass"
import WidgetSm from "../WidgetSm/WidgetSm";
import WidgetLg from "../WidgetLg/WidgetLg";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        
        return (
            <div className={styles.home}>
                <div className={styles.homeWidgets}>
                    <WidgetSm/>
                    <WidgetLg/>
                </div>
                        
            </div>
        );
        
    }
}