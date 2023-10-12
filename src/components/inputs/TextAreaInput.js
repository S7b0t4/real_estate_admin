import { useRef } from 'react'

const TextAreaInput = ({inputDescription, setInputValue}) => {
	const textInputRef = useRef()
	return ( 
		<div className='row'>
			<div>{inputDescription}:</div>
			<textarea rows="10" cols="50" ref={textInputRef} type="text" onChange={()=>setInputValue(textInputRef.current.value)}></textarea>
		</div>
	);
}
 
export default TextAreaInput;