import React from "react";
import {connect} from "react-redux";
import {Col, Row, Modal, Form, InputNumber, Button, message, Result} from 'antd';
import {createReservation} from '../../store/reservations/actions'
import styles from './routeItem.module.sass'
import { LoadingOutlined } from '@ant-design/icons';




class RouteItem extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            res: null
        }
    }
    createReservation = (values) => {
        values.trip_id = this.props.item.id
        this.setState({res: 'loading'})
        this.props.createReservation(values).then(
            res => {
                this.setState({res: res})
            },
            err => {
                console.log(err)
                this.setState({res: null})
            }
        )
    }
    render() {
        return (
                <div key={this.props.key}>
                <Row className={styles.container}>
                    <Col xs={6}>
                        <span className='fontSizeSm' style={{whiteSpace: 'nowrap'}}>
                            {this.props.item.name}
                        </span>
                    </Col>
                    <Col xs={14} align='center'>
                        <span className='fontSizeSm' style={{whiteSpace: 'nowrap'}}>
                            {new Date(this.props.item.start_time).toLocaleString('default', { hour: '2-digit', minute: '2-digit' })} - &nbsp;
                            {new Date(this.props.item.end_time).toLocaleString('default', { hour: '2-digit', minute: '2-digit'  })}
                        </span>
                    </Col>
                    <Col xs={4} align='end'>
                        <a className='fontSizeSm' style={{whiteSpace: 'nowrap'}} onClick={() => {this.setState({ isModalVisible: true })}}>
                            Reserve
                        </a>
                    </Col>
                </Row>

                <Modal title="Reservation" visible={this.state.isModalVisible} onCancel={() => {this.setState({ isModalVisible: false })}} footer={null}>
                    {this.state.res === null &&
                    <>
                    <p className='fontSizeSm' style={{whiteSpace: 'nowrap'}}>
                        {this.props.item.name}
                    </p>
                    <p className='fontSizeSm' style={{whiteSpace: 'nowrap'}}>
                        Departure: {new Date(this.props.item.start_time).toLocaleString('default', {  month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
                    </p>

                    <p className='fontSizeSm' style={{whiteSpace: 'nowrap'}}>
                        Arrival: {new Date(this.props.item.end_time).toLocaleString('default', {  month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <Form onFinish={this.createReservation} initialValues={{number_of_passengers: 1}}>
                        <span className='fontSizeSm' style={{whiteSpace: 'nowrap'}}>
                            Number of passengers - &nbsp;
                        </span>
                        <Form.Item name='number_of_passengers' style={{display: 'inline-block'}} key='number_of_passengers'>
                            <InputNumber min={1} max={6} />
                        </Form.Item>

                        <div align='center'>
                            <Form.Item style={{display: 'inline-block'}} key='button'>
                                <Button htmlType='submit' type='primary'>
                                    Create reservation
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                    </>}
                    {this.state.res === 'loading' &&
                    <div style={{padding: '3em 0 0 0'}} align='center'>
                        <LoadingOutlined/>
                    </div>}
                    {this.state.res !== 'loading' && this.state.res !== null &&
                    <div style={{padding: '1em 0'}} align='center'>
                    <Result
                        style={{padding: 0}}
                        status="success"
                        title="Successfully reserved!"
                        subTitle={
                            <>
                            <p style={{fontWeight: '500', color: 'black'}}> Reservation number: {this.state.res.id} </p>
                            <br/>
                            If you were not authorized at the time of booking, you MUST keep this number, you will need it for payment at the operator
                            </>
                            }
                        extra={[
                            <Button key='closeButton' onClick={() => {this.setState({isModalVisible: false, res: null})}}> Сlose </Button>,
                        ]}
                    />
                    </div>}
                </Modal>
                </div>
        )
    }

}



const mapStateToProps = state => {
    return {
        trips: state.trips.trips,
    }
}
export default connect(mapStateToProps, {
    createReservation
}) (RouteItem);


