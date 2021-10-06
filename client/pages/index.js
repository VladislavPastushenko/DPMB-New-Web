
import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import {LoadingOutlined} from '@ant-design/icons';

const api = new Api;



class OurEl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: 'loading'
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({condition: 'loaded'})
        },
        3000
        )
    }


    render() {

        if (this.state.condition !== 'loading')
        return (
            <div align='center' style={{background: 'white'}}>
                {this.props.name ?
                    <span>
                        My name is {this.props.name}
                    </span>
                :
                    <span>
                        Name unset
                    </span>
                }
            </div>
        )
        else {
            return (
                <div align='center'>
                    <LoadingOutlined/>
                </div>
            )
        }

    }

}

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

                <OurEl />
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


