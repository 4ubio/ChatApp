import { MessageCircle } from "lucide-react";
import useConversation from "../../zustand/useConversations";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const {selectedConversation} = useConversation()

	return (
		<div className='w-full flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-blue-500 px-4 py-2 mb-2'>
						<span className='label-text text-white'>To: </span> <span className='text-white font-bold'>{selectedConversation.fullName}</span>
					</div>

					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const {authUser} = useAuthContext();

	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-neutral font-semibold flex flex-col items-center gap-2'>
				<p>Welcome, {authUser?.fullName} 👋🏽</p>
				<p>Select a chat to start messaging</p>
				<MessageCircle className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
