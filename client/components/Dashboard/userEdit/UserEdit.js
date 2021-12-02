import React from "react";
import {connect} from "react-redux";
import styles from "./userEdit.module.sass"
import {Modal, Form, Input, Select, Button, message} from "antd"
import { fetchCarriers } from "../../../store/carriers/actions";
import { editUser } from '../../../store/users/actions'
import { LoadingOutlined } from '@ant-design/icons'


class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            carriers: null,
            res: 'preparing',
        };

        this.props.fetchCarriers().then(
            (res) => {
              this.setState({carriers: res})
            },
            (err) => {
              message.open({type: 'Error', content: 'Error while getting carriers list'})
            });
    }

    onFinish = (values) => {
        if (!values.role) values.role = this.props.user.role
        if (!values.carrier_id) values.carrier_id = this.props.user.carrier_id
        values.id = this.props.user.id
        this.setState({res: 'loading'})
        this.props.editUser(values).then(
            res => {
                this.setState({res: 'OK'})
            },
            err => {
                console.log(err)
                message.open({
                    type: 'error',
                    content: "Error while editing user, or you don't have enough rights to edit this user",
                })
            }
        )
    }
    render() {
        return (
            <>
                <a onClick={() => {this.setState({isModalOpen: true})}}>
                    Edit
                </a>
                <Modal title="Edit user data" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={null}>
                    {this.state.res === 'preparing' &&
                    <Form initialValues={{
                        email: this.props.user.email,
                        full_name: this.props.user.full_name,
                        role: this.props.user.role,
                        is_active: this.props.user.is_active,
                        carrier_id: this.props.user.carrier_id
                    }}
                        onFinish={this.onFinish}
                    >
                    
                        <div className={'fontSizeXs'}>
                            Email:
                        </div>
                        <Form.Item
                            name="email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input E-mail',
                            },
                            ]}
                        >
                            <Input placeholder="E-mail" />
                        </Form.Item>

                        <div className={'fontSizeXs'}>
                            Full name:
                        </div>
                        <Form.Item
                            name="full_name"
                        >
                            <Input placeholder="Full name" />
                        </Form.Item>

                        {this.props.loggedUser.role === 'admin' &&
                        <div className={'fontSizeXs'}>
                            Role:
                            <Form.Item name="role">
                                <Select style={{ width: 120 }} >
                                    <Select.Option value="user">User</Select.Option>
                                    <Select.Option value="personnel">Personnel</Select.Option>
                                    <Select.Option value="carrier">Carrier</Select.Option>
                                    <Select.Option value="admin">Admin</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        }

                        {this.props.loggedUser.role === 'admin' && this.state.carriers &&
                        <div className={'fontSizeXs'}>
                            Carrier Company:
                            <Form.Item name="carrier_id">
                                <Select style={{ width: 120 }} >
                                    {this.state.carriers.map(el => (
                                        <Select.Option value={el.id} key={el.name}>{el.name}</Select.Option>
                                    ))}
                                    <Select.Option value={null} key={'null'}>None</Select.Option>
                                    </Select>
                            </Form.Item>
                        </div>}

                        <div className={'fontSizeXs'}>
                            Is active:
                        </div>
                        <Form.Item name="is_active">
                               <Select style={{ width: 120 }} >
                                    <Select.Option value={1}>Active</Select.Option>
                                    <Select.Option value={0}>Disabled</Select.Option>
                                </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Edit
                            </Button>
                        </Form.Item>
                    </Form>}
                    {this.state.res === 'loading' &&
                    <div className='fontSizeLg' align='center' style={{padding: '2em'}}>
                        <LoadingOutlined/>
                    </div>}
                    {this.state.res === 'OK' &&
                    <div className='fontSizeLg' align='center' style={{padding: '2em'}}>
                        User edited successfully
                    </div>}
                </Modal>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        carriers: state.carrier.carriers,
        res: state.users.res,
    }
  }
  export default connect(mapStateToProps, {fetchCarriers, editUser
  }) (UserEdit);