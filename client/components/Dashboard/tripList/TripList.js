import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./tripList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { tripRows } from "../../../pages/dummyData";
import { ResponsiveContainer } from "recharts";
import { InputNumber } from 'antd'

export default class ReservationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: tripRows
        };
    }

    handleDelete = (id) => {
        this.setState(this.state.data.filter((item) => item.id !== id));
      };
    
    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        
        { field: "from", headerName: "From", width: 255, align: "left",},
        
        {
            field: "to",
            headerName: "To",
            width: 255,
            align: "left",
        },
        {
            field: "provider",
            headerName: "Provider",
            width: 190,
            align: "left",
        },
        {
          field: "starttime",
          headerName: "Start",
          width: 120,
          align: "left",
        },
        {
          field: "finishtime",
          headerName: "Finish",
          width: 120,
          align: "left",
        },
        {
          field: "seats",
          headerName: "Seats",
          width: 120,
          align: "left",
        },
        {
          field: "action",
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
    }
}