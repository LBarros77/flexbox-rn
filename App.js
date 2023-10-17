import { View, StyleSheet } from 'react-native';
import { Header } from './src/partials/Header';
import { Carousel } from './src/partials/Carousel';
import { Stories } from './src/partials/Stories';
import { Article } from './src/partials/Article';
import { Cards } from './src/partials/Cards';
import { Footer } from './src/partials/Footer';

export default function App() {
  const theme = {
    primaryColor: '#79e2ff',
    secundaryColor: '#3f79ab',
    tertiaryColor: '#4bc4cc'
  };
  
  return (
    <View style={main.main}>
        <Header />
        <Carousel />
        <Stories />
        <Article />
        <Cards />
        <Footer />
    </View>
  );
};

const main = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#79e2ff',
  }
});
