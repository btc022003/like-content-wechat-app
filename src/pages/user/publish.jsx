import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import {
  AtButton,
  AtForm,
  AtInput,
  AtFab,
  AtTextarea,
  AtImagePicker,
  AtMessage,
} from 'taro-ui';
import { serverUrl } from '../../utils/config';
import { publish } from '../../services/articles';

export default class Publish extends Component {
  config = {
    navigationBarTitleText: '发布',
  };

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      title: '',
      descriptions: '',
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  titleChangeHandle(val) {
    this.setState({
      title: val,
    });
  }

  descriptionChangeHandle(event) {
    this.setState({
      descriptions: event.detail.value,
    });
  }

  filesChange(files) {
    files.forEach((file, index) => {
      if (file.file) {
        Taro.uploadFile({
          url: serverUrl + '/api/v1/common/upload_files',
          name: 'files[]', // 服务器接口提供的
          filePath: file.url,
          formData: file.file,
        })
          .then(res => {
            console.log(res);
            this.state.files[index].url = serverUrl + JSON.parse(res.data).info;
            delete this.state.files[index].file;
            this.setState({
              files: this.state.files,
            });
          })
          .catch(err => console.log(err));
      }
    });
    this.setState({
      files,
    });
  }

  onSubmit() {
    if (this.state.title == '') {
      Taro.atMessage({
        message: '标题不能为空',
        type: 'warning',
      });
      return;
    }
    let content = '';
    this.state.files.forEach(file => {
      content += `<p><img src="${file.url.replace(serverUrl, '')}"/></p>`;
    });
    let coverImg = '';
    if (this.state.files.length > 0) {
      coverImg = this.state.files[0].url.replace(serverUrl, '');
    }
    const data = {
      title: this.state.title,
      descriptions: this.state.descriptions,
      content,
      cover_img: coverImg,
    };
    console.log(data);
    publish(data)
      .then(res => {
        if (res.code == 'y') {
          Taro.showToast({
            title: '发布成功',
          });
          Taro.redirectTo('/pages/index/index');
        } else {
          Taro.showToast({
            title: res.info[0],
            icon: 'none',
          });
        }
      })
      .catch(err => {
        console.log(err);
        Taro.showToast({
          title: res.msg,
          icon: 'none',
        });
      });
  }

  render() {
    const { files } = this.state;
    return (
      <View className='index'>
        <AtMessage />
        <AtForm onSubmit={this.onSubmit.bind(this)}>
          <AtInput
            placeholder='请输入标题'
            title='标题'
            onChange={this.titleChangeHandle.bind(this)}
          />
          <AtTextarea
            placeholder='请输入简介内容'
            title='内容'
            onChange={this.descriptionChangeHandle.bind(this)}
          />
          <AtImagePicker files={files} onChange={this.filesChange.bind(this)} />
          <AtButton type='primary' formType='submit'>
            提交
          </AtButton>
        </AtForm>
      </View>
    );
  }
}
