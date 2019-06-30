import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component{
    render(){
        if (!this.props.user) return null;

        return (
            <div className="header">{this.props.user.username}</div>
        )
    };
}

const mapStateToProps = (state, ownProps) => {
    const selectedUser = state.users.find((u) => u.id === ownProps.userId);
    return {user: selectedUser}
}

export default connect(mapStateToProps, {
})(UserHeader);