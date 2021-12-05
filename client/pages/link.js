import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import { MailOutlined, PhoneOutlined, UserAddOutlined, LinkOutlined} from '@ant-design/icons';
import {Col, Row, Form,Input, Button, message, Result, List, Avatar} from 'antd';

import styles from './styles/table.module.sass'
import {createQuestionFromUser} from "../store/questionsFromUser/actions"
import { BorderColor } from "@material-ui/icons";
const api = new Api;

const data = [
    {
      title: <span className='fontSizeMd'>Organizační schéma DPMB, a.s.</span>,
      description: 'Popis všech schémat různých přeprav od roku 2017'
    },
    {
      title: 'Strategie DPMB',
      description: 'Strategie je vyjádřena v jednoduchém grafickém schématu.'
    },
    {
      title: 'Výroční zprávy',
      description: 'Katalog všech hlavních novinek pro každý rok'
    },
    {
      title: 'Historie firmy',
      description: 'Popis založení společnosti'
      
    },
  ];

  const dat = [
    {
      title: 'Nabídky pronájmů',
      description: 'Сeny a nabídka'
    },
    {
      title: 'Veřejné zakázky podlimitní',
      description: 'Věstník veřejných zakázek:'
    },
    {
      title: 'Informace zveřejňované o povinném subjektu',
      description: 'Kontakt, způsob založení, organizace'
    },
    {
      title: 'Lodní doprava',
      description: 'Popis všech schémat různých přeprav od roku 2017'

    },
  ];
  const date = [
    {
      title: 'Distribuce dopravních informací',
      description: 'Popis kompletní práce komunikace'
    },
    {
      title: 'Dopravní podniky',
      description: 'Odkaz na stránky'
    },
    {
      title: 'Jihomoravský kraj',
      description: 'Novinky a zprávy kraje'
    },
    {
      title: 'Statutární město Brno',
      description: 'Popis města Brno'

    },
  ];

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
                    <title>O nas</title>
                    <style dangerouslySetInnerHTML={{__html: `
                    .ant-list-item-meta-title {
                        fontSize: '20px';
                    }`
                    }}/>
                </Head>
                <p className='fontSizeLg' align='center' >
                    Důležité odkazy</p>
                 <Row align='center' style={{height: '100%', overflow: 'hidden'}} gutter={[0,40]}>
                    <Col xs={22} md={20} lg={6} xl={6} xxl={6}  align='center' >
                        <List itemLayout="horizontal"
                        size="large" 
                            dataSource={data}
                            renderItem={item => (
                            <List.Item >
                                <List.Item.Meta
                                    avatar={<LinkOutlined  style={{ fontSize: '20px', color: 'rgb(75, 146, 147)' }}/>}
                                    title={<a href="/">{item.title}</a>}
                                    description={item.description}
                                    />
                             </List.Item>)}/>
              </Col> 
              <Col xs={22} md={20} lg={6} xl={6} xxl={6} style={{paddingRight:'2em'}} align='center'>
                        <List itemLayout="horizontal"
                        size="large"
                            dataSource={dat}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title={<a href="/">{item.title}</a>}
                                    description={item.description}
                                    />
                             </List.Item>)}/>
              </Col> 
              <Col xs={22} md={20} lg={6} xl={6} xxl={6} style={{paddingRight:'2em'}} align='center'>
                        <List itemLayout="horizontal"
                            dataSource={date}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title={<a href="/">{item.title}</a>}
                                    description={item.description}

                                    />
                             </List.Item>)}/>
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


