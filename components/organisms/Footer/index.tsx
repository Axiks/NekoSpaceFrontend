import type { FC } from 'react';
import { Grid, Cell } from 'baseui/layout-grid';
import { Logo, TwitterIcon, FacebookIcon, InstagramIcon } from '@atoms';
import {
  Copyright,
  Description,
  Divider,
  FooterContainer,
  Link,
  LinksWrapper,
  LogoWrapper,
  MediaIconsWrapper,
  PoliticsLinksWrapper,
} from './styles'


const Footer: FC = () => (
  <FooterContainer>
    <Grid gridColumns={12}>
      <Cell span={[12]}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Cell>
      <Cell span={[3]}>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniamquis.
        </Description>
      </Cell>
      <Cell skip={[1]} span={[2]}>
        <LinksWrapper>
          <Link href="#">Про проєкт</Link>
          <Link href="#">Центр підтримки</Link>
          <Link href="#">Новини</Link>
        </LinksWrapper>
      </Cell>
      <Cell span={[2]}>
        <LinksWrapper>
          <Link href="#">Як нас підтримати</Link>
          <Link href="#">Волонтерство</Link>
          <Link href="#">Вакансії</Link>
        </LinksWrapper>
      </Cell>
      <Cell span={[2]}>
        <PoliticsLinksWrapper>
          <Link href="#">Terms and Conditions</Link>
          <Link href="#">Privacy Police</Link>
          <Link href="#">Cookies</Link>
        </PoliticsLinksWrapper>
      </Cell>
      <Cell span={[12]}>
        <MediaIconsWrapper>
          <Link href="#">
            <TwitterIcon />
          </Link>
          <Link href="#">
            <FacebookIcon />
          </Link>
          <Link href="#">
            <InstagramIcon />
          </Link>
        </MediaIconsWrapper>
      </Cell>
    </Grid>
    <Divider />
    <Grid gridColumns={12}>
      <Cell span={[12]}>
        <Copyright>© 2023 - Neko Space  |  All right reserved</Copyright>
      </Cell>
    </Grid>
    
  </FooterContainer>
)

export default Footer;
