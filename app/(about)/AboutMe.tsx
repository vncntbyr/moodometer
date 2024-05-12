import { StyleSheet } from 'react-native';
import { Text } from '@/components/atoms/Themed';
import { ImageTextScreen } from '@/components/molecules/ImageTextScreen';

export default function AboutMe() {
  return (
    <ImageTextScreen
      content={
        <>
          <Text style={styles.title}>Who I am</Text>
          <Text>
            I'm a software developer, that likes creating apps. bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla
          </Text>
        </>
      }
      imagePath={require('../../images/developer.png')}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
