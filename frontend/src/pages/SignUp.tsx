import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";

const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-100 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-neutral-50'>
				
				<h1 className='text-3xl font-semibold text-center text-blue-600'>ChatApp</h1>
				<h3 className='text-xl font-semibold text-center text-black mt-1'>Sign Up</h3>

				<form>
					<input 
						type='text' 
						placeholder='Full Name' 
						className='w-full input input-bordered input-neutral h-10 mt-3' 
					/>

					<input 
						type='text' 
						placeholder='Username' 
						className='w-full input input-bordered input-neutral h-10 mt-3' 
					/>

					<input
						type='password'
						placeholder='Password'
						className='w-full input input-bordered input-neutral h-10 mt-3'
					/>

					<input
						type='password'
						placeholder='Confirm Password'
						className='w-full input input-bordered input-neutral h-10 mt-3'
					/>

					<GenderCheckbox />

					<Link 
						to='/login'
						className='text-sm  hover:underline text-black hover:text-blue-600 mt-3 inline-block'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-neutral btn-block btn-sm mt-3 btn-login bg-blue-600'>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
