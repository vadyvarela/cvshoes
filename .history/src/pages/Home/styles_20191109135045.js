import styled from 'styled-components';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #fff,
        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 250px;
        }

        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }
        > span {
            font-size: 21px;
            <font-wei></font-wei>
        }
    }

`;
