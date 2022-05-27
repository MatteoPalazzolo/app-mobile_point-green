// REACT
import React, { useCallback, useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import { t_ImageInfo } from '../typePinsScreen';
import { safeArea } from '../../../utilities/StylesPattern';
import Carousel from '../PinInfoScreen/components/Carousel';
import { ArrayHelpers, FieldArray, Formik } from 'formik';
import Button from '../../../components/Button';
import { FONT_SIZE_1, FONT_SIZE_3 } from '../../../constants/Styles';
import Separator from '../PinInfoScreen/components/Separator';
import TagsList, { TagBox } from '../components/PinCard/components/TagBox';


const ICON_SIZE = 32;
const MAX_TITLE_LENGHT = 32;
const MAX_DESCR_LENGHT = 1000;

interface i_PinCreationScreen { }
export default function PinCreationScreen({ }: i_PinCreationScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];
  const navigation = useNavigation();

  type s = { imagesData: t_ImageInfo[] };
  const info: s = {
    imagesData: [
      { key: 'image1', url: 'https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print' },
      { key: 'image2', url: 'https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print' },
      { key: 'image3', url: 'https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print' },
      { key: 'image4', url: 'https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print' },
    ],
  };

  // TO TUNE
  const pickImage = useCallback(async (push) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      push({ url: result.uri, key: Math.random() * 100000 }); //TODO UNSAFE
    } else {
      console.log(result);
    }
  }, []);


  type t_FormValues = { title: string, description: string, images: t_ImageInfo[], tags: string[] };
  const formValues: t_FormValues = { title: '', description: '', images: [], tags: [] };

  const addPost = useCallback((values: t_FormValues) => {
    console.log(values);
    /* const newComment = newCard({
      title: values.title.trim(),
    }); */
    /* commentsList.push(newComment); */
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={[safeArea, styles.close]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={ICON_SIZE * 1.15} color={plt.dominant} />
        </TouchableOpacity>
      </SafeAreaView>

      <Formik
        initialValues={formValues}
        /* validationSchema={reviewSchema} */
        onSubmit={(values, action) => {
          action.resetForm();
          addPost(values);
        }}>
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <>
            <FieldArray
              name='images'
              render={(arrayHelpers: ArrayHelpers) => (
                <Carousel images={values.images}>
                  <TouchableOpacity onPress={() => pickImage(arrayHelpers.push)}>
                    <MaterialIcons name="add-a-photo" size={72} color={plt.accent} />
                  </TouchableOpacity>
                </Carousel>
              )} />

            <TextInput
              numberOfLines={1}
              maxLength={MAX_TITLE_LENGHT}
              style={[styles.titleInput]}
              placeholder='TITLE'
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />
            {(touched.title && errors.title) &&
              <Text style={styles.errorText}>{errors.title}</Text>
            }
            <TextInput
              multiline
              numberOfLines={8}
              maxLength={MAX_DESCR_LENGHT}
              style={[styles.descriptionInput]}
              placeholder='Add a description... (MAX 500)'
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />
            {(touched.title && errors.title) &&
              <Text style={styles.errorText}>{errors.title}</Text>
            }
            <Separator style={styles.separator}>Tags</Separator>

            <FieldArray
              name='tags'
              render={(arrayHelpers: ArrayHelpers) => (<>
                <View style={styles.tagsContainer}>
                  <TagsList tags={values.tags} onAddPress={() => arrayHelpers.push('ciao')} />
                </View>
              </>)} />

            <Button style={styles.submit} onPress={handleSubmit as any} text="500" />
          </>
        )}
      </Formik>

    </ScrollView >
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    container: {},
    close: {
      position: 'absolute',
      zIndex: 1,
      left: 8,
    },
    titleInput: {
      marginTop: 18,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: FONT_SIZE_1,
    },
    descriptionInput: {
      marginTop: 12,
      marginHorizontal: 10,
      textAlignVertical: 'top',
      textAlign: 'center',
      fontSize: FONT_SIZE_3,
    },
    /* metadata: {
      marginTop: 16,
      fontSize: 16,
      opacity: .6,
      textAlign: 'center',
      fontStyle: 'italic',
    }, */
    separator: {

    },
    tagsContainer: {
      marginTop: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    submit: {
      marginTop: 30,
    },
    errorText: {
      color: plt.danger,
    }
  });
}