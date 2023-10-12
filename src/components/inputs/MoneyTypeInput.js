const MoneyTypeInput = ({ inputDescription, onChangeBoolean, form }) => {

	const mapCost = form.cost.map((i, index) => (
		<div className='colum' key={index}>
			<img src={i.img} alt={i.value} />
			<input type="checkbox" onClick={() => i.value = !i.value}/>
		</div>
	))

	return ( 
		<div className='colum'>
		<div>
			{inputDescription}:
		</div>
		<div className='gap10'>
			{mapCost}
		</div>
	</div>
	);
}
 
export default MoneyTypeInput;