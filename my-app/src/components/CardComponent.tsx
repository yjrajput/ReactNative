
import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

const CardComponent = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Yuvraj Rathore</Text>

      <Image
        style={styles.image}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/180505938?v=4',
        }}
      />

      <Button
        title="View Profile"
        onPress={() => Alert.alert('Hello, Yuvraj!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 12,

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    // Shadow for Android
    elevation: 5,
  },

  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
});

export default CardComponent;
