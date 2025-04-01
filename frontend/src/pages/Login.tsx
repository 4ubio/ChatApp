import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-100 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-neutral-50 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				
				<h1 className='text-3xl font-semibold text-center text-blue-600'>ChatApp</h1>
				<h3 className='text-xl font-semibold text-center text-black mt-1'>Log In</h3>

				<form>
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

					<Link 
						to='/signup'
						className='text-sm  hover:underline text-black hover:text-blue-600 mt-3 inline-block'
					>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-neutral btn-block btn-sm mt-3 btn-login bg-blue-600'>Log In</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
