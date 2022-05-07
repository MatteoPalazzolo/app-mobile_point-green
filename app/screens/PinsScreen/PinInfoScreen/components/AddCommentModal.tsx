// REACT
import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";


interface i_CommentModal {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}
export default function CommentModal({ visible, setVisible }: i_CommentModal) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (<>
    <View style={visible ? [StyleSheet.absoluteFill, styles.modalBackground] : undefined} />
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modal} >
        <TouchableOpacity activeOpacity={.8} onPress={() => setVisible(false)}>
          <View style={styles.closeModal}>
            <Ionicons name="close" size={36} color={palette[colorTheme].dominant} />

          </View>
        </TouchableOpacity>
        <Text>CREATE COMMENT</Text>
      </View>
    </Modal>
  </>);
}


const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];

  return StyleSheet.create({
    modal: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '40%',

      backgroundColor: plt.dominant,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    closeModal: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: plt.complementary,
      width: '100%',
      opacity: .8,
      /*
      borderRadius: 100,
      aspectRatio: 1,
      */
    },
    modalBackground: {
      position: 'absolute',
      zIndex: 5,
      backgroundColor: '#222',
      opacity: .8,
    },
  });
}