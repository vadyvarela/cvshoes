import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            display: flex;
            align-items: center;
            transition: opacity 0.2s;
        }
    }
`;

export const ProdutoTable = styled.table`
    width: 100%;
    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }
    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 100px;
    }
    strong {
        color: #333;
        display: block;
    }
    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }
    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }
    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;

export const Total = styled.div``;