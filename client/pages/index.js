
import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import {Col, Row} from 'antd'

import Navigator from "../components/Navigator/Navigator";
import styles from './styles/index.module.scss'
import CookieConsent from "react-cookie-consent";
import Footer from "../components/Footer/Footer";

const api = new Api;


class IndexPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>DPMB | Index</title>
                    <meta name='description' content='Bla'/>
                </Head>
                <div className={styles.background}>
                    {/* Main Part */}
                    <div className={styles.overlay}/>
                    {/* Header */}
                    <Navigator style={{ background: 'white'}}/>
                    <div className={styles.mainHeaderBlock}>
                        <h1 className={styles.mainHeader}>
                            Dopravní podnik města Brna
                        </h1>
                        <h2 className={styles.mainSubHeader}>
                            Jezdíme pro vás
                        </h2>
                    </div>
                    <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
                </div>
            </div>

        )
    }

}



const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
    }
}
export default connect(mapStateToProps, {
}) (IndexPage);


