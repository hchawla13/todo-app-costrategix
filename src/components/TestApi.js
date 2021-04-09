import {useEffect} from 'react';
import axios from 'axios';
const TestApi = () => {
    const revokeTokenEndpoint = 'https://qalius.myloweslife.com/affwebservices/CASSO/oidc/csg/revoke'
    const revokeToken = () => {
        const data = {
            token: 'MGNjMzMyYTUtMDdiYy00OGY4LTgzMTAtNmU0MDYzY2UxZDUwLUp2b2JvcHVYY1RTS0VoOU85TDBURWVSbzRPdz0=',
            client_id: '00053f8d-a5a5-106d-8039-a0cfac1d0000',
            token_type_hint: 'access_token'
        };
        // const promise = fetch(revokeTokenEndpoint, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //     body: JSON.stringify(data),
        // }).then(resp => resp.json());
        // return promise;
        return axios.post(revokeTokenEndpoint, data);
    }
    
    const handleLogout = async () => {
        const rt = await revokeToken();
        console.log("revoke token response is",rt);
    }
    useEffect(()=>{
        handleLogout();
    },[])
    return (
        <div>Test</div>
    )
}
export default TestApi;