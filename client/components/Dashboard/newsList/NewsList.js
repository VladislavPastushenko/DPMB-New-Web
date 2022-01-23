// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./newsList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { ResponsiveContainer } from "recharts";
import { fetchNews, deleteNews, createNews } from "../../../store/news/actions";
import { LoadingOutlined } from '@ant-design/icons'
import { message, Modal, Form, Input } from "antd";
import NewsEdit from "../newsEdit/NewsEdit";

const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 2,
    },
    sm: {
      span: 2,
    },
  },
  wrapperCol: {
    xs: {
      span: 6,
    },
    sm: {
      span: 6,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 15,
      offset: 0,
    },
    sm: {
      span: 15,
      offset: 0,
    },
  },
};

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isModalOpen: false,
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

    handleOk = () => {
      this.setState({
          isModalOpen: false,
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      
      
      let data = {
        name: e.target.elements.name.value,
        text: this.state.message,
        
      }

      this.props.createNews(data).then(
          (res) => {
              this.setState({isSuccessModalVisible: true});
              e.target.elements.name.value = null;
              this.handleUpdate();
          },
          (err) => {
              console.log(err);
              this.setState({isErrorModalVisible: true});
          ;},
      )
    }

    takeValue = (e) => {
      this.setState({message: e.target.value})

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
                    <button className={styles.userAddButton} onClick={() => {this.setState({isModalOpen: true})}}>Vytvořit</button>
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
              <h1 className={styles.addStopTitle}>Nová Novinka</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addStopItem}>
                    <label>Název novinky</label>
                    <input type="text" name="name" placeholder="Název novinky" />
                    </div>
                    <Form className={styles.addStopForm} {...formItemLayout}>
                        <Form.Item
                            name="new"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <TextArea size="medium" onChange={this.takeValue} style={{height: '250px'}}/>
                        </Form.Item>
                    </Form>
                    <button className={styles.addStopButton} onClick={this.handleOk}>Vytvořit</button>
                </form>
                </Modal>
            </div>
            
        );
        } else {
          return (
            <div className={styles.userList}>
              <div className={styles.userTitleContainer}>
                    <h1 className="userTitle">Novinky</h1>
                    <button className={styles.userAddButton}>Vytvořit</button>
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

export default connect(mapStateToProps, {fetchNews, deleteNews, createNews
}) (News);