// REACT
import { ArrayHelpers } from 'formik';
import React, { useCallback, useContext, useReducer, useState } from 'react';
import { StyleSheet, Modal, Text, FlatList } from 'react-native';
import Checkbox from 'expo-checkbox';
import Button from '../../../../components/Button';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";
import TagModalItem from './TagModalItem';
import { TAGS_LIST } from '../../constPinsScreen';
import CloseIcon from './CloseIcon';


type t_ActionType = 'add' | 'remove';

interface i_AddTagModal {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  arrayHelpers: ArrayHelpers,
}
export default function AddTagModal({ visible, setVisible, arrayHelpers }: i_AddTagModal) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  const reducer = useCallback((state: string[], action: { type: t_ActionType, item: string }) => {
    if (action.type === 'add')
      state.push(action.item);
    else
      state.splice(state.indexOf(action.item), 1);
    console.log(state);
    return state;
  }, []);

  const [state, dispatch] = useReducer(reducer, [], undefined);

  const onSubmit = useCallback(() => {
    state.forEach(e => arrayHelpers.push(e));
    setVisible(false);
  }, [state]);

  return (
    <Modal visible={visible}>
      <CloseIcon onPress={e => setVisible(false)} color={plt.complementary} />
      <Text style={styles.title}>SELECT TAGS</Text>
      <FlatList data={TAGS_LIST} renderItem={({ item }) => <TagModalItem dispatch={dispatch} tagName={item.name} />} />
      <Button style={styles.commitBtn} text={'SAVE'} fontSize={18} onPress={onSubmit} />
    </Modal>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 32,
      color: plt.complementary,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 20,
    },
    commitBtn: {
      marginTop: 25,
      marginBottom: 20,
      width: '60%',
      alignSelf: 'center',
    }
  });
}