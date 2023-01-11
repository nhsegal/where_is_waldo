import './Modal.css'
const Modal = () => {
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

export default Modal