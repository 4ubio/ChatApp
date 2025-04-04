import { Send } from "lucide-react";
import useSendMessage from "../../hooks/useSendMessages";
import { useState } from "react";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const {loading, sendMessage} = useSendMessage();

	const handleSubmitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!message.trim()) return;
		await sendMessage(message);
		setMessage("");
	}

	return (
		<form className="w-full flex items-center gap-2 px-4 mb-3" onSubmit={handleSubmitMessage}>
			<input
				type="text"
				className="input input-sm md:input-md input-bordered input-neutral w-full"
				placeholder="Send a message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>

			<button
				type="submit"
				className="btn btn-sm md:btn-md btn-circle bg-blue-600 text-white"
			>	
				{loading ? (
					<span className="loading loading-spinner"/>
				) : (
					<Send className="w-5 h-5 md:w-6 md:h-6 text-white" />
				)}
			</button>
		</form>
	);
};
export default MessageInput;
