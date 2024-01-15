import {StyleSheet, Text, View} from 'react-native';
import VideoPlayer from './VideoPlayer';

export default function VideoScreen({route}) {
  const {video} = route.params;

  return (
    <View style={styles.container}>
      <VideoPlayer src={video.sources} />
      <View style={styles.textContainer}>
        <Text style={styles.videoTitle}>{video.title}</Text>
        <Text style={styles.videoSubtitle}>{video.subtitle}</Text>
        <Text style={styles.videoDescription}>{video.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  videoCover: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  textContainer: {
    alignItems: 'center',
  },
  videoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  videoSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  videoDescription: {
    fontSize: 14,
    textAlign: 'justify',
  },
});
