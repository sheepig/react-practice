import React, { Component } from 'react';

class CommentInput extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			content: ''
		}
	}
	handleUsernameChange(e) {
		this.setState({
			username: e.target.value
		})
	}
	_saveUsername(username) {
		localStorage.setItem('username', username);
	}
	_loadUsername() {
		const username = localStorage.getItem('username');
		if (username) {
			this.setState({ username });
		}
	}
	handleUsernameBlur(e) {
		this._saveUsername(e.target.value);
	}
	handleCommentChange(e) {
		this.setState({
			content: e.target.value
		})
	}
	handleSubmit() {
		if (this.props.onSubmit) {
			const { username, content } = this.state;
			let createTime = Date.now();
			this.props.onSubmit({ username, content, createTime });
		}
		this.setState({
			content: ''
		})
	}
	componentWillMount() {
		this._loadUsername();
	}
	componentDidMount() {
		this.textarea.focus();
	}
	render() {
		return(
			<div className="comment-input">
				<div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
							value={this.state.username}
							onChange={this.handleUsernameChange.bind(this)}
							onBlur={this.handleUsernameBlur.bind(this)}
						/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
						<textarea 
							value={this.state.content}
							onChange={this.handleCommentChange.bind(this)}
							ref={ (textarea) => this.textarea = textarea }
						/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
			</div>
		)
	}
}

export default CommentInput