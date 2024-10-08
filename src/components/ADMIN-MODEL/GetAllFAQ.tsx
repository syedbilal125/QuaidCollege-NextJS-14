import { firestore } from '@/Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import SingleFAQ from '../FAQS/SingleFAQ';

type GetAllFAQProps = {
};

type FAQS = {
    id: string
    email: string
    name: string
    phone: string
    question: string
}

const GetAllFAQ: React.FC<GetAllFAQProps> = () => {
    function useGetEnrollments() {
        const [problems, setProblems] = useState<FAQS[]>([]);

        useEffect(() => {
            const getProblems = async () => {
                // Fetching data logic
                const q = collection(firestore, "faq_data_logs")
                const querySnapshot = await getDocs(q)
                const temp: FAQS[] = []
                querySnapshot.forEach((doc) => {
                    temp.push({ id: doc.id, ...doc.data() } as FAQS)
                })
                setProblems(temp)
            }
            getProblems()
        }, [])
        return problems
    }

    const test = useGetEnrollments()
    return <div className='w-full'>
        <div>
            <div className='w-2/3 mx-auto py-20'>
                <h1 className='text-3xl font-semibold mb-5'>All FAQS</h1>
                {test.map((item) => (
                    <SingleFAQ key={item.id} FAQ_DATA={item} />
                ))}
            </div>
        </div>
    </div>
}
export default GetAllFAQ;






// 

