import { t_PinInfo, t_TabInfo, t_Tabs } from "./typePinsScreen";

const card: (a: t_Tabs, b: number) => t_PinInfo = (a, b) => ({
  type: a,
  title: 'The Spiaggia',
  description: 'very nice place, gg!',
  user: 'Me',
  date: '09/05/2022',
  like: false,
  distance: 20,
  visits: 400,
  value: 400,
  tags: ['boring', 'sea', 'green', 'planks'],
  ratings: [3, 5, 1, 2, 2, 2, 2],
  imagesData: [
    { key: 'card2_image1', url: 'https://randomwordgenerator.com/img/picture-generator/54e9d5414c5aaa14f1dc8460962e33791c3ad6e04e507440742a7ed0954ac1_640.jpg' },
    { key: 'card2_image2', url: 'https://randompicturegenerator.com/img/national-park-generator/ged4c9fb3943cde4e0320a442956fb6315073ae237eb38c0b651ed5e8915e80cae71d3e182deef7664da6666a4a4ba70f_640.jpg' },
  ],
  commentsData: [
    {
      user: 'Giorgio',
      icon: 'https://play-lh.googleusercontent.com/oXMNc6gaZK-bDdP8UfR4utJVcuLD-nzA6x0GSa4aowFW_zQ-8NfrkOJis09DUsoFEQ',
      comment: 'glorius!',
      date: '09/05/2022',
      upvotes: 0,
      downvotes: 0,
      rating: 3,
    },
    {
      user: 'Greg',
      icon: 'https://yt3.ggpht.com/ytc/AKedOLTaHx7F4QOHKhu-dAFPYYjG_jeHveIfQPpQBdob=s900-c-k-c0x00ffffff-no-rj',
      comment: '...',
      date: '25/10/1985',
      upvotes: 0,
      downvotes: 0,
      rating: 3,
    },
  ],
  key: `${a}${b}`,
});

const rawData: t_PinInfo[] = [
  {
    type: 'mine',
    title: 'The Clock',
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
        user: 'Giorgio',
        icon: 'https://play-lh.googleusercontent.com/oXMNc6gaZK-bDdP8UfR4utJVcuLD-nzA6x0GSa4aowFW_zQ-8NfrkOJis09DUsoFEQ',
        comment: 'glorius!',
        date: '09/05/2022',
        upvotes: 0,
        downvotes: 0,
        rating: 3,
      },
      {
        user: 'Greg',
        icon: 'https://yt3.ggpht.com/ytc/AKedOLTaHx7F4QOHKhu-dAFPYYjG_jeHveIfQPpQBdob=s900-c-k-c0x00ffffff-no-rj',
        comment: 'glorius!',
        date: '25/10/1985',
        upvotes: 0,
        downvotes: 0,
        rating: 3,
      },
    ],
    imagesData: [
      { key: 'card1_image1', url: 'https://randomwordgenerator.com/img/picture-generator/53e6d740425aa914f1dc8460962e33791c3ad6e04e507749772f79dd904ec6_640.jpg' },
      { key: 'card1_image2', url: 'https://randompicturegenerator.com/img/national-park-generator/ged4c9fb3943cde4e0320a442956fb6315073ae237eb38c0b651ed5e8915e80cae71d3e182deef7664da6666a4a4ba70f_640.jpg' },
      { key: 'card1_image3', url: 'https://randomwordgenerator.com/img/picture-generator/57e6d24b4952ab14f1dc8460962e33791c3ad6e04e50744172287ed2914fc7_640.jpg' },
      { key: 'card1_image4', url: 'https://randomwordgenerator.com/img/picture-generator/54e9d5454851ae14f1dc8460962e33791c3ad6e04e507440762a7cd4924cc6_640.jpg' },
    ],
    key: 'card_1',
  },
  card('mine', 2),
  card('mine', 3),
  card('mine', 4),
  card('mine', 5),
  card('mine', 6),
  card('mine', 7),
  card('feed', 2),
  card('feed', 3),
  card('feed', 4),
  card('feed', 5),
  card('feed', 6),
  card('feed', 7),
  card('history', 2),
  card('history', 3),
  card('history', 4),
  card('history', 5),
  card('history', 6),
  card('history', 7),
];


export function usePinScreen(): t_TabInfo[] {
  return [
    { data: rawData.filter(e => e.type === 'feed'), key: 'feed_tab' },
    { data: rawData.filter(e => e.type === 'mine'), key: 'mine_tab' },
    { data: rawData.filter(e => e.type === 'history'), key: 'history_tab' },
  ];
}