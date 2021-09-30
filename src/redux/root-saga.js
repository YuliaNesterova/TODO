import { all } from 'redux-saga/effects';
import { todosSagas } from './todos/todos.sagas';


function* rootSaga() {
    yield all([
        todosSagas()
    ])
}

export default rootSaga;