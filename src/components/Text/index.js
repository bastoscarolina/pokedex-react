import * as S from './styles';

export const Text = ({children, as}) => {
    return (
        <S.Title as={as}>
            {children}
        </S.Title>
    );
}