import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./addNewStop.module.sass"
import { Button, Modal, Form, Select } from 'antd'
import { createStop } from "../../../store/stops/actions";
import { fetchCities } from "../../../store/cities/actions";



class NewStop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            city_id: null,
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
        };

        this.props.fetchCities().then(
            (res) => {
              this.setState({cities: res})
            },
            (err) => {
              this.setState({errMsg: err})
            }
    
          );
    }
    handleOk = () => {
        this.setState({
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
        });
    };

    handleChange = (value) => {
        this.setState({city_id: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: e.target.elements.name.value,
            city_id: this.state.city_id, 
        }

        this.props.createStop(data).then(
            (res) => {
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
                <h1 className={styles.addStopTitle}>New Stop</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addStopItem}>
                    <label>Stop name</label>
                    <input type="text" name="name" placeholder="Stop name" />
                    </div>

                    <div className={styles.addStopItem}>
                    <label>City</label>
                    <Form.Item name='city_id' className={styles.addStopItem}>
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="Choose city"
                                    optionFilterProp="children"
                                    onChange={this.handleChange}

                                >
                                    {this.state.cities.map((city, idx) => {
                                     return(<Select.Option value={city.id} key={idx}>{city.name}</Select.Option>)
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
                            <p>Stop added successfully</p>
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

export default connect(mapStateToProps, {createStop, fetchCities
}) (NewStop);
