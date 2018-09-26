import React,{Component} from "react";
import $ from 'jquery';
import {viewPost} from '../../actions';
import {Link} from 'react-router-dom';
import moment from 'moment';

class Notes extends Component{

	renderPost(note){
		let time = moment(note.published).format("MMM Do YY");
		if(moment(note.published).isSame(moment(), 'day')) time = moment(note.published).fromNow();
		return(
			<Link className="notes-link" to={`/edit_note/${note.id}`}  key={note.id}>
				<div className="notes">
					<div className="notes-header">
						<div className="title-row">
					    <div className="title">{note.title}</div>
						</div>
						<div className="date-created">{time}</div>
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
		const notesCount = notes.length
		return (
			<div className="leftpane">
				<div className="leftpane-header">Notes</div>
				<div className="notes-count">{notesCount} Notes Found</div>
				{(notesCount == 0)?(<div>No Notes</div>):(<div/>)}
				<div className="columns">
					{notes.map(this.renderPost.bind(this))}
				</div>
			</div>
		)
	}
}

export default Notes;
