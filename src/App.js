import React, { Component } from 'react';
import { View}  from 'react-native';
import { Header, Button, CardSection, Card } from './components/common';
import InputCard  from './components/InputCard';





class App extends Component {

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Card>
          <InputCard />
        </Card>
      </View>

    );
  }
}
const styles = {
  viewFlex: {
    display: 'flex',
    alignItems: 'center'
  }
}

export default App;
