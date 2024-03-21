import {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Login({navigation}) {
  const [form, setForm] = useState({username: '', password: ''});

  const handleSignIn = () => {
    const correctLogin = 'admin';
    const correctPassword = '123';

    if (form.login === correctLogin && form.password === correctPassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Неверные учетные данные', 'Проверьте ваш логин и пароль');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://static.tildacdn.com/tild3833-6335-4837-a461-323934626431/-/resize/504x/3.png',
            }}
            style={styles.headerImg}
            alt="Logo"
          />
          <Text style={styles.subtitle}>
            Открой мир видео и наслаждайся захватывающим просмотром!
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Логин</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputControl}
              placeholder="test@email.com"
              placeholderTextColor="#6b7280"
              value={form.login}
              onChangeText={txt => setForm({...form, username: txt})}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Пароль</Text>
            <TextInput
              secureTextEntry
              style={styles.inputControl}
              placeholder="***************"
              placeholderTextColor="#6b7280"
              value={form.password}
              onChangeText={password => setForm({...form, password})}
            />
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSignIn}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Войти</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 50,
  },
  headerImg: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  subtitle: {
    marginTop: -40,
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  btn: {
    backgroundColor: '#875eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#875eec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
