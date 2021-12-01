import React from "react";
import Head from 'next/head';
import styles from './styles/server-error.module.sass'
import { Router } from 'next/router';
import { Result, Button } from 'antd';


export default class ServerError extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
    }
    //render_error = new Vivus('render_error', {type: 'oneByOne', duration: 500});

     render() {
        return (
            <div align='center' style={{background: 'white'}}>
                <Head>
                    <title>Oooops</title>
                    <meta name='description' content='Bla'/>
                </Head>

                <Result
                    status="403"
                    title={
                        <span className={styles.mainHeader}>
                            Ooops - something went wrong and the server is unresponsive
                        </span>
                    }
                    subTitle={
                        <span className={styles.nextHeader}>
                            But don&apos;t worry, we&apos;ll fix it soon
                        </span>
                    }
                    extra={<Button type="primary" onClick={() => window.location.href = "/"}>Back Home</Button>}
                    className={styles.result}

                    />
            </div>

         )
     }


}