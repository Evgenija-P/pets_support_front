import { Helmet } from "react-helmet";
import UserInformation from "../components/UserInformation/UserInformatiom";

const UserPage = () => {
	return (
		<div>
			<Helmet>
				<title>UserPage</title>
			</Helmet>
			<UserInformation/>
		
		</div>
	);
};
export default UserPage;