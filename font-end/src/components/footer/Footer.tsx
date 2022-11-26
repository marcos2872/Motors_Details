import React from 'react';
import { DivIcons, Icon, Link, SectioFooter, Text } from './footerStyled';
import github from '../../icons/github 1.png';
import linkedin from '../../icons/linkedin 1.png';
import youtube from '../../icons/youtube.png';

function Footer() {
  return (
    <SectioFooter>
      <DivIcons>
        <Link href="https://github.com/marcos2872/Motors_Details" target="_blank">
          <Icon src={github} />
        </Link>
        <Link href="https://www.linkedin.com/in/marcos-souza-a298a9209/" target="_blank">
          <Icon src={linkedin} />
        </Link>
        <Link href="https://www.youtube.com/channel/UCG3RUHMDhvvGFn60Vhk7Lhg" target="_blank">
          <Icon src={youtube} />
        </Link>
      </DivIcons>
      <Text>Developed by Marcos Souza Brito</Text>
    </SectioFooter>
  );
}

export default Footer;
