import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

import { loadTicketState } from '../actions/ticket-actions';
import { loadSearchState } from '../actions/ticket-actions';
import { loadFilteredTicketState } from '../actions/ticket-actions';

class Search extends React.Component {
  constructor (props) {
    super(props)

  }

  componentDidMount () {
    // set tickets in state
    store.dispatch(loadTicketState(['ticket1', 'ticket2', 'ticket3']));
    
  }

  setSearchToState (event) {
    console.log(event, "<=event");
    console.log(event.target.value, "<=event value");
    console.log(this.props.searchText, "<=SEARCHTEXT IN PROPS");
    // set searchText in state
    var filteredTickets = this.props.tickets.filter(function(ticket) {
      if (ticket.includes(event.target.value)) {
        return ticket;
      }
    });
    console.log(this.props.tickets, 'tickets in props');

    console.log(filteredTickets, 'filteredTickets');
    store.dispatch(loadSearchState(event.target.value));
    store.dispatch(loadFilteredTicketState(filteredTickets));
  }

// onChange
  render () {
    return (
      <div>
        <input id="searchBar" onChange={this.setSearchToState.bind(this)} type="text" placeholder="Search Tickets..." />
      </div>
    )
  }
};

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.reducer1.tickets,
    searchText: store.reducer1.searchText,
    filteredTickets: store.reducer1.filteredTickets
  };
};

export default connect(mapStateToProps)(Search);
