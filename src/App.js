import {BrowserRouter, Routes, Route} from 'react-router-dom';
import VideoPage from './components/VideoPage';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

function App() {

  return (
    <div className="mw-lg ">
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/videos' element={<VideoPage/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
