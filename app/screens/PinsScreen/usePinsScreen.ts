import { t_PinInfo, t_CardData } from "./typePinScreen";

var mult = 0;
function addKey(data: t_PinInfo[]) {
  mult++;
  return [
    { // this is the ADD PIN button
      imageURL: '',
      title: '',
      distance: 0,
      visits: 0,
      value: 0,
      tags: [],
      ratings: 0,
    },
    ...data,
  ].map((e, i) => (
    { content: e, key: i + 100 * mult }
  ));
}

export function usePinScreen() {

  const feedItems: t_PinInfo[] = [
    {
      imageURL: 'https://www.sgsgroup.it/-/media/global/images/structural-website-images/hero-images/hero-agri-forestry.jpg',
      title: 'The Wood',
      distance: 20,
      visits: 400,
      value: 400,
      tags: ['boring', 'scary', 'morning', 'this must be quite long as test', 'nice planks', ''],
      ratings: 3,
    },
    {
      imageURL: 'https://www.pandotrip.com/wp-content/uploads/2013/05/Untitled-103-980x735.jpg',
      title: 'The Flowers',
      distance: 30,
      visits: 1100,
      value: 900,
      tags: ['funny', 'funky', 'furry', 'fruit', 'flowers'],
      ratings: 5,
    },
    {
      imageURL: 'https://www.guidatorino.com/wp-content/uploads/2019/09/lazza-torino-venaria-2019.jpg',
      title: 'Zzala',
      distance: 1,
      visits: 157,
      value: 999,
      tags: ['sono con te però...', 'non devi farmi male...', 'se sono cerbero...', 'verrai con me nell \'Ade...', 'ZZZalLa'],
      ratings: 6,
    }
  ];

  const mineItems: t_PinInfo[] = [
    {
      imageURL: 'https://www.rocchette.com/wp-content/uploads/attrazioni-naturali-maremma.jpg',
      title: 'My Zoo',
      distance: 50,
      visits: 660,
      value: 7800,
      tags: ['horse', 'horsy', 'bird', 'birdy', 'watching'],
      ratings: 3,
    },
    {
      imageURL: 'https://www.pandotrip.com/wp-content/uploads/2013/05/Untitled-103-980x735.jpg',
      title: 'The Flowers',
      distance: 30,
      visits: 1100,
      value: 900,
      tags: ['funny', 'funky', 'furry', 'fruit', 'flowers'],
      ratings: 5,
    },
    {
      imageURL: 'https://static.tripzilla.com/thumb/2/8/92200_800x.jpg',
      title: 'La New Zealand...',
      distance: 0,
      visits: 0,
      value: 0,
      tags: ['the only one', '', '', '', ''],
      ratings: 2,
    }
  ];

  const historyItems: t_PinInfo[] = [
    {
      imageURL: 'https://www.rocchette.com/wp-content/uploads/attrazioni-naturali-maremma.jpg',
      title: 'My Zoo',
      distance: 50,
      visits: 660,
      value: 7800,
      tags: ['horse', 'horsy', 'bird', 'birdy', 'watching'],
      ratings: 3,
    },
    {
      imageURL: 'https://www.pandotrip.com/wp-content/uploads/2013/05/Untitled-103-980x735.jpg',
      title: 'The Flowers',
      distance: 30,
      visits: 1100,
      value: 900,
      tags: ['funny', 'funky', 'furry', 'fruit', 'flowers'],
      ratings: 5,
    },
    {
      imageURL: 'https://static.tripzilla.com/thumb/2/8/92200_800x.jpg',
      title: 'La New Zealand...',
      distance: 0,
      visits: 0,
      value: 0,
      tags: ['the only one'],
      ratings: 2,
    }
  ];

  const tabScreens: t_CardData[][] = [addKey(feedItems), addKey(mineItems), addKey(historyItems)];

  return { tabScreens };
}