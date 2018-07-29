import breakpoint from 'styled-components-breakpoint';

import {
  styledDiv,
  styledWrapper,
  styledImg
} from '../../../common/styles.common';

export const CarCardDivWrapper = styledWrapper.extend`
  width: 100%;
  ${breakpoint('tablet')`
  width: 33%;
  `}
  ${breakpoint('desktop')`
  width: 25%;
  `}
`;

export const CarCardDiv = styledDiv.extend`
  margin: 10px;
  padding: 10px;
`;

export const CarCardImageWrapper = styledWrapper.extend`

`;

export const CarCardImageDiv = styledImg.extend`
  display: block;
`;

export const CarCardName = styledWrapper.extend`

`;

export const CarCardDescription = styledWrapper.extend`

`;

export const CarCardYear = styledWrapper.extend`

`;
