import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';


export default function VideoPlayer({src}) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#875eec" />
        </View>
      )}
      <Video
        controls
        resizeMode="cover"
        source={{uri: src}}
        style={styles.backgroundVideo}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  backgroundVideo: {
    width: 340,
    height: 200,
  },
});
