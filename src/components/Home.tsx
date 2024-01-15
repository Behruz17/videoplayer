import {View} from 'react-native';
import List from './List';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <List />
    </View>
  );
}
