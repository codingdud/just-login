import axios from '../api/axios';
import { useAuth } from './Auth'; 

const useRefreshToken = () => {
    const auth = useAuth();

    const refresh = async () => {
        const response = await axios.get('/users/refreshToken', {
            withCredentials: true,
            credentials: 'include'
        });
        auth.login(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data);
            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;