import React from 'react';
import * as S from './styles';

export const Layout = ({children}) => {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  );
};
