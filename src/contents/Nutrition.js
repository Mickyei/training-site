import React from "react";
import { Component } from "react";
import Calculator from "../components/Calculator";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Nutrition extends Component {

  

    render() {
        return (

            <div className="condiv nutrition" id="laihtuminen">
                <Row>
                    <Col>
                    <p>On illuusio, että laihtuminen on monimutkaista. Henkilöt, jotka ylläpitävät tätä myyttiä,
                        usein haluavat myydä sinulle jotain. Laihtuminen on yksinkertaista: <span style={{fontWeight: "bold"}}>Jos kehosi saa enemmän kaloreita kuin se kuluttaa, painosi kasvaa.
                        Jos kehosi saa vähemmän kaloreita, painosi laskee.</span> Tämän takia on tärkeää arvioida päivittäinen kaloreiden kulutus eli Total Daily Energy Expenditure (TDEE).
                        Tällä sivulla olevan laskurin avulla voit arvioida oman päivittäisen energiantarpeesi. <br/><br/> Kalorien laskemisella pystyt laihtumaan jopa ilman kuntoilua. Yksi isoista ongelmakohdista ihmisillä on se, että he aliarvioivat kuinka paljon kaloreita he syövät
                        Esimerkiksi usein unohdetaan laskea mausteet tai kastikkeet.
                    </p>
                    </Col>
                    <Col>
                    <Calculator/>
                    </Col>
                </Row>
               
            </div>
        )
    }
}

export default Nutrition;