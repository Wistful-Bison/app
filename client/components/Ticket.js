import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

const Ticket = ({ticket}) => (
  <div>
    {ticket} Issue With Blue Screen, Customer#1432, Product: IBM Printer
  </div>
);

export default Ticket;