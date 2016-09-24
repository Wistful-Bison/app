import * as types from '../actions/action-types';


// example action creator that returns an action for the dispatcher
export function loadTicketState(tickets) {
  return {
    // here is the type being imported in
    type: types.SET_NEW_TICKETS,
    // ES6 for users: users
    tickets
  };
}

export function loadSearchState(searchText) {
  return {
    // here is the type being imported in
    type: types.SET_NEW_SEARCHTEXT,
    // ES6 for users: users
    searchText
  };
}

export function loadFilteredTicketState(filteredTickets) {
  return {
    // here is the type being imported in
    type: types.SET_FILTERED_TICKETS,
    // ES6 for users: users
    filteredTickets
  };
}

export function loadCreateTicketState(createTicketToggled) {
  return {
    // here is the type being imported in
    type: types.TOGGLE_CREATE_TICKET,
    // ES6 for users: users
    createTicketToggled

  };
}
