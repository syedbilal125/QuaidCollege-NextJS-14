import { Avatar } from '@nextui-org/react';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';

type SingleStaffProps = {
    UserData: {
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
};



const SingleStaff: React.FC<SingleStaffProps> = ({ UserData }) => {
    const data = [
        {
            id: UserData.id,
            timestamp: UserData.createdAt
        }
    ]
    const sortedData = data.sort((a, b) => b.timestamp - a.timestamp);
    return <div>
        {
            UserData.isAdmin && (
                <Link href={`/users/${UserData.id}`} className='flex space-x-2 py-6 px-10 bg-blue-500 mt-2 justify-between text-white rounded-md hover:translate-x-3 cursor-pointer group duration-500'>
                    <div className='flex items-center space-x-2'>
                <Avatar
                    isBordered
                    color="secondary"
                    src={UserData.profileImage}
                    className="w-[40px] h-[40px]"
                />
                <span className='group-hover:underline'>{UserData.displayName}</span>
            </div>
                    <div className='flex space-x-2 items-center'>
                        {UserData.isAdmin && (
                            <span className='group-hover:underline py-1.5 px-4 rounded-full bg-red-500 text-white'>{UserData.isAdmin ? "Admin" : ""} </span>
                        )}
                        {sortedData.map((item) => (
                            <div key={item.id} className=''><span>JoinedAt</span> <span>{moment(item.timestamp).fromNow()}</span></div>
                        ))}
                    </div>
                </Link>
            )
        }
    </div>
}
export default SingleStaff;