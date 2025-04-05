import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversations";
import toast from "react-hot-toast";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
		const getMessages = async () => {
			if (!selectedConversation) return;
			setLoading(true);
			setMessages([]);
			try {
                const token: string | null = localStorage.getItem("token");
				const res = await fetch(`${import.meta.env.VITE_API_URL}/api/messages/${selectedConversation.id}`, {
                    headers: { "Authorization": `Bearer ${token}`, }
                });
				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "An error occurred");
				setMessages(data);
			} catch (error: any) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getMessages();
	}, [selectedConversation, setMessages]);
    
    return { messages, loading };
};

export default useGetMessages;