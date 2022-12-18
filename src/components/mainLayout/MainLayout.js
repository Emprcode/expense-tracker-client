import React from 'react'
import { Footer } from './Footer'
import { Headers } from './Header'

export const MainLayout = ({children}) => {
  return (
    <div>
        <Headers/>
        <main className='main'>{children}</main>
        <Footer/>
    </div>
  )
}
