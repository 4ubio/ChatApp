import { LogOut } from "lucide-react";
import useLogout from "../../hooks/useLogOut";

const LogoutButton = () => {
	const {logout} = useLogout();

	return (
		<div className='mt-auto'>
			<LogOut className='w-6 h-6 text-blue-600 cursor-pointer' onClick={logout}/>
		</div>
	);
};
export default LogoutButton;
