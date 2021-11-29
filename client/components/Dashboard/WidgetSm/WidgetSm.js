import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./widgetSm.module.sass"
import { Visibility } from "@material-ui/icons";

export default class WidgetSm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles.widgetSm}>
                <span className={styles.widgetSmTitle}>New Join Members</span>
                <ul className={styles.widgetSmList}>
                    <li className={styles.widgetSmListItem}>
                        <img src="/user.png" alt="" className={styles.widgetSmImg}/>
                        <div className={styles.widgetSmUser}>
                            <span className={styles.widgetSmUsername}>
                                Name Surname
                            </span>
                            <span className={styles.widgetSmUserTitle}>
                                Role
                            </span>
                        </div>

                        <button className={styles.widgetSmButton}>
                            <Visibility className={styles.widgetSmIcon} />
                            Display
                        </button>
                    </li>

                    <li className={styles.widgetSmListItem}>
                        <img src="/user.png" alt="" className={styles.widgetSmImg}/>    
                        <div className={styles.widgetSmUser}>
                            <span className={styles.widgetSmUsername}>Name Surname</span>
                            <span className={styles.widgetSmUserTitle}>Role</span>
                        </div>
                        <button className={styles.widgetSmButton}>
                            <Visibility className={styles.widgetSmIcon} />
                            Display
                        </button>
                    </li>

                    <li className={styles.widgetSmListItem}>
                        <img src="/user.png" alt="" className={styles.widgetSmImg}/>    
                        <div className={styles.widgetSmUser}>
                            <span className={styles.widgetSmUsername}>Name Surname</span>
                            <span className={styles.widgetSmUserTitle}>Role</span>
                        </div>
                        <button className={styles.widgetSmButton}>
                            <Visibility className={styles.widgetSmIcon} />
                            Display
                        </button>
                    </li>

                    <li className={styles.widgetSmListItem}>
                        <img src="/user.png" alt="" className={styles.widgetSmImg}/>    
                        <div className={styles.widgetSmUser}>
                            <span className={styles.widgetSmUsername}>Name Surname</span>
                            <span className={styles.widgetSmUserTitle}>Role</span>
                        </div>
                        <button className={styles.widgetSmButton}>
                            <Visibility className={styles.widgetSmIcon} />
                            Display
                        </button>
                    </li>

                    <li className={styles.widgetSmListItem}>
                        <img src="/user.png" alt="" className={styles.widgetSmImg}/>    
                        <div className={styles.widgetSmUser}>
                            <span className={styles.widgetSmUsername}>Name Surname</span>
                            <span className={styles.widgetSmUserTitle}>Role</span>
                        </div>
                        <button className={styles.widgetSmButton}>
                            <Visibility className={styles.widgetSmIcon} />
                            Display
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}