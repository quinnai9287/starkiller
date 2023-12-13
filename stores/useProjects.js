import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        key: 'dmktz',
        label: 'DMKTZ',
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
            txt: 'Product belongs to TG3D Studio',
            url: 'https://tc.tg3ds.com/overview',
          },
          {
            txt: 'as in-house Front-end Developer'
          },
          {
            txt: '2023 Jan. ~ 2023 Aug.',
          },
        ],
        devTags: [
          'Web3 / Blockchain',
          'Web Platform',
          'B2B Online 3D Fashion Design Tool'
        ]
      },
      {
        key: 'fitzon',
        label: 'FITZON',
        comp: 'tg3d/fitzon',
        name: 'FITZON.io',
        sns: [
          {
            type: 'official',
            url: 'https://fitzon.io',
            elIcon: 'Share',
          },
        ],
        tags: ['#Fitness','#Fashion', '#GameFi', '#NFT', '#Fit-to-ear', '#NFT',
        '#blockchain',
        '#ethereum',
        '#Metaverse', '#Metamask'],
        des: [
          {
            txt: 'Product belongs to TG3D Studio',
            url: 'https://tc.tg3ds.com/overview',
          },
          {
            txt: 'as in-house Front-end Developer'
          },
          {
            txt: 'Partly participated in the Fitzon App front-end development'
          },
          {
            txt: 'Experienced in Metamask / Etherum contract API (front-end)',
          },
          {
            txt: '2023 Jan. ~ 2023 Aug.',
          },
        ],
        devTags: [
          'Web3 / Blockchain',
          'Fit to earn token',
          'Workout/Game-Fi App',
        ]
      },
      {
        key: 'scanatic4fashion',
        label: 'Scanatic',
        comp: 'tg3d/cloudzet',
        name: 'Scanatic™ for Fashion',
        sns: [
          {
            type: 'official',
            url: 'https://tc.tg3ds.com/retail-experience',
            elIcon: 'Share',
          },
        ],
        tags: ['#fashion', '#bodyscan', '#3D', '#3DFashionDesign',
        '#fabricScan', '#DigitalFabricPatternCreator'],
        des: [
          {
            txt: 'Product belongs to TG3D Studio.',
            url: 'https://tc.tg3ds.com/overview',
          },
          {
            txt: 'Partly participated in the Web & App platform developing'
          },
          {
            txt: 'as in-house Front-end Developer'
          },
          {
            txt: '2023 Jan. ~ 2023 Aug.',
          },
        ],
        devTags: [
          'Front-end 3D visual',
          'Fashion X Tech',
          'Digital fashion integration tool'
        ]
      },
      {
        key: 'nopartyforcaodong',
        label: 'nopartyforcaodong',
        name: 'No Party for Cao Dong \n 草東沒有派對',
        sns: [
          {
            type: 'official',
            url: 'https://www.nopartyforcaodong.com/zh-hant',
            elIcon: 'Share',
          },
        ],
        tags: ['#OfficialSite', '#ShopifyStore', '#NoPartyForCaoDong', '#草東沒有派對', '#musician/band'],
        des: [
          {
            txt: 'Cooperate w/ Whatever.co & Blockcode Inc.',
            url: 'https://whatever.co/',
          },
          {
            txt: 'Responsible for official site front-end development'
          },
          {
            txt: 'Responsible for e-commerce site front-end development',
            url: 'https://store.nopartyforcaodong.com/',
          },
          {
            txt: 'Experienced in developing custom Shopify store',
          },
          {
            txt: 'as freelancing Front-end Developer',
          },
          {
            txt: '2021 Summer. ~ 2022 Jan.',
          },
        ],
        devTags: [
          'Brand official site',
          'Shopify E-commerce site',
        ]
      },
    ] 
  }),
  getters: {
    allProjects: (state) => state.projects,
    check: () => '123'
  },
})