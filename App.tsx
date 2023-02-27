import React, {useRef, useState} from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ModalBruh from './src/components/ModalBruh';

const App = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const textInputAnim = useRef(new Animated.Value(0)).current;
  const textInputOpacityAnim = useRef(new Animated.Value(0)).current;

  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

  const [show, setShow] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  function onPress() {
    setShow(prev => !prev);
    Animated.timing(fadeAnim, {
      toValue: show ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();

    Animated.timing(textInputAnim, {
      toValue: show ? 0 : 100,
      duration: 400,
      useNativeDriver: true,
    }).start();

    Animated.timing(textInputOpacityAnim, {
      toValue: show ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }

  const transformTextInput = [
    {
      translateX: textInputAnim.interpolate({
        inputRange: [0, 100],
        outputRange: [0, -50],
      }),
    },
  ];

  function onPressBox() {
    setShowModal(true);
  }

  function onPressOuterModal() {
    setShowModal(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pressable onPress={onPressBox}>
          <Animated.View style={[styles.box, {opacity: fadeAnim}]}>
            <Text style={styles.boxTitle}>Bruh</Text>
          </Animated.View>
        </Pressable>
        <AnimatedTextInput
          placeholder={show ? 'Email' : 'Phone Number'}
          style={[
            styles.textInput,
            {
              transform: transformTextInput,
            },
          ]}
          keyboardType={show ? 'email-address' : 'phone-pad'}
        />
      </View>
      <Text style={styles.textButton} onPress={onPress}>
        Press Me
      </Text>
      {/* <ModalBruh onPressOuterModal={onPressOuterModal} visible={showModal} /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  flex: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  boxTitle: {
    color: 'white',
  },
  textInput: {
    flex: 1,
    maxHeight: 50,
  },
  textButton: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
});
