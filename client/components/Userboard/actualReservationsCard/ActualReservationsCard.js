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

        console.log(this.props)
        let query = this.props.loggedUser && ("user_id=" + this.props.loggedUser.id)

        this.props.fetchReservations(query).then(
          (res) => {
            console.log(res)
            this.setState({data: res})
          },
          (err) => {
            this.setState({errMsg: err})
          }
  
        );
    }
    

    getName(params) {
      //console.log(params.row.trip.name)
      return params.row.trip.name;
    }

    getTime(params) {
      //console.log(params.value.name)
      return params.row.trip.start_time;
    }

    getDelay(params) {
      //console.log(params.value.name)
      return params.row.trip.delay;
    }

    getStatus(params) {
      //console.log(params.value.name)
      return params.row.trip.status;
    }

    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        {
          field: "name",
          headerName: "Trip",
          width: 320,
          align: "left",
          valueGetter: this.getName,
        },
        {
            field: "start_time",
            headerName: "Start time",
            width: 320,
            align: "left",
            valueGetter: this.getTime,

        },
        {
          field: "delay",
          headerName: "Delay",
          width: 120,
          align: "left",
          valueGetter: this.getDelay,

      },
        {
            field: "status",
            headerName: "Status",
            width: 100,
            align: "left",
            valueGetter: this.getStatus,
        },
        
        
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
                    <div>
                      <div className={styles.container}>
                          <button className={styles.historyShowButton}>Go on a trip</button>
                      </div>
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
                    <div>
                      <div className={styles.container}>
                          <button className={styles.historyShowButton}>Go on a trip</button>
                      </div>
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