import { takeEvery,
        call,
        put } from 'redux-saga/effects';
import { fetchTodosSuccess,
        fetchTodosError,
        addTodo,
        addTodoError,
        deleteTodo,
        deleteTodoError,
        checkTodo,
        checkTodoError,
        uncheckTodo,
        uncheckTodoError } from './todos.actions';
import * as api from '../../fetch/fetch';

function* fetchTodosAsync() {
    try {
        const response = yield call(api.getAllItems);
        yield put(fetchTodosSuccess(response.data));
    } catch(err) {
        yield put(fetchTodosError(err.message));
    }
}

function* addNewTodoAsync(action) {
    try {
        const response = yield call(api.postNewItem, action.payload);
        yield put(addTodo(response.data));
    } catch(err) {
        yield put(addTodoError(err.message));
    }
}

function* deleteTodoAsync(action) {
    try {
        const response = yield call(api.deleteItem, action.payload);
        yield put(deleteTodo(response.data));
    } catch(err) {
        yield put(deleteTodoError(err.message));
    }
}

function* checkTodoAsync(action) {
    try {
        const response = yield call(api.checkItem, action.payload);
        yield put(checkTodo(response.data));
    } catch(err) {
        yield put(checkTodoError(err.message));
    }
}

function* uncheckTodoAsync(action) {
    try {
        const response = yield call(api.uncheckItem, action.payload);
        yield put(uncheckTodo(response.data));
    } catch(err) {
       yield put(uncheckTodoError(err.message));
    }
}

export function* todosSagas() {
    yield takeEvery(
        'FETCH_TODOS_START',
        fetchTodosAsync
    );
    yield takeEvery(
        'ADD_TODO_ASYNC',
        addNewTodoAsync
    );
    yield takeEvery(
        'DELETE_TODO_ASYNC',
        deleteTodoAsync
    );
    yield takeEvery(
        'CHECK_TODO_ASYNC',
        checkTodoAsync
    );
    yield takeEvery(
        'UNCHECK_TODO_ASYNC',
        uncheckTodoAsync
    );
}

