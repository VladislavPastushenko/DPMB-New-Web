import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./citiesList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { ResponsiveContainer } from "recharts";
import { fetchCities, deleteCity } from "../../../store/cities/actions";
import {LoadingOutlined} from '@ant-design/icons'
import { message } from "antd";


class CitiesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selector: '',
            isModalVisible: false,
        };

        this.props.fetchCities().then(
          (res) => {
            console.log(res)
            this.setState({data: res})
          },
          (err) => {
            this.setState({errMsg: err})
          }
  
        );
    }

    handleDelete = (params) => {
      let id = params.row.id
      console.log(id)
      this.props.deleteCity(id).then(
        (res) => {window.location.reload(false)},
        (err) => {
          message.open({
            'content': 'Error while deleting',
            duration: 1
          })
        }
        

      )
      //this.setState(this.state.data.filter((item) => item.id !== id));
    };

    showModal = () => {
      setIsModalVisible(true);
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
                  onClick={() => {
                    this.handleDelete(params)
                  }}
                  className={styles.carrierListDelete}
  
                />
              </>
            );
          },
        },
        
      ];
    render() {
        if (this.state.data.length > 0) {
        return (
            <div className={styles.carrierList}>
              <div className={styles.carrierTitleContainer}>
                    <h1 className="userTitle">Cities List</h1>
                    <button className={styles.carrierAddButton} onClick={() => {this.props.changeLocation('newcity')}}>Create</button>
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
          return(
            <div className={styles.carrierList}>
              <div className={styles.carrierTitleContainer}>
                    <h1 className="userTitle">Cities List</h1>
                    <button className={styles.carrierAddButton} onClick={() => {this.props.changeLocation('newcity')}}>Create</button>
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
export default connect(mapStateToProps, {fetchCities, deleteCity
}) (CitiesList);