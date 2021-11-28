import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./userList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../pages/dummyData";
import { ResponsiveContainer } from "recharts";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: userRows
        };
    }

    handleDelete = (id) => {
        this.setState(this.state.data.filter((item) => item.id !== id));
      };
    
    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        {
          field: "user",
          headerName: "User",
          width: 300,
          align: "left",
          renderCell: (params) => {
            return (
              <div className={styles.userListUser}>
                <img className={styles.userListImg} src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: "email", headerName: "Email", width: 300, align: "left",},
        {
          field: "status",
          headerName: "Status",
          width: 120,
          align: "left",
        },
        {
          field: "Seats",
          headerName: "Seats number",
          width: 310,
          align: "left",
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                
                <button className={styles.userListEdit}>Edit</button>
                
                <DeleteOutline
                  className={styles.userListDelete}
                  onClick={() => this.handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];
    render() {
        return (
            <div className={styles.userList}>
              <div className={styles.transportTitleContainer}>
                    <h1 className="userTitle">Users List</h1>
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