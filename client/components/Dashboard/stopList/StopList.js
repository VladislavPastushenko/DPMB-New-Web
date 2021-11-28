import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./stopList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { stopRows } from "../../../pages/dummyData";
import { ResponsiveContainer } from "recharts";

export default class StopList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: stopRows
        };
    }

    handleDelete = (id) => {
        this.setState(this.state.data.filter((item) => item.id !== id));
      };
    
    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        
        { field: "stopname", headerName: "Stop Name", width: 300, align: "left",},
        
        {
            field: "city",
            headerName: "In city",
            width: 280,
            align: "left",
        },
        {
            field: "buses",
            headerName: "Bus Numbers",
            width: 450,
            align: "left",
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                
                <button className={styles.stopListEdit}>Edit</button>
                
                <DeleteOutline
                  className={styles.stopListDelete}
                  onClick={() => this.handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];
    render() {
        return (
            
            <div className={styles.stopList}>
              <div className={styles.stopsTitleContainer}>
                    <h1 className="userTitle">Stops List</h1>
                    <button className={styles.stopAddButton} onClick={() => {this.props.changeLocation('newstop')}}>Create</button>
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