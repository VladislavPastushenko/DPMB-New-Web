import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./sidebar.module.scss"
import { Home, DirectionsBus, Person, LocalActivity, Report, MonetizationOn, Store, Settings, LocationCity } from "@material-ui/icons";
import Link from "next/link"

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles.sidebar} >
                <div className={styles.sidebarWrapper}>
                    <div className={styles.sidebarMenu}>
                        <h3 className={styles.sidebarTitle}>Dashboard</h3>

                        <ul className={styles.sidebarList}>
                        <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('userList')}}>
                                <Person className={styles.sidebarIcon}/>
                                Users
                            </li>
                        </ul>
                    </div>

                    <div className={styles.sidebarMenu}>
                        <h3 className={styles.sidebarTitle}>Main Menu</h3>
                        <ul className={styles.sidebarList}>

                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('carrierList')}}>
                                <DirectionsBus className={styles.sidebarIcon}/>
                                Carriers
                            </li>
                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('citiesList')}}>
                                <LocationCity className={styles.sidebarIcon}/>
                                Cities
                            </li>
                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('tripList')}}>
                                <LocalActivity className={styles.sidebarIcon}/>
                                Trips
                            </li>
                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('stopList')}}>
                                <Store className={styles.sidebarIcon}/>
                                Stops
                            </li>
                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('reservationList')}}>
                                <MonetizationOn className={styles.sidebarIcon}/>
                                Reservations
                            </li>
                        </ul>
                    </div>

                    <div className={styles.sidebarMenu}>
                        <h3 className={styles.sidebarTitle}>Staff</h3>
                        <ul className={styles.sidebarList}>
                            <Link href='/userboard'>
                            <li className={styles.sidebarListItem}>
                                <Settings className={styles.sidebarIcon}/>
                                My profile
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
