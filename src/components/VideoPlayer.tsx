import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

export default function VideoPlayer({src}) {
  return (
    <View style={styles.container}>
      <Video
        controls
        resizeMode="cover"
        source={{uri: src}}
        style={styles.backgroundVideo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  backgroundVideo: {
    width: 340,
    height: 200,
  },
});
