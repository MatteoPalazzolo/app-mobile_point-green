/*
export type RootStackParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};
*/
export type t_Vector2 = {
  x: number,
  y: number
};

export type t_Screens = {
  label: string,
  icon: JSX.Element | number,
  child: JSX.Element,
  position: t_Vector2
}[];