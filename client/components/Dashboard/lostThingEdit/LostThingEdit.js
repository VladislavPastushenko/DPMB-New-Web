// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import styles from "./lostThingEdit.module.sass"
import {Modal, Form, Input, Select, Button, message} from "antd"
import { editLostThing } from '../../../store/lostThings/actions'
import { LoadingOutlined } from '@ant-design/icons'


class LostThingEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            res: 'preparing',
        };
    }

    onFinish = (values) => {
        values.id = this.props.lostThing.id
        this.setState({res: 'loading'})
        this.props.editLostThing(values).then(
            res => {
                this.setState({res: 'OK'})
                this.props.handleUpdate()
                setTimeout(() => {
                        this.setState({ isModalOpen: false, res: 'preparing' })
                    }, 1200)
            },
            err => {
                console.log(err)
                message.open({
                    type: 'error',
                    content: "Error while editing lost thing",
                })
            }
        )
    }
    render() {
        return (
            <>
                <a onClick={() => {this.setState({isModalOpen: true})}}>
                    Upravit
                </a>
                <Modal title="Upravit data" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={null}>
                    {this.state.res === 'preparing' &&
                    <Form initialValues={{
                        description: this.props.lostThing.description,
                        storage_location: this.props.lostThing.storage_location,
                        date: this.props.lostThing.date,
                        phone: this.props.lostThing.phone,
                    }}
                        onFinish={this.onFinish}
                    >
                    
                        <div className={'fontSizeXs'}>
                            Popis:
                        </div>
                        <Form.Item
                            name="description"
                            rules={[
                            {
                                required: true,
                                message: 'Please input description',
                            },
                            ]}
                        >
                            <Input placeholder="Popis" />
                        </Form.Item>

                        <div className={'fontSizeXs'}>
                            Misto:
                        </div>
                        <Form.Item
                            name="storage_location"
                            rules={[
                            {
                                required: true,
                                message: 'Please input storage place',
                            },
                            ]}
                        >
                            <Input placeholder="Misto" />
                        </Form.Item>

                        <div className={'fontSizeXs'}>
                            Telefon:
                        </div>
                        <Form.Item
                            name="phone"
                            rules={[
                            {
                                required: true,
                                message: 'Please input phone',
                            },
                            ]}
                        >
                            <Input placeholder="Telefon" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={styles.addStopButton}>
                            Upravit
                            </Button>
                        </Form.Item>
                    </Form>}
                    {this.state.res === 'loading' &&
                    <div className='fontSizeLg' align='center' style={{padding: '2em'}}>
                        <LoadingOutlined/>
                    </div>}
                    {this.state.res === 'OK' &&
                    <div className='fontSizeLg' align='center' style={{padding: '2em'}}>
                        Ztracena vec byla úspěšně upravena
                    </div>}
                </Modal>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        res: state.lostThings.res,
    }
  }
  export default connect(mapStateToProps, { editLostThing
  }) (LostThingEdit);