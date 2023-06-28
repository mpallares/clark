import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppButton } from '../../components/AppButton/AppButton';
import { Colors } from '../../constants/colors';

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/clark_logo.png')}
      />
      <View style={styles.textContainer}>
        <AppButton
          title='Continue'
          color={Colors.WHITE}
          height={50}
          width={300}
          borderRadius={5}
          fontSize={20}
          onPress={() => navigation.navigate('List')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    marginBottom: 300,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 100,
    width: '80%',
    height: '20%',
    marginBottom: 350,
    resizeMode: 'contain',
  },
});
