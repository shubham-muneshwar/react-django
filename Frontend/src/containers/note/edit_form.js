import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {Link,withRouter} from 'react-router-dom';
import {renderInput} from '../../utils/redux-form-fields';
import {editPost} from '../../actions';

import {deletePost} from '../../actions';
import {changeMode} from '../../actions';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


class EditForm extends Component{

	shareNote = (key) => {
    let link = ""
    let noteurl = window.location.origin + '/sharenote/test'
    if(key=="facebook"){
      link = `https://www.facebook.com/sharer/sharer.php?u=${noteurl}`
    }
    else if(key=="mail"){
      link = "mailto:?subject=I wanted you to see this site&body=Check out this site http://www.website.com."
    }
    else if(key=="twitter"){
      link = "http://twitter.com/share?text=text goes here&url=http://google.com&hashtags=hashtag1,hashtag2,hashtag3"
    }
    else if(key=="linkedin"){
      link = "https://www.linkedin.com/shareArticle?mini=true&url=http://developer.linkedin.com&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn"
    }
    window.open(link, "pop", "width=600, height=400, scrollbars=no");
  }

	confirmDelete(){
		const {data} = this.props.data;
		this.props.deletePost(data.id,()=>{
			window.location.reload();
		});
	}

	delete = () => {
    confirmAlert({
      title: 'Confirm delete',
      message: 'Are you sure to do delete this note?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.confirmDelete()
        },
        {
          label: 'No'
        }
      ]
    })
  };

	formSubmit(formValue){
		const {data} = this.props.data;
		console.log(data);
		this.props.editPost(formValue,data.id,()=>{
			this.props.history.push(`/edit_note/${data.id}`);
		});
	}
	componentDidMount() {
		const {data} = this.props.data;
		this.props.initialize({
			title:data.title,
			content:data.content
		});
	}
	render(){
		const {handleSubmit} = this.props;
		const {data} = this.props.data;
		return(
			<form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
				<div className="note-detail-container">
					<div className="note-detail-top-row">
					 	<button className="btn btn-primary save-note" type="submit">Save</button>
						<div className="icons pull-left">
							<i className="fa fa-trash" onClick={this.delete.bind(this)} aria-hidden="true"><a></a></i>
						</div>
						<div className="icons">
							<span className="text">Share: </span>
							<i className="fa fa-facebook" onClick={this.shareNote.bind(this, "facebook")} aria-hidden="true"><a></a></i>
		          <i className="fa fa-envelope-o" onClick={this.shareNote.bind(this, "mail")} aria-hidden="true"><a></a></i>
		          <i className="fa fa-twitter" onClick={this.shareNote.bind(this, "twitter")} aria-hidden="true"><a></a></i>
		          <i className="fa fa fa-linkedin" onClick={this.shareNote.bind(this, "linkedin")} aria-hidden="true"><a></a></i>
						</div>
					</div>
					<div className="note-title">
						<Field component={renderInput}
							label="Title"
							type = "text"
							name = "title"
						/>
					</div>
					<div className="note-content">
						<Field component={renderInput}
						label="Content"
						type = "text"
						name = "content"
						/>
					</div>
				</div>
		</form>
		);
	}
}

EditForm = withRouter(EditForm);
EditForm = reduxForm({
	form:'EditForm',
	fields:['title','content'],
})(EditForm);


export default connect(null,{editPost,deletePost,changeMode})(EditForm);
