import React from "react";
import { Row, Col} from "antd";



class Navigator extends React.Component {
    render() {
        return (
            <div>
                <Row align='center' style={{marginTop: '2vh'}}>
                    <Col xl={20} lg={22} xs={24} align='center'>
                        Navigator
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Navigator;