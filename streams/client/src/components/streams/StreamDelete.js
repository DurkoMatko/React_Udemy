import React from 'react';
import Modal from '../Modal';
import { fetchStreamAction, deleteStreamAction } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {

    renderActions(){
        const id  = this.props.match.params.id;

        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStreamAction(id)} className="ui primary button">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    componentDidMount(){
        this.props.fetchStreamAction(this.props.match.params.id);
    }

    render(){
        if (!this.props.stream) return <div>Loading..</div>;
        debugger;
        return (
            <Modal header ="Delete stream" userPrompt={`Are you sure you want to delete ${this.props.stream.title}?`} actions={this.renderActions()}/>
        );
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStreamAction: fetchStreamAction,
    deleteStreamAction: deleteStreamAction
})(StreamDelete)