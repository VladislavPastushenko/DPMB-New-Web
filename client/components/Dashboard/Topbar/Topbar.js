import React from "react";
import styles from "./topbar.module.sass"
import { Drawer, Modal,} from 'antd'

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

                        <a className={'fontSizeSm'} onClick={this.showDrawer}>
                            Logout
                        </a>
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
