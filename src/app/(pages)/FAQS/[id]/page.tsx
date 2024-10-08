"use client"
import { firestore } from '@/Firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type pageProps = {
    params: {
        id: string
    }
};

type UserFAQDetails = {
    id: string
    name: string
    email: string
    phone: string
    question: string
}


const Page: React.FC<pageProps> = (props) => {
    const { params: { id } } = props;
    const [FAQDetails, setFAQDetails] = useState<UserFAQDetails>({} as UserFAQDetails);

    useEffect(() => {
        const getSingleEnrollment = async () => {
            const docRef = doc(firestore, "faq_data_logs", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setFAQDetails(docSnap.data() as UserFAQDetails)
            } else {
                console.log("No such document!");
            }
        }
        getSingleEnrollment()
    }, [setFAQDetails])

    return <div className='bg-blue-500 h-screen text-white '>
    <div className='py-10 px-20'>
        <h1 className='text-3xl font-bold text-center underline'> {FAQDetails.name} : UserDetails</h1>
        <div className='p-20 space-y-2 flex flex-col'>
            <div className='flex flex-col space-y-2'>
                <span className='text-xl'>Email : {FAQDetails.email}</span>
                <span className='text-xl'>FAQS : {FAQDetails.phone}</span>
                <span className='text-xl'>FAQS : {FAQDetails.question}</span>
            </div>
            <Link href={`mailto:${FAQDetails.email}`}>
                <button className="button hidden md:block">
                    <span className="button-content text-white ">Contact Them</span>
                </button>
            </Link>
        </div>
    </div>
</div>
}
export default Page;