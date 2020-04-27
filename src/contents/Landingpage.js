import React from "react";
import { Component } from "react";

class Landingpage extends Component {

    render() {
        return(
            <div className="condiv landing" id="home">
                <h1>Tervetuloa Kotitreenaajan Käsikirjaan! </h1>
                <p>Käsikirjan tarkoituksena on tarjota tietoa ja ideoita kaikille kuntoilusta kiinnostuneille
                    taitotasosta riippumatta. Sivulta löydät erilaisia treeniohjelmia. 
                    Suuri osan sivun informaatiosta on otettu <a href="https://thefitness.wiki/">Fitness Wiki -sivustolta</a>, joka on 
                    Redditin <a href="https://www.reddit.com/r/Fitness/">r/fitness</a> -redditin virallinen wiki. Käsikirjan tarkoituksena on 
                    kertoa yksinkertaistetusti, kuinka kehittää itseäsi fyysisesti.
                </p>
            </div>

        )
    }
}

export default Landingpage;