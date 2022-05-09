import { getPinData } from "./getDataPinsScreen";
import { t_PinInfo, t_TabInfo } from "./typePinsScreen";

const rawData: t_PinInfo[] = [
  {
    type: 'mine',
    title: 'The Wood',
    description: 'very nice place, gg!',
    user: 'Me',
    date: '09/05/2022',
    like: false,
    distance: 20,
    visits: 400,
    value: 400,
    tags: ['boring', 'scary', 'morning', 'this must be quite long as test', 'nice planks', ''],
    ratings: [3, 5, 1, 2, 2, 2, 2],
    commentsData: [
      {
        user: 'Me',
        icon: 'https://randomwordgenerator.com/img/picture-generator/54e7d04b4353a914f1dc8460962e33791c3ad6e04e507441722a72dc9645c7_640.jpg',
        comment: 'body',
        date: '09/05/2022',
        upvotes: 0,
        downvotes: 0,
        rating: 3,
      },
    ],
    imagesData: [
      { key: 'card1_image1', url: 'https://randomwordgenerator.com/img/picture-generator/53e6d740425aa914f1dc8460962e33791c3ad6e04e507749772f79dd904ec6_640.jpg' },
    ],
    key: 'card_1',
  },
];


export function usePinScreen(): t_TabInfo[] {
  return [
    { data: rawData.filter(e => e.type === 'feed'), key: 'feed_tab' },
    { data: rawData.filter(e => e.type === 'mine'), key: 'mine_tab' },
    { data: rawData.filter(e => e.type === 'history'), key: 'history_tab' },
  ];
}