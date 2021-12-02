import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./actualReservationsCard.module.sass"
import { Card, List } from 'antd'
import { ResponsiveContainer } from "recharts";
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { fetchReservations } from "../../../store/reservations/actions";
import { LoadingOutlined } from '@ant-design/icons'




class MiddleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        let query = this.props.loggedUser && ("user_id=" + this.props.loggedUser.id)

        this.props.fetchReservations(query).then(
          (res) => {
            this.setState({data: res})
          },
          (err) => {
            this.setState({errMsg: err})
          }
        );
    }
    getName(params) {
      return params.row.trip.name;
    }

    getTime(params) {
      return new Date(params.row.trip.start_time).toLocaleString('default', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    }

    getDelay(params) {
      return params.row.trip.delay;
    }

    getStatus(params) {
      return params.row.trip.status;
    }

    getStatReserv(params) {
      return params.value
    }

    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        { field: "name", headerName: "Trip", width: 230, align: "left", valueGetter: this.getName,},
        { field: "start_time", headerName: "Start time", width: 210, align: "left", valueGetter: this.getTime,},
        { field: "delay", headerName: "Delay", width: 120, align: "left", valueGetter: this.getDelay,},
        { field: "statusTrip", headerName: "Trip status", width: 160, align: "left", valueGetter: this.getStatus,},
        { field: "status", headerName: "Reservation", width: 160, align: "left", valueGetter: this.getStatReserv},

      ];

    render() {
      if (this.state.data.length > 0) {
        return (
            <Card title="Actual reservations" bordered={false}>
                <div className={styles.userShow}>
                    <div className={styles.carrierList}>
                    <ResponsiveContainer width="100%">
                        <DataGrid
                            rows={this.state.data}
                            disableSelectionOnClick
                            columns={this.columns}
                            pageSize={8}
                            checkboxSelection
                        />
                    </ResponsiveContainer>
                    </div>
                </div>
            </Card>
        );
        } else {
          return (
          <Card title="Actual reservations" bordered={false}>
                <div className={styles.userShow}>
                    <div className={styles.carrierList}>
                        
                    <ResponsiveContainer width="100%">
                      <div align='center' style={{marginTop: '2em'}} className='fontSizeMd'>
                        <LoadingOutlined/>
                      </div>
                    </ResponsiveContainer>
                    </div>                  
                </div>
            </Card>
          );
        }
    }
}

const mapStateToProps = state => {
  return {
      users: state.users.res,
  }
}
export default connect(mapStateToProps, {fetchReservations
}) (MiddleCard);