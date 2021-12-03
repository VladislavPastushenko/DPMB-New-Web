import React from "react";
import {connect} from "react-redux";
//import styles from "./home.module.sass"
import styles from "./styles/dashboard.module.sass"
import Topbar from "./../components/Dashboard/Topbar/Topbar"
import Sidebar from "./../components/Dashboard/Sidebar/Sidebar"
import UserList from "../components/Dashboard/userList/UserList";
import UserEdit from "../components/Dashboard/userEdit/UserEdit";
import AddNewRoute from "../components/Dashboard/addNewRoute/AddNewRoute";
import StopList from "../components/Dashboard/stopList/StopList";
import AddNewStop from "../components/Dashboard/addNewStop/AddNewStop";
import ReservationList from "../components/Dashboard/reservationList/ReservationList";
import TripList from "../components/Dashboard/tripList/TripList";
import QuestionsFromUsersList from "../components/Dashboard/questionsFromUsersList/QuestionsFromUsersList";
import AddNewCarrier from "../components/Dashboard/addNewCarrier/AddNewCarrier";
import {lookupUserInStorage, fetchLoggedUser} from '../store/users/actions'
import Router from 'next/router'
import {LoadingOutlined} from '@ant-design/icons'
import CitiesList from "../components/Dashboard/citiesList/CitiesList";
import AddNewCity from "../components/Dashboard/addNewCity/AddNewCity";
import AddNewUser from "../components/Dashboard/addNewUser/AddNewUser";
import NewsList from "../components/Dashboard/newsList/NewsList";
import AddNewNews from "../components/Dashboard/addNewNews/AddNewNews";


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: null,
            location: 'userList',
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
                if (this.state.loggedUser.role === 'admin' || this.state.loggedUser.role === 'personnel') {
                    return (
                        <div>
                            <div id="container"/>
                                <Topbar {...this.props}/>
                                <div className={styles.container}>
                                    <Sidebar changeLocation={this.changeLocation}/>
                                    {this.state.location === 'userList' && <UserList {...this.props} changeLocation={this.changeLocation}/>}
                                    {this.state.location === 'newuser' && <AddNewUser/>}
                                    {this.state.location === 'stopList' && <StopList changeLocation={this.changeLocation}/>}
                                    {this.state.location === 'newstop' && <AddNewStop/>}
                                    {this.state.location === 'questionsFromUsersList' && <QuestionsFromUsersList {...this.props} changeLocation={this.changeLocation}/>}
                                    {this.state.location === 'newsList' && <NewsList {...this.props} changeLocation={this.changeLocation}/>}
                                    {this.state.location === 'newNews' && <AddNewNews/>}

                                    

                                </div>
                        </div>
                    );
                } else {
                    return (
                        <p align='center' className='fontSizeMd'>
                            Tato stránka je určena pouze pro personál
                        </p>
                    )
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