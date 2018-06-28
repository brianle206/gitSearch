import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { CardSection, Button, Card } from './common';
import axios from 'axios';
import Followers from './Followers';

class GithubCard extends Component {
  state = { follower: [] };

  send = async () => {
    const api = await fetch(
      `${this.props.gitData[0].followers_url}`
    );
    console.log(api);
    const apiData = await api.json();
    this.setState({ follower: [...this.state.follower, apiData]  });
  }
  renderFollowers() {
    return this.state.follower.map(follower =>
      <Followers key={follower.id} followers={follower} />
    );
  }
  render(){
    console.log(this.state);
    return this.props.gitData.map((a,b) => {
      return (
        <Card key={b}>
          <CardSection>
            <Image key={b} style={styles.imageStyle} source={{ uri: a.avatar_url }} />
            <Text>{a.login}</Text>
              <Button onPress={() => Linking.openURL(a.html_url)}>
                Visit Page
              </Button>
              <Button onPress={this.send}>
                Followers
              </Button>
              {this.renderFollowers()}
          </CardSection>
        </Card>

      )

    });
  };

}
const styles = {
  imageStyle: {
    height: 50,
    width: 50
  }
}

export default GithubCard;
