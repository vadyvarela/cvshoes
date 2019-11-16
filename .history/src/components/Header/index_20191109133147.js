import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, CVart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="RocketCV" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu Carinho</strong>
                    <span> 3 Items</span>
                </div>
            </Cart>
            <MdShoppingBasket size={36} color="#fff" />
        </Container>
    );
}
