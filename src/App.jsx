import { useContext, useReducer, useState } from 'react';
import './App.css'
import VideoForm from './component/VideoFrom';
import videoArr from './component/data/VideoDB';
import VideoList from './component/VideoList';
import { Reducer } from 'react';
import ThemeContext from './component/context/ThemeContext';
import VideosContext from './component/context/VideosContext';
import DispatchContext from './component/context/DispatchContext';
import useTheme from './component/Hooks/themeH';
function App() {
  const [updateVideo,setUpdateVideo] = useState(null);
  const [mode,setMode] = useState('black');
  const theme = useTheme();
   
  let videoReducer=(videos,action)=>{
    switch(action.type){
      case 'Add':
      return [...videos,{...action.payload,id:videos.length + 1}]

      case 'delete':
        return (videos.filter((item)=> item.id !== action.payload))
      case 'update':
        
          const index = videos.findIndex((item)=>item.id === action.payload.id)
          const newVideo = [...videos]
          newVideo.splice(index,1,action.payload)
          setUpdateVideo(null);
          return newVideo
      default:
        return videos
    }
  }  
  const[videos,dispatch] = useReducer(videoReducer,videoArr);
  
  

    let editItem=(id)=>{
        setUpdateVideo(videos.find((item)=>item.id === id))
     }

 return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <DispatchContext.Provider value={dispatch}> 
    <div className={`main ${mode}`}>
      <button className='changer' onClick={()=>setMode(mode == 'black'? null:'black')}>{mode=='black'?'light':'dark'}</button>
      <VideoForm   updateVideo={updateVideo}/>
      <VideoList editItem={editItem}  />
    </div> 
    </DispatchContext.Provider>
    </VideosContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
