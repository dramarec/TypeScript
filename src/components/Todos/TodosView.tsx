import React, { useState, useEffect, useMemo } from 'react';
import shortid from 'shortid';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';
import Stats from './Stats';
import ITodo from '../../interfaces/Todo.interface';

const barStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 20,
};

const getInitialTodoState = () => {
    // const savedTodos = localStorage.getItem('todos') ?? ''; //new chaining
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
};

const TodosView = () => {
    const [todos, setTodos] = useState<ITodo[]>(getInitialTodoState);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        const todo = {
            id: shortid.generate(),
            text,
            completed: false,
        };

        setTodos(todos => [todo, ...todos]);
    };

    const deleteTodo = (todoId: string) => {
        setTodos(todos => todos.filter(todo => todo.id !== todoId));
    };

    const toggleCompleted = (todoId: string) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            ),
        );
    };

    const changeFilter = (filter: string) => {
        setFilter(filter);
    };

    const visibleTodos = useMemo(() => {
        const normalizedFilter = filter.toLowerCase();
        return todos.filter(todo =>
            todo.text.toLowerCase().includes(normalizedFilter),
        );
    }, [filter, todos]);

    const completedTodoCount = useMemo(() => {
        return todos.reduce(
            (total, todo) => (todo.completed ? total + 1 : total),
            0,
        );
    }, [todos]);

    return (
        <>
            <TodoEditor onSubmit={addTodo} />

            <div style={barStyles}>
                <Filter value={filter} onChange={changeFilter} />
                <Stats total={todos.length} completed={completedTodoCount} />
            </div>

            <TodoList
                todos={visibleTodos}
                onDeleteTodo={deleteTodo}
                onToggleCompleted={toggleCompleted}
            />
        </>
    );
};

export default TodosView;

// ===============================================
// import React, { useState  } from 'react';
// import shortid from 'shortid';
// import TodoList from './TodoList';
// import TodoEditor from './TodoEditor';
// import Filter from './Filter';
// import Stats from './Stats';
// import initialTodos from './todos.json';
// import ITodo from '../../interfaces/Todo.interface';

// const barStyles = {
//     display: 'flex',
//     alignItems: 'flex-end',
//     marginBottom: 20,
// };

// // type Todo = {
// //     id: string;
// //     text: string;
// //     completed: boolean;
// // };

// const TodosView = () => {
//     // const [todos, setTodos] = useState<Todo[]>(initialTodos);
//     const [todos, setTodos] = useState<ITodo[]>(initialTodos);
//     const [filter, setFilter] = useState('');

//     const addTodo = (text: string) => {
//         const todo = {
//             id: shortid.generate(),
//             text,
//             completed: false,
//         };

//         setTodos(todos => [todo, ...todos]);
//     };

//     const deleteTodo = (todoId: string) => {
//         setTodos(todos => todos.filter(todo => todo.id !== todoId));
//     };

//     const toggleCompleted = (todoId: string) => {
//         setTodos(todos =>
//             todos.map(todo =>
//                 todo.id === todoId
//                     ? { ...todo, completed: !todo.completed }
//                     : todo,
//             ),
//         );
//     };

//     const changeFilter = (filter: string) => {
//         setFilter(filter);
//     };
//     // !-------------------------------------------------------
//     // ! без memo() эти функции проганяются на каждлм рендере!!!
//     //* useMemo  использовать мемомизацию для вычесляемых значений фильтры, редюсы, мепы итд
//     //? useCallback когда передаем функцию в глубину компоненту. Спорный хук, надо замерять!
//     const getVisibleTodos = () => {
//         console.log('{*} ===> getVisibleTodos ===> ');
//         const normalizedFilter = filter.toLowerCase();
//         return todos.filter(todo =>
//             todo.text.toLowerCase().includes(normalizedFilter),
//         );
//     };

//     const calculateCompletedTodos = () => {
//         console.log('{*} ===> calculateCompletedTodos ===> ');
//         return todos.reduce(
//             (total, todo) => (todo.completed ? total + 1 : total),
//             0,
//         );
//     };

//     const visibleTodos = getVisibleTodos();
//     const completedTodoCount = calculateCompletedTodos();
//     // !-------------------------------------------------------
//     return (
//         <>
//             <TodoEditor onSubmit={addTodo} />

//             <div style={barStyles}>
//                 <Filter value={filter} onChange={changeFilter} />
//                 <Stats total={todos.length} completed={completedTodoCount} />
//             </div>

//             <TodoList
//                 todos={visibleTodos}
//                 onDeleteTodo={deleteTodo}
//                 onToggleCompleted={toggleCompleted}
//             />
//         </>
//     );
// };

// export default TodosView;
