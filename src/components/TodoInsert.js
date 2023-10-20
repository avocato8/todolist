import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';

function TodoInsert(props){
    const [value, setValue] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        props.onInsert(value);
        setValue('');
        e.preventDefault();    //새로고침 방지
    },[props.onInsert, value])

    return(
        <div className="TodoInsert" onSubmit={onSubmit}>
            <form>
                <input placeholder="할일을 입력하세요" value={value} onChange={onChange}></input>
                <button type="submit">
                    <MdAdd></MdAdd>
                </button>
            </form>
        </div>
    )
}

export default TodoInsert;