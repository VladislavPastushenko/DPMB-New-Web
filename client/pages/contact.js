import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import { MailOutlined, PhoneOutlined, HomeOutlined, HistoryOutlined} from '@ant-design/icons';
import {Col, Row, Form,Input, Button, message, Result} from 'antd';

import styles from './styles/contact.module.sass'
import {createQuestionFromUser} from "../store/questionsFromUser/actions"
const api = new Api;


class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
                {/* Meta Tags */}

                <Head>
                    <title>Contact us</title>
                </Head>
                <p className='fontSizeLg' align='center' >
                        Základní identifikační údaje           
                </p>
                <Row style={{height: '100%', overflow: 'hidden'}} gutter={[0,40]} align='center'>
                        {/* <Col xs={2} md={2} lg={2} xl={2} xxl={2} /> */}
                    <Col xs={22} md={20} lg={6} xl={5} xxl={5}  align='center'>
                    <HomeOutlined style={{ fontSize: '48px', color: 'white',backgroundColor:'rgb(75, 146, 147)', borderRadius:'50%', width: '100px',height: '100px',lineHeight: '110px'}}/>
                            <p className='fontSizeMd'style={{paddingTop:'2vh'}}> <b>Adresa:</b></p>
                            <p className='fontSizeSm'>
                            <b>Sídlo společnosti:</b><br/>
                            Hlinky 64/151, Pisárky, 603 00 BRNO<br/>
                            <b>Generální ředitelství</b><br/>
                            Novobranská 18, 656 46 BRNO<br/>
                            <b>Podatelna</b><br/>
                            Tererova 12
                           </p>
                     </Col>
                     <Col xs={22} md={20} lg={6} xl={5} xxl={5} align='center'>
                     <PhoneOutlined style={{ fontSize: '48px',color: 'white',backgroundColor:'rgb(75, 146, 147)', borderRadius:'50%', width: '100px',height: '100px',lineHeight: '120px'}}/>
                     <p className='fontSizeMd'style={{paddingTop:'2vh'}} > <b>Telefon:</b></p>
                           <p className='fontSizeSm'>
                           <b>Dopravní informace</b><br/>
                            +420 543 174 317<br/>
                            <b>Ztráty a nálezy</b><br/>
                             +420 543 171 111<br/> 
                            </p>
                    </Col>
                    <Col xs={22} md={20} lg={6} xl={5} xxl={5}  align='center'>
                    <MailOutlined style={{ fontSize: '48px', color: 'white',backgroundColor:'rgb(75, 146, 147)', borderRadius:'50%', width: '100px',height: '100px',lineHeight: '120px'}}/>
                            <p className='fontSizeMd' style={{paddingTop:'2vh'}}> <b>Email:</b></p>
                            <p className='fontSizeSm'>
                             dpmb@dpmb.cz<br/>
                            
                           </p>
                     </Col>
                </Row>
                <Row style={{height: '100%', overflow: 'hidden', paddingTop:'4em'}} align='center'>
                <Col xs={8} md={7} lg={5} xl={4} xxl={3} style={{marginRight:'50px'}}>
                <p className='fontSizeLg' align='center'> <u>Máte otázky?</u></p>
                            
                 <style dangerouslySetInnerHTML={{__html: `
                 .a{
                     color:red;
                 }`
                 }}/>
                    <p align='center' className='fontSizeMd' >
                             <a href="/contact-us">Napište nam!</a> 
                             </p>
                             </Col>
                </Row>
            </div>

        )
    }

}



const mapStateToProps = state => {
    return {
        res: state.questionsFromUser.res,
    }
}
export default connect(mapStateToProps, {createQuestionFromUser
}) (ContactPage);


