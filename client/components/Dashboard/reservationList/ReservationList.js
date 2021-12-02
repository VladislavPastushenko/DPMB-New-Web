import React from "react";
import {connect} from "react-redux";

import styles from "./reservationList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { ResponsiveContainer } from "recharts";
import { Select, Modal, Button, List, message } from 'antd';
import { fetchReservations, editReservationById, deleteReservation } from "../../../store/reservations/actions";

class ReservationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selector: '',
            isModalVisible: false,
        };

        this.props.fetchReservations().then(
          (res) => {
            this.setState({data: res})
          },
          (err) => {
            message.open({
              type: 'error',
              content: 'Error while getting reservations',
              duration: 3
            })
          }
        )


    }

    handleDelete = (params) => {
      let id = params.row.id
      this.props.deleteReservation(id).then(
        (res) => {window.location.reload(false)},
        (err) => {
          message.open({
            'content': 'Error while deleting',
            duration: 1
          })
        }
        
      )
    };

    onStatusChange = (value, options, params) => {
        let changedReservation = {...params.row}
        delete changedReservation.trip
        delete changedReservation.user
        changedReservation.status = value

        this.props.editReservationById(changedReservation).then(() => {
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

    getTrip(params) {
      return params.value.name;
    }

    getUser(params) {
      return params.value.email;
    }

    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        { field: "trip", headerName: "Trip", width: 680, align: "left", valueGetter: this.getTrip,},
        { field: "user", headerName: "Buyer", width: 200, valueGetter: this.getUser},
        { field: "status", headerName: "Status", width: 150, align: "left",
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
                <Select.Option value={'unpaid'}>Unpaid</Select.Option>
                <Select.Option value={'paid'}>Paid</Select.Option>
                <Select.Option value={'expired'}>Expire</Select.Option>
              </Select>
              </>
            );
          },
        },
        { field: "action", headerName: "Action", width: 150,
          renderCell: (params) => {
            return (
              <>                
                <DeleteOutline
                  className={styles.reservationListDelete}
                  onClick={() => {
                    this.handleDelete(params)
                  }}
                />
              </>
            );
          },
        },
      ];
    render() {
        return (
            <div className={styles.reservationList}>
              <div className={styles.reservationTitleContainer}>
                    <h1 className="userTitle">Reservation List</h1>
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
    }
}


const mapStateToProps = state => {
  return {
      reservations: state.reservations.reservations,
  }
}
export default connect(mapStateToProps, {fetchReservations, editReservationById, deleteReservation}) (ReservationList);