import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem.jsx';
import { useTodoState } from '../TodoContext.jsx';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;