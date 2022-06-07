import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Expenses Chart</title>
        <meta name='description' content='A Front End Mentor project' />
        <link rel='icon' href='/images/favicon-32x32.png' />
      </Head>

      <div className='flex flex-col items-center h-screen px-4 py-16 bg-orange-100'>
        <div className='flex items-center justify-between w-full h-32 px-6 text-white bg-red-400 rounded-xl'>
          <div>
            <p className=''>My balance</p>
            <p className='text-2xl font-bold'>$666.66</p>
          </div>
          <div>
            <Image src='/images/logo.svg' width={70} height={70} alt='logo' />
          </div>
        </div>
        <div className='flex flex-col items-center w-full h-full p-6 mt-4 bg-white rounded-xl'>
          <p className='text-2xl font-bold'>Spending - Last 7 days</p>
          <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col items-center'>
              <div className='w-8 h-10 bg-red-400 rounded-md'></div>
              <p className='text-sm text-zinc-500'>day</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-8 h-10 bg-red-400 rounded-md'></div>
              <p className='text-sm text-zinc-500'>day</p>
            </div>
          </div>
          <div className='w-full border-2'></div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-zinc-500'>Total this month</p>
              <p className='text-3xl font-bold'>$666.66</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-bold text-right'>+6.6%</p>
              <p className='text-zinc-500'>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
