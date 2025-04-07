import Ads from '@components/Ads';
import Layout from '@components/Layout'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

function Submit() {
  const router = useRouter()
  const [userId, setUserId] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();



    // Navigate to the success page
    router.push('/success');
  };
  return (
    <Layout>
      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-[100px] pb-10">
        <div className='pb-10'>
          <Ads
            data-ad-slot="3211837376"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        <div className="border-y border-white/15 backdrop-blur pt-6 pb-3 px-6 mt-3 mb-6 relative overflow-hidden">
          <div className="text-white text-base font-semibold pe-3">
            Enter your <span className="text-[#8574E0]">Username</span> or <br />{' '}
            <span className="text-[#8574E0]">User ID</span> to Unlock Rewards.
          </div>
          <form onSubmit={handleSubmit} className="relative pt-5">
            <div className="relative">
              <input
                type="text"
                className="w-full p-2 rounded-[42px] pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter User Id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user text-base-content/80"
                >
                  <path d="M20 21V19a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
            </div>

            <button
              type="submit"
              className="w-full flex bg-[#34A852] rounded-[42px] items-center justify-center mt-4 py-3 cursor-pointer"
            >
              <span className="text-white text-base font-bold leading-5">SUBMIT</span>
            </button>
          </form>

        </div>
      </div>
    </Layout>
  )
}

export default Submit
