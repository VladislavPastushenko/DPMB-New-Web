import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./addNewStop.module.sass"
import { Form, Button, Input, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export default class NewStop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles.newStop}>
                <h1 className={styles.addStopTitle}>New Stop</h1>
                <form className={styles.addStopForm}>
                    <div className={styles.addStopItem}>
                    <label>City</label>
                    <input type="text" placeholder="The city where the stop is located" />
                    </div>
                    <div className={styles.addStopItem}>
                    <label>Busstop Name</label>
                    <input type="text" placeholder="Name of busstop" />
                    </div>
                    <div className={styles.addStopItem}>
                    <label>Serving buses</label>
                    
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
                                    label="Bus"
                                    name={[field.name, "bus"]}
                                    fieldKey={[field.fieldKey, "bus"]}
                                    rules={[{ required: true, message: "Serving buses" }]}
                                    >
                                    <Input className={styles.addStopItem} placeholder="Add new bus"/>
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
                    <button className={styles.addStopButton}>Create</button>
                </form>
            </div>
        );
    }
}