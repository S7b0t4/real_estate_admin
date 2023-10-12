import { useRef } from 'react'

const TextInput = ({inputDescription, setInputValue}) => {
	const textInputRef = useRef()
	return ( 
		<div className='row'>
			<div>{inputDescription}:</div>
			<input ref={textInputRef} type="text" onChange={()=>setInputValue(textInputRef.current.value)}/>
		</div>
	);
}
 
export default TextInput;