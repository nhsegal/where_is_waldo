import './Modal.css'
import { Form, Link } from 'react-router-dom'

const Modal = (props) => {
  if (props.fast) {
    const handleSubmit = (e) =>{
      e.preventDefault();
     const formData = new FormData(e.target)
     for (const value of formData.values()) {
      console.log(value);
    }
    }
    return (
      <div className = 'timeForm'>
        <h1>Congratulations!</h1>
        <div>You made the top five!</div>
        <div>Enter your name below:</div>
            <form method="post" onSubmit={handleSubmit}>
            <div>
            <label>
            Name:
            <input type="text" name="name"></input>
          </label>
            </div>
        <div>
        <label>
            Time:
            <input type="text" name="time" value={props.endTime} className='timeInput'></input>
          </label>
        </div>
        
       
        <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }

  return (
    <div className = 'gameOver'>
      <h1>You Finished!</h1>
      <Link to="/" aria-label="Home">
     <button>Return Home</button>
    </Link>
     
    </div>
  )

}

export default Modal