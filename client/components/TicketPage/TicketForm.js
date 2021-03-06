import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editTicketField, submitTicketEdit, clearTicketForModal, getTicketForModal, submitNewTicket, closeTicketArticleModal } from '../../actions';
import uuid from 'uuid';
import { browserHistory } from 'react-router';

class TicketFormContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(this.props.id !== 'create') {
      this.props.getTicketForModal(this.props.id);
    }
  }
  componentWillUnmount() {
    this.props.clearTicketForModal()
    this.props.closeTicketArticleModal()
  }

  submitForm(ticket) {
    if (this.props.id === 'create') {
      this.props.submitNewTicket(ticket)
        .then(data => browserHistory.push(`/tickets/${data.action.payload.id}`))
    } else {
      this.props.submitTicketEdit(ticket)
        .then(() => browserHistory.push('/tickets'))
    }
  }
  handleChange(e) {
    this.props.editTicketField(e.target.name, e.target.value)
  }

  render() {
    let title, issue, issuePreview, solution, customerId, product;
    return (
      <div className="ticket-page-form">
        <h2 className="title">{
          this.props.id === 'create' ?
            'Create ' : 'Edit '}
          your ticket</h2>
        <form action='/tickets' method='' onSubmit={(e) => {
          e.preventDefault();
          var selectedProduct = product.options[product.options.selectedIndex].value;
          var ticket = {
            title: title.value,
            issuePreview: issuePreview.value,
            issue: issue.value,
            solution: solution.value,
            product: selectedProduct,
            customerId: customerId.value,
          }
          if (this.props.id !== 'create') {
            ticket.id = this.props.ticket.id;
            ticket.authorId = this.props.authorId;
          }
          this.submitForm(ticket);
        }}>
          <label htmlFor='title' className="subtitle">Title</label>
          <input
            className='edit-modal-input'
            type='text'
            name='title'
            ref={node => {
              title=node;
            }}
            onChange={this.handleChange}
            value={this.props.ticket.title}/>
          <label htmlFor='issuePreview' className="subtitle">Summary</label>
          <input
            className='edit-modal-input'
            type='text'
            name='issuePreview'
            ref={node => {
              issuePreview=node;
            }}
            onChange={this.handleChange}
            value={this.props.ticket.issuePreview}/>
          <label htmlFor='issue' className="subtitle">Issue</label>
          <textarea
            className='edit-modal-textarea'
            type='text'
            name='issue'
            ref={node => {
              issue=node;
            }}
            onChange={this.handleChange}
            value={this.props.ticket.issue}/>
          <label htmlFor='solution' className="subtitle">Solution</label>
          <textarea
            className='edit-modal-textarea'
            type='text'
            name='solution'
            ref={node => {
              solution=node;
            }}
            onChange={this.handleChange}
            value={this.props.ticket.solution}/>
          <label
          className="subtitle"
          htmlFor='customerId'>Customer Id</label>
          <input
            className='edit-modal-input'
            type='text'
            name='customerId'
            ref={node => {
              customerId=node;
            }}
            onChange={this.handleChange}
            value={this.props.ticket.number}/>
        <label
          className="subtitle"
          htmlFor='product'>Product</label>
          <select name='product'
            ref={node=>product=node}>
            <option value={this.props.products[0]}>{this.props.products[0]}</option>
            <option value={this.props.products[1]}>{this.props.products[1]}</option>
            <option value={this.props.products[2]}>{this.props.products[2]}</option>
            <option value={this.props.products[3]}>{this.props.products[3]}</option>
          </select>
        <div className="button-right-float">
          <button
            className="ticket-edit-modal-submit"
            type='submit'>
            Submit { this.props.id === 'create' ? 'ticket' : 'edits' }
          </button>
          </div>
        </form>
      </div>
    )
  }
};



const mapStateToProps = (state) => ({
  ticket: state.ticketPage.ticket,
  authorId: state.userReducer.currentUser._id,
  products: ['camera','printer','computer','monitor'],
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  editTicketField,
  getTicketForModal,
  submitTicketEdit,
  submitNewTicket,
  clearTicketForModal,
  closeTicketArticleModal,
}, dispatch)

const TicketForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketFormContainer)

export default TicketForm;
