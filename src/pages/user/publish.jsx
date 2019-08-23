import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtFab } from 'taro-ui';

export default class Publish extends Component {
  config = {
    navigationBarTitleText: '发布',
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className='index'>我是发布页面</View>;
  }
}
