import React from 'react';
import { Link } from 'react-router-dom';
import { fetchStreamsAction, deleteStreamAction } from '../../actions';
import { connect } from 'react-redux';

class StreamList extends React.Component {

    componentDidMount(){
        this.props.fetchStreamsAction();
    }

    deleteStream = (id) => {
        this.props.deleteStreamAction(id);
    }

    renderAdminButtons = (stream) => {
        if (stream.userId === this.props.userAuth.userId){
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            );
        }
    }

    renderCreateButton = () => {
        if (this.props.userAuth.isSignedIn){
            return (
                <div style={{ textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            );
        }
    }

    renderStreams = () => {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                   <i className="large middle aligned icon camera"></i> 
                   <Link to={`/streams/${stream.id}`} className="content">
                        {stream.title}
                   </Link>
                   <div className="description">
                        {stream.description}
                   </div>
                   {this.renderAdminButtons(stream)}
                </div>
            );
        });
    }

    render(){
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderStreams()}</div>
                {this.renderCreateButton()}
            </div>
        );
    }   
}


const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        userAuth: state.reducedAuth
    }
}

export default connect (mapStateToProps, {
    fetchStreamsAction: fetchStreamsAction,
    deleteStreamAction: deleteStreamAction
})(StreamList)