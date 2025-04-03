const GenderCheckbox = ({
	selectedGender, 
	onCheckboxChange
}: {
	selectedGender: string;
	onCheckboxChange: (gender: "male" | "female") => void
}) => {
	return (
		<div className='flex mt-3'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-black'>Male</span>
					<input 
						type='checkbox' 
						className='checkbox border-slate-900 text-black' 
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>

			<div className='form-control ml-3'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-black'>Female</span>
					<input 
						type='checkbox' 
						className='checkbox border-slate-900 text-black' 
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;