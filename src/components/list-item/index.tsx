import './index.less';
import { IListContentProps } from '../list-container/index';

interface IListItemProps extends IListContentProps {
    updateTodo: (id: number, check: boolean) => void;
    delTodo: (id: number) => void;
}

function ListItem(props: IListItemProps) {
    const { id, content, check, updateTodo, delTodo } = props;

    const onChange = (e: React.ChangeEvent) => {
        updateTodo(id, (e.target as HTMLInputElement).checked);
    };

    const onClick = () => {
        delTodo(id);
    };

    return <div className="list-item">
        <div className="list-item-content">
            <span className="list-item-input">{content}</span>
        </div>
        <input type="checkbox" checked={check} onChange={onChange}></input>
        <div className="list-item-delete" onClick={onClick}>
            <svg width={20} height={20}>
                <path d="M8.5 4h3a1.5 1.5 0 00-3 0zm-1 0a2.5 2.5 0 015 0h5a.5.5 0 010 1h-1.05l-1.2 10.34A3 3 0 0112.27 18H7.73a3 3 0 01-2.98-2.66L3.55 5H2.5a.5.5 0 010-1h5zM5.74 15.23A2 2 0 007.73 17h4.54a2 2 0 001.99-1.77L15.44 5H4.56l1.18 10.23zM8.5 7.5c.28 0 .5.22.5.5v6a.5.5 0 01-1 0V8c0-.28.22-.5.5-.5zM12 8a.5.5 0 00-1 0v6a.5.5 0 001 0V8z" fill="currentColor"></path>
            </svg>
        </div>
    </div>;
}

export default ListItem;
