import { useFonts } from 'expo-font'

import Main from './src/Main';

export default function App() {
  const [isloads] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isloads) {
    return
  }

  return (
    <Main />
  )
}
