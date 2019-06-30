import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut} from '../actions'

class GoogleAuth extends React.Component{
    state = { isSignedIn: null };

    onAuthChange = (isSignedIn) => {  // isSignedIn is parameter passed from google API
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    renderAuthButton(){
        /*if (this.props.isSignedIn === null) {
            return null;
        } else */if (this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon">Sign out</i>
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon">Sign in</i>
                </button>
            );
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "61957993374-81fvfn48ke6hjh4rsqfssg43fvs8v0ue.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());    //to pass initial state to redux
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.reducedAuth.isSignedIn}
}

export default connect(mapStateToProps, {
    signIn: signIn,
    signOut: signOut,
})(GoogleAuth);