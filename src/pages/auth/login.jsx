import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtFab } from 'taro-ui';
import { login } from '../../services/auth';
import { setToken } from '../../utils/tools';

export default class Login extends Component {
  config = {
    navigationBarTitleText: '登录',
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

  userNameChangeHandle(value) {
    this.setState({
      userName: value,
    });
  }

  passwordChangeHandle(value) {
    this.setState({
      password: value,
    });
  }

  submitHandle() {
    console.log(this.state);
    login({
      user_name: this.state.userName,
      password: this.state.password,
    })
      .then(res => {
        if (res.code == 'y') {
          setToken(res.info);
          Taro.showToast({
            title: res.msg,
          });
          Taro.redirectTo({
            url: '/pages/index/index',
          });
        } else {
          Taro.showToast({
            title: res.msg,
            icon: 'none',
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { userName, password } = this.state;
    return (
      <View className='index'>
        <AtFab onClick={() => Taro.redirectTo({ url: '/pages/index/index' })}>
          首页
        </AtFab>
        <AtForm onSubmit={this.submitHandle.bind(this)}>
          <AtInput
            name='userName'
            placeholder='请输入用户名'
            value={userName}
            onChange={this.userNameChangeHandle.bind(this)}
            title='用户名'
            type='text'
          />
          <AtInput
            name='password'
            placeholder='请输入密码'
            value={password}
            onChange={this.passwordChangeHandle.bind(this)}
            title='密码'
            type='password'
          />
          <AtButton formType='submit' type='primary'>
            登录
          </AtButton>
        </AtForm>
        <Text
          onClick={() => Taro.redirectTo({ url: '/pages/auth/reg' })}
          className='link-reg-login'
        >
          没有账号, 我要注册
        </Text>
      </View>
    );
  }
}
