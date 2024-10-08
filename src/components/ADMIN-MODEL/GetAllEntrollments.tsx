import { firestore } from '@/Firebase/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import SingleEnrollment from '../Enroll/SingleEnrollment';

type GetAllEntrollmentsProps = {

};

type EnrollmentType = {
    id: string
    fullname: string
    phone: string
    colification: string
    email: string
    createdAt: number
    Gender: string
    address: string
};
const GetAllEntrollments: React.FC<GetAllEntrollmentsProps> = () => {
    function useGetEnrollments() {
        const [problems, setProblems] = useState<EnrollmentType[]>([]);

        useEffect(() => {
            const getProblems = async () => {
                // Fetching data logic
                const q = collection(firestore, "enrollments_data_logs")
                const querySnapshot = await getDocs(q)
                const temp: EnrollmentType[] = []
                querySnapshot.forEach((doc) => {
                    temp.push({ id: doc.id, ...doc.data() } as EnrollmentType)
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
                <h1 className='text-3xl font-semibold mb-5'>All  Entrollments</h1>
                {test.map((item) => (
                    <SingleEnrollment key={item.id} enrollmentData={item} />
                ))}
            </div>
        </div>
    </div>
}
export default GetAllEntrollments;