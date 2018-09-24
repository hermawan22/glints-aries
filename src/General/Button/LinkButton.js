/* @flow */

import React from 'react';
import { LinkBtn } from '../../Style/ButtonStyle';

const LinkButton = ({ children, ...defaultProps }: Props) => (
  <LinkBtn {...defaultProps}>
    {children}
  </LinkBtn>
);

type Props = {
  children: React$Node,
  className: string,
}

export default LinkButton;
