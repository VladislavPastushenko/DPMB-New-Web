import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./../addNewStop/addNewStop.module.sass"
import { Form, Button, Space, Input, Modal, Select } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { createTrip } from "../../../store/trips/actions";
import { fetchCarriers } from "../../../store/carriers/actions";
import { createRouteItems } from "../../../store/routeItems/actions";


class AddNewRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
            carrier_id: null,
            carriers: [],
            routeItems: [],
        };

        this.props.fetchCarriers().then(
            (res) => {
              //console.log(res)
              this.setState({carriers: res})
            },
            (err) => {
              this.setState({errMsg: err})
            }
    
          );

          this.formRef = React.createRef()

    }

    handleOk = () => {
        this.setState({
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
        });
    };

    handleChange = (value) => {
        this.setState({carrier_id: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        

        let data = {
            name: e.target.elements.name.value,
            start_time: e.target.elements.start_time.value,
            end_time: e.target.elements.end_time.value,
            delay: 0,
            capacity: e.target.elements.capacity.value,
            status: "coming",
            carrier_id: this.state.carrier_id,

        }

        let route_items = this.formRef.current.getFieldsValue()
        console.log(route_items)
        
        console.log(data)
        this.props.createTrip(data).then(
            (res) => {
                console.log(res)
                this.props.createRouteItems().then(
                    (res) => {
                        console.log(res);      
                    },
                    (err) => {
                        console.log(err);
                        this.setState({isErrorModalVisible: true});
                    ;},
                )
                console.log(res);
                this.setState({isSuccessModalVisible: true});
                e.target.elements.name.value = null;

            },
            (err) => {
                console.log(err);
                this.setState({isErrorModalVisible: true});
            ;},
        )
    }

    render() {
        return (
            <div className={styles.newStop}>
                <h1 className={styles.addStopTitle}>New trip</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    
                    <div className={styles.addStopItem}>
                    <label>From-To</label>
                    <input type="text" name="name" placeholder="Brno-Praha" />
                    </div>
                    <div className={styles.addStopItem}>
                    <label>Number of seats</label>
                    <input type="text" name="capacity" placeholder="Number of seats" />
                    </div>
                    <div className={styles.addStopItem}>
                    <label>Additional stops</label>
                    
                    <Form
                        ref={this.formRef}
                        name="dynamic_form_nest_item"
                        autoComplete="off"
                        
                        >
                        <Form.List name="sights">
                            {(fields, { add, remove }) => (
                            <>
                                {fields.map((field) => (
                                <Space key={field.key} align="baseline">
                                    <Form.Item
                                    
                                    {...field}
                                    label="Stop"
                                    name={[field.name, "stop"]}
                                    fieldKey={[field.fieldKey, "stop"]}
                                    rules={[{ required: true, message: "Additional stop" }]}
                                    >
                                    <Input className={styles.addStopItem} name="stop" placeholder="Add stops in the order they appear"/>
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                                ))}

                                <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add sights
                                </Button>
                                </Form.Item>
                            </>
                            )}
                        </Form.List>
                    </Form>
                    </div>
                    <div className={styles.addStopItem}>
                    <label>Start time</label>
                    <input type="text" name="start_time" placeholder="YYYY-MM-DD hh:mm:ss" />
                    </div>
                    <div className={styles.addStopItem}>
                    <label>End time</label>
                    <input type="text" name="end_time" placeholder="YYYY-MM-DD hh:mm:ss" />
                    </div>
                    <div className={styles.addStopItem}>
                    <label>Carrier</label>
                    <Form.Item name='carrier_id' className={styles.addStopItem}>
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="Choose carrier"
                                    optionFilterProp="children"
                                    onChange={this.handleChange}
                                    
                                >
                                    {this.state.carriers.map(carrier => {
                                     return(<Option value={carrier.id} >{carrier.name}</Option>)
                                     })}

                                </Select>
                    </Form.Item>
                    </div>
                    <button className={styles.addStopButton}>Create</button>
                </form>
                <Modal title="Success" visible={this.state.isSuccessModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                        <Button key="back" onClick={this.handleOk}>
                          OK
                        </Button>]}>
                            <p>Сarrier added successfully</p>
                </Modal>
                <Modal title="Error" visible={this.state.isErrorModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                    <Button key="back" onClick={this.handleOk}>
                      OK
                    </Button>]}>
                        <p>Something went wrong</p>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.res,
    }
  }

export default connect(mapStateToProps, {createTrip, fetchCarriers, createRouteItems,
}) (AddNewRoute);

