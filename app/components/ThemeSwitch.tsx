"use client";

import React, {useEffect, useState} from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from './Icons';

const ThemeSwitch = () => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
       setMounted(true) 
    }, [])
    if(!mounted) return null;
  
  return (
<button  onClick={() => setTheme(theme==="dark" ? "light" : "dark")} className="w-8 h-8 flex items-center justify-center">
  {theme==="dark"? <div className="w-6 h-6"><SunIcon/></div> : <div className="w-6 h-6"><MoonIcon/></div>}
</button>
  )
}

export default ThemeSwitch