import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./userList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { ResponsiveContainer } from "recharts";
import { fetchUsers, deleteUser } from "../../../store/users/actions";
import { LoadingOutlined } from '@ant-design/icons'
import { message } from "antd";
import UserEdit from "../userEdit/UserEdit";
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        this.props.fetchUsers().then(
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
      this.props.deleteUser(id).then(
        (res) => {window.location.reload(false)},
        (err) => {
          message.open({
            'content': 'Error while deleting',
            duration: 1
          })
        }
      )
    };
    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        { field: "email", headerName: "Email", width: 250, align: "left",},
        { field: "full_name", headerName: "User", width: 250, align: "left",},
        { field: "role", headerName: "Role", width: 250, align: "left",},
        { field: "is_active", headerName: "Status", width: 120, align: "left",},
        {
          field: "edit",
          headerName: "Edit",
          width: 150,
          renderCell: (params) => {
            return (
              <UserEdit user={params.row} {...this.props}/>
            );
          },
        },
        {
          field: "delete",
          headerName: "Delete",
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
        } else {
          return (
            <div className={styles.userList}>
              <div className={styles.transportTitleContainer}>
                    <h1 className="userTitle">Users List</h1>
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

export default connect(mapStateToProps, {fetchUsers, deleteUser
}) (UserList);