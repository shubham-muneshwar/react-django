import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {Link,withRouter} from 'react-router-dom';
import {renderInput} from '../../utils/redux-form-fields';
import {editPost} from '../../actions';

class EditForm extends Component{
	formSubmit(formValue){
		const {data} = this.props.data;
		//console.log(data.id);
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
						<div className="icons">
							<i className="fa fa-external-link" aria-hidden="true"></i>
							<i className="fa fa-share-square-o" aria-hidden="true"></i>
							<i className="fa fa-trash" aria-hidden="true"></i>
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


export default connect(null,{editPost})(EditForm);
