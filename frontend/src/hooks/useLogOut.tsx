import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		setLoading(true);
		try {
			const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
				method: "POST",
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error);
			localStorage.clear();
			setAuthUser(null);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default useLogout;