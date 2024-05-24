import React, { useEffect } from 'react';
import { redirect } from "react-router-dom";

export default function Home() {

  const token = localStorage.getItem('token')
  console.log(token)
    // if(!token){
    //   redirect('/login')
    // }

  return <div >
    Home page
  </div>
}
