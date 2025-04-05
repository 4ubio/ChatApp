import { useState } from "react";
import useConversation from "../zustand/useConversations";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message: string) => {
		if (!selectedConversation) return;
		setLoading(true);
		try {
            const token: string | null = localStorage.getItem("token");
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/messages/send/${selectedConversation.id}`, {
                method: "POST",
				headers: {
					"Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
				},
				body: JSON.stringify({ message }),
            });
			const data = await res.json();
			if (data.error) throw new Error(data.error);
			setMessages([...messages, data]);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
}

export default useSendMessage;