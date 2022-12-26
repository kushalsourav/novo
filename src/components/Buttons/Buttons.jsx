
import './Buttons.css';


const Buttons = ({video, setData, postToast, postUserLikes}) => {
    return(
        <div className="buttons">
            <div>
            <button className="btn btn-tertiary" onClick={() => {
                 postUserLikes(video,setData, postToast)
             }}>like</button>
            </div>
            <button className="btn btn-tertiary">watchLater</button>
            <button className="btn btn-tertiary">playlist</button>
        
        </div>
    );
};

export default Buttons;