
import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
const api = new Api;


class IndexPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div align='center' style={{background: 'white'}}>
                <Head>
                    <title>DPMB | Index</title>
                    <meta name='description' content='Bla'/>
                </Head>
                Test-page
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


