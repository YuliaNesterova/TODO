import { memo } from 'react';
import { Form } from '../form/form';
import { TodoList } from '../todo-list/todo-list';

export const Main = memo(({ onAddTodo, onDeleteTodo, onMarkTodo, onUnmarkTodo, todos }) => {
    return (
        <section className="main">
            <Form onAddTodo={onAddTodo}/>
            <TodoList onDeleteTodo={onDeleteTodo} onMarkTodo={onMarkTodo} onUnmarkTodo={onUnmarkTodo}
                  todos={todos} />
        </section>
    )
})