import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex h-[90vh] w-full md:max-w-screen-md rounded-lg overflow-hidden bg-neutral-50'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
