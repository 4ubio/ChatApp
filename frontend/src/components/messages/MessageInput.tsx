import { Send } from "lucide-react";

const MessageInput = () => {
	return (
		<form className="w-full flex items-center gap-2 px-4 mb-3">
			<input
				type="text"
				className="input input-sm md:input-md input-bordered input-neutral w-full"
				placeholder="Send a message"
			/>

			<button
				type="submit"
				className="btn btn-sm md:btn-md btn-circle bg-blue-600 text-white"
			>
				<Send className="w-5 h-5 md:w-6 md:h-6 text-white" />
			</button>
		</form>
	);
};
export default MessageInput;
