import React from "react";
import { Component } from "react";


class Exercises extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises : {}
        }
    }

    async componentDidMount() {
        // GET request using fetch with async/await¨

        const headers = { 'Authorization': 'Token c958ca9bf4568d41319d830228597e878997ed73' }
        const response = await fetch(' https://wger.de/api/v2/exercise?status=2&language=2&limit=1000', { headers });
        const data = await response.json();
        console.log(data.results);
        this.setState({ exercises: data })
    }

    render() {
        return (

            <div className="condiv exercises" id="liikkeet">
                    <h2>Saga näytä pillu :DDDDDDDDDDDDDDDDDDDDD</h2>

            </div>
        )
    }
}

export default Exercises;