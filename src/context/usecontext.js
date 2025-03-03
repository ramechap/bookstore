import React, { useContext, useEffect, useState } from 'react'
import ThemeContexts from './CreateContext';


export default function ThemeProviders({children}) {
    const [theme, setTheme] = useState('light');
  return (
    <div>
        <ThemeContexts.Provider value={{theme}}>
            {children}
        </ThemeContexts.Provider>
    </div>
  )
}
const UseProductContext=()=>{
    return useContext(ThemeContexts)
}
export {UseProductContext};
