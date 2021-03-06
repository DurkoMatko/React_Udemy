import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history'

class Modal extends React.Component {
    render(){
        debugger;
        return ReactDOM.createPortal( 
            <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
                <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">{this.props.header}</div>
                    <div className="content">
                        {this.props.userPrompt}
                    </div>
                    <div className="actions">
                        {this.props.actions}
                    </div>
                </div>
            </div>,
        document.querySelector("#modal"));
    }
};

export default Modal;