import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./stopList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { ResponsiveContainer } from "recharts";
import { fetchStops } from "../../../store/stops/actions";
import { LoadingOutlined } from '@ant-design/icons'

class StopList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        this.props.fetchStops().then(
          (res) => {
            console.log(res)
            this.setState({data: res})
          },
          (err) => {
            this.setState({errMsg: err})
          }
  
        );
    }

    handleDelete = (id) => {
        this.setState(this.state.data.filter((item) => item.id !== id));
      };
    
    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        
        { field: "name", headerName: "Stop Name", width: 1030, align: "left",},
        
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
      if (this.state.data.length > 0) {
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
        } else {
          return (
            
            <div className={styles.stopList}>
              <div className={styles.stopsTitleContainer}>
                    <h1 className="userTitle">Stops List</h1>
                    <button className={styles.stopAddButton} onClick={() => {this.props.changeLocation('newstop')}}>Create</button>
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
export default connect(mapStateToProps, {fetchStops
}) (StopList);