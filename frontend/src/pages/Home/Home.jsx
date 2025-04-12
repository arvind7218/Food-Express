import React, { useState } from 'react'
import './Home.css'
import { Header } from '../../components/Header/Header'
import { ExploreMenu } from '../../components/ExploreMenu/ExploreMenu'
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay'
import { AppDownload } from '../../components/AppDownload/AppDownload'
import DeveloperProfile from '../../components/developerProfile/developerProfile'

export const Home = () => {
     const[category,setCategory]=useState("All");
  return (
    <div> 
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        {/* we are gonna use them as props means that passing the value to explormenu */}
        <FoodDisplay category={category} />
        <AppDownload/>
        <DeveloperProfile/>
    </div>
  )
}
