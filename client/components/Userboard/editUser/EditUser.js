import React from "react";
import {connect} from "react-redux";

import styles from "./editUser.module.sass"

import { Card, Form, Input, Button, message} from "antd"
import {editUser} from '../../../store/users/actions'


class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onFinish = (values) => {
        values.id = this.props.loggedUser.id
        values.full_name = values.name + ' ' + values.surname
        delete values.name
        delete values.surname
        this.props.editUser(values).then(
            res => {
                message.open({content: 'Success', onClose: window.location.reload(false)})
            }
        )
    }

    render() {
        return (
            <Card title="Settings" bordered={false}>
                <div className={styles.user}>

                <div className={styles.userContainer}>


                <div className={styles.userUpdate}>
                    <span className={styles.userUpdateTitle}>Edit</span>
                    <div className={styles.userUpdateForm}>
                        <div className={styles.userUpdateLeft}>

                        <Form onFinish={this.onFinish}>
                        <div className={styles.userUpdateItem}>
                        Name
                            <Form.Item name='name'>
                                <Input
                                type="text"
                                placeholder="Name"
                                className={styles.userUpdateInput}
                                />
                            </Form.Item>
                        </div>

                        <div className={styles.userUpdateItem}>
                        Surname
                        <Form.Item name='surname'>
                            <Input
                            type="text"
                            placeholder="Surname"
                            className={styles.userUpdateInput}
                            />
                        </Form.Item>
                        </div>

                        <Form.Item>
                            <Button className={styles.userUpdateButton} htmlType='submit'> Update </Button>
                        </Form.Item>

                    </Form>
                </div>
                </div>
            </div>
        </div>
        <p></p>



        </div>
        </Card>

        );
    }
}


const mapStateToProps = state => {
    return {
        loggedUser: state.users.loggedUser,
    }
  }
export default connect(mapStateToProps, {editUser}) (EditUser);