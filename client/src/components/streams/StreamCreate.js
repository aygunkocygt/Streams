import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>

        <div className="row">
          <div className="column">
          <h3 style={{marginBottom:5,marginTop:10}}>Create A Stream</h3>
          </div>
          <div className="column">
          <StreamForm onSubmit={this.onSubmit} />
          </div>
        </div>

      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
