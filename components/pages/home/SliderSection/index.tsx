import type { FC } from 'react';
import { Grid, Cell } from 'baseui/layout-grid';
import { PawIcon } from '@atoms';
import { Slider } from '@organisms';
import { SliderSectionContainer, SectionTitleWrapper, SectionTitle, Slide } from './styles';


export interface ISliderSectionProps {

}

const SliderSection: FC<ISliderSectionProps> = ({}) => (
  <SliderSectionContainer>
    <Grid align="center" gridColumns={12}>
      <Cell span={[12]}>
        <SectionTitleWrapper>
          <PawIcon />
          <SectionTitle>Ня, можливо тобі сподобається?</SectionTitle>
        </SectionTitleWrapper>
      </Cell>
      <Cell span={[12]}>
        <Slider
          slides={[
            {
              id: 0,
              content: (
                <Slide>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna
                  </p>
                </Slide>
              )
            },
            {
              id: 1,
              content: (
                <Slide>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna
                  </p>
                </Slide>
              )
            },
            {
              id: 2,
              content: (
                <Slide>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna
                  </p>
                </Slide>
              )
            },
            {
              id: 3,
              content: (
                <Slide>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna
                  </p>
                </Slide>
              )
            }
          ]}
        />
      </Cell>
    </Grid>
  </SliderSectionContainer>
)

export default SliderSection;