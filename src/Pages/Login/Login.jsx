import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../Login/Login.css'

const Login = () => {
    return (
        <>
      <div className="bg-base-200 mx-20 flex items-center justify-center h-screen">
       
       
  <div className="flex  flex-col lg:flex-row  gap-32 w-full items-center">
    <div className="text-center lg:text-left w-1/2 rounded-md b">
   <div className="image-container md:h-[450px] h-[300px] w-full text-right">
   <img src='https://i.ibb.co/HpF9r63/steve-johnson-0i-V9-Lm-PDn0-unsplash.jpg' alt="" className="image rounded-4xl bannerImage object-cover" />
   </div>
     
    </div>
    <div className="card shrink-0 w-5/12  shadow-2xl bg-base-100  p-10">
    <h2 className='text-2xl  md:text-4xl font-bold text-center  bg-gradient-to-r from-[#1e6162] to-[#5cc4a8] bg-clip-text text-transparent leading-1'>Please Login</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6 w-1/2 mx-auto">
         <Button>Login</Button>
        </div>
        <h2 className='text-center'>Don't have an account?<Link className='text-center text-[#236A68] underline'>Sign Up</Link></h2>
      </form>
    </div>
  </div>
 
</div>
      </>
    );
};

export default Login;