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
                    <p>On illuusio, että laihtuminen on monimutkaista. Henkilöt, jotka ylläpitävät tätä myyttiä
                        haluavat usein myydä sinulle jotain. Laihtuminen on yksinkertaista: <span style={{fontWeight: "bold"}}>Jos kehosi saa enemmän kaloreita kuin se kuluttaa, painosi kasvaa.
                        Jos kehosi saa vähemmän kaloreita, painosi laskee.</span> Tämän takia on tärkeää arvioida päivittäinen kaloreiden kulutus eli Total Daily Energy Expenditure (TDEE).
                        Tällä sivulla olevan laskurin avulla voit arvioida oman päivittäisen energiantarpeesi. <br/><br/> Kalorien laskemisella pystyt laihtumaan jopa ilman kuntoilua. Yksi isoista ongelmakohdista ihmisillä on se, että he aliarvioivat kuinka paljon kaloreita he syövät
                        Esimerkiksi usein unohdetaan laskea mausteet tai kastikkeet. Ihmiset myös usein yliarvioivat aktiivisuustasonsa.
                        <br/><br/> <span className="weight-loss-list">Laihtuminen pähkinänkuoressa</span><br/>
                        1. <span style={{fontWeight: "bold"}}>Ota "ennen" mittaukset.</span><br/>Nämä voivat olla esim. paino ja kuvat edestä, sivusta ja takaa<br/>
                        2. <span style={{fontWeight: "bold"}}>Arvioi päivittäinen energiantarpeesi.</span><br/>Muista että tämä on vain arvio. Joudut muuttamaan tätä numeroa sitä mukaan, mitä laihdut.<br/>
                        3. <span style={{fontWeight: "bold"}}>Aseta päivittäinen kaloritavoite.</span><br/>Hyvä tapa aloittaa on ottaa tavoitteeksi noin 80-90 prosenttia päivittäisestä energiantarpeestasi. 
                        Liian pieni kaloritavoite voi aiheuttaa terveysongelmia.<br/>
                        4. <span style={{fontWeight: "bold"}}>Seuraa kalorinsaantia.</span><br/>Tähän kannattaa ottaa avuksi jokin sovellus, kuten <a href="https://www.yazio.com/en">Yazio</a>. 
                        Yaziolla voit skannata tuotteita, joka helpottaa kalorien seurantaa huomattavasti.<br/>
                        5. <span style={{fontWeight: "bold"}}>Seuraa edistystä tasaisin väliajoin.</span><br/>Paino kannattaa ottaa vähintään kerran viikossa, mieluiten tyhjällä vatsalla. Paino 
                        saattaa heilahdella päivittäin, joten älä huolehdi siitä liikaa, vaan seuraa edistystä ajan myötä.<br/>
                        6. <span style={{fontWeight: "bold"}}>Säädä ruokavalioa ajan mittaan.</span><br/>Koska laihtuessasi päivittäinen energiantarpeesi laskee, joudut myös muuttamaan päivittäistä kaloritavoitettasi.<br/>
                        7. <span style={{fontWeight: "bold"}}>Ota tauko max. 12 viikon välein.</span><br/>Tauko auttaa minimoimaan lihaskatoa. Tauko voi kestää 1-2 viikkoa. Tauon aikana lisää kalorinsaantia, jotta paino pysyy samana.<br/>
                        8. <span style={{fontWeight: "bold"}}>Oleta olevasi nälkäinen.</span><br/>Kun syöt vähemmän kuin mitä kehosi haluaa, tulet olemaan nälkäinen, usein. On mahdollista vähentää nälän tunnetta 
                        syömällä tietynlaisia ruokia, mutta nälkäisyys tulee olemaan yleistä. Siihen on vain totuttava.<br/>
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