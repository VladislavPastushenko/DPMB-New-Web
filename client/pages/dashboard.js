// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import styles from "./styles/dashboard.module.sass"
import Topbar from "./../components/Dashboard/Topbar/Topbar"
import Sidebar from "./../components/Dashboard/Sidebar/Sidebar"
import UserList from "../components/Dashboard/userList/UserList";
import StopList from "../components/Dashboard/stopList/StopList";
import QuestionsFromUsersList from "../components/Dashboard/questionsFromUsersList/QuestionsFromUsersList";
import {lookupUserInStorage, fetchLoggedUser} from '../store/users/actions'
import Router from 'next/router'
import {LoadingOutlined} from '@ant-design/icons'
import AddNewUser from "../components/Dashboard/addNewUser/AddNewUser";
import NewsList from "../components/Dashboard/newsList/NewsList";
import FAQsList from "../components/Dashboard/faqsList/FAQsList";
import LostThingsList from "../components/Dashboard/lostThingsList/LostThingsList";
import EditUser from "../components/Dashboard/editUser/EditUser";
import VacanciesList from "../components/Dashboard/vacanciesList/VacanciesList";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: null,
            location: 'userList',
        };

        this.props.lookupUserInStorage().then(
            (token) => {
                this.props.fetchLoggedUser(token)
                .then(
                    (res) => {this.setState({loggedUser: res});}
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
                                    {this.state.location === 'questionsFromUsersList' && <QuestionsFromUsersList {...this.props} changeLocation={this.changeLocation}/>}
                                    {this.state.location === 'newsList' && <NewsList {...this.props} changeLocation={this.changeLocation}/>}
                                    {this.state.location === 'FAQsList' && <FAQsList {...this.props} changeLocation={this.changeLocation}/>}
                                    {this.state.location === 'lostThingsList' && <LostThingsList {...this.props} changeLocation={this.changeLocation}/>}
                                    {this.state.location === 'editUser' && <EditUser {...this.props} loggedUser={this.state.loggedUser} changeLocation={this.changeLocation}/>}
                                    {this.state.location === 'vacanciesList' && <VacanciesList {...this.props} changeLocation={this.changeLocation}/>}
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