import React, { Component, Fragment } from 'react';
import axios from 'axios';

import ModeHeader from '../ModeHeader';
import ItemsContainer from '../../../../components/ItemsContainer';

import { withContext } from '../../../../context/Home';

class SelectPersons extends Component {
  state = {
    allUsers: [],
  };

  async componentDidMount() {
    console.log('did mount');
    const { toggleAppLoading } = this.props.contextActions;
    await toggleAppLoading(true);
    await this.getAllUsers();
    await toggleAppLoading(false);
  }

  getAllUsers = async () => {
    const { email } = this.props.contextState.userLogged;
    const request = await axios.get(`/users/${email}`);
    const allUsers = await request.data;
    this.setState({ allUsers });
  };

  render() {
    const { allUsers } = this.state;
    const {
      contextActions: { handleSelectPerson },
      contextState: { isAppLoading, selectedPersons },
    } = this.props;

    return (
      <Fragment>
        <ModeHeader mode='Je choisis' />
        <ItemsContainer
          isLoading={isAppLoading}
          items={allUsers}
          handleSelectItem={handleSelectPerson}
          selectedItems={selectedPersons}
        />
      </Fragment>
    );
  }
}

export default withContext(SelectPersons);
