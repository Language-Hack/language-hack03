import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';


export default function Dashboard({navigation}){

    const image = { uri:"https://i1.wp.com/zeevector.com/wp-content/uploads/Cute-Pastel-Background.png?w=1200&ssl=1" };

    const toLoginPressed = () => {
        navigation.navigate('Login')
    };

    const toRegisterPressed = () => {
        navigation.navigate('Registration')
    };

  return (
      <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => toLoginPressed()}>
                        <Text style={styles.buttonTitle}>LOG IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => toRegisterPressed()}>
                        <Text style={styles.buttonTitle2}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
          </ImageBackground>
      </View>
  )
};
