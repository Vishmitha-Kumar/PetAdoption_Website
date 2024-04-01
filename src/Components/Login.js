// import React, { useState } from 'react';
// import Nav from './Nav';
// import '../Assets/Css/nav.css';
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// function Login() 
// {

//   const navH = useNavigate();

//   const[data,setData]=useState({
//     email:'',
//     password:''
//   })
//   // const [email, setUsername] = useState('');
//   // const [password, setPassword] = useState('');

//   // const handleChange = (e) => {
//   //   setUsername(e.target.value);
//   // };

//   // const handlePasswordChange = (e) => {
//   //   setPassword(e.target.value);
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   const handleChange=(e)=>{
//     setData({...data,[e.target.id]:e.target.value})
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.get("http://localhost:8080/api/v1/user/get",data)
//     .then(response=>{
//       if(response==true){
//         {
//           toast.info('Welcome !', {
//             position: "bottom-right",
//               autoClose: 1500,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//               theme: "dark",
//             });
//             setTimeout(() => {
//               // history('/home')
//               navH('/welcome')
//           }, 1800)
//       }

//    else {
//       toast.error('Invaild Username (or) Password', {
//         position: "bottom-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//         });
   
//     }
//   };

//   return (
//     <div>
//       <div className="wrapper">
//         <div className="register">
//           <form onSubmit={handleSubmit}>
//             <h1>Petty Pet</h1>
//             <h3>Login</h3>
            
//              <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               className="auth-inputr"
//               required
              
//               onChange={handleChange}
//             />
//             <input
//               type="password"
//               id="passwoed"
//               placeholder="Password "
//               className="auth-input"
//               required
//               // value={password}
//               onChange={handleChange}
//             />

//             <input type="submit" value="Login" className="auth-bts" />

//           </form>
//         </div>
//       </div>
//       <ToastContainer
//         position="bottom-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </div>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import '../Assets/Css/nav.css';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/v1/user/get", data)
      .then(response => {
        // Assuming your API returns a specific status or data on successful login
        if (response.status === 200) {
          toast.info('Welcome!', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            navigate('/welcome');
          }, 1800);
        } 
        else {
          throw new Error('Login failed');
        }
      })
      .catch(error => {
        toast.error('Invalid Username or Password', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div className="wrapper">
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h1>Petty Pet</h1>
          <h3>Login</h3>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="auth-inputr"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            id="password" // Corrected the typo here
            placeholder="Password"
            className="auth-input"
            required
            onChange={handleChange}
          />
          <input type="submit" value="Login" className="auth-bts" />
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Login;
