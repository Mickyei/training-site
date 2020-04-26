import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gender: 'male',
            weight: 75,
            height: 185,
            age: 25,
            exercise: 0,
            TDEE: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }



    handleSubmit(e) {
        e.preventDefault();
        const gender = document.getElementById("gender").value;
        const height = document.getElementById("height").value;
        const age = document.getElementById("age").value;
        const weight = document.getElementById("weight").value;
        const activity = document.getElementById("activity").value;

        let bmr = 0;

        if (gender === "male") {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;

        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        console.log();
        const res = Math.round(bmr * activity);

        this.setState({ TDEE: res });
    }

    render() {
        return (
            <div className="calculator">
                <Form onSubmit={this.handleSubmit}>

                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Sukupuoli:
                        </Form.Label>

                                <Form.Control as="select" id="gender" className="formInput">
                                    <option value="male" >Mies</option>
                                    <option value="female">Nainen</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Ikä:
                        </Form.Label>
                                <Form.Control type="number" id="age" min="1" max="120" className="formInput" defaultValue="25" />
                            </Form.Group>
                        </Col>
                    </Row>



                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Pituus:
                        </Form.Label>
                                <Form.Control type="number" id="height" min="1" max="300" className="formInput" defaultValue="185" />
                            </Form.Group>

                        </Col>

                        <Col>
                            <Form.Group>
                                <Form.Label>
                                    Paino:
                        </Form.Label>
                                <Form.Control type="number" id="weight" min="1" max="500" className="formInput" defaultValue="80" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group>
                        <Form.Label>
                            Aktiivisuus:
                        </Form.Label>

                        <Form.Control as="select" id="activity">
                            <option value="1.0" >Ei aktiivisuutta</option>
                            <option value="1.3">Kevyt työ, ei vapaa-ajan aktiivisuutta</option>
                            <option value="1.5">Kevyt työ, jonkin verran aktiivisuutta</option>
                            <option value="1.9">Kevyt työ ja kuntoliikuntaa (esim. tunnin lenkki päivässä)</option>
                            <option value="2.2">Päivittäinen kova liikunta</option>
                            <option value="2.5">Ammattiurheilija</option>
                        </Form.Control>
                    </Form.Group>


                    <Button type="submit" variant="success" size="lg" className="tdeeButton">Laske energiantarve</Button>
                </Form>

                <h2>Päivittäinen energiantarve (kcal): <span style={{color: "green"}}>{this.state.TDEE}</span></h2>
            </div>
        )
    }
}

export default Calculator;