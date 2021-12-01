import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./../addNewStop/addNewStop.module.sass"
import { Form, Button, Modal, Select, InputNumber } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { createTrip } from "../../../store/trips/actions";
import { fetchCarriers } from "../../../store/carriers/actions";
import { createRouteItems } from "../../../store/routeItems/actions";
import {fetchStops } from "../../../store/stops/actions"


class AddNewRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
            carrier_id: null,
            carriers: [],
            routeItems: [],
            stops: []
        };
        this.props.fetchStops().then(res => this.setState({stops: res}))

        this.props.fetchCarriers().then(
            (res) => {
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

        let route_items = this.formRef.current.getFieldsValue().sights

        this.props.createTrip(data).then(
            (res) => {
                for (let i = 0; i < route_items.length; i++) {
                    route_items[i].trip_id = res.id
                    route_items[i].position = i
                }
    
                this.props.createRouteItems(route_items).then(
                    (res) => {
                    },
                    (err) => {
                        console.log(err);
                        this.setState({isErrorModalVisible: true});
                    ;},
                )
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
                                {fields.map(( key, name, fieldKey, ...restField) => (
                                    <div key={key} style={{position: 'relative'}}>
                                    <Form.Item  {...restField} name={[name, 'stop_id']}  fieldKey={[fieldKey, 'stop_id']} rules={[{ required: true, message: 'Choose from town' }]}>
                                        <Select
                                            showSearch
                                            style={{ width: '100%' }}
                                            placeholder="From"
                                            optionFilterProp="children"

                                        >
                                            {this.state.stops.length > 0 && this.state.stops.map(stop => {
                                                return (
                                                    <Select.Option key={'from' + stop.id} value={stop.id}>{stop.city.name} - {stop.name}</Select.Option>
                                                )
                                            })}
                                        </Select>
                                    </Form.Item>


                                    <Form.Item  {...restField} name={[name, 'time_from_start']}  fieldKey={[fieldKey, 'time_from_start']} rules={[{ required: true, message: 'Set the minutes' }]}>
                                        <InputNumber
                                            style={{ width: '100%' }}
                                            placeholder="Time from start in mins"
                                        >
                                        </InputNumber>
                                    </Form.Item>
                                    <MinusCircleOutlined style={{position: 'absolute', right: '-2em', top: '0.5em'}} onClick={() => remove(name)} />

                                    </div>

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
                                    {this.state.carriers.map((carrier, idx) => {
                                        return(<Select.Option value={carrier.id} key={idx}>{carrier.name}</Select.Option>)
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
                            <p>Route added successfully</p>
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

export default connect(mapStateToProps, {createTrip, fetchCarriers, createRouteItems, fetchStops
}) (AddNewRoute);

