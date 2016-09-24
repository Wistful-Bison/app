import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

import TicketDisplay from './TicketDisplay';
import Search from './Search';
import CreateTicket from './CreateTicket';

class MainLayoutContainer extends React.Component {
  constructor (props) {
    super(props)


  }

  render () {
    return (
      <div>
        Ticket Home
        <TicketDisplay />
        <Search />
        <CreateTicket />
      </div>
    )
  }
};

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.reducer1.tickets
  };
};

export default connect(mapStateToProps)(MainLayoutContainer);
