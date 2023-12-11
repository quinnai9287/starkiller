import { defineStore } from 'pinia'

const projects = [
  {
    key: 'dmktz',
    comp: 'tg3d/dmktz',
    name: 'DMKTZ.io',
    sns: [
      {
        type: 'official',
        url: 'https://dmktz.io',
        elIcon: 'Share',
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/dmktz.official/',
        iconComp: 'IconsIns',
      },
    ],
    tags: [
      '#Fashion Design',
      '#3D Wearables',
      '#NFT',
      '#blockchain',
      '#ethereum',
      '#Metaverse',
      '#Design your own garment',
      '#body scan',
      '#3D avatar',
      '#3D body scan',
      '#3D body measurement',
    ],
    des: [
      {
        txt: 'Project belongs to TG3D Studio.',
      },
      {
        txt: '2023 Jan. ~ 2023 Aug.',
      },
    ],
  },
  {
    key: 'fitzon',
    comp: 'tg3d/fitzon',
    name: 'FITZON.io',
    href: 'https://fitzon.io',
    tags: ['#fashion', '#GameFi', '#NFT'],
    des: [
      {
        txt: 'Project belongs to TG3D Studio.',
      },
      {
        txt: '2023 Jan. ~ 2023 Aug.',
      },
    ],
  },
  {
    key: 'cloudzet',
    comp: 'tg3d/cloudzet',
    name: 'Cloudzet',
    tags: ['#fashion', '#bodyscan'],
    des: [
      {
        txt: 'Project belongs to TG3D Studio.',
      },
      {
        txt: 'Available on App Store and Google Play.',
      },
      {
        txt: '2023 Jan. ~ 2023 Aug.',
      },
    ],
  },
]

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 12345, name: 'Eduardo', projects }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})