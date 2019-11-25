import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';
import * as CartAction from '../../store/modules/cart/action';

import { ProductList } from './styles';

export default function Home() {
    const [products, setProduct] = useState([]);

    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;
            return sumAmount;
        }, {})
    );

    const dispatch = useDispatch();

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

    function handleAddProduct(id) {
        dispatch(CartAction.addToCartRequest(id));
    }

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button
                        type="button"
                        onClick={() => handleAddProduct(product.id)}
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
