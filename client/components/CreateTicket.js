import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

import { loadCreateTicketState } from '../actions/ticket-actions';
import NewTicketForm from './NewTicketForm';

class CreateTicket extends React.Component {
  constructor (props) {
    super(props)

  }

  // onClick, drop down a form to fill out all of the necessary info
  toggleNewTicketForm () {
    // dispatches the opposite boolean of createTicketToggle
    store.dispatch(loadCreateTicketState(!this.props.createTicketToggled))
  }

  render () {
    if (this.props.createTicketToggled) {
      return (
        <div>
          <button onClick={toggleNewTicketForm.bind(this)}>Create Ticket</button>
          <NewTicketForm />
        </div>
      )
    } else {
      return (
        <div>
          <button>Create Ticket</button>
        </div>
      )
    }
  }
};

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    createTicketToggled: store.reducer1.createTicketToggled
  };
};

export default connect(mapStateToProps)(CreateTicket);
