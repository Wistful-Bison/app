import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { bindActionCreators } from 'redux';


import * as ticketActionCreators from '../actions/ticket-actions';
// import { loadTicketState } from '../actions/ticket-actions';
// import { loadSearchState } from '../actions/ticket-actions';
// import { loadFilteredTicketState } from '../actions/ticket-actions';

class Search extends React.Component {
  constructor (props) {
    super(props)

  }


  setSearchToState (event) {
    console.log(event, "<=event");
    console.log(event.target.value, "<=event value");
    console.log(this.props.searchText, "<=SEARCHTEXT IN PROPS");
    // set searchText in state
    var filteredTickets = this.props.tickets.filter(function(ticket) {
      console.log(ticket, 'ticket');
      console.log(event.target.value, 'textValue');
      if (ticket.includes(event.target.value)) {
        return ticket;
      }
    });
    console.log(this.props.tickets, 'tickets in props');

    console.log(filteredTickets, 'filteredTickets');
    this.props.loadSearchState(event.target.value);
    this.props.loadFilteredTicketState(filteredTickets);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ticketActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
