import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTextInput = ({
  icon,
  iconColor,
  iconSize,
  placeholder,
  value,
  setValue,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.inputContainer}>
      <View
        style={[
          styles.inputIconContainer,
          isFocused ? styles.iconFocusedBorder : styles.iconBluredBorder,
        ]}>
        {/* TODO - make the icons library and value configureable */}
        <Ionicons name={icon} color={iconColor} size={iconSize} />
      </View>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        selectionColor={'#F85F6A'}
        style={[
          styles.input,
          isFocused ? styles.inputFocusedBorder : styles.inputBluredBorder,
        ]}
        placeholder={placeholder}
        allowFontScaling={true}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputFocusedBorder: {
    borderTopColor: '#F85F6A',
    borderRightColor: '#F85F6A',
    borderBottomColor: '#F85F6A',
    borderLeftColor: '#CCCCCC',
  },
  inputBluredBorder: {
    borderColor: '#CCCCCC',
  },
  iconFocusedBorder: {
    borderTopColor: '#F85F6A',
    borderRightColor: '#CCCCCC',
    borderBottomColor: '#F85F6A',
    borderLeftColor: '#F85F6A',
  },
  iconBluredBorder: {
    borderColor: '#CCCCCC',
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  inputIconContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  input: {
    flex: 7,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    maxHeight: 35,
    fontSize: 12,
    fontFamily: 'Quicksand-Bold',
    color: '#757575',
    borderWidth: 1,
    borderLeftWidth: 0,
  },
});
