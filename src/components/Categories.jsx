import React, { useContext, useEffect } from 'react';
import InformationApps from '../data/InformativeApps';
import Tool from './Tool';
import UtilityApps from '../data/UtilityApps';
import EntertainmentApps from '../data/EntertainmentApps';
import Footer from './Footer';
import { UserContext } from '../Context/ContextApi';

const Categories = () => {
  const store = useContext(UserContext);

  useEffect(()=>{
    const userId = localStorage.getItem("userId");
    if(userId){
      store.setSignedIn(true);
      store.setUser(localStorage.getItem("userId"));
      store.setEmail(localStorage.getItem("email"));
    }
  },[])

  return (
    <div className='bg-gray-300'>
      <section className='flex flex-col items-center justify-center pt-4'>
        <h1 className='text-4xl font-bold'>Informative</h1>
        <div className="flex gap-4 flex-wrap items-center justify-center gap-8 p-5 ">
        {InformationApps.map((obj) => {
        return (
          <Tool
            key={obj.key}
            link={obj.link}
            image={obj.image}
            title={obj.title}
          />
        );
      })}
        </div>
      </section>
      <section className='flex flex-col items-center justify-center mt-4'>
        <h1 className='text-4xl font-bold'>Utility</h1>
        <div className="flex gap-4 flex-wrap items-center justify-center gap-8 p-5">
        {UtilityApps.map((obj) => {
        return (
          <Tool
            key={obj.key}
            link={obj.link}
            image={obj.image}
            title={obj.title}
          />
        );
      })}
        </div>
      </section>
      <section className='flex flex-col items-center justify-center mt-4'>
        <h1 className='text-4xl font-bold'>Entertainment</h1>
        <div className="flex gap-4 flex-wrap items-center justify-center gap-8 p-5">
        {EntertainmentApps.map((obj) => {
        return (
          <Tool
            key={obj.key}
            link={obj.link}
            image={obj.image}
            title={obj.title}
          />
        );
      })}
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Categories