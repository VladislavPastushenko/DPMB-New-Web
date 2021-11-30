import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./tripList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { ResponsiveContainer } from "recharts";
import { InputNumber, Select, message } from 'antd'
import { fetchTrips, editTripById } from "../../../store/trips/actions";
import { LoadingOutlined } from '@ant-design/icons'


class TripList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        console.log(this.props)
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

    onStatusChange = (value, options, params) => {
      let changedTrip = {...params.row}
      console.log("changedTrip")
      
      delete changedTrip.routeItems
      delete changedTrip.carrier
      delete changedTrip.stops
      changedTrip.status = value
      console.log("change trip")
      console.log(changedTrip)

      this.props.editTripById(changedTrip).then(() => {console.log('Success')}, err => {
        message.open({
          type: 'error',
          content: 'Something went wrong',
          duration: 3
        })
      })
    };

    getVal(params) {
      //console.log(params.value.name)
      return params.value.name;
    }
    getTime(params) {
      return new Date(params.value).toLocaleString('default', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
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
        {field: "start_time", headerName: "Start", width: 220, align: "left", valueGetter: this.getTime,},
        {field: "end_time", headerName: "Finish", width: 220, align: "left", valueGetter: this.getTime,},
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
          renderCell: (params) => {
            return (
              <>
              <Select
                defaultValue={params.row.status}
                style={{
                  width: 120,
                  margin: '0 8px',
                }}
                onSelect={(value, options) => {
                  this.onStatusChange(value, options, params)
                }}
              >
                <Select.Option value={'coming'}>Coming</Select.Option>
                <Select.Option value={'finished'}>Finished</Select.Option>
                <Select.Option value={'canceled'}>Canceled</Select.Option>
              </Select>
              </>
            );
          },
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
export default connect(mapStateToProps, {fetchTrips, editTripById
}) (TripList);