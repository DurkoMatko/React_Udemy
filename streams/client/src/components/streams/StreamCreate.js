import React from 'react';
import { connect } from 'react-redux';
import { createStreamAction } from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStreamAction(formValues);
    }

    render(){
        return (
            <div>
                <h3>Create a stream</h3>
                <StreamForm onSubmit={this.onSubmit}></StreamForm>
            </div>
        );
    }    
}

export default connect (null, {
    createStreamAction: createStreamAction
})(StreamCreate)