import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '爱旅游',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton
          onClick={() => Taro.redirectTo({ url: '/pages/auth/login' })}
          type='primary'
        >
          我要登录
        </AtButton>
      </View>
    );
  }
}
