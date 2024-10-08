import React from 'react';

type SuccessEnrolmentProps = {
    userName: string
};

const SuccessEnrolment: React.FC<SuccessEnrolmentProps> = ({ userName }) => {

    return <div className='w-full flex justify-center items-center h-screen'>
        <div className=' bg-blue-500 h-[500px] w-2/3 rounded-md'>
            <h1 className='text-3xl text-center pt-7 font-medium text-white'>Enrollment Successfull</h1>
            <div className='py-10 px-20'>
                <span className='text-white text-xl'>Dear {userName},</span>
                <p className='text-white pt-6'>Thanks for enrolling in the course our staff team will contact you soon to confirm your registration&rsquo; This process can take 1/2 days so be patient&rsquo; After this process you can visit Quaid College for more details&rsquo;</p>
                <p className='mt-5 text-white'>
                    If you have any questions or need assistance&lsquo; please don&apos;t hesitate to reach out to our support team at [Quaidcollege@gmail.com / 03214642555]&rsquo; We&apos;re here to help you every step of the way&rsquo;
                </p>
                <p className='text-white mt-5'>
                    Once again, welcome aboard! We&apos; are excited to see you excel in Quaid College&rsquo;
                </p>
                <div className='flex flex-col text-white mt-10 text-xl'>
                    <span>Best regards&lsquo;</span>
                    <span className=''>Quaid College Team</span>
                </div>
            </div>
        </div>
    </div>
}
export default SuccessEnrolment;