import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';
import * as CartAction from '../../store/modules/cart/action';

import { ProductList } from './styles';

class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data });
    }

    handleAddProduct = product => {
        const { addToCart } = this.props;

        addToCart(product);
    };

    render() {
        const { products } = this.state;
        return (
            <ProductList>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button
                            type="button"
                            onClick={() => this.handleAddProduct(product)}
                        >
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

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

export default connect(null, mapDispatchToProps)(Home);
