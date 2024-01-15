import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import videos from '../data';
import {useNavigation} from '@react-navigation/native';

export default function List() {
  const navigation = useNavigation();

  const handleCardClick = video => {
    navigation.navigate('Details', {video});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesCards}>
        {videos.map((video, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageCard}
            onPress={() => handleCardClick(video)}>
            <Image source={{uri: video.thumb}} style={styles.videoCover} />
            <View style={styles.textContainer}>
              <Text style={styles.videoTitle}>{video.title}</Text>
              <Text style={styles.videoAuthor}>{`${video.subtitle}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  imagesCards: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  imageCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    paddingLeft: 10,
  },
  videoCover: {
    width: 170,
    height: 100,
    borderRadius: 10,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  videoAuthor: {
    fontSize: 14,
    color: 'gray',
  },
  textContainer: {
    width: 150,
  },
});
