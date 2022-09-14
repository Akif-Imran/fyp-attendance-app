import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {_VectorIcons} from './_VectorIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer = props => {
  const {navigation, Logout} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondLevelTopContainer}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity
            onPress={() => navigation.closeDrawer()}
            activeOpacity={0.7}>
            <_VectorIcons
              type={'AntDesign'}
              name={'close'}
              size={32}
              color={'#F85F6A'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfoContainer}>
          <Image
            source={require('../assets/images/png/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileNameText}>Johanna Doe</Text>
          <Text style={styles.profileEmailText}>johanna@company.com</Text>
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.secondLevelMiddleContainer}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.secondLevelBottomContaienr}>
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={Logout}>
          <_VectorIcons
            type={'SimpleLineIcons'}
            name={'logout'}
            size={20}
            color={'#F85F6A'}
          />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderWidth: 1,
  },
  secondLevelTopContainer: {
    flex: 1,
    // borderWidth: 1,
  },
  secondLevelMiddleContainer: {
    flex: 1,
    // borderWidth: 1,
  },
  secondLevelBottomContaienr: {
    flex: 1,
    flexDirection: 'column-reverse',
    // borderWidth: 1,
  },
  profileImage: {
    width: 60,
    height: 60,
  },
  profileNameText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    fontWeight: '700',
  },
  profileEmailText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 14,
  },
  closeIconContainer: {
    flex: 1,
    padding: 8,
  },
  profileInfoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    marginLeft: 14,
    marginBottom: 18,
  },
  logoutButtonText: {
    marginLeft: 10,
    color: '#F85F6A',
  },
});
