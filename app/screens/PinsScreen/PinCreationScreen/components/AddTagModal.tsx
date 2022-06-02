// REACT
import { ArrayHelpers } from 'formik';
import React, { useContext } from 'react';
import { StyleSheet, Modal } from 'react-native';
import Button from '../../../../components/Button';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";


interface i_AddTagModal {
  visible: boolean,
  arrayHelpers: ArrayHelpers,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}
export default function AddTagModal({ visible, setVisible, arrayHelpers }: i_AddTagModal) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <Modal visible={visible} >
      <Button text={'CIAO'} onPress={() => [arrayHelpers.push('CIAO'), setVisible(false)]} />

    </Modal>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    container: {

    },
  });
}