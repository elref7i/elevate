'use client';

// import { useEffect } from 'react';

export default function ProductClient() {
  console.log('ProductClient');

  //! Error in Server ==> Window is Not defined

  //* Solution One Condition

  /*  if (typeof window !== 'undefined') {
    console.log(window.localStorage.getItem('token'));
  } */

  //* Solution Two UseEffect

  /*  useEffect(() => {
    console.log(window.localStorage.getItem('token'));
  });
 */

  return (
    <div className="py-5 font-bold text-red-600 text-lg">ProductClient</div>
  );
}
