import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { CardSection, Button, Card } from './common';

const Followers  = ({ followers, key }) => {
const { login, id } = followers


  return followers.map((follower, key) => {
      <Card key={key}>
        <Text>{follower.login}</Text>
      </Card>
  }
    // console.log(this.props);
    // return this.props.followerData.map((a,b) => {
    //   return (
    //     <CardSection style={styles.containerStyle} key={b}>
    //       <Text style={styles.fontStyle}>{a.login}</Text>
    //     </CardSection>
    //   )

    // })
    // return(

    // )

  );
}
const styles = {
  fontStyle: {
    fontSize: 10
  },
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  }
}


export default Followers;
