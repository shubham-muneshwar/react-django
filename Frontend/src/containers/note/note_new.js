import React,{Component,PropTypes} from "react";
import {Field,reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createPost} from "../../actions/index";
import {Link} from "react-router-dom";
import {renderInput, renderTextArea} from '../../utils/redux-form-fields';

class PostNew extends Component{
	onSubmit(formValue){
		this.props.createPost(formValue,()=>{
			 this.props.history.push("/");
		})
	}

	render(){
		const {fields:{title,content},handleSubmit} = this.props;
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<div className="note-detail-container">
					<div className="note-detail-top-row">
					 	<button className="btn btn-primary save-note" type="submit">Save</button>
					</div>
					<div className="note-title">
						<Field component={renderInput}
							label="Title"
							type = "text"
							name = "title"
							placeholder="Note Title"
							/>
					</div>
					<div className="note-content">
						<Field component={renderTextArea}
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

//redux form almost similar to connect 1st parameter is form object 2nd is mapStateToProps 3rd is mapDispatchToProps.
//we will use shorthand of mapDispatchToProps ,We could have written mapDispatchToProps function and then use bindActionCreators to map dispatch to props .but instead of doing all that we just pass the function as argument in reduxForm.
function mapStateToProps(state){
	return {
		newnote:state.newnote,
	}
}

export default connect(mapStateToProps, {createPost})(reduxForm({
	form:'PostForm',
	fields:['title','content'],
})(PostNew));
