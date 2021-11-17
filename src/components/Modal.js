import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../redux/actions/modalActions";
import closeIcon from '../images/iconmonstr-x-mark-2-240.png';

function Modal() {
    const modalRef = useRef(null);
    const modal = useSelector(state=> state.modal);
    const title = useSelector(state=> state.modal.title)
    const dispatch = useDispatch();
    useEffect(()=> {
        if(modal.display){
            modalRef.current.classList.add('modal-active')
        }else {
            modalRef.current.classList.remove('modal-active')
        }
    },[modal.display])

    return (
        <div ref={modalRef} className="modal" onClick={(e)=>{
            if (e.target !== e.currentTarget) {
                return
            } else {
                dispatch(hideModal())
            }
        }}>
            <div className="modal-content">
                <img className="modal-close" src={closeIcon} alt="close-ico" onClick={()=>{dispatch(hideModal())}}/>
                <div className="product-title-container">
                    <p><strong>{title}</strong> has been added to your cart</p>
                </div>
                <div className="modal-btn-container">
                    <button type="button" className="close-btn" onClick={()=>{dispatch(hideModal())}}>Close</button>
                    <Link to="/cart">
                    <button type="button" className="checkout-btn" onClick={()=>{dispatch(hideModal())}}>Go To Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Modal
