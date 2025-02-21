import React, { useCallback, useEffect, useState } from 'react'

export default function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(
        () => {
            let pass = "";
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            if (numberAllowed) {
                str += "0123456789"  
            }
            if (charAllowed) {
                str += "~!@#$%^&*()_+-={}[π√$€£¥" 
            }
            for (let i = 0; i < length; i++) {
                let char = Math.floor(Math.random() * str.length)
                pass += str.charAt(char);
            }
            setPassword(pass);
        },
        [length, numberAllowed, charAllowed, setPassword]
    )
    useEffect(() => {
        passwordGenerator();
    
    }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='mt-14'>
        <div className='w-full max-w-md mx-auto text-orange-500 p-10 bg-red-950 rounded-lg'>
        <h1 className='text-violet-900 text-[30px] font-bold mx-6 '>Password Generator</h1>
            <div className='flex shadow overflow-hidden mb-4 rounded-lg'>
                <input 
                type="text" 
                value={password}  
                className='outline-none w-full py-1 px-3' 
                placeholder='Password' 
                readOnly
                />
                <button
                onClick={window.navigator.clipboard.writeText(password)} 
                className='bg-blue-700 p-1 font-semibold text-white shrink-0'
                >copy</button>
            </div>
            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input 
                    type="range"
                    min={6}
                    max={20} 
                    value={length} 
                    onChange={(e)=>{setLength(e.target.value)}} 
                    className='cursor-pointer' />
                    <label>{length}</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input 
                    type="checkbox" 
                    defaultChecked={numberAllowed} 
                    onChange={()=>{
                        setNumberAllowed((prev)=>!prev)
                    }} 
                    className='cursor-pointer' />
                    <label>Numbers</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input 
                    type="checkbox" 
                    defaultChecked={charAllowed} 
                    onChange={()=>{
                        setCharAllowed((prev)=>!prev)
                    }} 
                    className='cursor-pointer' />
                    <label>Characters</label>
                </div>

            </div>

        </div>
      </div>
    </>
  )
}
