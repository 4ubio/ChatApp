import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversations";

const Conversation = ({ conversation }: { conversation: ConversationType }) => {
	const { setSelectedConversation, selectedConversation } = useConversation();
	const isSelected = selectedConversation?.id === conversation.id;

	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation.id);

	return (
		<>
			<div 
				className={`flex gap-2 items-center hover:bg-blue-500 rounded p-2 mt-1 mb-1 py-1 cursor-pointer ${isSelected ? 'bg-blue-500' : ''}`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
					<div className='w-8 md:w-12 rounded-full'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<p className='font-bold text-neutral text-sm md:text-md'>{conversation.fullName}</p>
				</div>
			</div>
		</>
	);
};
export default Conversation;
