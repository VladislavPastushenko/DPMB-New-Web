import React from "react";
import {connect} from "react-redux";
import {Col, Row, DatePicker, Form, Select, Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;


class Searcher extends React.Component {


    constructor(props) {
        super(props);
        this.state = {start_time: null}
    }
    render() {
        return (
            <div>
                <Form>
                    <Row align='left' gutter={[10, 0]}>
                        <Col xs={6} align='start'>
                            <Form.Item name='from_id'>
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="From"
                                    optionFilterProp="children"
                                >
                                    <Option value="1">Jack</Option>
                                    <Option value="2">Lucy</Option>
                                    <Option value="3">Tom</Option>
                                </Select>,
                            </Form.Item>
                        </Col>
                        <Col xs={6} align='start'>
                            <Form.Item name='to_id'>
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="To"
                                    optionFilterProp="children"
                                >
                                    <Option value="1">Jack</Option>
                                    <Option value="2">Lucy</Option>
                                    <Option value="3">Tom</Option>
                                </Select>,
                            </Form.Item>
                        </Col>
                        <Col xs={6} align='start'>
                            <Form.Item name='start_time'>
                                <DatePicker
                                    onChange={(__, date) => {this.setState({start_time: date});}}
                                    showToday={false}
                                    style={{width: '100%'}}
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
}) (Searcher);


