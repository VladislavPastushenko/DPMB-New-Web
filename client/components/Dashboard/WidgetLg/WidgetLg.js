import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./widgetLg.module.sass"
import { ThreeSixty } from "@material-ui/icons";

export default class WidgetLg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={styles.widgetLg}>
                <h3 className={styles.widgetLgTitle}>Latest transactions</h3>
                <table className={styles.widgetLgTable}>
                    <tr className={styles.widgetLgTr}>
                    <th className={styles.widgetLgTh}>Customer</th>
                    <th className={styles.widgetLgTh}>Date</th>
                    <th className={styles.widgetLgTh}>Seats</th>
                    <th className={styles.widgetLgTh}>Paid</th>
                    <th className={styles.widgetLgTh}>Status</th>

                    </tr>
                    <tr className={styles.widgetLgTr}>
                    <td className={styles.widgetLgUser}>
                        <img
                        src="/user.png"
                        alt=""
                        className={styles.widgetLgImg}
                        />
                        <span className={styles.widgetLgName}>Name Surname</span>
                    </td>
                    <td className={styles.widgetLgDate}>Date</td>
                    <td className={styles.widgetLgAmount}>seatNumber</td>
                    <td className={styles.widgetLgAmount}>50kc</td>
                    <td className={styles.widgetLgStatus}>
                        <button className={styles.widgetLgButtonApproved}>Approved</button>
                    </td>
                    </tr>
                    <tr className={styles.widgetLgTr}>
                    <td className={styles.widgetLgUser}>
                        <img
                        src="/user.png"
                        alt=""
                        className={styles.widgetLgImg}
                        />
                        <span className={styles.widgetLgName}>Name Surname</span>
                    </td>
                    <td className={styles.widgetLgDate}>Date</td>
                    <td className={styles.widgetLgAmount}>seatNumber</td>
                    <td className={styles.widgetLgAmount}>-</td>

                    <td className={styles.widgetLgStatus}>
                        <button className={styles.widgetLgButtonDeclined}>Declined</button>
                    </td>
                    </tr>
                    <tr className={styles.widgetLgTr}>
                    <td className={styles.widgetLgUser}>
                        <img
                        src="/user.png"
                        alt=""
                        className={styles.widgetLgImg}
                        />
                        <span className={styles.widgetLgName}>Name Surname</span>
                    </td>
                    <td className={styles.widgetLgDate}>Date</td>
                    <td className={styles.widgetLgAmount}>seatNumber</td>
                    <td className={styles.widgetLgAmount}>-</td>

                    <td className={styles.widgetLgStatus}>
                        <button className={styles.widgetLgButtonReserved}>Reserved</button>
                    </td>
                    </tr>
                    <tr className={styles.widgetLgTr}>
                    <td className={styles.widgetLgUser}>
                        <img
                        src="/user.png"
                        alt=""
                        className={styles.widgetLgImg}
                        />
                        <span className={styles.widgetLgName}>Name Surname</span>
                    </td>
                    <td className={styles.widgetLgDate}>Date</td>
                    <td className={styles.widgetLgAmount}>seatNumber</td>
                    <td className={styles.widgetLgAmount}>-</td>

                    <td className={styles.widgetLgStatus}>
                        <button className={styles.widgetLgButtonDeclined}>Declined</button>
                    </td>
                    </tr>
                    <tr className={styles.widgetLgTr}>
                    <td className={styles.widgetLgUser}>
                        <img
                        src="/user.png"
                        alt=""
                        className={styles.widgetLgImg}
                        />
                        <span className={styles.widgetLgName}>Name Surname</span>
                    </td>
                    <td className={styles.widgetLgDate}>Date</td>
                    <td className={styles.widgetLgAmount}>seatNumber</td>
                    <td className={styles.widgetLgAmount}>50kc</td>

                    <td className={styles.widgetLgStatus}>
                        <button className={styles.widgetLgButtonApproved}>Approved</button>
                    </td>
                    </tr>
                </table>
                </div>
        );
    }
}