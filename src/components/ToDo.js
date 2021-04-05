import {useEffect} from 'react';
import {makeid, sha256} from '../utils/utilFn';
import base64url from "base64url";
const ToDo = () => {
    const redirect_uri = 'https://costrategix.herokuapp.com';
    const client_id = '0oafzo9ipaqvfVTyG5d6';
    useEffect(()=>{
        debugger;
        const browser_url = window.location.href;
        //var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
        var url = new URL(browser_url);
        var c = url.searchParams.get("code");
        console.log(c);
        if(c){
            console.log("user has successfully loged in--------now get access token")
            const token_endpoint = 'https://dev-19157432.okta.com/oauth2/default/v1/token';
            // fetch('token_endpoint')
            // .then((res)=>{
            //     console.log("response from access token",res)
            // })


            const data = { 
                grant_type: 'authorization_code',
                code:c,
                redirect_uri:redirect_uri,
                code_verifier:localStorage.getItem('randomstring'),
                client_id:client_id
            };

            fetch(token_endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('response from access token SUCCESS:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });


        }
        else{
            const randomString = makeid(43)
            console.log("random string",randomString);
            localStorage.setItem('randomstring',randomString)
            const sha256Val = sha256(randomString);
            console.log(sha256Val,sha256Val);
            const code_challenge = base64url(sha256(randomString))
            console.log("code_challenge",code_challenge);
            
            const authorization_endpoint = 'https://dev-19157432.okta.com/oauth2/default/v1/authorize';
            
            
            
            
            

            const login_url = `${authorization_endpoint}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=photos&state=123&code_challenge=${code_challenge}&code_challenge_method=S256`;
            console.log("login_url",login_url)
            window.location.replace(login_url);
        }






        
            

            // fetch('https://dev-19157432.okta.com/oauth2/default/v1/token',{
            //     method: 'POST',
            //     body:'grant_type=authorization_code&redirect_uri=https://costrategix.herokuapp.com&client_id=0oafe6lyeyRtFNAZR5d6&client_secret=4PgQ8Jb_5EBvIniYPb4293zwTAcpMUo6hpURYpG6&code_verifier=80e1ab63c52f80f7d87c34a36182540e95428b392b8dd3ef557d3b3e&code=t02h0wtyrkidynnynBXQPO1SVxQ3g4NH63eLG2iU6Fg'
            // })
            // .then((res)=>res.json())
            // .then((res)=>{
            //     console.log("hello",res)
            // })
        
        
    },[])
    
    return (
        <div>
            This is the basic app to be deployed
            Purpose is to check for sso
        </div>
    )
}
export default ToDo;