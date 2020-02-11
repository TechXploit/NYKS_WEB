import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ButtonGradient from './commons/ButtonGradient'
import InputGradient from './commons/InputGradient'

export default function Layout() {

    return (
        <div>
            <p>
                These are Material Ui components , which are modifed but this text is not.
            </p>
            <ButtonGradient>
                Button
            </ButtonGradient>
            <InputGradient />
        </div>
    );
}
if (document.getElementById('app')) {
    ReactDOM.render(<Layout />, document.getElementById('app'));
}


