import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin/SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser,updateUserProfile } = useAuth();

  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()

  const handleRegistration = (data) => {
    console.log(data);
    const profileImg = data.photo[0]
    registerUser(data.email, data.password)
    .then(res=>{
        console.log(res)
        // Store
        const formData = new FormData()
        formData.append('image',profileImg)
      
        const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_Host}`
        axios.post(image_API_URL,formData)
        .then(res=>{
            console.log('after image upload',res)
              //create in Firebase
              const userInfo = {
                email: data.email,
                displayName: data.name,
                photoURL: res.data.data.url,
              }
              axiosSecure.post('/users',userInfo)

              // Update
              const userProfile = {
                displayName: data.name,
                photoURL: res.data.data.url
              }
              updateUserProfile(userProfile)
              .then(()=>{
                navigate('/')
              })
              .catch(err=>{
                console.log(err)
              })

        })
    })
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-5">
        <h3 className="text-center font-semibold text-3xl text-secondary">Welcome to Zapshift</h3>
        <p className="text-center">Please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">

            {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 font-medium">Name is Required</p>
          )}

            {/* Photo */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your Photo"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 font-medium">Photo is Required</p>
          )}

            {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 font-medium">Email is Required</p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
            })}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 font-medium">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 font-medium">
              Password must be 6 characters or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 font-medium">
              Password doesn't contain enough requirements
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </fieldset>
        <p className="font-medium">Already have an account? <Link className="text-secondary font-semibold" to={'/login'}>Login</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
