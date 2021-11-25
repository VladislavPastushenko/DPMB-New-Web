import React from "react";
import Head from 'next/head';
import styles from './styles/server-error.module.sass'

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
                            Ooops - něco pokazilo a server nereaguje
                        </span>
                    }
                    subTitle={
                        <span className={styles.nextHeader}>
                            Ale nebojte se, brzy to opravíme
                        </span>
                    }
                    extra={<Button type="primary">Back Home</Button>}
                    className={styles.result}

                    />
            </div>

         )
     }


}