import { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: ""
	});

	const {loading, signup} = useSignUp();

	const handleCheckboxChange = (gender: "male" | "female") => {
		setInputs({...inputs, gender});
	}

	const handleSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
		signup(inputs);
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-100 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-neutral-50'>
				
				<h1 className='text-3xl font-semibold text-center text-blue-600'>ChatApp</h1>
				<h3 className='text-xl font-semibold text-center text-black mt-1'>Sign Up</h3>

				<form onSubmit={handleSubmitForm}>
					<input 
						type='text' 
						placeholder='Full Name' 
						className='w-full input input-bordered input-neutral h-10 mt-3' 
						value={inputs.fullName}
						onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
					/>

					<input 
						type='text' 
						placeholder='Username' 
						className='w-full input input-bordered input-neutral h-10 mt-3' 
						value={inputs.username}
						onChange={(e) => setInputs({...inputs, username: e.target.value})}
					/>

					<input
						type='password'
						placeholder='Password'
						className='w-full input input-bordered input-neutral h-10 mt-3'
						value={inputs.password}
						onChange={(e) => setInputs({...inputs, password: e.target.value})}
					/>

					<input
						type='password'
						placeholder='Confirm Password'
						className='w-full input input-bordered input-neutral h-10 mt-3'
						value={inputs.confirmPassword}
						onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
					/>

					<GenderCheckbox 
						selectedGender={inputs.gender}
						onCheckboxChange={handleCheckboxChange}
					/>

					<Link 
						to='/login'
						className='text-sm  hover:underline text-black hover:text-blue-600 mt-3 inline-block'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-neutral btn-block btn-sm mt-3 btn-login bg-blue-600' disabled={loading}>
							{ loading ? "Loading..." : "Sign Up" }
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
