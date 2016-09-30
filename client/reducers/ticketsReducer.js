const initialState = {
  tickets: [],
  filteredTickets: [],
  searchText: '',
  createTicketToggled: false,
  ticketsPage: 1
};


const ticketsReducer = function(state = initialState, action) {
  console.log(action,'this action is coming in')
  switch(action.type) {
    // filteredTickets ------>

    // case 'SET_FILTERED_TICKETS_REJECTED':
    //   console.log('rejected')
    //   return {
    //     ...state,
    //     status: 'rejected'
    //   };
    // case 'SET_FILTERED_TICKETS_FULFILLED':
    //   console.log(action.payload, 'FULFILLED');
    //   return {
    //     filteredTickets: action.payload,
    //     status: 'fulfilled'
    //   };
    // case 'SET_FILTERED_TICKETS_PENDING':
    //   console.log('pending')
    //   return {
    //     ...state,
    //     status: 'pending'
    //   };

    // newTickets ------>

    case 'SET_NEW_TICKETS_REJECTED':
      console.log('rejected')
      return {
        ...state,
        status: 'rejected'
      };
    case 'SET_NEW_TICKETS_FULFILLED':
      console.log(action.payload, 'FULFILLED');
      return {
        tickets: action.payload.reverse(),
        filteredTickets: action.payload.reverse(),
        status: 'fulfilled'
      };
    case 'SET_NEW_TICKETS_PENDING':
      console.log('pending')
      return {
        ...state,
        status: 'pending'
      };

    case 'SET_NEW_SEARCHTEXT':
      return Object.assign({}, state, { searchText: action.searchText });

    case 'SET_FILTERED_TICKETS':
      return Object.assign({}, state, { filteredTickets: action.filteredTickets });

    case 'TOGGLE_CREATE_TICKET':
      return Object.assign({}, state, { createTicketToggled: action.createTicketToggled });

    default:
      return state
  }
};

export default ticketsReducer;
