// actions are the ONLY source of information for the store
//  - send them to the with store.dispatch()
// in the other files we have Action Creators(they create actions for the dispatcher)

// an example type
export const SET_NEW_TICKETS = 'SET_NEW_TICKETS';
export const SET_NEW_SEARCHTEXT = 'SET_NEW_SEARCHTEXT';
export const SET_FILTERED_TICKETS = 'SET_FILTERED_TICKETS';
export const TOGGLE_CREATE_TICKET = 'TOGGLE_CREATE_TICKET';
