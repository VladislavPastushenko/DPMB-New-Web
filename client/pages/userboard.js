import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
//import styles from "./home.module.sass"
import { Card, Col, Row, List } from 'antd';
import styles from './styles/userboard.module.sass'
import ProfilCard from "../components/Userboard/profilCard/ProfilCard";
import ActualReservationsCard from "../components/Userboard/actualReservationsCard/ActualReservationsCard";
import EditUser from "../components/Userboard/editUser/EditUser";


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'home',
        };
    }

    changeLocation = (location) => {
        this.setState({location: location})
    }

    render() {
        return (
            <div className={styles.sitecardwrapper}>
                <Row gutter={16}>
                <Col span={6} >
                    <ProfilCard changeLocation={this.changeLocation}/>
                </Col>
                
                {this.state.location === 'home' && 
                <Col span={18}>
                    <ActualReservationsCard/>
                </Col>
                }
                {this.state.location === 'settings' &&
                <Col span={18} >
                    <EditUser changeLocation={this.changeLocation}/>
                </Col>
                }
                {this.state.location === 'trip' &&
                <Col span={18} >
                    <HistoryList changeLocation={this.changeLocation}/>
                </Col>
                }
                </Row>
            </div>
        );
}
}