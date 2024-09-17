import AsyncStorage from '@react-native-async-storage/async-storage';
import { type Storage } from 'redux-persist';

export const storage: Storage = {
  setItem: (key, value) => {
    return AsyncStorage.setItem(key, value)
      .then(() => Promise.resolve(true))
      .catch((error) => {
        console.error('AsyncStorage setItem error:', error);
        return Promise.resolve(false);
      });
  },
  getItem: (key) => {
    return AsyncStorage.getItem(key)
      .then((value) => Promise.resolve(value))
      .catch((error) => {
        console.error('AsyncStorage getItem error:', error);
        return Promise.resolve(null);
      });
  },
  removeItem: (key) => {
    return AsyncStorage.removeItem(key)
      .then(() => Promise.resolve())
      .catch((error) => {
        console.error('AsyncStorage removeItem error:', error);
        return Promise.resolve();
      });
  },
};
