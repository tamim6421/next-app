"use client"

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={inter.className}>


        
        {children}
        
        <ProgressBar
        height="7px"
        color="#fffff"
        options={{ showSpinner: true }}
        shallowRouting
        ></ProgressBar>
        </body>
        
    </html>
  )
}
