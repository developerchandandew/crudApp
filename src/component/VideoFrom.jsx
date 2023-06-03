import {useState,useEffect, useRef} from 'react';
import useDispatch from './Hooks/dispatchH';
import './VideoForm.css';
let VideoForm=({updateVideo})=>{
    const [input,setInput] = useState({title:'',views:'',upload_by:''});
    const inputRef = useRef();
    const dispatch = useDispatch();
    
    const inputHandle=(e)=>{
        setInput({...input,
                [e.target.name]:e.target.value
            })
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        if(updateVideo){
            dispatch({type:'update',payload:input})

        }else{

            dispatch({type:'Add',payload:input})

        }
        setInput({title:'',views:'',upload_by:''})
    }

    useEffect(()=>{
        if(updateVideo){

            setInput(updateVideo);
        }

    inputRef.current.focus()

    },[updateVideo])
    return(
            <div className="form">
                <form>
                <input type="text" ref={inputRef} name='title' onChange={inputHandle} placeholder='title'value={input.title}/>
                <input type="text" name='views'onChange={inputHandle} placeholder='views' value={input.views}/>
                <input type="text" name='upload_by'onChange={inputHandle} placeholder='upload By' value={input.upload_by}/>
                <div className="action">

                <button onClick={submitHandler}>{updateVideo?'Update':'Add'} Data</button>
                </div>
                </form>
            </div>
    )
}
export default VideoForm