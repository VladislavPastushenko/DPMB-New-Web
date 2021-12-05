import React from "react";
import {connect} from "react-redux";
import {Col, Row, TimePicker, Form, Select, Button} from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {fetchNews} from '../../store/news/actions'
import styles from './news.module.sass'

class News extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            carouselItemLeft: 0,
            news: [],
        }
        this.props.fetchNews().then(res => this.setState({news: res}))
    }


    shiftLeft = () => {
        let maxLength = (this.state.news.length - 1) * 100
        this.setState((state) => {
            return {
                carouselItemLeft: state.carouselItemLeft + 100 > maxLength ? state.carouselItemLeft : state.carouselItemLeft + 100
            }
        })
    }

    shiftRight = () => {
        this.setState((state) => {
            return {
                carouselItemLeft: state.carouselItemLeft - 100 < 0 ? state.carouselItemLeft : state.carouselItemLeft - 100
            }
        })
    }
    render() {
        return (
            <div className={styles.carouselContainer}>

                <div className={styles.overflowContainer}>
                    <div className={styles.carouselImageContainer} style={{overflow: 'visible'}}>
                        {this.state.news.map((el, idx) => {
                            return (
                                <div key={el.name + '1'} className={styles.carouselItem} style={{left:  50 + 100 * idx - this.state.carouselItemLeft + '%', color: "black"}}>
                                    <div className={styles.carouselItemDate + ' fontSizeXs'}>
                                    16 Mar 2000
                                    </div>
                                    <div className={styles.carouselItemText + ' fontSizeLg'}>
                                    {el.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.carouselImageContainer}>
                    <div className={styles.carouselImage}/>
                    <div className={styles.overlay}/>
                    {this.state.news.map((el, idx) => {
                            return (
                                <div key={el.name + '2'} className={styles.carouselItem} style={{left:  50 + 100 * idx - this.state.carouselItemLeft + '%', color: "white"}}>
                                    <div className={styles.carouselItemDate + ' fontSizeXs'}>
                                    16 Mar 2000
                                    </div>
                                    <div className={styles.carouselItemText + ' fontSizeLg'}>
                                    {el.name}
                                    </div>
                                </div>
                            )
                        })}
                    <div className={styles.carouselControllers + ' fontSizeLg'}>
                        <span className={styles.carouselControllersItem} style={{marginRight: '1em'}} onClick={this.shiftLeft}><LeftOutlined/></span>
                        <span className={styles.carouselControllersItem} style={{marginLeft: '1em'}} onClick={this.shiftRight}><RightOutlined/></span>
                    </div>
                </div>
            </div>

        )
    }

}



const mapStateToProps = state => {
    return {
        news: state.news.news,
    }
}
export default connect(mapStateToProps, {
    fetchNews
}) (News);

