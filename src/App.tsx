import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

let videoWatchIndex = 115;

// const handleClick = () => {
//     videoWatchIndex = videoWatchIndex + 1;
//     console.log(videoWatchIndex);
// };

function App() {

    const [videoWatch, setVideoWatch] = React.useState(115);

    const handleAddClick = () => {
        setVideoWatch(prevState => prevState + 1);
        videoWatchIndex = videoWatchIndex + 1;
        console.log(videoWatchIndex);
    };

    const handleReduceClick = () => {
        setVideoWatch(prevState => prevState - 1);
        videoWatchIndex = videoWatchIndex - 1;
        console.log(videoWatchIndex);
    };

  return (
    <div className="App">
      <h3>Next Video to Watch</h3>
        <h1>{videoWatch}</h1>
        <Button variant="primary" onClick={handleAddClick}>Watched It!</Button>
        <Button variant="danger" onClick={handleReduceClick}>Remove It!</Button>
    </div>
  );
}

export default App;
