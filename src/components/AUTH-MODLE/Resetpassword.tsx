import { auth } from '@/Firebase/firebase';
import { authModleState } from '@/atoms/authModleAtom';
import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { MdAlternateEmail } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';

type ResetpasswordProps = {

};

const Resetpassword: React.FC<ResetpasswordProps> = () => {
    const [email, setEmail] = useState('')
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const setAuthModleState = useSetRecoilState(authModleState)
    const ChangeSetAuthModleType = (type: 'login' | 'register' | 'forgotPassword') => {
        setAuthModleState((prev) => ({ ...prev, type }))
    }
    const HandleFormButton = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const SendEmail = await sendPasswordResetEmail(email)
        ChangeSetAuthModleType('login')
    }

    return <div className='w-1/2 bg-white  h-[500px] rounded-[20px] flex justify-center items-center flex-col'>
        <h2 className="text-2xl font-medium mb-2 w-60 text-center">Enter your email to change your password.</h2>
        <p className='w-2/3  text-center mb-7'>Hi There! Please enter your email below to change your account password and please enter a valid email because we will send a mail on your mail in case of changing your password . Thanks!</p>
        <div className='w-[90%] md:w-[80%]'>
            <form action="" className='flex flex-col space-y-1' onSubmit={HandleFormButton}>
                <div className="flex bg-white items-center py-3 px-3 border rounded-md">
                    <MdAlternateEmail className="mb-[1px]" />
                    <input type="email" className="w-full px-2 outline-none" placeholder="Enter your email" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button className="bg-[#005976] text-white py-2 px-2 rounded-lg">Send Email</button>
            </form>
        </div>
    </div>

}
export default Resetpassword;