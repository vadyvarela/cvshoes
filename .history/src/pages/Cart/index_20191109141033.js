import React from 'react';

import { Container } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProdutoTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTn2CndS6748q3ddDtnjmaoPTDUlMbxY8TPrz99cft6BSd-gJV1"
                                alt=""
                            />
                        </td>
                        <td />
                        </td>
                    </tr>
                </tbody>
            </ProdutoTable>

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
