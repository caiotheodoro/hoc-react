import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { HeroInformation } from '../components/HeroInformation'
import { withLoading } from '../components/withLoading'
import { fetchHero } from '../components/heroes'
import { HeroType } from '../components/heroes'
import { useEffect, useState } from 'react'
const HeroInformationWithLoading = withLoading(HeroInformation)

const Home: NextPage = () => {
  
  return  <HeroInformationWithLoading  disabled isLoggedIn />
}

export default Home
