import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import {Col, Row, Form,Input, Button} from 'antd';

import styles from './styles/contact.module.sass'

const api = new Api;


class ContactPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
    }
    handleFinish = (values) => {
        
    }
    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>Contact us</title>
                </Head>
                <Row style={{height: '100%', overflow: 'hidden'}} align='center'>
                    <Col xs={22} md={24} lg={13} xl={14} xxl={8} align='center'>
                        <p className='fontSizeMd' align='center'>
                            Contact us!   
                        </p>
                        <div >
                            <p className='fontSizeSm' align='center'>
                            Do you have any questions?
                            </p>
                            <Form onFinish={this.handleFinish}  >
                                <Form.Item name="email" >
                                    <Input required
                                    placeholder='Input your e-mail'   type="email"
                                    className={styles.forms} size='large' />    
                                        </Form.Item>
                                <Form.Item name="text" >
                                    <Input.TextArea required
                                    placeholder='Your message'
                                    className={styles.forms} size='large' />    
                                </Form.Item>
                                <Form.Item>
                                    <Button type='primary' size='large' htmlType='submit'> SEND </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
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
}) (ContactPage);


