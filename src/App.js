import 'bootstrap/dist/css/bootstrap.min.css';
import ColorPicker from "./ColorPicker";

const colors = [
	{ hex: "#0d6efd", name: "Blue", textColor: "white" },
	{ hex: "#6610f2", name: "Indigo", textColor: "white" },
	{ hex: "#6f42c1", name: "Purple", textColor: "white" },
	{ hex: "#d63384", name: "Pink", textColor: "white" },
	{ hex: "#dc3545", name: "Red", textColor: "white" },
	{ hex: "#fd7e14", name: "Orange", textColor: "black" },
	{ hex: "#ffc107", name: "Yellow", textColor: "black" },
	{ hex: "#198754", name: "Green", textColor: "white" },
	{ hex: "#20c997", name: "Teal", textColor: "black" },
	{ hex: "#0dcaf0", name: "Cyan", textColor: "black" },
	{ hex: "#adb5bd", name: "Gray", textColor: "black" },
	{ hex: "#ffffff", name: "White", textColor: "black" }
]

function App() {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
			<ColorPicker colors={colors} />
    </div>
  );
}

export default App;
