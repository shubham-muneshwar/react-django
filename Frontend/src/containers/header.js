import React,{Component} from 'react';
import {Link,Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Applications from "./note/note_index";
import PostNew from "./note/note_new";
import ViewPost from './note/view_note';
import EditPost from './note/edit_note';
import Signup from './accounts/signup_form';
import Signin from './accounts/signin_form';

import requireAuth from './HOC/authenticate';

import {signout} from '../actions/Authentication';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
	logoutUser(){
		this.props.signout(()=>{
			this.props.history.push('/signin');
		})
	}
	renderAuthMode(authenticated, props){
		console.log()
		if(authenticated && ((props.location.pathname != '/signin') || (props.location.pathname != '/signup'))){
			return(
				<div className="nav-header">
				 <Link to="/" className="btn btn-link"><div id='nav-logo'></div></Link>
				 <Link to="/create_note" className="btn btn-link">Create Post</Link>
				 <button type="button" className="btn btn-primary btn-logout pull-right" onClick={this.logoutUser.bind(this)}>Sign out</button>
			</div>
			);
		}
		return(
			<div></div>
		);

	}
	render(){
		const {authenticated} = this.props;
		return(
			<div className="contianer">
				{this.renderAuthMode(authenticated, this.props)}
				<Route exact path="/" component={requireAuth(Applications)}/>
				<Route path = "/signup" component ={Signup}/>
				<Route path = "/signin" component ={Signin}/>
				<Route path = "/create_note" component= {requireAuth(PostNew)}/>
				<Route path = "/view_note/:id" component = {requireAuth(ViewPost)}/>
				<Route path = "/edit_note/:id" component = {requireAuth(EditPost)}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		authenticated:state.auth.authenticated
	}
}

export default withRouter(connect(mapStateToProps,{signout})(Header));
