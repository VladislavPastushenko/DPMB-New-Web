import React from "react";
import { Row, Col} from "antd";
import styles from './navigator.module.scss'
import {connect} from "react-redux";
import {lookupUserInStorage, fetchLoggedUser} from '../../store/users/actions'
import Link from 'next/link'


class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'home',
        };


        this.props.lookupUserInStorage().then((token) => this.props.fetchLoggedUser(token))
    }
    render() {
        return (
            <div className={styles.navigatorBody} style={{borderBottom: this.props.color === 'black' && '1px solid #f0f0f0'}}>
                <Row className={styles.navigator} style={{justifyContent: 'space-between', alignItems: 'center'}}>
                    <Col xs={7} className={styles.navigatorItem} style={{textAlign: 'left'}}>
                        <Link href='/'>
                        <a className={styles.navigatorLink} style={{textDecoration: 'underline', color: this.props.color}}>
                            IIS
                        </a>
                        </Link>
                    </Col>
                    <Col xs={7} className={styles.navigatorItem} style={{textAlign: 'right'}}>
                        {this.props.loggedUser === null ?
                        <Link href='/login'>
                            <a style={{color: this.props.color}} className={styles.navigatorLink}>
                                Login
                            </a>
                        </Link>
                        :
                        <Link href='/userboard'>
                            <a className={styles.navigatorLink} style={{color: this.props.color}}>
                                {this.props.loggedUser.email}
                            </a>
                        </Link>
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        loggedUser: state.users.loggedUser,
    }
  }
export default connect(mapStateToProps, {lookupUserInStorage, fetchLoggedUser}) (Navigator);