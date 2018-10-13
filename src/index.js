import React from 'react';
import ReactDOM from 'react-dom';
import App from './CommentApp';
import './app.scss'

const render = (App) => {
	ReactDOM.render(
		<App/>,
		document.getElementById('app')
	)
}

render(App);