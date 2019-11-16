import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../utils/format';

import { addToCartSuccess, updateAmountSuccess } from './action';

function* addToCart({ id }) {
    const productExist = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExist ? productExist.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora do estoque');
        return;
    }

    if (productExist) {
        yield put(updateAmountSuccess(id, amount));
        toast.warning('Produto já adicionado, amumentado apenas quantidade');
    } else {
        const response = yield call(api.get, `/products/${id}`);
        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        toast.success('Produto adicionado com sucesso no estoque');

        yield put(addToCartSuccess(data));
        history.push('/cart');
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const stock = yield call(api.get, `stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora do estoque');
        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
