import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
}

onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
};

    render() {

    if(!this.props.stream){
        return <div>Loading...</div>;
    }

    return(
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>

          <div className="row">

           <div className="column">
             <h3 style={{marginBottom:5,marginTop:10}}>Edit A Stream</h3>
           </div>

           <div className="column">
            <StreamForm
             initialValues={_.pick(this.props.stream, 'title', 'description')} 
             onSubmit={this.onSubmit}
            />
            </div>
            
            </div>
        
        </div>
    );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default 
connect(
    mapStateToProps,
    { fetchStream, editStream }
    )(StreamEdit);