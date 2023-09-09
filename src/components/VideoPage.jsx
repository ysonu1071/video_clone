import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Skeleton from '@mui/material/Skeleton';
import Navbar from './Navbar'
import MovieCard from './MovieCard';
import Footer from './Footer';



function VideoPage() {
  const[movies, setMovies] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[activePage, setActivePage] = useState(1);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  let page = Number(searchParam.get("page"));
  
  if(page !== activePage){
    if(page > 10){
      navigate("/pagenotfound")
    }else{
      setActivePage(page);
    }
  }

  const handlePlayPause = (index) => {
    const videoEls = document.getElementsByTagName("video");
    const imageEls = document.getElementsByTagName("img");

    for (let i = 0; i < videoEls.length; i++) {
      if (i !== index) {
        videoEls[i].pause();
      }
    }
    imageEls[index].style.display = "none";
    videoEls[index].style.zIndex = 10;

    if (videoEls[index].paused) {
      videoEls[index].play();
    } else {
      videoEls[index].pause();
    }
  
  }

  const handleActivePage = (e, value) => {
    navigate({ pathname: "/videos", search: `?page=${value}` });
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://internship-service.onrender.com/videos?page=${activePage-1}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setMovies(result.data.posts);
        setIsLoading(false);
      })
  }, [activePage])

  return (
    <div>
      <Navbar />

      {!isLoading ? <main className='w-full bg-gray-100 min-h-[90vh]'>
        <div className='w-full flex justify-center gap-3 flex-wrap  pt-3 md:px-20'>
          {movies.length > 0 ? movies.map((movie, index) => <MovieCard key={movie.postId} postId={movie.postId} submission={movie.submission} index={index} handlePlayPause={handlePlayPause} />) : null}
        </div>

        <div className='flex justify-center py-12'>
          <Pagination count={10} page={activePage} variant="outlined" shape="rounded" size='small' onChange={handleActivePage} />
        </div>
      </main> :
        <div className='w-full flex justify-center gap-3 flex-wrap md:px-20'>
          <Skeleton variant="rectangular" className='mt-3 rounded-md' width={200} height={350} />
          <Skeleton variant="rectangular" className='mt-3 rounded-md' width={200} height={350} />
          <Skeleton variant="rectangular" className='mt-3 rounded-md' width={200} height={350} />
          <Skeleton variant="rectangular" className='mt-3 rounded-md' width={200} height={350} />
          <Skeleton variant="rectangular" className='mt-3 rounded-md' width={200} height={350} />
          <Skeleton variant="rectangular" className='mt-3 rounded-md' width={200} height={350} />
          <Skeleton variant="rectangular" className='mt-3 rounded-md' width={200} height={350} />
          <Skeleton variant="rectangular" className='mt-3 rounded-md' width={200} height={350} />
          <Skeleton variant="rectangular" className='mt-3 rounded-md' width={200} height={350} />
          <Skeleton variant="rectangular" className='mt-3 rounded-md' width={200} height={350} />

        </div>
      }

      <Footer />
    </div>
  )
}

export default VideoPage;