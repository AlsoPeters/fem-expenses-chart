import { Console } from 'console';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import Data from '../data.json';

interface WeekdayMapInterface {
  Sunday: string;
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
}

const getMaxAmount = (days) => {
  let highest = 0;
  days.forEach((day) => {
    if (day.amount > highest) {
      highest = day.amount;
    }
  });
  return highest;
};

console.log(getMaxAmount(Data));
getMaxAmount(Data);

const Home: NextPage = () => {
  const [highest, setHighest] = useState(getMaxAmount(Data));
  const daysData = Data;

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const d = new Date();
  const findDay = weekday[d.getDay()];

  const weekdayMap = {
    Sunday: 'sun',
    Monday: 'mon',
    Tuesday: 'tue',
    Wednesday: 'wed',
    Thursday: 'thu',
    Friday: 'fri',
    Saturday: 'sat',
  };

  const Today = weekdayMap[findDay as keyof WeekdayMapInterface];

  const barStyle =
    'w-8  hover:cursor-pointer md:w-11 rounded-md transition-colors duration-200';

  const DaysInfo = () => (
    <div className='flex flex-row items-end w-full text-center border-2 h-96'>
      {daysData.map((day) => (
        <div key={day.day}>
          <div className='w-auto group'>
            <div className='w-auto p-1 my-2 font-bold text-white transition-opacity duration-500 bg-black rounded-md opacity-0 sm:invisible sm:absolute group-hover:opacity-100'>{`$${day.amount}`}</div>
            <div className='flex flex-row items-end justify-center border-2 h-80 '>
              <div
                style={{ height: `${(day.amount * 100) / highest}%` }}
                className={
                  day.day === Today
                    ? ` group-hover:bg-teal-200 bg-teal-500 ${barStyle}`
                    : ` group-hover:bg-red-300 bg-red-400 ${barStyle}`
                }
              ></div>
            </div>
          </div>

          <p className='text-sm text-zinc-500'>{day.day}</p>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Head>
        <title>Expenses Chart</title>
        <meta name='description' content='A Front End Mentor project' />
        <link rel='icon' href='/images/favicon-32x32.png' />
      </Head>

      <div className='flex flex-col items-center h-screen px-4 py-16 bg-orange-100 '>
        <div>
          <div className='flex items-center justify-between w-full h-32 px-6 text-white bg-red-400 rounded-xl'>
            <div>
              <p className=''>My balance</p>
              <p className='text-2xl font-bold'>$928.48</p>
            </div>
            <div>
              <Image src='/images/logo.svg' width={70} height={70} alt='logo' />
            </div>
          </div>
          <div className='flex flex-col items-center justify-between w-full h-full p-6 mt-4 bg-white rounded-xl'>
            <p className='text-2xl font-bold'>Spending - Last 7 days</p>
            <div className='flex flex-row w-full'>
              <DaysInfo />
            </div>

            <div className='w-full border-b-2 rounded-md'></div>
            <div className='flex items-center justify-between w-full'>
              <div>
                <p className='text-zinc-500'>Total this month</p>
                <p className='text-3xl font-bold'>$478.33</p>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold text-right'>+2.4%</p>
                <p className='text-zinc-500'>from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
