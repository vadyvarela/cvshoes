import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';
import * as CartAction from '../../store/modules/cart/action';

import { ProductList } from './styles';

function Home({ amount, addToCartRequest }) {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            setProduct(data);
        }
        loadProducts();
    }, []);

    function handleAddProduct = id => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
    };

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button
                        type="button"
                        onClick={() => this.handleAddProduct(product.id)}
                    >
                        <div>
                            <MdShoppingCart size={16} color="#fff" />{' '}
                            {amount[product.id] || 0}
                        </div>
                        <span> ADICIONAR AO CARINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
