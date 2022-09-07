import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';

const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondLevelTopContainer}>
        <Image
          source={require('../assets/images/png/cloud.png')}
          style={styles.imageStyle}
          tintColor="#EEEEEE"
        />
        <Text style={styles.grayText}>BIIT Attendance System</Text>
      </View>
      <View style={styles.secondLevelMiddleContainer}>
        {/* Intro */}
        <View style={styles.thirdLevelFirstContainer}>
          <Text style={styles.redHeading}>Sign In</Text>
          <Text style={[styles.grayText, {marginTop: 20}]}>
            Hi there! Nice to see you again.
          </Text>
        </View>
        {/* Email */}
        <View style={styles.thirdLevelSecondContainer}>
          <Text style={styles.redSmallHeading}>Username</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}></View>
            <TextInput style={styles.input} placeholder="Username" />
          </View>
        </View>
        {/* Password */}
        <View style={styles.thirdLevelThirdContainer}>
          <Text style={styles.redSmallHeading}>Password</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}></View>
            <TextInput style={styles.input} placeholder="Password" />
          </View>
        </View>
        {/* Sign In Button */}
        <View style={styles.thirdlevelFourthContainer}>
          {/* TODO - Change Button to Touchable Opacity */}
          <Button title="Sign In" color={'#F85F6A'} />
          <Text style={styles.grayText}>Forgot Password?</Text>
        </View>
      </View>
      <View style={styles.secondLevelBottomContaienr}>
        <Text> </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 40,
    backgroundColor: 'white',
    // borderWidth: 1,
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
  thirdLevelFirstContainer: {
    flex: 1,
    // borderWidth: 1,
  },
  thirdLevelSecondContainer: {
    flex: 1,
    // borderWidth: 1,
  },
  thirdLevelThirdContainer: {
    flex: 1,
    // borderWidth: 1,
  },
  thirdlevelFourthContainer: {
    flex: 1,
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  inputIconContainer: {
    flex: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#EEEEEE',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
  },
  input: {
    flex: 7,
    borderColor: '#CCCCCC',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    maxHeight: 35,
    fontSize: 12,
    fontFamily: 'Quicksand-Bold',
    borderWidth: 1,
  },
  grayText: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    color: '#989EB1',
  },
  redHeading: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 24,
    color: '#F85F6A',
  },
  redSmallHeading: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    color: '#F85F6A',
  },
  secondLevelTopContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  secondLevelMiddleContainer: {
    flex: 2,
    // borderWidth: 1,
  },
  secondLevelBottomContaienr: {
    flex: 1,
    // borderWidth: 1,
  },
});
