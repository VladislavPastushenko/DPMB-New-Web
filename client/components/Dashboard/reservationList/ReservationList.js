import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./reservationList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { reservationRows } from "../../../pages/dummyData";
import { ResponsiveContainer } from "recharts";
import { Select, Modal, Button, List } from 'antd';

export default class TransactionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: reservationRows,
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
          field: "trip",
          headerName: "Trip",
          width: 830,
          align: "left",
        },
        
        {
          field: "action",
          headerName: "Passangers",
          width: 200,
          renderCell: (params) => {
            if (this.state.isModalVisible) {
            return (
              <>
                <Modal title="Passangers List" visible={this.state.isModalVisible} onOk={this.setState({ isModalVisible: false})} 
                onCancel={this.setState({ isModalVisible: false})}footer={[
                  <Button key="submit" type="primary" >
                    OK
                  </Button>
                  ]}>
                    
                    <List
                      size="small"
                      bordered
                      dataSource={params.row.passangers}
                      renderItem={item => <List.Item>{item}</List.Item>}
              
                    />
                    {console.log(params.row.passangers)}
                </Modal>
    
                  <a onClick={() => this.setState({ isModalVisible: true})}>
                    Passangers List
                  </a>                
              </>
            );} else {
              return (
                <>      
                    <a onClick={() => this.setState({ isModalVisible: true})}>
                      Passangers List
                    </a>                
                </>
              );

            }
          },
        },
        {
          field: "status",
          headerName: "Status",
          width: 150,
          align: "left",
          renderCell: (params) => {
            return (
              <>
              <Select
                value={params.row.status}
                style={{
                  width: 120,
                  margin: '0 8px',
                }}
                onSelect={(value, options) => {
                  this.onStatusChange(value, options, params)
                }}
              >
                <Option value={'unpaid'}>Unpaid</Option>
                <Option value={'paid'}>Paid</Option>
                <Option value={'expired'}>Expire</Option>
              </Select>
                
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