import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./addNewCarrier.module.sass"
import { Button, Modal} from 'antd'
import { createCarrier } from "../../../store/carriers/actions";


class NewCarrier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
        };
    }
        handleOk = () => {
            this.setState({
                isSuccessModalVisible: false,
                isErrorModalVisible: false,
            });
        };
    
        handleSubmit = (e) => {
            e.preventDefault();
            let data = {
                name: e.target.elements.name.value 
            }
    
            this.props.createCarrier(data).then(
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
            <div className={styles.newCarrier}>
                <h1 className={styles.addCarrierTitle}>New Carrier</h1>
                <form className={styles.addCarrierForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addCarrierItem}>
                    <label>Carrier Name</label>
                    <input type="text" name="name" placeholder="Name of carrier" />
                    </div>
                    <button className={styles.addCarrierButton}>Create</button>
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

export default connect(mapStateToProps, {createCarrier
}) (NewCarrier);