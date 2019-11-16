import React from 'react';

import { Container } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProdutoTable />

            <footer>
                <button type="button"> Finalizar Pedido </button>

                <Total>
                    <span> TOTAL </span>
                    <strong> 12.500 CVE </strong>
                </Total>
            </footer>
        </Container>
    );
}
