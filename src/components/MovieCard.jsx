import React from 'react'

function MovieCard({ postId, submission, index, handlePlayPause }) {


  return (
    <div className='relative cursor-pointer w-[90vw] h-[90vh] drop-shadow-lg rounded-md md:w-[197px] md:h-[350px]'>
      <img className='w-[90vw] h-[90vh] rounded-md md:w-[200px] md:h-[350px] z-10' src={submission.thumbnail} alt="" onClick={() => handlePlayPause(index)} />
      <div className='w-[90vw] absolute z-20 px-2 left-0 bottom-0 text-white bg-gradient-to-t from-black to-transparent rounded-md md:w-[197px]'>
        <div className='text-l font-bold'>{submission.title}</div>
        <p className='line-clamp-2 leading-5'>{submission.description}</p>
      </div>
      <video className='h-[90vh] absolute left-0 top-0 z-[-1] rounded-md md:h-[350px]' onClick={() => handlePlayPause(index)}>
        <source src={submission.mediaUrl} />
      </video>
    </div>
  )
}

export default MovieCard