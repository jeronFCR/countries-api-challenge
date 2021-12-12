import styled from "styled-components";

export const Flag = styled.img<{ $click?: boolean; $detail?: boolean }>`
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: ${({ $detail }) => $detail === true ? '320px' : '140px'};
    object-fit: cover;
    cursor: ${({ $click }) => $click === false ? 'unset' : 'pointer'};
`;
