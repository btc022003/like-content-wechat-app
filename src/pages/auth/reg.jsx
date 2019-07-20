import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton, AtForm, AtInput } from 'taro-ui';

export default class Login extends Component {
  config = {
    navigationBarTitleText: '注册',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <AtForm>
          <AtInput
            name='userName'
            placeholder='请输入用户名'
            title='用户名'
            type='text'
          />
          <AtInput
            name='password'
            placeholder='请输入密码'
            title='密码'
            type='password'
          />
          <AtInput
            name='rePassword'
            placeholder='请再次输入密码'
            title='确认密码'
            type='password'
          />
          <AtButton type='primary'>注册</AtButton>
        </AtForm>
        <Text
          onClick={() => Taro.redirectTo({ url: '/pages/auth/login' })}
          className='link-reg-login'
        >
          已有账号, 我要登录
        </Text>
      </View>
    );
  }
}
