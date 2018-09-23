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
	renderAuthMode(authenticated){
		if(authenticated){
			return(
				<header className="navbar">
					<section className="navbar-section">
						 <Link to="/" className="btn btn-link">Home</Link>
						 {authenticated?(<Link to="/create_note" className="btn btn-link">Create Post</Link>):""}
						 <a className="btn btn-link" onClick={this.logoutUser.bind(this)}>Logout</a>
					</section>
			</header>
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
				<div className="container">
					<div className="columns">
						<div className="column col-lg-12">
								{this.renderAuthMode(authenticated)}
						</div>
					</div>
				</div>
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
