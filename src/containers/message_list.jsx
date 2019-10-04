import React, { Component } from 'react';
import { bindActionCreators }from 'redux';
import { connect } from 'react-redux';

import { fetchMessages} from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <div className="messages">
        {
          this.props.messages.map((message) => {
            return <Message key={message.id} message={message} />;
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
