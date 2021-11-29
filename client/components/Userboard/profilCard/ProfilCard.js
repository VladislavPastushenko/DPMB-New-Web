import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./profilCard.module.sass"
import { Card, Modal } from 'antd'
import {
    History,
    Settings,
    ExitToApp,
} from "@material-ui/icons";

export default class ProfilCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible:false,
        };
    }

    handleOk = () => {
        this.setState({
            isModalVisible: false,
        });
    };

    render() {

        return (
            <Card title="Profil" bordered={false}>

                    <div className={styles.userShow}>
                        <div className={styles.userShowTop}>
                            <img src="/user.png" alt="" className={styles.userboardImg}/>
                            <div className={styles.userShowTopTitle}>
                                <span className={styles.userShowUsername}>{this.props.loggedUser.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.userShowBottom}>
                        <span className={styles.userShowTitle}>Options</span>
                        <div className={styles.userShowInfo}>
                            <History className={styles.userShowIcon} />
                            <span className={styles.userShowInfoTitle} onClick={() => {this.props.changeLocation('historyList')}}>My history</span>
                        </div>
                        <div className={styles.userShowInfo}>
                            <Settings className={styles.userShowIcon} />
                            <span className={styles.userShowInfoTitle} onClick={() => {this.props.changeLocation('settings')}}>Settings</span>
                        </div>

                        <div className={styles.userShowInfo}>
                            <ExitToApp className={styles.userShowIcon} />
                            <span className={styles.userShowInfoTitle} onClick={() => this.setState({isModalVisible: true})}>Logout</span>
                            <Modal title="Exit" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleOk}>
                            <p>Are you sure you want to get out?</p>
                            </Modal>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    
                    <p></p>
               

                    
            </Card>
        );
        
    }
}

