import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./tripList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { ResponsiveContainer } from "recharts";
import { InputNumber } from 'antd'
import { fetchTrips } from "../../../store/trips/actions";
import { LoadingOutlined } from '@ant-design/icons'


class TripList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        let query = this.props.loggedUser.carrier_id && ("carrier_id=" + this.props.loggedUser.carrier_id)

        this.props.fetchTrips(query).then(
          (res) => {
            console.log(res)
            this.setState({data: res})
          },
          (err) => {
            this.setState({errMsg: err})
          }
  
        );
    }

    getVal(params) {
      //console.log(params.value.name)
      return params.value.name;
    }

    handleDelete = (id) => {
        this.setState(this.state.data.filter((item) => item.id !== id));
      };
    
    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        
        { field: "name", headerName: "From - To", width: 210, align: "left",},
        
        {
            field: "carrier",
            headerName: "Carrier",
            width: 170,
            align: "left",
            valueGetter: this.getVal,
        },
        {
          field: "start_time",
          headerName: "Start",
          width: 220,
          align: "left",
        },
        {
          field: "end_time",
          headerName: "Finish",
          width: 220,
          align: "left",
        },
        {
          field: "capacity",
          headerName: "Seats",
          width: 120,
          align: "left",
        },
        {
          field: "status",
          headerName: "Status",
          width: 120,
          align: "left",
        },
        {
          field: "delay",
          headerName: "Delay",
          width: 120,
          renderCell: (params) => {
            return (
              <>
                
                <InputNumber min={0} max={1000} defaultValue={0} style={{ width: 80 }} />
              </>
            );
          },
        },
      ];
    render() {
      if (this.state.data.length > 0) {
        return (
            
            <div className={styles.stopList}>
              <div className={styles.stopsTitleContainer}>
                    <h1 className="userTitle">Trips List</h1>
                    <button className={styles.transportAddButton} onClick={() => {this.props.changeLocation('newroute')}}>Create</button>
              </div>  
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
        );
        } else {
          return (
            
            <div className={styles.stopList}>
              <div className={styles.stopsTitleContainer}>
                    <h1 className="userTitle">Trips List</h1>
                    <button className={styles.transportAddButton} onClick={() => {this.props.changeLocation('newroute')}}>Create</button>
              </div>  
              <ResponsiveContainer width="100%">
                <div align='center' style={{marginTop: '2em'}} className='fontSizeMd'>
                    <LoadingOutlined/>
                </div>
              </ResponsiveContainer>
            </div>
        );
        }
    }
}

const mapStateToProps = state => {
  return {
      users: state.users.res,
  }
}
export default connect(mapStateToProps, {fetchTrips
}) (TripList);