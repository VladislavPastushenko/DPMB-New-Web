import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import {Col, Row} from 'antd';

import Navigator from "../components/Navigator/Navigator";
import styles from './styles/index.module.sass'

import Searcher from "../components/Searcher/searcher"

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
                    <title>IIS | Index</title>
                    <meta name='description' content='Bla'/>
                </Head>
                <div className={styles.videoContainer} ref={this.myRef}>
                <video autoPlay={true} muted loop className={styles.myVideo}>
                    <source src="/train-min.mp4"/>
                </video>
                <div className={styles.videoOverlay}/>

                <div className={styles.videoContainerNavigatorContainer}>
                    <Navigator color='white'/>
                </div>

                <Row style={{height: '100%', overflow: 'hidden'}} className={styles.colContainer} align='center'>
                    <Col xs={22} md={24} lg={13} xl={14} xxl={10} align='center'>
                        <div className={styles.headerContainer}>
                            <div className='fontSizeLg' align='left'>
                                ConectIIS
                            </div>
                            <p className='fontSizeMd' align='left'>
                                Trips around the Czech Republic and Europe
                            </p>
                            <Searcher />
                        </div>
                    </Col>
                </Row>
                </div>


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
}) (IndexPage);


