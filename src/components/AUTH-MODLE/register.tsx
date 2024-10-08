'use client'
import React, { ChangeEvent, useState } from 'react';

import { MdAlternateEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { HiMiniLockClosed } from "react-icons/hi2";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaImage } from "react-icons/fa";

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore, storage } from "@/Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from 'recoil';
import { authModleState } from '@/atoms/authModleAtom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

type pageProps = {

};

type InputState = {
    email: string;
    displayName: string;
    password: string;
    profileImage: File | null; // Update the type to accept File or null
};

const SignUp = () => {

    const router = useRouter()

    // for Switching  State of Auth Modal
    const setAuthModleState = useSetRecoilState(authModleState)
    const ChangeSetAuthModleType = (type: "login" | "register" | "forgotPassword") => {
        setAuthModleState((oldType) => ({ ...oldType, type }))
    }

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
    };



    const [input, setInput] = useState<InputState>({ email: '', displayName: '', password: '', profileImage: null }) //State
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value })) //Passing Value to State
    }


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0];
            setInput((prev) => ({ ...prev, profileImage: image }));
        }
    };

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const HandleFormButton = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(input)
        try {
            if (!input.displayName || !input.email || !input.password) {
                alert("Please fill out all fields");
                return
            }
            const newUser = await createUserWithEmailAndPassword(input.email, input.password)
            if (!newUser) return

            let downloadURL = '';
            if (input.profileImage) {
                const storageRef = ref(storage, `profile_images/${input.profileImage.name}`);
                await uploadBytes(storageRef, input.profileImage);
                downloadURL = await getDownloadURL(storageRef);
            }

            // NewUser
            const userData = {
                uid: newUser.user.uid,
                email: newUser.user.email,
                displayName: input.displayName,
                FAQ: [],
                Enrolled: false,
                createdAt: Date.now(),
                updateAt: Date.now(),
                isAdmin: false,
                profileImage: downloadURL
            }

            // Also Storing user Data on firebase so we have user Logs
            await setDoc(doc(firestore, "user_data_logs", userData.uid), userData)
            ChangeSetAuthModleType('login')
        } catch (error: any) {
            console.log(error.message)
        }
    }



    return (
        <>
            <div className='flex justify-center items-center h-screen w-full bg-blue-500 daaeaw'>
                <div className='w-1/2 bg-white  h-[500px] rounded-[20px] flex justify-center items-center flex-col'>
                    <h2 className="text-2xl font-medium mb-7">Create your account</h2>
                    <div className='w-[90%] md:w-[80%]'>
                        <form action="" className='flex flex-col space-y-1' onSubmit={HandleFormButton}>
                            <div className="flex bg-white items-center py-2 px-3 border rounded-md">
                                <FaRegUser className="mb-[1px]" />
                                <input type="text" className="w-full px-2 outline-none" placeholder="User Name" name="displayName" onChange={handleChangeInput} />
                            </div>
                            <div className="flex bg-white items-center py-3 px-3 border rounded-md">
                                <MdAlternateEmail className="mb-[1px]" />
                                <input type="email" className="w-full px-2 outline-none" placeholder="Enter your email" name="email" onChange={handleChangeInput} />
                            </div>

                            <div className="flex bg-white items-center py-3 px-3 border rounded-md">
                                <HiMiniLockClosed className="mb-[1px]" />
                                <input type={isToggled ? 'text' : 'password'} className="w-full px-2 outline-none" name="password" placeholder="Enter password" onChange={handleChangeInput} />
                                <button type="button" onClick={handleToggle}>
                                    {isToggled ? (<FaEyeSlash />) : (<FaEye className="mb-[1px]" />)}
                                </button>
                            </div>
                            <div className="flex ">
                                <label className="custum-file-upload" htmlFor="file">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> </g></svg>
                                    </div>
                                    <div className="text">
                                        <span className='text-[14px]'>Click to upload image</span>
                                    </div>
                                    <input
                                        type="file" id="file" name="profileImage" onChange={handleFileChange}
                                        accept=".png, .jpg , .gif" />
                                </label>
                            </div>
                            <button className="bg-[#005976] text-white py-2 px-2 rounded-lg">Sign Up</button>
                        </form>
                        <div>
                            <div className="flex justify-center mt-4 ">
                                <span>Already have a account? <span onClick={() => ChangeSetAuthModleType('login')} className=" hover:underline cursor-pointer">Login</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;