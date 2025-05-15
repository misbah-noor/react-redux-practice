import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function Counter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div className='flex flex-col items-center gap-4 mt-10 text-xl '>
            <p>Count: {count}</p>
            <div className='flex gap-3'>
             <button onClick={()=>dispatch(increment())} className='bg-green-500 px-4 py-1 rounded'>+</button>
                 <button onClick={()=>dispatch(decrement())} className='bg-red-500 px-4 py-1 rounded'>-</button>
            </div>      
        </div>
    );
}