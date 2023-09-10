import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

function MovieCard({ postId, submission, index, creator, reaction, comment, handlePlayPause }) {


  return (
    <div className='relative cursor-pointer w-[90vw] h-[90vh] drop-shadow-lg rounded-md md:w-[197px] md:h-[350px]'>
      <img className='w-[90vw] h-[90vh] rounded-md md:w-[200px] md:h-[350px] z-10' src={submission.thumbnail} alt="" onClick={() => handlePlayPause(index)} />

      <div className='w-[90vw] absolute z-20 px-2 left-0 bottom-0 text-white bg-gradient-to-t from-black to-transparent rounded-md md:w-[197px] pb-2'>
        <div className='flex items-center gap-1'>
          <img src={creator.pic} alt="" className='w-[40px] h-[40px] rounded-full'/>
          <p className='truncate'>{creator.handle}</p>
        </div>
        <p className='truncate text-sm'>{submission.description}</p>
      </div>

      <div className='w-[30px] h-[150px] bottom-28 right-3 md:h-[100px] flex justify-center flex-wrap absolute md:bottom-12 z-30 md:right-0 text-white'>
          <FavoriteBorderIcon className=''/>
          <span className='m-0 p-0'>{reaction.count}</span>
          <ModeCommentOutlinedIcon/>
          <span>{comment.count}</span>
      </div>

      <video className='h-[90vh] absolute left-0 top-0 z-[-1] rounded-md md:h-[350px]' onClick={() => handlePlayPause(index)}>
        <source src={submission.mediaUrl} />
      </video>


    </div>
  )
}

export default MovieCard