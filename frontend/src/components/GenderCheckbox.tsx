const GenderCheckbox = () => {
	return (
		<div className='flex mt-3'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-black'>Male</span>
					<input type='checkbox' className='checkbox border-slate-900 text-black' />
				</label>
			</div>
			<div className='form-control ml-3'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-black'>Female</span>
					<input type='checkbox' className='checkbox border-slate-900 text-black' />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
