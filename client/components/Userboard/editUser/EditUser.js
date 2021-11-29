import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./editUser.module.sass"
import {
    Apartment,
    MailOutline,
    PermIdentity,
    
  } from "@material-ui/icons";

import { Card } from "antd"

export default class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card title="Settings" bordered={false}>
                <div className={styles.user}>

                <div className={styles.userContainer}>
                

                <div className={styles.userUpdate}>
                    <span className={styles.userUpdateTitle}>Edit</span>
                    <form className={styles.userUpdateForm}>
                        <div className={styles.userUpdateLeft}>
                            

                        <div className={styles.userUpdateItem}>
                            <label>Name</label>
                            <input
                            type="text"
                            placeholder="Name"
                            className={styles.userUpdateInput}
                            />
                        </div>

                        <div className={styles.userUpdateItem}>
                            <label>Surname</label>
                            <input
                            type="text"
                            placeholder="Surname"
                            className={styles.userUpdateInput}
                            />
                        </div>

                    </div>
                    <div className={styles.userUpdateRight}>
                        <div className={styles.userUpdateUpload}>
                            <img
                            className={styles.userUpdateImg}
                            src="/user.png"
                            alt=""
                            />
                        </div>
                    <button className={styles.userUpdateButton} onClick={() => {this.props.changeLocation('home')}}>Update</button>
                    </div>
                </form>
                </div>
                
            </div>
            <div className={styles.container}>
                        <button className={styles.historyShowButton} onClick={() => {this.props.changeLocation('home')}}>Back</button>
            </div>
        </div>
        <br/>

  

        </Card>
            
        );
    }
}