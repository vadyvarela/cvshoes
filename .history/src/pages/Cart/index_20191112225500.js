import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import formatedPrice from '../../utils/format';

import * as CartAction from '../../store/modules/cart/action';

import { Container, ProdutoTable, Total } from './styles';

function Cart({ cart, removeFromCart, updateAmount }) {
    function increment(product) {
        updateAmount(product.id, product.amount + 1);
    }
    function decrement(product) {
        updateAmount(product.id, product.amount - 1);
    }

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
                    {cart.map(product => (
                        <tr>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong> {product.title}</strong>
                                <span> {product.priceFormatted} </span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        onClick={() => decrement(product)}
                                        type="button"
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        onClick={() => increment(product)}
                                        type="button"
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong> {product.subtotal} </strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
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

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatedPrice(product.price * product.amount),
    })),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
