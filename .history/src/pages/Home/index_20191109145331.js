import React, { Component } from 'react';

import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

import { ProductList } from './styles';

export default class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');
        this.setState({ products: response.data });
    }

    render() {
        const { products } = this.state;
        return (
            <ProductList>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.price}</span>

                        <button type="button">
                            <div>
                                <MdShoppingCart size={16} color="#fff" />
                            </div>
                            <span> ADICIONAR AO CARINHO</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}
