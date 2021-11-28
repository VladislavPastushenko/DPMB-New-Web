import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
//import styles from "./home.module.sass"
import styles from "./styles/dashboard.module.sass"
import Topbar from "./../components/Dashboard/Topbar/Topbar"
import Sidebar from "./../components/Dashboard/Sidebar/Sidebar"
import Home from "./../components/Dashboard/home/Home"
import UserList from "../components/Dashboard/userList/UserList";
import UserEdit from "../components/Dashboard/userEdit/UserEdit";
import AddNewRoute from "../components/Dashboard/addNewRoute/AddNewRoute";
import StopList from "../components/Dashboard/stopList/StopList";
import AddNewStop from "../components/Dashboard/addNewStop/AddNewStop";
import ReservationList from "../components/Dashboard/reservationList/ReservationList";
import TripList from "../components/Dashboard/tripList/TripList";
import CarrierList from "../components/Dashboard/carrierList/CarrierList";
import AddNewCarrier from "../components/Dashboard/addNewCarrier/AddNewCarrier";
import {lookupUserInStorage, fetchLoggedUser} from '../store/users/actions'
import Router from 'next/router'
import {LoadingOutlined} from '@ant-design/icons'


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: null,
            location: 'home',
        };

        this.props.lookupUserInStorage()
        .then(
            (token) => {
                this.props.fetchLoggedUser(token)
                .then(
                    (res) => {this.setState({loggedUser: res})}
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
            if (this.state.loggedUser === null) {
                return (
                    <div align='center' style={{marginTop: '2em'}} className='fontSizeMd'>
                        <LoadingOutlined/>
                    </div>
                )
            }
            else {
                if (this.state.loggedUser.role === 'user') {
                    return (
                        <p align='center' className='fontSizeMd'>
                            This page is only for personnel
                        </p>
                    )
                } else {
                    return (
                        <div>
                            <div id="container"/>
                                <Topbar/>
                                <div className={styles.container}>
                                    <Sidebar changeLocation={this.changeLocation}/>
                                    {this.state.location === 'home' && <Home/>} 
                                    {this.state.location === 'userList' && <UserList/>}
                                    {this.state.location === 'settings' && <UserEdit/>} 
                                    {this.state.location === 'newroute' && <AddNewRoute/>} 
                                    {this.state.location === 'stopList' && <StopList changeLocation={this.changeLocation}/>} 
                                    {this.state.location === 'newstop' && <AddNewStop/>} 
                                    {this.state.location === 'reservationList' && <ReservationList/>} 
                                    {this.state.location === 'tripList' && <TripList changeLocation={this.changeLocation}/>}
                                    {this.state.location === 'carrierList' && <CarrierList changeLocation={this.changeLocation}/>} 
                                    {this.state.location === 'newcarrier' && <AddNewCarrier/>} 
        
                                </div>
                        </div>
                    );
                }
            }
    }
}

const mapStateToProps = state => {
    return {
        loggedUser: state.users.loggedUser,
    }
  }
export default connect(mapStateToProps, {lookupUserInStorage, fetchLoggedUser}) (Dashboard);