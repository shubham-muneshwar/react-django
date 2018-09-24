import React,{Component} from "react";
import $ from 'jquery';
import {viewPost} from '../../actions';
import {Link} from 'react-router-dom';

class Notes extends Component{

	renderPost(note){
		return(
			<Link className="notes-link" to={`/edit_note/${note.id}`}  key={note.id}>
				<div className="notes">
					<div className="notes-header">
						<div className="title-row">
					    <div className="title">{note.title}</div>
							<div className="icons">
								<i className="fa fa-external-link" aria-hidden="true"></i>
								<i className="fa fa-share-square-o" aria-hidden="true"></i>
								<i className="fa fa-trash" aria-hidden="true"></i>
							</div>
						</div>
						<div className="date-created">Today</div>
				  </div>
				  <div className="notes-content">
				    {note.content}
				  </div>
				</div>
			</Link>
		);
	}
	render(){
		const notes = this.props.notes;
		return (
			<div className="leftpane">
				<div className="leftpane-header">Notes</div>
				<div className="notes-count">14 Notes Found</div>
				<div className="columns">
					{notes.map(this.renderPost.bind(this))}
				</div>
			</div>
		)
	}
}

export default Notes;
