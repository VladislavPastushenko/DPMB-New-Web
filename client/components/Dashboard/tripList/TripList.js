import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./tripList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { ResponsiveContainer } from "recharts";
import { InputNumber, Select, message, Form, Button } from 'antd'
import { fetchTrips, editTripById } from "../../../store/trips/actions";
import { LoadingOutlined } from '@ant-design/icons'
import { Check } from "@material-ui/icons";




class TripList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            newDelay: null,
        };

        let query = this.props.loggedUser.carrier_id && ("carrier_id=" + this.props.loggedUser.carrier_id)

        this.props.fetchTrips(query).then(
          (res) => {
            this.setState({data: res})
          },
          (err) => {
            this.setState({errMsg: err})
          }
  
        );
    }
    
    onDelayChange = (value, options, params) => {
      let changedDelay = {...params.row}
      value = this.state.newDelay
      delete changedDelay.routeItems
      delete changedDelay.carrier
      delete changedDelay.stops
      changedDelay.delay = value

      this.props.editTripById(changedDelay).then(() => {
        message.success({
          type: 'error',
          content: 'Delay successfully changed',
          duration: 3
        })
      }, err => {
        message.open({
          type: 'error',
          content: 'Something went wrong',
          duration: 3
        })
      })
    };

    onStatusChange = (value, options, params) => {
      let changedTrip = {...params.row}      
      delete changedTrip.routeItems
      delete changedTrip.carrier
      delete changedTrip.stops
      changedTrip.status = value

      this.props.editTripById(changedTrip).then(() => {
      message.success({
        type: 'error',
        content: 'Status successfully changed',
        duration: 3
      })}, err => {
        message.open({
          type: 'error',
          content: 'Something went wrong',
          duration: 3
        })
      })
    };

    getVal(params) {
      return params.value.name;
    }

    getDelay(params) {
      return params.value;
    }

    getTime(params) {
      return new Date(params.value).toLocaleString('default', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    }
    
    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        { field: "name", headerName: "From - To", width: 210, align: "left",},       
        { field: "carrier", headerName: "Carrier", width: 160, align: "left", valueGetter: this.getVal,},
        { field: "start_time", headerName: "Start", width: 185, align: "left", valueGetter: this.getTime,},
        { field: "end_time", headerName: "Finish", width: 185, align: "left", valueGetter: this.getTime,},
        { field: "capacity", headerName: "Seats", width: 120, align: "left",},
        { field: "status", headerName: "Status", width: 120, align: "left",
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
        { field: "delay", headerName: "Delay", width: 200,
          renderCell: (params) => {            
            return (
              <>
                <Form layout="inline">
                  <Form.Item >
                    <InputNumber min={0} max={1000} style={{ width: 80 }} onChange={(value) => this.setState({newDelay: value})} defaultValue={params.row.delay}/>

                  </Form.Item>
                  <Form.Item >
                    <Button className={styles.acceptButton} htmlType="submit"  
                            onClick={(value, options) => {this.onDelayChange(value, options, params)}}>Accept</Button>

                  </Form.Item>
                </Form>
            
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