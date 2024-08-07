import { t } from '@/lang';
import { Text, View } from 'react-native';

export default function Step1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{t('hello')}</Text>
    </View>
  );
}
