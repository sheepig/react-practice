import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'

class CommentList extends Component {
	handleDeleteComment(index) {
		if (this.props.onDeleteComment) {
			this.props.onDeleteComment(index);
		}
	}
	render() {
		const comments = this.props.comments;
		return(
			<div>
				{ comments.map((comment, i) => 
					<Comment
						comment={comment}
						key={i}
						index={i}
						onDeleteComment={this.handleDeleteComment.bind(this)}
						/>
				) }
			</div>
		)
	}
}

CommentList.propTypes = {
	comment: PropTypes.object
}

export default CommentList