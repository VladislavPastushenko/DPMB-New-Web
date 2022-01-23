// Author: Kozhevnikov Dmitrii, Viktoryia Tomason
// Login: xkozhe00, xtomas34

import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./vacanciesList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { ResponsiveContainer } from "recharts";
import { fetchVacancies, deleteVacancy, createVacancy } from "../../../store/vacancies/actions";
import { LoadingOutlined } from '@ant-design/icons'
import { message, Input, Modal, Form } from "antd";
import VacancyEdit from "../vacancyEdit/VacancyEdit";

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

class VacanciesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isModalOpen: false,

        };

        this.props.fetchVacancies().then(
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
        requirements: this.state.requirements,
        offers: this.state.offers,
      }

      this.props.createVacancy(data).then(
          (res) => {
              e.target.elements.name.value = null;
              this.handleUpdate();

          },
          (err) => {
              console.log(err);
          ;},
      )
    }

    takeOffer = (e) => {
        this.setState({offers: e.target.value})
    }

    takeRequirement = (e) => {
      this.setState({requirements: e.target.value})
    }

    handleDelete = (params) => {
      let id = params.row.id

      this.props.deleteVacancy(id).then(
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
      this.props.fetchVacancies().then(
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
        { field: "name", headerName: "Název", width: 650, align: "left",},
        {
          field: "edit",
          headerName: "Upravit",
          width: 350,
          renderCell: (params) => {
            return (
              <VacancyEdit vacancy={params.row} {...this.props} handleUpdate={this.handleUpdate}/>
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
                    <h1 className="userTitle">Zaměstnání</h1>
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
              <h1 className={styles.addStopTitle}>Nová pozice</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addStopItem}>
                    <label>Název</label>
                    <input type="text" name="name" placeholder="Název pozice" />
                    </div>

                    <div className={styles.addStopItem}>
                    <label>Požadavek</label>
                    </div>
                    <Form className={styles.addStopForm} {...formItemLayout}>
                        <Form.Item
                            name="requirements"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <TextArea size="medium" onChange={this.takeRequirement} style={{height: '200px'}}/>
                        </Form.Item>
                    </Form>

                    <div className={styles.addStopItem}>
                    <label>Nabídka</label>
                    </div>
                    <Form className={styles.addStopForm} {...formItemLayout}>
                        <Form.Item
                            name="offers"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <TextArea size="medium" onChange={this.takeOffer} style={{height: '200px'}}/>
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
                    <h1 className="userTitle">Zaměstnání</h1>
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

export default connect(mapStateToProps, {fetchVacancies, deleteVacancy, createVacancy
}) (VacanciesList);