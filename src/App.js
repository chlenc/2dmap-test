import React, {Component} from 'react';
import './App.css';
import ranges from './ranges'

class App extends Component {


    render() {
        return (
            <div className="App">
                <img src={require('./image.jpg')} alt={'test'}/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1279.5px" height="853.5px">
                    {ranges["testHotel"].map(range =>
                        <path
                            fillRule="evenodd"
                            opacity="0.2"
                            onClick={() => alert(`floor: ${range.floor} ${range.side}`)}
                            fill="rgb(0, 0, 204)"
                            d={range.mapContent}
                        />)}
                </svg>
            </div>
        );
    }
}

export default App;
