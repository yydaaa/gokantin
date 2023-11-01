import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama : Yuda Apriana Salam</Text>
      <Text>NIS  : 222310285</Text>
      <Text>Tanggal Lahir : 07 April 2006 </Text>
      <Text>Alamat : Kp.Pasirjaya</Text>
      <Text>Tb : 167 Cm</Text>
      <Text>Bb : 51 Kg</Text>
      <Text>Hobby : Lari dari kenyataan</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
