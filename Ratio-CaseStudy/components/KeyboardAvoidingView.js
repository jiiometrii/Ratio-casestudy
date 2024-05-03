import React from 'react';
import { Platform, View, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';

const KeyboardAvoidingScrollView = ({ children, scrollContentContainerStyle = {}, scrollViewRef }) => {
  const headerHeight = useHeaderHeight(); // Assuming useHeaderHeight is defined elsewhere

  const renderScrollView = (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, ...scrollContentContainerStyle }}
      contentInsetAdjustmentBehavior="never"
      keyboardShouldPersistTaps="handled"
      ref={scrollViewRef}
    >
      {children}
    </ScrollView>
  );

  if (Platform.OS === 'android') return renderScrollView;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={headerHeight}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{renderScrollView}</TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingScrollView;