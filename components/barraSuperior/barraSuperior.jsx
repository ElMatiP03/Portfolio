
const BarraSuperior = () => {
	return (
		<div style={{position:"absolute", "right":"0"}}>

		<div className="relative w-full absolute lg:max-w-sm">
        <select className="w-full p-2.5 text-gray-500 bg-transparent border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
          <option>ReactJS Dropdown</option>
          <option>Laravel 9 with React</option>
          <option>React with Tailwind CSS</option>
          <option>React With Headless UI</option>
        </select>
      </div>
		</div>
	);
};

export default BarraSuperior;
