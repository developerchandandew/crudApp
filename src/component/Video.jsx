import './Video.css';
import useDispatch from './Hooks/dispatchH';
const Video=(props)=>{
    const {id,title,views,upload_by,editItem} = props;
    const dispatch = useDispatch();
    return(
        <div className="video">
        <img src="https://loremflickr.com/250/250" alt="images" />

<i className="fa-solid fa-trash del"  onClick={()=>dispatch({type:'delete',payload:id})
}></i>
         <i className="fa-solid fa-pen-to-square edit" onClick={()=>editItem(id)}></i>
        <h2 className='title' >{title}</h2>
        <h4 className='views' >{views} views</h4>
        <h4 className='upload' >upload by {upload_by}</h4>
        
        </div >
    )
}
export default Video 