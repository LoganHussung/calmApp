import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import CheckBox from 'react-native-checkbox';
import NeedItemPage from './Need';

export default class NeedPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      needs: []
    }
  }

  componentDidMount() {
    this.getChecklist();
  }

  getChecklist() {
    AsyncStorage.getItem('needs').then((checked) => {
      if (checked == null) {
        this.setState({
          needs: [ false, false,false,false,false,false,false
          ]
        });
      } else {
        this.setState({
          needs: JSON.parse(checked)
        });
      }
    }).done()
  }

  whenChanged(id) {
    var newNeeds = this.state.needs.slice(0);
    newNeeds[id] = !newNeeds[id]
    AsyncStorage.setItem('needs', JSON.stringify(newNeeds)).then(()=>{
      this.setState({
        needs: newNeeds
      });
    })
  }

  render() {
    return (
      <View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{marginTop:20}} source={require('./Images/calmLogo.png')} />
        </View>
        <ScrollView>
          <NeedItemPage labelName='Photo ID' id="0" checked={this.state.needs[0]} whenChanged={this.whenChanged.bind(this)}/>
          <NeedItemPage labelName='Health Insurance Card' id="1" checked={this.state.needs[1]} whenChanged={this.whenChanged.bind(this)}/>
          <NeedItemPage labelName='Health History' id="2" checked={this.state.needs[2]} whenChanged={this.whenChanged.bind(this)}/>
          <NeedItemPage labelName='List of Prescriptions' id="3" checked={this.state.needs[3]} whenChanged={this.whenChanged.bind(this)}/>
          <NeedItemPage labelName='Cell Phone / Charger' id="4" checked={this.state.needs[4]} whenChanged={this.whenChanged.bind(this)}/>
          <NeedItemPage labelName='Primary Doctor Information' id="5" checked={this.state.needs[5]} whenChanged={this.whenChanged.bind(this)}/>
          <NeedItemPage labelName='Small Amount of Cash' id="6" checked={this.state.needs[6]} whenChanged={this.whenChanged.bind(this)}/>
        </ScrollView>
      </View>
    );
  }
}
