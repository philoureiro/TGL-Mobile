import React from 'react';
import IconAnt from 'react-native-vector-icons/Ionicons';



import { HeaderBox, BoxButtonExit, BoxInternalHeader, BoxLogo, MarkupLogo, TextLogo } from './styles';


interface HeaderProps {
  navigation: any;
}

const CustomHeader: React.FC<HeaderProps> = ({ navigation, children }) => {
  return (
    <HeaderBox>
      <BoxInternalHeader>
        <BoxLogo>
          <TextLogo>TGL</TextLogo>
          <MarkupLogo />
        </BoxLogo>
        {children}
        <BoxButtonExit onPress={() => (navigation.navigate('SignIn'))} >
          <IconAnt name='md-exit-outline' size={40} color='#C1C1C1'></IconAnt>
        </BoxButtonExit>

      </BoxInternalHeader>
    </HeaderBox>

  );
}

export default CustomHeader;


