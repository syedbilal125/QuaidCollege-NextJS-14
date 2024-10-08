'use client'
import { auth } from '@/Firebase/firebase';
import { authModleState } from '@/atoms/authModleAtom';
import AuthModel from '@/components/AUTH-MODLE/AuthModel';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';

type pageProps = {

};

const Page: React.FC<pageProps> = () => {
    const authModle = useRecoilValue(authModleState)
    const [user, loading, error] = useAuthState(auth)
    const [pageLoading, setPaheLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (user) router.push('/')
        if (!loading && !user) setPaheLoading(false)
    }, [user, router, loading])
    return <div>
        <AuthModel />
    </div>
}
export default Page;