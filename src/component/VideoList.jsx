import useVideos from "./Hooks/videosH";
import Video from "./Video"
import './VideoList.css'
let VideoList=({editItem})=>{
  const videos = useVideos();
    return(
        <div className="video_list">
          <h2 className="video_title">Video List</h2>
      {videos.map((video)=>(<Video key={video.id} id={video.id} title={video.title} views={video.views} upload_by={video.upload_by}  editItem={editItem}/>))}
        
        </div>
    )
}
export default VideoList