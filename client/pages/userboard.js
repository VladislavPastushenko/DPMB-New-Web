import React from "react";
import {connect} from "react-redux";
//import styles from "./home.module.sass"
import { Col, Row,} from 'antd';
import styles from './styles/userboard.module.sass'
import ProfilCard from "../components/Userboard/profilCard/ProfilCard";
import ActualReservationsCard from "../components/Userboard/actualReservationsCard/ActualReservationsCard";
import EditUser from "../components/Userboard/editUser/EditUser";
import {lookupUserInStorage, fetchLoggedUser} from '../store/users/actions'
import {LoadingOutlined} from '@ant-design/icons'
import Router from 'next/router'


class Userboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'home',
            loggedUser: null
        };

        this.props.lookupUserInStorage()
        .then(
            (token) => {
                this.props.fetchLoggedUser(token)
                .then(
                    (res) => {this.setState({loggedUser: res})},
                    err => {Router.push('/login')}
                )
            },
            (err) => {
                Router.push('/login')
            }
        )
    }

    changeLocation = (location) => {
        this.setState({location: location})
    }

    render() {
        if (this.state.loggedUser !== null)
        return (
            <div className={styles.sitecardwrapper}>
                <Row gutter={16}>
                <Col span={6} >
                    <ProfilCard changeLocation={this.changeLocation} {...this.props}/>
                </Col>
                {this.state.location === 'home' && 
                <Col span={18}>
                    <ActualReservationsCard/>
                </Col>
                }
                {this.state.location === 'settings' &&
                <Col span={18} >
                    <EditUser changeLocation={this.changeLocation}  {...this.props}/>
                </Col>
                }
                </Row>
            </div>
        );
        else return (
            <div className='fontSizeLg' align='center'>
                <LoadingOutlined/>
            </div>
        )
}
}


const mapStateToProps = state => {
    return {
        loggedUser: state.users.loggedUser,
    }
  }
export default connect(mapStateToProps, {lookupUserInStorage, fetchLoggedUser}) (Userboard);