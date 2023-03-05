import "./Modal.css";

function Modal({ comment }) {
    function addStringbehind(str) {
        str = str.toUpperCase()
        console.log(str)
    }
  return (
    <>
      <div className="modal">
        <p className="modal__title">{comment}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={()=>addStringbehind("cancel")}
          >
            Cancel
          </button>
          
          <button className="btn" 
          onClick={() => console.log("confirmed".toUpperCase())}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
