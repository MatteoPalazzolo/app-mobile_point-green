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

export type t_Screen = {
  label: string,
  icon: JSX.Element | number,
  child: JSX.Element,
  position: t_Vector2
};

export type t_NavButton = {
  name: string,
  icon: JSX.Element | number,
}