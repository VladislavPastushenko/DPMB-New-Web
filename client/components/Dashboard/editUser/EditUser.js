// Author: Kozhevnikov Dmitrii, Vladislav Pastushenko
// Login: xkozhe00, xpastu04

import React from "react";
import {connect} from "react-redux";

import styles from "./editUser.module.sass"

import { Form, Input, Button, message} from "antd"
import {editUser} from '../../../store/users/actions'


class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            loggedUser: this.props.loggedUser
        };
    }
    onFinish = (values) => {
        values.id = this.props.loggedUser.id
        this.props.editUser(values).then(
            res => {
                message.open({content: 'Success'})
                this.setState({edit: false, loggedUser: values})
            }
        )
    }

    render() {
        return (
            <div className={styles.user}>
                <div className={styles.userUpdate}>
                    {this.state.edit ?
                        <>
                            <span className={styles.userUpdateTitle}>
                                Upravit
                            </span>
                            <div className={styles.userUpdateForm}>
                                <div className={styles.userUpdateLeft}>

                                    <Form onFinish={this.onFinish}
                                        initialValues={{
                                            full_name: this.state.loggedUser.full_name,
                                            email: this.state.loggedUser.email,
                                        }}
                                    >
                                    <div className={styles.userUpdateItem}>
                                        Jmeno a Příjmení
                                        <Form.Item name='full_name'>
                                            <Input
                                            type="text"
                                            placeholder="Jmeno"
                                            className={styles.userUpdateInput}
                                            />
                                        </Form.Item>
                                    </div>

                                    <div className={styles.userUpdateItem}>
                                        Email
                                        <Form.Item name='email'>
                                            <Input
                                            type="text"
                                            placeholder="Email"
                                            className={styles.userUpdateInput}
                                            />
                                        </Form.Item>
                                    </div>

                                    <Form.Item>
                                        <Button className={styles.userUpdateButton} htmlType='submit'>
                                            Aktualizace
                                        </Button>
                                    </Form.Item>

                                    </Form>
                                </div>
                            </div>
                        </>
                    :
                        <>
                            <span className={styles.userUpdateTitle}>
                                Moje údaje
                            </span>
                            <div className={styles.userUpdateLeft}>
                                <div className={styles.userUpdateItem + ' fontSizeXs' }>
                                    <b> Jmeno: </b> {this.state.loggedUser.full_name}
                                </div>
                                <div className={styles.userUpdateItem + ' fontSizeXs'}>
                                    <b> Email: </b> {this.state.loggedUser.email}
                                </div>
                                <div style={{marginTop: '2em'}}>
                                    <Button onClick={() => {this.setState({edit: true})}} className={styles.userUpdateButton}>
                                        Editovat
                                    </Button>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
    }
  }
export default connect(mapStateToProps, {editUser}) (EditUser);