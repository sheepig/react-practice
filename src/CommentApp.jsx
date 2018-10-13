import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

class CommentApp extends Component {
	constructor() {
		super();
		this.state = {
			comments: []
		}
	}
	componentWillMount() {
		this._loadComment();
	}
	_loadComment() {
		let comments = localStorage.getItem('comments');
		if (comments) {
			comments = JSON.parse(comments);
			this.setState({ comments });
		}
	}
	_saveComments(comments) {
		localStorage.setItem('comments', JSON.stringify(comments));
	}
	handleSubmitComment(comment) {
		this.state.comments.push(comment);
		this.setState({
			comments: this.state.comments
		});
		this._saveComments(this.state.comments)
	}
	handleDeleteComment(index) {
		let comments = this.state.comments;
		comments.splice(index, 1);
		this.setState({ comments });
		this._saveComments(comments);
	}
	render() {
		return (
			<div className="wrapper">
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
				<CommentList
					comments={this.state.comments}
					onDeleteComment={ this.handleDeleteComment.bind(this) }
				/>
			</div>
		)
	}
}

export default CommentApp