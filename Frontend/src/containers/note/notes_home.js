import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getApplications} from "../../actions";

//contianers
import Notes from "./notes";
//dumb components
import Loading from "../../components/loading";
import Err from "../../components/error";

class NotesHome extends Component{
	componentDidMount() {
		this.props.getApplications();
	}
	render(){
		const isFetching = this.props.applications.isFetching;
		const isFetched = this.props.applications.isFetched;
		return(
			<div className="container">
				<div>No Notes</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		applications:state.applications,
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({getApplications},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(NotesHome);
