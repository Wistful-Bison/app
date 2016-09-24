import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  tickets: [],
  filteredTickets: [],
  searchText: '',
  createTicketToggled: false
};

// in my mind, this is kind of like middleware, where
// the suggested stateChange is passed through the combinedReducers,
// added/updated to the previous state, and then added to
//  a completely new, 'reduced' state

const reducer1 = function(state = initialState, action) {

  switch(action.type) {

    case types.SET_NEW_TICKETS:
      return Object.assign({}, state, { tickets: action.tickets });

    case types.SET_NEW_SEARCHTEXT:
      return Object.assign({}, state, { searchText: action.searchText });

    case types.SET_FILTERED_TICKETS:
      return Object.assign({}, state, { filteredTickets: action.filteredTickets });

    case types.TOGGLE_CREATE_TICKET:
      return Object.assign({}, state, { createTicketToggled: action.createTicketToggled });
  }


  return state;
};

export default reducer1;
