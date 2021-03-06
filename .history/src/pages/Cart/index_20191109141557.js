import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutlinem, MdDelete } from 'react-icons/md';

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
                        <td>
                            <strong> AIR Jordan Flyght</strong>
                            <span> 12.000 CVE </span>
                        </td>
                        <td>
                            <button type="button">
                                <MdRemoveCircleOutline
                                    size={20}
                                    color="#7159c1"
                                />
                            </button>
                            <input type="number" readOnly value={2} />
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1" />
                            </button>
                        </td>
                        <td>
                            <strong> 24.000 CVE </strong>
                        </td>
                        <td>
                           <button type="button">
                               <MdDelete size={20} color="#7159c1"/>
                               </button>
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
