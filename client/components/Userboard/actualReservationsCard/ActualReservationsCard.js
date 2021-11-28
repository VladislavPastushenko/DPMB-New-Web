import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./actualReservationsCard.module.sass"
import { Card, List } from 'antd'
import { actualreservedRows } from "../../../pages/dummyData";
import { ResponsiveContainer } from "recharts";
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";



const data = [
    'Brno-Hlavni nadrazi -> Praha-Florenc',
    'Praha-Florenc -> Brno-Hlavni nadrazi',
];

export default class MiddleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: actualreservedRows
        };
    }

    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        {
          field: "trip",
          headerName: "Trip",
          width: 320,
          align: "left",
        },
        {
            field: "seats",
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
                    <div className={styles.container}>
                        <button className={styles.historyShowButton}>Go on a trip</button>
                    </div>
                </div>
            </Card>
        );
        
    }
}

