import React from 'react';
import Converter from './Converter';
import '../styles/styles.scss';

// <essentially css ++ same syntax, more features (more syntax)
// .sass < white heavy, a lot like payton

/**
 * @function App
 * @return three types of converters 
 */

function App() {
    return (
        <div className='App'>
            <h1>Multi-Purpose Converter</h1>
            <Converter xLabel='Miles' yLabel='Kilometers' rate={1.61} />
            <Converter xLabel='Cups' yLabel='Fluid Ounces' rate={8} />
            <Converter xLabel='Inches' yLabel='Centimeters' rate={2.54} />
        </div>
    );
}

export default App;
