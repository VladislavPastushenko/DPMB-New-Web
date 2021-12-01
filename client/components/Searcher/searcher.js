import React from "react";
import {connect} from "react-redux";
import {Col, Row, DatePicker, Form, Select, Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {fetchStops} from '../../store/stops/actions'
import moment from 'moment';
import {fetchTripsByFromAndToIds} from '../../store/trips/actions'
import RouteItem from "./routeItem";

class Searcher extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            stops: [],
            routes: 'preparing'
        }
        this.props.fetchStops().then(res => this.setState({stops: res}))
    }

    disabledDate(current) {
        return current && current < moment().startOf('day');
    }

    onSearch = (values) => {
        if (values.start_time)
                values.start_time = values.start_time.add(-(new Date().getTimezoneOffset()), 'm').format().slice(0, 10).replace('T', ' ')

        this.props.fetchTripsByFromAndToIds(values.from_id, values.to_id, 'date=' + values.start_time).then(
            res => {
                this.setState({routes: res.concat()})
            },
            err => {
                if (err === 'Routes Not Found') {
                    console.log('Routes Not Found')
                }
            }
        )
    }

    render() {
        return (
            <div>
                <Form onFinish={this.onSearch}>
                    <Row align='left' gutter={[10, 0]}>
                        <Col xs={6} align='start'>
                            <Form.Item name={['from_id']} rules={[{ required: true, message: 'Choose from town' }]}>
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="From"
                                    optionFilterProp="children"

                                >
                                    {this.state.stops.length > 0 && this.state.stops.map(stop => {
                                        return (
                                            <Select.Option key={'from' + stop.id} value={stop.id}>{stop.city.name} - {stop.name}</Select.Option>
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={6} align='start'>
                            <Form.Item name='to_id' rules={[{ required: true, message: 'Choose destination town' }]}>
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="To"
                                    optionFilterProp="children"
                                >
                                    {this.state.stops.length > 0 && this.state.stops.map(stop => {
                                        return (
                                            <Select.Option key={'to' + stop.id} value={stop.id}>{stop.city.name} - {stop.name}</Select.Option>
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={6} align='start'>
                            <Form.Item name='start_time' rules={[{ required: true, message: 'Choose date' }]}>
                                <DatePicker
                                    showToday={false}
                                    style={{width: '100%'}}
                                    disabledDate={this.disabledDate}
                                    />
                            </Form.Item>
                        </Col>
                        <Col xs={6} align='start'>
                            <Form.Item name='start_time'>
                                <Button htmlType='submit' type='primary' icon={<SearchOutlined />}>
                                    Search
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                
                {this.state.routes !== 'preparing' &&
                    <>
                        {this.state.routes.length > 0 ?
                        <p align='left' className='fontSizeMd'>
                            Results
                            <div>
                                {this.state.routes.map((el, idx) => {return(<RouteItem key={idx} item={el}/>)})}
                            </div>
                        </p>
                        :
                        <p align='center' className='fontSizeMd'>
                            We could not find anything for your request.
                        </p>}
                    </>
                }

            </div>

        )
    }

}



const mapStateToProps = state => {
    return {
        trips: state.trips.trips,
    }
}
export default connect(mapStateToProps, {
    fetchStops, fetchTripsByFromAndToIds
}) (Searcher);

