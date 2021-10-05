import { takeEvery,
        call,
        put } from 'redux-saga/effects';
import { fetchTodosSuccess,
        fetchTodosError,
 } from './actions';
import {getAllTodos, postNewTodo, removeTodo, markTodo, unmarkTodo} from '../../api';

function* fetchTodosAsync() {
    const {data, error, errorText} = yield call(getAllTodos);
    if (error) {
        yield put(fetchTodosError(errorText));
    } else {
        yield put(fetchTodosSuccess(data.todos));
    }
}

function* addNewTodoAsync(action) {
    const {data, error, errorText} = yield call(postNewTodo, action.payload);
    if(error) {
        yield put(fetchTodosError(errorText));
    } else {
        yield put(fetchTodosSuccess(data.todos));
    }

}

function* deleteTodoAsync(action) {
    const {data, error, errorText} = yield call(removeTodo, action.payload);
    if(error) {
        yield put(fetchTodosError(errorText));
    } else {
        yield put(fetchTodosSuccess(data.todos));
    }
}

function* checkTodoAsync(action) {
    const {data, error, errorText} = yield call(markTodo, action.payload);
    if(error) {
        yield put(fetchTodosError(errorText));
    } else {
        yield put(fetchTodosSuccess(data.todos));
    }
}

function* uncheckTodoAsync(action) {
    const {data, error, errorText} = yield call(unmarkTodo, action.payload);
    if(error) {
        yield put(fetchTodosError(errorText));
    } else {
        yield put(fetchTodosSuccess(data.todos));
    }
}

export function* fetchTodosSaga() {
    yield takeEvery(
        'FETCH_TODOS_START',
        fetchTodosAsync
    );
}

export function* addTodoSaga() {
    yield takeEvery(
        'ADD_TODO_ASYNC',
        addNewTodoAsync
    );
}

export function* deleteTodoSaga() {
    yield takeEvery(
        'DELETE_TODO_ASYNC',
        deleteTodoAsync
    );
}

export function* checkTodoSaga() {
    yield takeEvery(
        'CHECK_TODO_ASYNC',
        checkTodoAsync
    );
}

export function* uncheckTodoSaga() {
    yield takeEvery(
        'UNCHECK_TODO_ASYNC',
        uncheckTodoAsync
    );
}

