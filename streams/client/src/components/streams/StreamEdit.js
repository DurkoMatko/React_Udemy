import React from 'react';
import { fetchStreamAction, editStreamAction } from '../../actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {

    // I'm using react-router and every component needs to always ensure it has all the data is uses!
    // it's not guaranteed that some other component will set the state before getting here (user can e.g navigate here straigt with URL)
    componentDidMount(){
        this.props.fetchStreamAction(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStreamAction(this.props.match.params.id, formValues);
    }

    render(){
        if (!this.props.stream)return (<div>Loading..</div>);
        
        return (
            <div>
                <h3>Edit a stream</h3>
                <StreamForm 
                    initialValues={{title: this.props.stream.title, description: this.props.stream.description }}
                    onSubmit={this.onSubmit} ></StreamForm>
            </div>
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
    editStreamAction: editStreamAction
})(StreamEdit)