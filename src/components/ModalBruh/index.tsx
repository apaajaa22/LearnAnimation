import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  onPressOuterModal: () => void;
  visible: boolean;
}
const ModalBruh = ({onPressOuterModal, visible}: Props) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        style={styles.modalParent}
        onRequestClose={onPressOuterModal}>
        <Pressable style={styles.wrapperModal} onPress={onPressOuterModal}>
          <Pressable style={styles.modalContent} onPress={onPressOuterModal}>
            <Text>Halo gans</Text>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ModalBruh;

const styles = StyleSheet.create({
  modalParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperModal: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'orange',
    flex: 1,
    margin: 30,
    padding: 20,
    maxHeight: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
