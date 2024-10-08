'use client'
import { userModleState } from '@/atoms/userModleAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Support from './support';
import Account from './account';

type UserModleProps = {

};

const UserModle: React.FC<UserModleProps> = () => {
    const userState = useRecoilValue(userModleState)
    return (
        <>
            <div className='w-full h-screen lg:p-20'>
                {userState.type === 'account' ? <Account /> : <Support />}
            </div>
        </>
    )
}
export default UserModle;