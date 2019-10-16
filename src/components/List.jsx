import React from 'react';
const List = (props) => {
    const { todos, loading, onTogle } = props;
    

    return (
        <div className={'todo-list list-group'}>
            {
                todos.map(todo => (
                    <div 
                        className={'todo list-group-item justify-content-between'}
                        key={todo.id}
                    >
                        <label>
                            <input 
                                type={'checkbox'} 
                                checked={todo.completed}
                                onChange={() => onTogle(todo.id)}
                             />
                             {todo.title}
                        </label>
                        <button
                            className={'btn btn-primary btn-sm'}
                        >
                            delete
                        </button>
                    </div>
                ))
            }
        </div>
    )
}
export default List;