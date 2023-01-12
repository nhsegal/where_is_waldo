import './Modal.css'
import { Link } from 'react-router-dom'

const Modal = (props) => {
  if (props.fast) {
    return (
      <div className = 'timeForm'>
        <h1>Congratulations!</h1>
        <div>You made the top five!</div>
        <div>Enter your name below:</div>
        <form>
        <input label='name'></input>
        <button type='submit'>submit</button>
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