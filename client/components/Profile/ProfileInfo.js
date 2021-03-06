import React from 'react';
import Cookies from 'js-cookie';

import userUtils from '../../utils/userUtils';
import ProfileModal from './ProfileModal';

import { toggleProfileModal } from '../../actions'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class ProfileInfoContainer extends React.Component {
  constructor (props) {
    super(props)

    this._date = 'Loading Date';
    this._time = 'Loading Time';
  }

  _convertTime (date) {
    var minutes = new Date(date).toString().slice(18, 21);
    var hours = new Date(date).toString().slice(16, 18);
    var AMPMhours = ((Number(hours) + 11) % 12 + 1);
    var suffix = Number(hours) >= 12 ? ' PM' : ' AM';
    return AMPMhours + minutes + suffix;
  }

  _convertDate (date) {
    return new Date(date).toString().slice(4, 15);
  }

  displayDate (date) {
    return this._convertTime(date) + ', ' + this._convertDate(date);
  }
  handleToggle() {
    return this.props.toggleProfileModal();
  }

  render () {

    return (
      <div>
        <p><strong>Name: </strong>{`${this.props.user.firstName} ${this.props.user.lastName}`}</p>
        <p><strong>Username: </strong>{`${this.props.user.username}`}</p>
        <p><strong>Bio: </strong>{`${this.props.user.bio}`}</p>
        <p><strong>Email: </strong>{`${this.props.user.email}`}</p>
        <p><strong>Phone Number: </strong>{`${this.props.user.phoneNumber}`}</p>
        <p><strong>Roles: </strong>{this.props.user.roles}</p>
        <p><strong>Account Created: </strong>{this.displayDate(this.props.user.dateSignedUp)}</p>
        <p><strong>Last Login: </strong>{this.displayDate(this.props.user.dateLastLogin)}</p>
        <p><strong>Profile Last Updated: </strong>{this.displayDate(this.props.user.dateProfileLastUpdated)}</p>
        <button onClick={this.handleToggle.bind(this)} className="edit-profile-button">Edit Profile</button>
        {this.props.hidden ? null : <ProfileModal userInfo={this.props.user} /> }
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleProfileModal,
},dispatch)

const mapStateToProps = state => ({
  hidden: state.userReducer.hidden
})

const ProfileInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfoContainer)

export default ProfileInfo
