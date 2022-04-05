
export type t_PinInfo = {
  imageURL: string,
  title: string,
  distance: number,
  visits: number,
  value: number,
  tags: string[],
  ratings: number,
}

export type t_CardData = {
  content: t_PinInfo,
  key: number,
};
