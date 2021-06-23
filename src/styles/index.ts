import { StyledProps } from 'interfaces/styled-components';
import styled, { StyledComponentBase } from 'styled-components';

export const ChartAreaStyled: StyledComponentBase<any, any, any> = styled.div`
    width: 200px;
    height: 200px;
    border: 2px solid ${(props: StyledProps) => props.theme.colors.lightGray};
`;

export const PointChartStyled: StyledComponentBase<any, any, any> = styled.div`
    width: 200px;
    height: 200px;
    border: 2px solid ${(props: StyledProps) => props.theme.colors.lightGray};
`;

export const LabelStyled: StyledComponentBase<any, any, any> = styled.div`
    width: 200px;
    height: 200px;
    border: 2px solid ${(props: StyledProps) => props.theme.colors.lightGray};
`;

export const TabelHeaderStyled: StyledComponentBase<any, any, any> = styled.div`
    width: 200px;
    height: 200px;
    border: 2px solid ${(props: StyledProps) => props.theme.colors.lightGray};
`;

export const ButtonStyled: StyledComponentBase<any, any, any> = styled.button`
    width: 200px;
    height: 200px;
    border: 2px solid ${(props: StyledProps) => props.theme.colors.lightGray};
`;
export const InnerAxisStyled: StyledComponentBase<any, any, any> = styled.button`
    width: 200px;
    height: 200px;
    border: 2px solid ${(props: StyledProps) => props.theme.colors.lightGray};
`;
