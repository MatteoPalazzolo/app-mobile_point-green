// REACT
import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useContext } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";
import Button from '../../../../components/Button';
import { t_Comment } from '../../typePinsScreen';
import RatingInput from './RatingInput';
import { newCardComment } from '../../newPinsScreen';


const MIN_COMMENT_LENGHT = 10;
const MAX_COMMENT_LENGHT = 500;

/*************************************************************
 *************************************************************/

type t_FormValues = { comment: string, rating: number };
const formValues: t_FormValues = { comment: '', rating: 0 };

function isStringEmpty(s: string): boolean {
  const EMPTY_CHARS = [' ', '\n', '\t'];
  for (const c of s) {
    if (!EMPTY_CHARS.includes(c))
      return false;
  }
  return true;

  return s.trim() === '';
}

const reviewSchema = Yup.object({
  comment: Yup.string().required().min(MIN_COMMENT_LENGHT).max(MAX_COMMENT_LENGHT)
    .test('no empty', 'comment can\'t contain only white spaces', ((v: string) => true) as any),
  rating: Yup.string().required()
    .test('1-5', 'value must be (1-5)', ((v: string) => (parseInt(v) >= 1 && parseInt(v) <= 5)) as any),
});

/*************************************************************
 *************************************************************/


interface i_CommentModal {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  commentsList: t_Comment[],
}
export default function CommentModal({ visible, setVisible, commentsList }: i_CommentModal) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  const addReview = useCallback((values: t_FormValues) => {
    const newComment = newCardComment({
      comment: values.comment.trim(),
      rating: values.rating,
      user: 'Me',
      icon: 'https://www.ansa.it/webimages/img_700/2017/8/20/6e8ad6debd75aca1e2dbf887d266a2b5.jpg',
    });
    commentsList.push(newComment);
  }, []);

  return (<>
    <View style={visible ? [StyleSheet.absoluteFill, styles.modalBackground] : undefined} />
    <Modal visible={visible} animationType="slide" transparent={true}>
      <KeyboardAvoidingView
        behavior={"padding"}
        style={styles.modal} >
        <TouchableOpacity activeOpacity={.8} onPress={() => setVisible(false)}>
          <View style={styles.closeModal}>
            <Ionicons name="close" size={36} color={palette[colorTheme].dominant} />
          </View>
        </TouchableOpacity>
        <Formik
          initialValues={formValues}
          validationSchema={reviewSchema}
          onSubmit={(values, action) => {
            action.resetForm();
            addReview(values);
            setVisible(false);
          }}>
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, touched, errors }) => (
            <View style={styles.formContainer}>
              <TextInput
                multiline
                numberOfLines={4}
                maxLength={MAX_COMMENT_LENGHT}
                style={[styles.textInput, styles.commentInput]}
                placeholder='Write comment here...'
                onChangeText={handleChange('comment')}
                onBlur={handleBlur('comment')}
                value={values.comment}
              />
              {(touched.comment && errors.comment) &&
                <Text style={styles.errorText}>{errors.comment}</Text>
              }
              <RatingInput
                style={styles.ratingInput}
                fieldValue={values.rating}
                setFieldValue={(i) => setFieldValue('rating', i)} />
              <Button style={styles.submit} onPress={handleSubmit as any} text="Submit" />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
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
      height: '65%',

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

    formContainer: {
      marginTop: 8,
      alignSelf: 'center',
      width: '90%',
    },
    textInput: {
      textAlignVertical: 'bottom',
      borderColor: '#555',
      borderBottomWidth: 1,
      marginTop: 16,
      padding: 5,
    },
    commentInput: {
    },
    ratingInput: {
      marginTop: 20,
    },
    errorText: {
      color: 'red',
      marginTop: 6,
    },
    submit: {
      marginTop: 30,
    },
  });
}