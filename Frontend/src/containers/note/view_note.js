import React,{Component} from 'react';
import {connect} from 'react-redux';
import {viewPost} from '../../actions';

import Loading from "../../components/loading";
import PostDetail from "./notedetail";

class ViewPost extends Component{
	componentWillMount() {
		const {id} = this.props.match.params;
		this.props.viewPost(id);
	}
	render(){
		const {isFetching,isFetched} = this.props.note;
		return(
			<div className="container">
				{isFetching?<Loading/>:(isFetched?<PostDetail data={this.props}/>:<Loading/>)}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		note:state.note
	}
}

export default connect(mapStateToProps,{viewPost})(ViewPost);
