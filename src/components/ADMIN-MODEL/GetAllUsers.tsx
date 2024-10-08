import { firestore } from '@/Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import SingleUser from '../User/SingleUser';

type GetAllUsersProps = {

};

type userData = {
    id: string
    Enrolled: string
    FAQ: []
    displayName: string
    email: string
    isAdmin: boolean
    uid: string
    updateAt: number
    createdAt: number
    profileImage: string
}

const GetAllUsers: React.FC<GetAllUsersProps> = () => {
    function useGetEnrollments() {
        const [User, setUser] = useState<userData[]>([]);

        useEffect(() => {
            const getUser = async () => {
                // Fetching data logic
                const q = collection(firestore, "user_data_logs")
                const querySnapshot = await getDocs(q)
                const temp: userData[] = []
                querySnapshot.forEach((doc) => {
                    temp.push({ id: doc.id, ...doc.data() } as userData)
                })
                setUser(temp)
            }
            getUser()
        }, [])
        return User
    }
    const test = useGetEnrollments()
    return <div className='w-2/3 mx-auto py-20'>
        <h1 className='text-3xl font-semibold mb-5'>All Users</h1>
        {test.map((item) => (
            <SingleUser key={item.id} UserData={item} />
        ))}</div>
}
export default GetAllUsers;