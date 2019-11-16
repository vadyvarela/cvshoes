import React, { Component } from 'react';

import { MdShoppingCart } from 'react-icons/md';
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
        return (
            <ProductList>
                <li>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTn2CndS6748q3ddDtnjmaoPTDUlMbxY8TPrz99cft6BSd-gJV1"
                        alt=""
                    />
                    <strong>Jordan flight</strong>
                    <span>12.000 CVE</span>

                    <button type="button">
                        <div>
                            <MdShoppingCart size={16} color="#fff" />
                        </div>
                        <span> ADICIONAR AO CARINHO</span>
                    </button>
                </li>
            </ProductList>
        );
    }
}
