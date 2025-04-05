import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();

	return (
		<div className='py-2 mt-2 flex flex-col overflow-auto'>
			<h1 className="font-semibold mb-2 text-neutral">User's list</h1>
			{conversations.map ((conversation) => (
				<Conversation key={conversation.id} conversation={conversation} />
			))}
			{loading ? (
				<span className="loading loading-spinner mx-auto text-blue-600" />
			): null}
		</div>
	);
};
export default Conversations;
