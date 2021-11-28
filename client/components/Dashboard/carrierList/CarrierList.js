import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./carrierList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { carrierRows } from "../../../pages/dummyData";
import { ResponsiveContainer } from "recharts";

export default class CarrierList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: carrierRows,
            selector: '',
            isModalVisible: false,
        };
    }

    showModal = () => {
      setIsModalVisible(true);
    };

    handleDelete = (id) => {
        this.setState(this.state.data.filter((item) => item.id !== id));
      };
    
    onStatusChange = (value, options, params) => {
        console.log("OUR FUNCTION value", value)
        console.log("OUR FUNCTION options", options)
        console.log("OUR FUNCTION params", params)
        let item = params.row

        item.status = value


    };
    
      columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        {
          field: "name",
          headerName: "Name",
          width: 1030,
          align: "left",
        },
        
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>                
                <DeleteOutline
                  className={styles.carrierListDelete}
                  onClick={() => this.handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
        
      ];
    render() {
        return (
            <div className={styles.carrierList}>
              <div className={styles.carrierTitleContainer}>
                    <h1 className="userTitle">Carriers List</h1>
                    <button className={styles.carrierAddButton} onClick={() => {this.props.changeLocation('newcarrier')}}>Create</button>
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