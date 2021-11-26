import React from "react";
import {Card, Col, Row, Result, Button} from "antd";
import {verifyUser} from "../../../store/users/actions";
import {LoadingOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import Head from "next/head";
import styles from "../../styles/verifyUser.module.sass";

import Router from "next/router";

class UserVerifyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    componentDidMount() {
        if (this.props.authToken) {
            this.props.verifyUser(this.props.authToken).then(
                () => {
                    console.log('verified')
                    window.localStorage.setItem('authToken', this.props.authToken)
                },
                () => {
                    console.log('unverified')
                }
            );
        }
    }

    static async getInitialProps({ query }) {
        const authToken = query.authToken;
        return { authToken };
    }

    redirectToSignUp = () => {
        Router.push('/user/choose-role')
    }
    returnStateSuccess(props) {
        return (
            <Result
                status="success"
                title="User is successfully verified and activated."
                extra={<Button type="primary" onClick={this.redirectToSignUp}>Continue to finish sign up</Button>}
            />
        )
    }

    returnStateFail(props) {
        return (
            <Result
                status="error"
                title={props.returnedState}
            />
        )
    }

    render() {
        if (this.props.returnedState === null)
        return (
            <div>
                <Head>
                    <title>Loading</title>
                </Head>
                <p className="fontSizeXl" align='center' style={{marginTop: '6vh'}}>
                    <LoadingOutlined/>
                </p>
            </div>
        )
        else
        return (
            <div>
                <Head>
                    <title>Verify User</title>
                </Head>

                <Row style={{justifyContent: 'center', marginTop: 20}}>
                    <Col xxl={8} xl={10} lg={12} md={14} span={24} style={{boxShadow: '0 1rem 3rem rgba(0,0,0,0.175)'}}>
                        <Card
                            title={<h1 className={styles.headerStyle}>User verification</h1>}
                            type={'inner'}
                        >
                            <div>
                                {this.props.returnedState == 'OK' ? this.returnStateSuccess(this.props) : this.returnStateFail(this.props)}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        returnedState: state.users.response,
        errors: {
            users: state.users.error,
        }
    }
}

export default connect(mapStateToProps, {verifyUser})(UserVerifyPage);
