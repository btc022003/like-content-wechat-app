import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton, AtForm, AtInput, AtFab } from 'taro-ui';
import { one } from '../../services/articles';
import WxParse from '../../components/wxParse/wxParse'; // 富文本显示插件
import './index.scss';
export default class Login extends Component {
  config = {
    navigationBarTitleText: '详情',
  };

  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }

  componentWillMount() {}

  componentDidMount() {
    one(this.$router.params.id).then(res => {
      console.log(res);
      this.setState({
        article: res.info,
      });
      const content = res.info.content;
      WxParse.wxParse('content', 'html', content, this.$scope, 5); // 设置富文本显示时绑定的数据
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { article } = this.state;
    return (
      <View className='index'>
        <Text className='title'>{article.title}</Text>
        <Text className='desc'>{article.descriptions}</Text>
        <import src='../../components/wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData: content.nodes}}' />
      </View>
    );
  }
}
