import React,{Component} from "react";
import {Link} from 'react-router-dom';

class Posts extends Component{
	renderPost(note){
		return(
			<div className="column col-6"  key={note.id}>
				<div className="card">
				  <div className="card-header">
				    <h4 className="card-subtitle">{note.title}</h4>
				  </div>
				  <div className="card-body">
				    {note.content}
				  </div>
				  <div className="card-footer">
				    <Link className="btn btn-primary" to={`/view_note/${note.id}`}>View</Link>
				  </div>
				</div>
			</div>
		);
	}
	render(){
		const notes = this.props.notes;
		//console.log(notes)
		return (
			<div className="columns">
				{notes.map(this.renderPost.bind(this))}
			</div>
		)
	}
}

export default Posts;