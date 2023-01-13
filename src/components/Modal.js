import "./Modal.css";
import { Link, useNavigate} from 'react-router-dom';
import { database } from "../firebase";
import { collection, addDoc, } from "firebase/firestore";

const Modal = (props) => {
  const navigate = useNavigate();
  if (props.fast) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
       addDoc(collection(database, "bestTimes"), {
        name: formData.get('name'),
        time: formData.get('time')
      }).then( props.setCheckTimes(()=>true))
      navigate('/')

    };
    return (
      <div className="timeForm">
        <h1>Congratulations!</h1>
        <div>You made the top five!</div>
        <div>Enter your name below:</div>
        <form method="post" onSubmit={handleSubmit} >
          <div>
            <label>
              Name: 
              <input type="text" name="name" required maxLength="10"></input>
            </label>
          </div>
          <div>
            <label>
              Time: 
              <input
                type="text"
                name="time"
                value={props.endTime}
                onChange={()=>{}}
                className="timeInput"></input>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <div className="gameOver">
      <h1>You Finished!</h1>
      <Link to="/" aria-label="Home">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default Modal;
