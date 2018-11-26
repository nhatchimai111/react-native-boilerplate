import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { createStructuredSelector } from "reselect";

import { loadUsers } from "./actions";
import { userSelector } from "./selectors";

class Home extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    console.log("USERS", this.props.users);

    return (
      <View style={styles.container}>
        <Text>This is Home Screen</Text>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: userSelector()
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: data => {
      dispatch(loadUsers(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
