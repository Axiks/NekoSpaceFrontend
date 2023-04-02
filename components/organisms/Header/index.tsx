import { FC } from "react";
import { Grid, Cell } from 'baseui/layout-grid';
import { Button, SHAPE, KIND } from "baseui/button"; 
import { Logo, SearchIcon } from '@atoms';
import {
  ControlsWrapper,
  HeaderContainer,
  LogInButtonMargin,
  MenuItem,
  MenuItemWrapper,
  SearchButton,
} from './styles';

const Header: FC = () => {

  return (
    <HeaderContainer>
      <Grid align="center" gridColumns={12}>
        <Cell span={[2]}>
          <Logo />
        </Cell>
        <Cell span={[4]}>
          <MenuItemWrapper>
            <MenuItem href="#">Аніме</MenuItem>
            <MenuItem href="#">Манга</MenuItem>
            <MenuItem href="#">Ігри</MenuItem>
          </MenuItemWrapper>
        </Cell>
        <Cell span={[6]}>
          <ControlsWrapper>
            <SearchButton onClick={() => {}}>
              <SearchIcon />
            </SearchButton>
            <LogInButtonMargin>
              <Button kind={KIND.tertiary} shape={SHAPE.pill}>
                Увійти
              </Button>
            </LogInButtonMargin>
            <Button shape={SHAPE.pill}>Зареєструватися</Button>
          </ControlsWrapper>
        </Cell>
      </Grid>
    </HeaderContainer>
  )
};

export default Header;