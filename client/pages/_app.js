import React, { useEffect, useState } from "react";

import { Provider } from 'react-redux'
import { useStore } from '../store/makeStore'
import {Layout} from "antd";
import Navigator from "../components/Navigator/Navigator";
import Basement from "../components/Basement/Basement";

import 'antd/dist/antd.min.css';
import '../style.sass';
import Head from "next/head";

import { useRouter } from 'next/router';

import Api from "../Api"

const {Header, Content, Footer} = Layout;

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    const router = useRouter();
    useEffect(() => {
        const api = new Api
      });
    return (
        <Provider store={store}>
            <Head>
                <title>DPMB</title>
            </Head>
            <Layout>
                <Navigator {...pageProps} pathname={router.pathname} style={{ background: 'white'}}/>

                <Content style={{ padding: '0 0', marginTop: 64, background: 'white'}}>
                    <div style={{paddingTop: 0, minHeight: 380 }}>
                        <Component {...pageProps} />
                    </div>
                </Content>

                <Footer style={{textAlign: 'center',  backgroundColor: 'white'}}>
                    <Basement {...pageProps} pathname={router.pathname}/>
                </Footer>
            </Layout>
        </Provider>
  ) }
