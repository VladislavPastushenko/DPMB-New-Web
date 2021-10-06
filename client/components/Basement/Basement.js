import React from "react";
import { Row, Col} from "antd";



class Basement extends React.Component {
    render() {
        return (
            <div>
                <Row align='center' style={{marginTop: '2vh'}}>
                    <Col xl={20} lg={22} xs={24} align='center'>
                            Footer
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Basement;