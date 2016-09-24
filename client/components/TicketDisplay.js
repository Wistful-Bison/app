import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { bindActionCreators } from 'redux';


import * as ticketActionCreators from '../actions/ticket-actions';
import Tickets from './Tickets';

class TicketDisplay extends React.Component {
  constructor (props) {
    super(props);

  };

  componentWillMount () {
    // set tickets in state
    this.props.loadTicketState(['ticket1', 'ticket2', 'ticket3']);
  }

  componentDidMount () {
    // set starting value of filteredTickets to equal tickets
    this.props.loadFilteredTicketState(['ticket1', 'ticket2', 'ticket3']);
  }

  render () {
    return (
      <div id='ticketWindow'>
      Ticket Window!
        <Tickets />
      </div>
    )
  };
}

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.reducer1.tickets,
    filteredTickets: store.reducer1.filteredTickets
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ticketActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDisplay);
