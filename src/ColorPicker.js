import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Color from "./Color";

const ColorPicker = ({ colors }) => {
	const [bgColor, setBgColor] = useState("");
	const [textColor, setTextColor] = useState("");
	const [vis, setVis] = useState(0)

	const showColorPicker = () => {
		setVis(100);
	}

	const handleColorPick = (e) => {
		setBgColor(e.target.style.backgroundColor);
		setTextColor(e.target.style.color);
		setVis(0);
	}

	return (
		<div className="grid">
			<div className="row justify-content-center" style={{ opacity: vis }}>
			{ colors.map(data => <Color key={data.hex} { ...data } colorPick={handleColorPick} />) }
			</div>
			<div className="row justify-content-center mt-5">
				<button id="colorShift"
				style={{backgroundColor: bgColor, color: textColor }} 
				className="col-2 py-2 border border-black"
				onClick={showColorPicker}>Select Color</button>
			</div>
		</div>
	)
}

export default ColorPicker;