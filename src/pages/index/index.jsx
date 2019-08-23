import Taro, { Component } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components';
import { AtFab, AtGrid } from 'taro-ui';
import './index.scss';
import { isLogined } from '../../utils/tools';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '爱旅游',
  };

  constructor(props) {
    super(props);
    this.state = {
      images: [
        { id: 1, url: 'https://s2.ax1x.com/2019/07/21/e92cwj.jpg' },
        { id: 2, url: 'https://s2.ax1x.com/2019/07/21/e92sOg.jpg' },
        { id: 3, url: 'https://s2.ax1x.com/2019/07/21/e926mQ.jpg' },
      ],
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  publishHandle() {
    if (isLogined()) {
      Taro.redirectTo({ url: '/pages/user/publish' });
    } else {
      Taro.redirectTo({ url: '/pages/auth/login' });
    }
  }

  render() {
    const { images } = this.state;
    return (
      <View className='index'>
        <AtFab onClick={this.publishHandle.bind(this)}>发布</AtFab>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          {images.map(image => (
            <SwiperItem key={image.id}>
              <Image className='swiper-img' src={image.url} />
            </SwiperItem>
          ))}
        </Swiper>
        <AtGrid
          data={[
            {
              image:
                'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '攻略',
            },
            {
              image:
                'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '游记',
            },
            {
              image:
                'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '优惠',
            },
          ]}
        />
      </View>
    );
  }
}
