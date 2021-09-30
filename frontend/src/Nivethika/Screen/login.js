import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Login = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [cookies, setCookie] = useCookies(['user']);

   const navigate = (e, email) => {

      window.location = `/viewcart/${name}`
   };
   const handle = () => {
      setCookie('Name', name, { path: '/' });
      setCookie('Password', pwd, { path: '/' });


   };
   return (
      <div className="App">
         <h1>Name of the user:</h1>
         <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <h1>Password of the user:</h1>
         <input
            type="password"
            placeholder="name"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
         />
         <div>
            <button onClick={handle}>Set Cookie</button>
            <button onClick={e => navigate(e, name)}>Login</button>
         </div>


         <br />
         {cookies.Name && (
            <div>
               Name: <p>{cookies.Name}</p>
            </div>
         )}
         {cookies.Password && (
            <div>
               Password: <p>{cookies.Password}</p>
            </div>
         )}
      </div>



   );
};
export default Login;