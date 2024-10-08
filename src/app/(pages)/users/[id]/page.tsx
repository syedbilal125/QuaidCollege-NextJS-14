"use client"
import { firestore } from '@/Firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type pageProps = {
    params: {
        id: string
    }
};

type UserDetails = {
    id: string
    Enrolled: string
    FAQ: []
    displayName: string
    email: string
    isAdmin: boolean
    uid: string
    updateAt: number
    createdAt: number
}

const Page: React.FC<pageProps> = (props) => {
    const { params: { id } } = props;
    const [userData, setUserData] = useState<UserDetails>({} as UserDetails);

    useEffect(() => {
        const getSingleEnrollment = async () => {
            const docRef = doc(firestore, "user_data_logs", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setUserData(docSnap.data() as UserDetails)
            } else {
                console.log("No such document!");
            }
        }
        getSingleEnrollment()
    }, [setUserData])

    return <div className='bg-blue-500 h-screen text-white '>
        <div className='py-10 px-20'>
            <h1 className='text-3xl font-bold text-center underline'> {userData.displayName} : UserDetails</h1>
            <div className='p-20 space-y-2 flex flex-col'>
                <div className='flex flex-col space-y-2'>
                    <span className='text-xl'>Email : {userData.email}</span>
                    <span className='text-xl'>Enrolled : {userData.Enrolled ? "True" : "False"}</span>
                    <span className='text-xl'>Admin : {userData.isAdmin ? "True" : "False"}</span>
                    <span className='text-xl'>FAQS : {userData.FAQ}</span>
                    <span className='text-xl'>JoinedAt : {moment(userData.createdAt).fromNow()}</span>
                </div>
                <Link href={`mailto:${userData.email}`}>
                    <button className="button hidden md:block">
                        <span className="button-content text-white ">Contact Them</span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
}
export default Page;