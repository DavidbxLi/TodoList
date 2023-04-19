import './index.less';
import ListItem from '../list-item';
import { KeyboardEventHandler, useState } from 'react';

interface IListContentProps {
    id: number;
    content: string;
    check: boolean;
}

function ListContainer() {
    // const listContents = [
    //     {
    //         id: Math.floor(9999999 * Math.random()),
    //         content: 'I have so many things to do, especially to find a job. What is more, finish this todo list',
    //         check: false,
    //     }
    // ];

    const [todoList, setTodoList] = useState<IListContentProps[]>([]);

    // 添加todo
    const addTodo = (todoObj: IListContentProps) => {
        const newTodos = [todoObj, ...todoList];
        setTodoList(newTodos);
    };

    const delTodo = (id: number) => {
        const newTodoList = todoList.filter(item => item.id !== id);
        console.log(id, todoList);
        setTodoList(newTodoList);
    };

    const updateTodo = (id: number, check: boolean) => {
        const newTodos = todoList.map(item => {
            if (item.id === id) {
                item.check = check;
            }

            return item;
        });
        setTodoList(newTodos);
    };

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key !== 'Enter') return;
        if ((e.target as HTMLInputElement).value.trim() === '') {
            return console.warn('请输入代办事项！');
        }
        const listContent: IListContentProps = {
            id: Math.floor(9999999 * Math.random()),
            content: (e.target as HTMLInputElement).value,
            check: false,
        };
        addTodo(listContent);

        // 清空输入框
        (e.target as HTMLInputElement).value = '';
    };

    return <div className="container">
        <div className="list-container">
            <div className="input-container">
                <input type="text" placeholder="add a todo" onKeyDown={onKeyDown} />
            </div>
            {
                todoList.map((listContent, index) => <ListItem 
                    key={index} 
                    id={listContent.id}
                    content={listContent.content}
                    check={listContent.check}
                    delTodo={delTodo}
                    updateTodo={updateTodo}
                />)
            }
        </div>
    </div>;
}

export default ListContainer;
export type {
    IListContentProps
};