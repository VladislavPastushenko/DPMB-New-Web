// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./newsList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { ResponsiveContainer } from "recharts";
import { fetchNews, deleteNews } from "../../../store/news/actions";
import { LoadingOutlined } from '@ant-design/icons'
import { message } from "antd";
import NewsEdit from "../newsEdit/NewsEdit";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        this.props.fetchNews().then(
          (res) => {
            this.setState({data: res})
          },
          (err) => {
            this.setState({errMsg: err})
          }

        );
        
    }

    handleDelete = (params) => {
      let id = params.row.id
      this.props.deleteNews(id).then(
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
      this.props.fetchNews().then(
        (res) => {
          this.setState({data: res})
        },
        (err) => {
          this.setState({errMsg: err})
        }
      );
    };

    getTime(params) {
      return new Date(params.value).toLocaleString('default', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    }

    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        { field: "date", headerName: "Datum", width: 230, align: "left", valueGetter: this.getTime},
        { field: "name", headerName: "Název", width: 630, align: "left",},
        {
          field: "edit",
          headerName: "Upravit",
          width: 150,
          renderCell: (params) => {
            return (
              <NewsEdit news={params.row} {...this.props} handleUpdate={this.handleUpdate}/>
            );
          },
        },
        {
          field: "delete",
          headerName: "Odstranit",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  className={styles.userListDelete}
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
            <div className={styles.userList}>
              <div className={styles.userTitleContainer}>
                    <h1 className="userTitle">Novinky</h1>
                    <button className={styles.userAddButton} onClick={() => {this.props.changeLocation('newNews')}}>Vytvořit</button>
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
            <div className={styles.userList}>
              <div className={styles.userTitleContainer}>
                    <h1 className="userTitle">Novinky</h1>
                    <button className={styles.userAddButton} onClick={() => {this.props.changeLocation('newNews')}}>Vytvořit</button>
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

export default connect(mapStateToProps, {fetchNews, deleteNews
}) (News);