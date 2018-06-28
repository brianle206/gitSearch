import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, CardSection, Card } from './common';
import GithubCard from './GithubCard';

class InputCard extends Component{
  state = { user: '', userData: [] };
  send = async () => {
    const api = await fetch(
      `https://api.github.com/users/${this.state.user}`
    );
    console.log(api);
    const apiData = await api.json();
    this.setState({ userData: [...this.state.userData, apiData] });
  }
  render() {
    return (
      <View>
        <CardSection>
          <TextInput
            autoCapitalize = 'none'
            style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(user) => this.setState({user})}
            value={this.state.user}
          />
          <Button onPress={this.send}>
            Button
          </Button>
        </CardSection>
        <GithubCard key={this.state.user} gitData={this.state.userData} />
      </View>
    )
  }
}

export default InputCard;
