'use client'
import { auth, firestore } from '@/Firebase/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

type pageProps = {
    params: {
        id: string
    }
};

type Enrollments = {
    Gender: string
    address: string
    age: string
    colification: string
    createdAt: number
    email: string
    fullname: string
    phone: string
}

const Page: React.FC<pageProps> = (props) => {
    const { params: { id } } = props;
    const [userData, setUserData] = useState<Enrollments>({} as Enrollments);

    useEffect(() => {
        const getSingleEnrollment = async () => {
            const docRef = doc(firestore, "enrollments_data_logs", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setUserData(docSnap.data() as Enrollments)
            } else {
                console.log("No such document!");
            }
        }
        getSingleEnrollment()
    }, [setUserData])


    return <div className='bg-blue-500 h-screen text-white '>
        <div className='py-10 px-20'>
            <h1 className='text-3xl font-bold text-center underline'> {userData.fullname} : Enrollment</h1>
            <div className='p-20 space-y-2 flex flex-col'>
                <div className='flex flex-col space-y-2'>
                    <span className='text-xl'>Email : {userData.email}</span>
                    <span className='text-xl'>Address : {userData.address}</span>
                    <span className='text-xl'>Age : {userData.age}</span>
                    <span className='text-xl'>Colification : {userData.colification}</span>
                    <span className='text-xl'>EnrolledAt : {moment(userData.createdAt).fromNow()}</span>
                    <span className='text-xl'>Phone Number : {userData.phone}</span>
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