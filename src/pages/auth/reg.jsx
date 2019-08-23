import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtMessage } from 'taro-ui';
import { reg } from '../../services/auth';
import { setToken } from '../../utils/tools';

export default class Login extends Component {
  config = {
    navigationBarTitleText: '注册',
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      repPassword: '',
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  userNameChangeHandle(val) {
    // console.log(event);
    this.setState({
      userName: val,
    });
  }

  passwordChangeHandle(val) {
    this.setState({
      password: val,
    });
  }

  repPasswordChangeHandle(val) {
    this.setState({
      repPassword: val,
    });
  }

  submitHandle() {
    if (this.state.userName == '' || this.state.password == '') {
      Taro.atMessage({
        message: '请输入用户名和密码',
        type: 'warning',
      });
      return;
    }

    if (this.state.password != this.state.repPassword) {
      Taro.atMessage({
        message: '两次输入的密码不一致',
        type: 'warning',
      });
      return;
    }
    reg({ user_name: this.state.userName, password: this.state.password }).then(
      res => {
        console.log(res);
        if (res.code == 'y') {
          setToken(res.info);
          Taro.showToast({
            title: res.msg,
            icon: 'success',
          });
          Taro.redirectTo({
            url: '/pages/index/index',
          });
        } else {
          Taro.showToast({
            title: res.info[0],
            icon: 'none',
          });
        }
      }
    );
  }

  render() {
    return (
      <View className='index'>
        <AtMessage />
        <AtForm onSubmit={this.submitHandle.bind(this)}>
          <AtInput
            name='userName'
            placeholder='请输入用户名'
            title='用户名'
            type='text'
            onChange={this.userNameChangeHandle.bind(this)}
          />
          <AtInput
            name='password'
            placeholder='请输入密码'
            title='密码'
            type='password'
            onChange={this.passwordChangeHandle.bind(this)}
          />
          <AtInput
            name='rePassword'
            placeholder='请再次输入密码'
            title='确认密码'
            type='password'
            onChange={this.repPasswordChangeHandle.bind(this)}
          />
          <AtButton type='primary' formType='submit'>
            注册
          </AtButton>
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
