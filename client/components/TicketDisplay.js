import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

import Tickets from './Tickets';

class TicketDisplay extends React.Component {
  constructor (props) {
    super(props);

  };

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
    tickets: store.reducer1.tickets
  };
};

export default connect(mapStateToProps)(TicketDisplay);
