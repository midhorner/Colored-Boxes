import React from 'react';
import './coloredboxes.css';

class ColorBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: this.getRandomColor()
        };
    }

    getRandomColor = () => {
        var color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        while(color.length < 6) {
            color = '0' + color;
        }
        return '#' + color;
    }

    clickaroo = () => {
        console.log(this.state.bgColor);
        this.setState({
            bgColor: this.getRandomColor()
        });
    }

    render() {
        return(
            <div
                onMouseEnter={this.clickaroo}
                style={{backgroundColor: this.state.bgColor}}
                className="block"
            />
        )
    }
}


export default ColorBlock;