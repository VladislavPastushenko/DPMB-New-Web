
import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";

import Navigator from "../components/Navigator/Navigator";

import styles from './styles/index.module.scss'



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


