import React from "react";
import { Row, Col, Dropdown, Menu} from "antd";
import styles from './navigator.module.scss'
import {SearchOutlined} from '@ant-design/icons';
import Link from 'next/link'


const menuItems = [
    {name: 'Aktuality', link: ''},
    {name: 'Doprava', link: ''},
    {name: 'Jizdne', link: ''},
    {name: 'Sluzby', link: ''},
    {name: 'Kariera', link: ''},
    {name: 'O Nas', link: ''},
    {name: 'Kontakty', link: ''},
]


const menu = (
    <Menu>
        {menuItems.map(el => {
            return (
                <Menu.Item>
                    <Link href={el.link}>
                        <a className={styles.mobileMenuItem}>
                            {el.name}
                        </a>
                    </Link>
                </Menu.Item>
            )
        })}
    </Menu>
)


class Navigator extends React.Component {
    render() {
        return (
            <div className={styles.navigatorBody}>

                {/* Navigator for Large Screens */}
                <Row className={styles.navigator} align='left'>
                        {menuItems.map((el, idx) => {
                            return (
                                <Col
                                    xxl={2}
                                    xl={2}
                                    className={styles.navigatorItem}
                                    key={el.name}
                                    style={{borderRight: menuItems.length - 1 === idx ? 'none' : ''}}
                                >
                                    <Link href={el.link}>
                                        <a className={styles.navigatorLink}>
                                            {el.name}
                                        </a>
                                    </Link>
                                </Col>
                            )
                        })}
                        <Col lg={3} md={3} sm={5} xs={5} className={styles.navigatorRightItem + ' ' + styles.menuForMobilesCol} style={{borderRight: 'none'}}>
                            <Dropdown overlay={menu} placement='bottomLeft'>
                                <a className={styles.navigatorRightLink + ' ' + styles.menuForMobilesArrow}>
                                    Menu
                                </a>
                            </Dropdown>
                        </Col>
                        <Col xxl={{span: 2, offset: 6}} xl={{span: 2, offset: 4}} lg={{span: 2, offset: 17}} md={{span: 3, offset: 15}} sm={{span: 5, offset: 8}} xs={{span: 7, offset: 4}} className={styles.navigatorRightItem} style={{borderRight: 'none'}}>
                            <a className={styles.navigatorRightLink}>
                                <SearchOutlined />
                                &nbsp;
                                Search
                            </a>
                        </Col>
                        <Col xxl={2} xl={3} lg={2} md={3} sm={5} xs={7} className={styles.navigatorRightItem} style={{borderRight: 'none'}}>
                            <a className={styles.navigatorRightLink}>
                                CZ
                            </a>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default Navigator;