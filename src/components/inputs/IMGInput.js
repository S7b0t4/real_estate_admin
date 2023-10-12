import { useRef } from 'react'

const IMGInput = ({inputDescription, changeEvent, inputMultiple}) => {

	const imgSaveButton = useRef()

	const imgHandlePick = () => {
    imgSaveButton.current.click()
  }

	return ( 
		<div className='row'>
			<div>{inputDescription}:</div>
			<button onClick={imgHandlePick}>ADD IMG</button>
			<input ref={imgSaveButton} multiple={inputMultiple} type="file" onChange={(event)=>{changeEvent(event)}} className='hidden'/>
		</div>
	);
}
 
export default IMGInput;