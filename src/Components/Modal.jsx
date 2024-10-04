import React from 'react'

function Modal({children, openModal, setOpenModal}) {
	return (
		<div onClick={(e) => e.target.id == 'wrapper' ? setOpenModal(false) : setOpenModal(true)} id='wrapper' className={`${openModal ? "scale-100" : "scale-0"} fixed duration-500 inset-0 backdrop-blur bg-[#00000049]`}>
			<div className="w-[500px] absolute mx-auto right-0 left-0 mt-[80px] p-3 bg-[#272a559a] rounded-md">
				{children}
			</div>
		</div>
	)
}

export default Modal