const NumInfoInput = () => {
	const obj = {
		InputBlocks:[]
	}

	const addInputBlock = () => {
    obj.InputBlocks.push({ id: Date.now() })
		console.log(obj)
  };

  const removeInputBlock = (id) => {
    /* const updatedInputBlocks = inputBlocks.filter((block) => block.id !== id);
    setInputBlocks(updatedInputBlocks); */
  };

	return (
		<div>
			<button onClick={addInputBlock}>+</button>
		</div>
	);
}
 
export default NumInfoInput;