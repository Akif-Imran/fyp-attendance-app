/* Native imports */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
/* 3rd party packages */
import {Radio, RadioGroup} from '@ui-kitten/components';
import axios from 'axios';
/* My imports */
import _TextInput from '../components/_TextInput';

const Login = ({navigation}) => {
  const [userType, setUserType] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthentication = async () => {
    console.log('method called');
    if (userType === 0) {
      navigation.navigate('StudentDrawer');
    } else if (userType === 1) {
      navigation.navigate('TeacherDrawer');
    } else if (userType === 2) {
      navigation.navigate('AdminDrawer');
    } else {
      navigation.navigate('ParentDrawer');
    }
    /* var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      username: 'Laporte2020',
      password: 'J2K',
      userType: 2,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://127.0.0.1:7049/api/login/authenticate-user', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error)); */
    /* axios
      .get('https://192.168.100.12:7049/api/login/authenticate-user', {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          username: 'Laporte2020',
          password: 'J2K',
          userType: 2,
        },
      })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        navigation.navigate('TeacherDrawer');
      })
      .catch(error => console.log(error)); */
  };
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      activeOpacity={1}
      onPress={Keyboard.dismiss}>
      <View style={styles.secondLevelTopContainer}>
        <Image
          source={require('../assets/images/png/cloud.png')}
          style={styles.imageStyle}
          tintColor="#E0E0E0"
        />
        <Text style={[styles.grayText, {fontWeight: '700'}]}>
          BIIT Attendance System
        </Text>
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
          {/* <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}>
              <Ionicons name={'person'} color={'#999999'} size={20} />
            </View>
            <TextInput
              selectionColor={'#F85F6A'}
              style={styles.input}
              placeholder="Username"
              allowFontScaling={true}
            />
          </View> */}
          <_TextInput
            icon={'person'}
            iconColor={'#999999'}
            iconSize={20}
            placeholder={'Username'}
            value={username}
            setValue={setUsername}
          />
        </View>
        {/* Password */}
        <View style={styles.thirdLevelThirdContainer}>
          <Text style={styles.redSmallHeading}>Password</Text>
          {/* <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}>
              <MaterialCommunityIcons
                name={'key'}
                color={'#999999'}
                size={24}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              allowFontScaling={true}
              selectionColor={'#F85F6A'}
            />
          </View> */}
          <_TextInput
            icon={'key'}
            iconColor={'#999999'}
            iconSize={20}
            placeholder={'Password'}
            value={password}
            setValue={setPassword}
          />
          <RadioGroup
            style={styles.radioContainer}
            selectedIndex={userType}
            onChange={index => setUserType(index)}>
            <Radio status="danger">Student</Radio>
            <Radio status="danger">Teacher</Radio>
            <Radio status="danger">Admin</Radio>
            <Radio status="danger">Parent</Radio>
          </RadioGroup>
        </View>
        {/* Sign In Button */}
        <View style={styles.thirdlevelFourthContainer}>
          <TouchableOpacity
            style={styles.redButton}
            activeOpacity={0.9}
            onPress={handleAuthentication}>
            <Text style={styles.whiteButtonText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.grayText}>Forgot Password?</Text>
        </View>
      </View>
      <View style={styles.secondLevelBottomContaienr}>
        <Text> </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 28,
    backgroundColor: 'white',
    // borderWidth: 1,
  },
  radioContainer: {
    marginTop: 20,
    flexDirection: 'row',
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
    flex: 2,
    // borderWidth: 1,
  },
  thirdlevelFourthContainer: {
    flex: 1,
    justifyContent: 'space-around',
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
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#757575',
    borderWidth: 1,
  },
  redButton: {
    backgroundColor: '#F85F6A',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#F85F6A',
  },
  whiteButtonText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
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
