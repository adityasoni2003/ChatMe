import React, { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
            console.log(downloadURL)
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            console.log("profile updated")
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
              
            });
            console.log("set doc")

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          
        });
      });
    } catch (err) {
      setErr(true);
      // setLoading(false);
    }
  }

    return (
        <div className="h-screen w-screen bg-orange-300 flex  justify-center items-center py-4">
            <div className="h-96 w-[90vw] relative bg-blue-300  flex flex-col items-center p-10 sm:w-96 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-1 right-1 w-12 h-12 fill-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <h1 className="text-4xl font-mono">Register</h1>
            <form className="flex flex-col gap-2 mt-4 items-center" onSubmit={handleSubmit} >
                <input type="text" placeholder="Username"  className="w-full p-1  border-b-4 placeholder:text-white bg-transparent focus:outline-none"/>
                <input type="email" placeholder="Email" className="w-full p-1 border-b-4 placeholder:text-white bg-transparent   focus:outline-none"/>
                <input type="password" placeholder="Password" className="w-full p-1 border-b-4 placeholder:text-white bg-transparent   focus:outline-none"/>
                <label htmlFor="profileImage" className="w-full p-1 border-b-4 placeholder:text-white bg-transparent flex hover:cursor-pointer   focus:outline-none" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg><span className="ml-4">Upload Profile Pic</span>
                </label>
                <input type="file"  id="profileImage" style={{display:"none"}} className="w-full p-1 border-b-4 placeholder:text-white bg-transparent   focus:outline-none" />
                <button type="submit" className="text-3xl font-bold pb-1 bg-green-300 rounded-lg w-full">Sign Up</button>
                {
                    err && <span className="text-red-600 text-lg ">Oops looks like something is wrong</span>
                }
                <p>You do have an account ? <Link to="/login" ><span className="font-bold">Login</span></Link></p>
            </form>

                

            </div>
        </div>

    )
}

export default Register