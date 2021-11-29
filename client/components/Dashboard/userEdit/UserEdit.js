import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./userEdit.module.sass"
import {
    Apartment,
    MailOutline,
    PermIdentity,
    
  } from "@material-ui/icons";

export default class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles.user}>
                <div className={styles.userTitleContainer}>
                    <h1 className={styles.userTitle}>Edit User</h1>  
                </div>

                <div className={styles.userContainer}>
                    <div className={styles.userShow}>
                    <div className={styles.userShowTop}>
                        <img
                        src="/user.png"
                        alt=""
                        className={styles.userShowImg}
                        />
                        <div className={styles.userShowTopTitle}>
                        <span className={styles.userShowUsername}>Name Surname</span>
                        <span className={styles.userShowUserTitle}>Role</span>
                        </div>
                    </div>

                    <div className={styles.userShowBottom}>
                        <span className={styles.userShowTitle}>Account Details</span>
                        <div className={styles.userShowInfo}>
                            <PermIdentity className={styles.userShowIcon} />
                            <span className={styles.userShowInfoTitle}>Your Full Name</span>
                        </div>

                        <div className={styles.userShowInfo}>
                            <Apartment className={styles.userShowIcon} />
                            <span className={styles.userShowInfoTitle}>Regiojet</span>
                        </div>

                        <span className={styles.userShowTitle}>Contact Details</span>

                        <div className={styles.userShowInfo}>
                            <MailOutline className={styles.userShowIcon} />
                            <span className={styles.userShowInfoTitle}>yourmail@gmail.com</span>
                        </div>
                    </div>
                </div>

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
                    <button className={styles.userUpdateButton}>Update</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        );
    }
}