import React, {Component} from 'react';
import Regiones from './Regiones';

class Callregion extends Component {
    render() {
        return (
            <Regiones Regiones={this.state.Regiones} />
        )
    }

    state = {
        Regiones: []
    };

    componentDidMount() {
        fetch('https://api.myjson.com/bins/1aqg1k')
            .then(res => res.json())
            .then((data) => {
                this.setState({ Regiones: data })
            })
            .catch(console.log)
    }
}

export default  Callregion