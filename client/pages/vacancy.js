import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import { MailOutlined, PhoneOutlined, UserAddOutlined, HistoryOutlined} from '@ant-design/icons';
import {Col, Row, Form,Input, Button, message, Result} from 'antd';

import styles from './styles/table.module.sass'
import {createQuestionFromUser} from "../store/questionsFromUser/actions"
import { BorderColor } from "@material-ui/icons";
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
                    <title>Zamestnani</title>
                </Head>
                <p className='fontSizeLg' align='center' >
                        Přidáš se k nám?</p>
                <Row style={{height: '100%', overflow: 'hidden'}} gutter={[0,40]} align='center'>
                        {/* <Col xs={2} md={2} lg={2} xl={2} xxl={2} /> */}
                    <Col xs={22} md={20} lg={10} xl={10} xxl={10}  align='center'>
                    <UserAddOutlined  style={{ fontSize: '48px', color: 'white',backgroundColor:'rgb(75, 146, 147)', borderRadius:'50%', width: '100px',height: '100px',lineHeight: '110px'}}/>
                            <p className='fontSizeMd'style={{paddingTop:'2vh'}}> <b>Nabídky pracovních příležitostí</b></p>
                            <p className='fontSizeSm'>
                                Hledáte práci v rozvíjející se a stabilní firmě s jistotou dobrého výdělku?<br/>
                                Přidejte se do našeho týmu a začněte svoji profesní kariéru u nás!<br/>
                                Rádi Vás u nás přivítáme!<br/>
                           </p>
                           <div className={styles.title} style={{borderRadius:'4px', padding: '0.5em 0', color: 'white', fontWeight : '600'}}>
                            <div className='fontSizeMd' align='center' > Řidič tramvaje - nástupní mzda cca 32 400 Kč</div>
                            </div>
                            <div className='fontSizeSm' align='left' style={{ borderStyle: 'solid', borderColor: 'rgb(75, 146, 147)' }}>
                        <div style={{marginBottom: '1em'}}>POŽADUJEME:<br/>
                        <div style={{marginLeft: '1em'}}>
                                • věk od 21 let<br/>
                                • řidičské oprávnění minimálně sk. B<br/>
                                • ukončené základní vzdělání<br/>
                                </div>
                            NABÍZÍME:
                            • motivační a cílové odměny v době konání kurzu (zvyšování kvalifikace).
                            Průměrná nástupní mzda řidiče 34 300 Kč. motivační a cílové odměny v době konání kurzu (zvyšování kvalifikace). 
                            jistotu dobrého výdělku s řadou příplatků (nově zaveden příplatek za řízení trolejbusu 10,- Kč/hod. – měsíčně až 2000,- Kč). zaplacení každé hodiny přesčasu. pět týdnů dovolené. jízdní výhody i pro rodinné příslušníky. 
                            stravování, externí stravenky, ochranné nápoje. oděvní součásti.
                            </div>
                        </div>
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


