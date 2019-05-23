import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2',() => {
        window.gapi.client
        .init({
            clientId:
            '706023751751-ip685a9hpcduj3h3pr0pbbb6rr19bih6.apps.googleusercontent.com',
            scope: 'email'
        }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
}

onAuthChange = (isSignedIn) => {
    if(isSignedIn){
        this.props.signIn(this.auth.currentUser.get().getId());
    }
    else{
        this.props.signOut();
    }
};

onSignInClick = () => {
    this.auth.signIn();
};
 
onSignOutClick = () => {
    this.auth.signOut();
};


renderAuthButton(){
 if(this.props.isSignedIn === null){
   return null;
 }
else if (this.props.isSignedIn === true)
{ 
    return(
         <button onClick={this.onSignOutClick} className="ui red button">
         Sign Out
         </button>
     );
 }
 else{
    return(
        <button className="ui google plus button" onClick={this.onSignInClick}>
         <i aria-hidden className="google plus icon"/>
         Sign in
         </button>
     );
 }
}

    render(){
        return(<div>{this.renderAuthButton()}</div>);
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
    mapStateToProps,
    { signIn, signOut }
) (GoogleAuth);