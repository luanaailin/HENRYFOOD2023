import React, { Component } from "react";
import style from "./Footer.module.css";

class Footer extends Component {

    render() {
        return (
            <div className={style.footer}>
                <div className={style.infoLeft}>
                    <span>Proyecto Individual Henry <br />
                        por Luana Michelangeli <br />
                        luana.ailin.m@gmail.com<br />
                        Buenos Aires, Argentina
                    </span>
                </div>
            </div>
        )
    }
}

export default Footer;