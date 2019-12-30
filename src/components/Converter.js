import React from 'react';
import '../styles/styles.scss';


/**
 * class represent converter
 * @constructor  props 
 * set state for x, y and rate fields 
 */

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: this.props.x ? this.props.x : '',
            y: this.props.y ? this.props.y : '',
            rate: this.props.rate ? this.props.rate : 1,
        };
    }
/**
 * this function round the decimal numbers 
 * @param {int} num 
 * @return rounded number to the nearest value 
 */
    roundIt(num) {
        return Math.round(num * 1000) / 1000;
    }

    /**
     * this function handles state 
     * @param {object} e 
     * @return  set empty/null if not object target value
     * @return  set value and roundvalue to  x or y  respectively 
     
     */

    handleChange(e) {
        if (!e.target.value) {
            this.setState({ x: '', y: '' });
            return;
        }

        let value = parseFloat(e.target.value);
        if (e.target.id === 'x')
            this.setState({
                x: value,
                y: this.roundIt(value * this.state.rate),
            });
        else if (e.target.id === 'y')
            this.setState({
                x: this.roundIt(value / this.state.rate),
                y: value,
            });
    }

    /**
     * render component converter , and all elemnts inside 
     * x & y labels
     * div element 
     * 
     */
    render() {
        let xLabel = this.props.xLabel ? this.props.xLabel : '1';
        let yLabel = this.props.yLabel || '1';
        return (
            <div className = "container">
            <div className='converter'>
                <h4 className='converter-heading'>
                    Converting {xLabel} to/from {yLabel}
                </h4>

                <label className='x-label'>
                    <input
                        type='number'
                        step='any'
                        id='x'
                        value={this.state.x}
                        onChange={this.handleChange.bind(this)}
                    />
                    {xLabel}
                </label>
                <span className='mid-label'> is equal to </span>
                <label className='y-label'>
                    <input
                        type='number'
                        step='any'
                        id='y'
                        value={this.state.y}
                        onChange={this.handleChange.bind(this)}
                    />

                    {yLabel}
                </label>
            </div>
            </div>
        );
    }
}

export default Converter;
