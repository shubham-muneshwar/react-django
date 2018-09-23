import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {renderInput} from '../../utils/redux-form-fields';
import {signup} from '../../actions/Authentication';

class Signup extends Component{

	formSubmit(formValue){
		console.log("formSubmit")
		console.log(formValue);
		this.props.signup(formValue,()=>{
			this.props.history.push('/');
		})
	}

	render(){
		const {handleSubmit} = this.props;
		const {signupError} = this.props.auth;
		return(
			<div id="LoginForm">
				<div id="logo"></div>
			  <div className="container">
				  <div className="login-form">
				    <div className="main-div">
				      <div className="panel">
				        <h2>New User</h2>
				      </div>
				      <form id="Login" onSubmit={handleSubmit(this.formSubmit.bind(this))}>
								<div>
									<Field component={renderInput} label="Email" name="email" type="Email" placeholder="Email Address"/>
									<Field component={renderInput} label="Username" name="username" type="text" placeholder="Username"/>
									<Field component={renderInput} label="Password" name="password" type="password" placeholder="Password"/>
									<Field component={renderInput} label="ConfirmPassword" name="ConfirmPassword" type="password" placeholder="Confirm Password"/>
									<div className="form-group">
										{signupError?(<div className="form-group"><span className="label label-error">{signupError}</span></div>):""}
										</div>
					        <button type="submit" className="btn btn-primary">Sign up</button>
								</div>
				      </form>
				    </div>
				    </div>
				  </div>
			  </div>
		);
	}
}

Signup = reduxForm({
	form:'SignupForm',
	fields:['email','username','password']
})(Signup);

Signup = withRouter(Signup);

function mapStateToProps(state){
	return{
		auth:state.auth
	}
}
export default connect(mapStateToProps,{signup})(Signup);
