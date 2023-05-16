import {  useState } from "react";
import {navigate} from 'react-router-dom';




const Dashboard = () => {
    const [authenticated, setauthenticated] = useState('');
    useState(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

if (!authenticated) {
  return
  <navigate replace to='/login'/>;

} else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
    }
};
export default Dashboard;