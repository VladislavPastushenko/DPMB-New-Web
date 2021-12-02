import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import {Col, Row} from 'antd';
import { Table, Input, Button, Space } from 'antd';
import Navigator from "../components/Navigator/Navigator";
import styles from './styles/ztraty.module.sass'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';


const api = new Api;

const data = [
    {
      key: '1',
      date: '02-12-2021',
      name: "Fialovo-černý batoh",
      place: "Výpravčí ED Pisárky",
      phone: "5-4317-1435",
    },
    {
        key: '2',
        date: '02-12-2021',
        name: "červený pytel,boty,triko",
        place: "Výpravčí AD Medlánky",
        phone: "5-4317-2619",
    },
    {
        key: '3',
        date: '01-12-2021',
        name: "dětská korunka",
        place: "Výpravčí ED Pisárky",
        phone: "5-4317-1435",
    }
]

class Ztraty extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchedColumn: '',
        }
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({ closeDropdown: false });
                  this.setState({
                    searchText: selectedKeys[0],
                    searchedColumn: dataIndex,
                  });
                }}
              >
                Filter
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select(), 100);
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
    
      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };

    columns = [
        { title: 'Datum nálezu', dataIndex: 'date', width: '15%', ...this.getColumnSearchProps('date'),},
        { title: 'Nalezená věc', dataIndex: 'name', ...this.getColumnSearchProps('name'),
          sorter: {
            compare: (a, b) => a.name - b.name,
            multiple: 2,
          },
        },
        {
          title: 'Umístění nalezené věci v rámci DPMB, a.s.',
          dataIndex: 'place',
          width: '25%',
          sorter: {
            compare: (a, b) => a.place - b.place,
            multiple: 1,
          },
        },
        { title: 'Telefon', dataIndex: 'phone', width: '10%',},
      ];
    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>Ztraty a nalezeni</title>
                </Head>
                
                <Row style={{height: '100%', overflow: 'hidden'}} align='center'>
                    <Col xs={19} md={31} lg={20} xl={21} xxl={15}>
                        <div className={styles.title}>
                            <p className='fontSizeMd' align='center'>Ztráty a nálezy věcí</p>
                        </div>
                        <div>
                        <p className='fontSizeSm' >
                            Níže uvedený seznam je evidencí věcí nalezených v dopravních prostředcích a v prostorách Dopravního podniku města Brna, a.s.</p>
                        <p className='fontSizeSm'>
                            Věci nalezené v dopravních prostředcích jsou skladovány na příslušných výpravnách (Medlánky, Pisárky, Husovice, Slatina, Komín),
                            ostatní věci jsou skladovány v Informační kanceláři na ul. Novobranské 18 v Brně.</p>
                        <p className='fontSizeSm'>
                            Informaci o možnostech vyzvednutí věci, příp. s uvedením kontaktu na příslušnou výpravnu Vám poskytne Informační kancelář, 
                            a to v provozní době (pondělí-pátek od 6:00 hod. do 19:00 hod., v sobotu od 8:00 hod. do 15:30 hod, přestávka 12:30-13:00 hod)
                        </p>
                        <ul>
                            <li className='fontSizeXs'>telefonicky: na čísle 543 174 317 / provolba 2</li>
                            <li className='fontSizeXs'>e-mailem: dpmb@dpmb.cz</li>

                        </ul>
                        <p className='fontSizeSm'>
                            Při převzetí nalezené věci je nezbytné prokázat vlastnictví této věci, předložit průkaz totožnosti a svým podpisem stvrdit převzetí.
                        </p>
                        <p className='fontSizeSm'>
                            Věci, které byly odevzdány na referát podatelny Magistrátu města Brna jsou v níže uvedeném seznamu zvýrazněny <strong>žlutým podbarvením</strong>.
                        </p>
                        </div>
                        <div className={styles.title}>
                        <p className='fontSizeMd' align='center'>
                            Něco jste ztratili?   
                        </p>
                        </div>
                        <div >
                            <Table columns={this.columns} dataSource={data} className={styles.table}/>
                        </div>
                    </Col>
                </Row>

            </div>

        )
    }

}


const mapStateToProps = state => {
    return {
        trips: state.trips.trips,
    }
}
export default connect(mapStateToProps, {
}) (Ztraty);


