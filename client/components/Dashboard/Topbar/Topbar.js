import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import 'antd/dist/antd.min.css';
import styles from "./topbar.module.sass"
import {NotificationsNone} from '@material-ui/icons'
import { Drawer, Modal, Button } from 'antd'

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isVisibleModal: false
        };
    }
    showDrawer = () => {
        this.setState({
          visible: true,
        });
    };

    onClose = () => {
        this.setState({
          visible: false,
        });
      };

    handleOk = () => {
        this.setState({
            isModalVisible: false,
        });
    };


    render() {
        return (
            <div className={styles.topbar}>
                <div className={styles.topbarWraper}>
                    <div className={styles.topLeft}>
                        <span className={styles.logo}>
                            Admin panel
                        </span>
                    </div>
                    <div className={styles.topRight}>
                        <div className={styles.topbarIconContainer}>
                            <NotificationsNone/>
                            <span className={styles.topIconBadge}>2</span>
                        </div>

                        <img src="/admin.jpeg" alt="" className={styles.topAvatar} onClick={this.showDrawer}/>
                        <Drawer 
                            placement="right"
                            closable={true}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            getContainer={true}
                            style={{ position: 'absolute'}}
                            >
                            <button className={styles.topbarButton} onClick={() => {this.setState({visible: false}); this.setState({isModalVisible: true})}}>Logout</button>
                        </Drawer>
                        <Modal title="Exit" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleOk}>
                            <p>Are you sure you want to get out?</p>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}
