'use client'
import { authModleState } from '@/atoms/authModleAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Login from './login';
import SignUp from './register';
import Resetpassword from './Resetpassword';

type AuthModelProps = {

};

const AuthModel: React.FC<AuthModelProps> = () => {
    const authModle = useRecoilValue(authModleState)
    return (
        <>
            <div className='flex justify-center items-center h-screen w-full bg-blue-500 daaeaw'>
                {authModle.type === 'login' ? <Login /> : authModle.type === 'register' ? <SignUp /> : <Resetpassword />}
            </div>
        </>
    )
}
export default AuthModel;