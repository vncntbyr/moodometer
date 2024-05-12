import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { ContainerView } from '../atoms/ContainerView';
import { View } from '../atoms/Themed';

type ImageTextScreenProps = {
  content: JSX.Element;
  imagePath: string | number | ImageSource | ImageSource[] | string[] | null | undefined;
};

export const ImageTextScreen = ({ content, imagePath }: ImageTextScreenProps) => {
  return (
    <ContainerView centerHorizontal>
      <Image style={styles.image} contentFit="cover" source={imagePath} />
      <View style={styles.textContainer}>{content}</View>
    </ContainerView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: '30%',
    aspectRatio: 3 / 3,
  },
  textContainer: {
    width: '90%',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
