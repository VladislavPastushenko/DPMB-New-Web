// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./stopList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { ResponsiveContainer } from "recharts";
import { fetchStops, deleteStop } from "../../../store/stops/actions";
import { LoadingOutlined } from '@ant-design/icons'
import {Modal, Button, message} from "antd"
import StopEdit from "../stopEdit/StopEdit";
import { createStop } from "../../../store/stops/actions";


class StopList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isModalOpen: false,
        };

        this.props.fetchStops().then(
          (res) => {
            this.setState({data: res})
          },
          (err) => {
            this.setState({errMsg: err})
          }
  
        );
    }

    handleOk = () => {
      this.setState({
          isModalOpen: false,
      });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: e.target.elements.name.value, 
        }

        this.props.createStop(data).then(
            (res) => {
                e.target.elements.name.value = null;
                this.handleUpdate();

            },
            (err) => {
                console.log(err);
            ;},
        )
    }

    handleDelete = (params) => {
        let id = params.row.id
        this.props.deleteStop(id).then(
          (res) => {this.handleUpdate()},
          (err) => {
            message.open({
              'content': 'Error while deleting',
              duration: 1
            })
          }
        )
      };
      
    handleUpdate = () => {
        this.props.fetchStops().then(
          (res) => {
            this.setState({data: res})
          },
          (err) => {
            this.setState({errMsg: err})
          }
  
        );
      };
    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        
        { field: "name", headerName: "Název Zastávky", width: 880, align: "left",},

        {
          field: "edit",
          headerName: "Upravit",
          width: 150,
          renderCell: (params) => {
            return (
              <StopEdit stop={params.row} {...this.props} handleUpdate={this.handleUpdate}/>
            );
          },
        },
        
        { field: "action", headerName: "Odstranit", width: 150,
          renderCell: (params) => {
            return (
              <> 
                <DeleteOutline
                  className={styles.stopListDelete}
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
      if (this.state.data.length > 0) {
        
        return (
            
            <div className={styles.stopList}>
              <div className={styles.stopsTitleContainer}>
                    <h1 className="userTitle">Seznam Zastávek</h1>
                    <button className={styles.stopAddButton} onClick={() => {this.setState({isModalOpen: true})}}>Vytvořit</button>
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
              <Modal title="Upravit data" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={null}>
                <h1 className={styles.addStopTitle}>Nová Zastávka</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addStopItem}>
                    <label>Název zastávky</label>
                    <br/>
                    <input type="text" name="name" placeholder="Název zastávky" />
                    </div>
                    <button className={styles.addStopButton} onClick={this.handleOk}>Vytvořit</button>
                </form>
                </Modal>
            </div>
        );
        } else {
          return (
            
            <div className={styles.stopList}>
              <div className={styles.stopsTitleContainer}>
                    <h1 className="userTitle">Seznam Zastávek</h1>
                    <button className={styles.stopAddButton}>Vytvořit</button>
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
export default connect(mapStateToProps, {fetchStops, deleteStop, createStop
}) (StopList);