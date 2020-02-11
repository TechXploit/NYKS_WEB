import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default function Example() {

    return (
        <div className={classes.root}>
            <h1>hii</h1>
        </div>
    );
}
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}


