import React from "react";
import {connect} from "react-redux";
import styles from './faqs.module.sass';
import {Row, Col} from 'antd';
import Link from "next/link";


const items = [
    {name: 'Co je SMS jizdenka?', link: '/faq#2',},
    {name: 'Zapomenutá předplatní jízdenka', link: '/faq#3'},
    {name: 'Lorem ipsum dolor sit amen', link: '/Lorem-ipsum-dolor-sit-amen',}
]

class FAQIntegrated extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    render() {
        return (
            <div >
                <p>
                    <Link href={'/faq'}>
                        <span className={'fontSizeMd ' + styles.header} >
                            Nejčastější dotazy:
                        </span>
                    </Link>
                </p>
                {items.map(el => {
                    return (
                        <p key={el.name}>
                            <Link href={el.link}>
                                <span className={'fontSizeSm ' + styles.header} >
                                    {el.name}
                                </span>
                            </Link>
                        </p>
                    )
                })}

            </div>


        )
    }

}


const mapStateToProps = state => {
    return {
    }
}
export default connect(mapStateToProps, {
}) (FAQIntegrated);


