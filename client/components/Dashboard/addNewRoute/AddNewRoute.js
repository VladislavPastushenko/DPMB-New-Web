import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./../addNewStop/addNewStop.module.sass"
import { Form, Button, Space, Input } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export default class AddNewRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles.newStop}>
                <h1 className={styles.addStopTitle}>New Route</h1>
                <form className={styles.addStopForm}>
                    <div className={styles.addStopItem}>
                    <label>Name</label>
                    <input type="text" placeholder="Bus number" />
                    </div>
                    <div className={styles.addStopItem}>
                    <label>From</label>
                    <input type="text" placeholder="City from" />
                    </div>
                    <div className={styles.addStopItem}>
                    <label>To</label>
                    <input type="text" placeholder="City to" />
                    </div>
                    <div className={styles.addStopItem}>
                    <label>Additional stops</label>
                    
                    <Form
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
                                    <Input className={styles.addStopItem} placeholder="Add stops in the order they appear"/>
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
                    <label>Start</label>
                    <input type="text" placeholder="Start time" />
                    </div>
                    <div className={styles.addStopItem}>
                    <label>Finish</label>
                    <input type="text" placeholder="Finish time time" />
                    </div>
                    <button className={styles.addStopButton}>Create</button>
                </form>
            </div>
        );
    }
}