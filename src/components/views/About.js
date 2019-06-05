import React, { Component, PureComponent } from 'react';
import { Button } from 'reactstrap';
import book from "./images.jpeg";

import { Container, Row, Col } from 'reactstrap';



class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }

    }

    addition = () => {
        this.setState({ total: this.state.total + 1 })
    }

    deletion = () => {
        this.setState({ total: this.state.total - 1 })
    }


    render() {

        const custom = {
        }

        return (

            <div>

                <img src={book} alt="book" width="50" height="50" />
                <Button color="primary" onClick={this.addition}> + Add</Button>
                <Button color="primary" onClick={this.deletion}> - Remove</Button>
                <p>Total:{this.state.total}</p>
                <hr />

            </div>

        )

    }
}

export default About