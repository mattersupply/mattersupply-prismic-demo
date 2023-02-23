import styled from "@emotion/styled";

export const StarRating = styled.p`
    display: flex;
    justify-content: center;
    gap: 4px;
`

export const Star = styled.svg`
    width: var(--size, 32px);
    height: var(--size, 32px);
    fill: lightgrey;

    &.active {
        fill: #fed94b;
    }
`