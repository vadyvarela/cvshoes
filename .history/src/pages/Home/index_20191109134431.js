import React from 'react';

import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkjK-ewe4IsSfoefi_0nem7B4imhdR42y-cSqvnZgRZO2N4QwP"
                    alt=""
                />
                <strong>Jordan flight</strong>
                <span>12.000 CVE</span>

                <button type="button">
                    <div />
                </button>
            </li>
        </ProductList>
    );
}
