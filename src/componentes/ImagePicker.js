import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';

import { ErrorMessage } from 'formik';

import TextError from './TextError';

function ImagePickerComponent(props) {

    const {
        field: { name },
        image,
        fn: pickerImage,
        ...rest
    } = props;

    return (
        <View style={styles.pickImage}>
            <Button title="Inserir a imagem do animal" style={styles.button} onPress={pickerImage} />
            {image && <Image id={name} name={name} {...rest} source={{ uri: image }} style={styles.image} />}
            <ErrorMessage component={TextError} name={name} />
        </View>
    )
}

const styles = StyleSheet.create({
    pickImage: {
        width: '80%',
        marginHorizontal: 37,
        marginTop: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 12
    }
})

export default ImagePickerComponent