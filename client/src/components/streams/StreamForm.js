import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="content">
          <div className="header">{error}</div>
          </div> 
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}> 
        <label > {label} </label>
        <input style={{width:300}} className="ui fluid input" {...input} autoComplete='off' />
        <div style={{width:300}}>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error' style={{marginLeft:5}}
      >
          <Field name="title" component={this.renderInput} label='Title ' />
          <Field
          className="ui fluid input"
            name='description'
            component={this.renderInput}
            label='Description '
          />
          <button className='ui button primary'>
            Submit
          </button>
     
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
