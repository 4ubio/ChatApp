import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState<ConversationType[]>([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const token: string | null = localStorage.getItem("token");
                const res = await fetch("/api/messages/conversations", {
                    headers: { "Authorization": `Bearer ${token}`, }
                });
                const data = await res.json();
                if (data.error) { throw new Error(data.error);}
                setConversations(data);
            } catch (error: any) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        getConversations();
    }, []);

    return  { loading, conversations };
};

export default useGetConversations;