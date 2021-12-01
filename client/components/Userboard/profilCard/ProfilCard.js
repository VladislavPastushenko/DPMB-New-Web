import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./profilCard.module.sass"
import { Card, Modal, message } from 'antd'
import Router from 'next/router'
import { logoutUser } from "../../../store/users/actions";
import {
    
    Settings,
    ExitToApp,
} from "@material-ui/icons";

class ProfilCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible:false,
        };
    }

    logout = (values) => {
        this.props.logoutUser(values).then(
          (res) => {
            message.open(
              {
                type: 'success',
                content: 'You were successfully loggout in',
                duration: 3,
                onClose: () => {Router.push('/')}
              }
            )
            window.location.reload(false)
          },
          (err) => {
            this.setState({errMsg: err})
          }
  
        )
  
      };

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
                            <Settings className={styles.userShowIcon} />
                            <span className={styles.userShowInfoTitle} onClick={() => {this.props.changeLocation('settings')}}>Settings</span>
                        </div>

                        <div className={styles.userShowInfo}>
                            <ExitToApp className={styles.userShowIcon} />
                            <span className={styles.userShowInfoTitle} onClick={() => this.setState({isModalVisible: true})}>Logout</span>
                            <Modal title="Exit" visible={this.state.isModalVisible} onOk={this.logout} onCancel={this.handleOk}>
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

const mapStateToProps = state => {
    return {
        users: state.users.res,
    }
  }
export default connect(mapStateToProps, {logoutUser
  }) (ProfilCard);