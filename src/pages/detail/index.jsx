import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtFab } from 'taro-ui';

export default class Login extends Component {
  config = {
    navigationBarTitleText: '详情',
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>{this.$router.params.id}</Text>
      </View>
    );
  }
}
