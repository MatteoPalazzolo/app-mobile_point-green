import { t_Comment, t_imagesData } from "../typePinsScreen";

const commentsData: t_Comment[] = [
  {
    user: "Alberto Angela",
    date: '02/05/2022',
    icon: 'https://www.ilmessaggero.it/photos/MED/68/20/6616820_08150456_alberto.jpg',
    comment: `Io e cinque garçons
Un Casio, tre moto e un casco integrale
Oh, maman, maman, ho sentito che ti stavi preoccupando
Tranquilla, maman, son con lei che sta shakerando
Shakerando, ah, shakerando
Poto stase non c'è sta shakerando
Shakerando, ah, shakerando (shakerando)
Shakerando (shakerando)
Non parlo, lei mi ha tolto les paroles (Shh)
Fuori ho tre amici in meno e non ci sto pensando
Tanto li avrei persi tutti nel giro di un anno
(Tanto li avrei persi tutti nel giro di un anno, maman, oh, maman)
Non parlo più con maman
Dovrei dirle tante di quelle cose che ho fatto
Quelle notti lunghe le passavo sotto là, bro
Nel frattempo non aspettavo nessuno a vuoto
Ora se mi muovo ce ne sono sotto quattro
E una mi, mi parla come se fosse di un altro
Io mi sveglio un giorno bene, uno incazzato
Dormo assieme agli angeli e mi sveglio con un altro`,
    upvotes: 105,
    downvotes: 1,
    rating: 4,
  },
  {
    user: "Alberto Angela",
    date: '02/05/2022',
    icon: 'https://www.ilmessaggero.it/photos/MED/68/20/6616820_08150456_alberto.jpg',
    comment: `Io e cinque garçons
Un Casio, tre moto e un casco integrale
Oh, maman, maman, ho sentito che ti stavi preoccupando
Tranquilla, maman, son con lei che sta shakerando
Shakerando, ah, shakerando
Poto stase non c'è sta shakerando
Shakerando, ah, shakerando (shakerando)
Shakerando (shakerando)
Non parlo, lei mi ha tolto les paroles (Shh)
Fuori ho tre amici in meno e non ci sto pensando
Tanto li avrei persi tutti nel giro di un anno
(Tanto li avrei persi tutti nel giro di un anno, maman, oh, maman)
Non parlo più con maman
Dovrei dirle tante di quelle cose che ho fatto
Quelle notti lunghe le passavo sotto là, bro
Nel frattempo non aspettavo nessuno a vuoto
Ora se mi muovo ce ne sono sotto quattro
E una mi, mi parla come se fosse di un altro
Io mi sveglio un giorno bene, uno incazzato
Dormo assieme agli angeli e mi sveglio con un altro`,
    upvotes: 105,
    downvotes: 1,
    rating: 4,
  },
];

const imagesData: t_imagesData[] = [
  { key: '5781', url: 'https://www.pbs.org/wnet/nature/files/2019/07/Super-Hummingbirds-2-1280x675.jpg' },
  { key: '1564', url: 'https://www.oxfordmartin.ox.ac.uk/images/_1200x630_crop_center-center_82_none/AdobeStock_274966107_Nature_based_Solutions.jpeg?mtime=1574933958' },
  { key: '1654', url: 'https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg' },
];

export function usePinInfoScreen() {
  return { imagesData, commentsData };
}