import imageInSrc from './imageInSrc.jpg';
import './App.css';
import './style.css';

function App() {
    return ( <
        div className = 'App' >
        <
        div >
        <
        div style = {
            { border: 'solid 1px black', maxWidth: '100vw' }
        } >
        <
        h1 className = "title red" > Asma < /h1>  <
        img className = "image"
        src = { imageInSrc }
        alt = 'imagInSrc' /
        >

        <
        img className = "image"
        src = "/imageInPublic.jpg" / >
        <
        /div> <
        video width = { 320 }
        height = { 240 }
        controls >
        <
        source src = "myVideo.mp4"
        type = "video/mp4" / >
        <
        /video> < /
        div >

        <
        /div>
    );
}

export default App;