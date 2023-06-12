import 'bootstrap/dist/css/bootstrap.min.css';

const Color = ({ hex, name, textColor, colorPick }) => {
	return (
		<span className="text-center col-2 p-2 border border-black mx-4 my-3" 
		style={{backgroundColor: hex, color: textColor }} 
		onClick={colorPick}>
				<p className="m-0" style={{backgroundColor: hex, color: textColor }}>{name}</p>
		</span>
	)
}

export default Color;