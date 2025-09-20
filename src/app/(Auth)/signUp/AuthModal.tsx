"use client"

import Button from '@/components/ui/Button/Button'
import { Modaltype } from '@/Typs/ModalTyps'
import { X } from 'lucide-react'

import { LogInForm, SignUpForm } from './Form'
import { useState } from 'react'



export default function AuthModal({ mode, onClose, onSwitch }: Modaltype) {

  if (!mode) return null


  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);



  return (
    <div className="sigUp  z-10 flex justify-center items-start h-screen  w-screen py-8 bg-black/25 absolute backdrop-blur-sm ">



      <div className="form w-1/3 rounded-lg relative  shadow-2xl">


        <div className=' bg-[#38230a]/30 backdrop-blur-2xl p-8 rounded-lg'>

          <Button onClick={onClose} type='secondary' size='icone' icone={<X stroke='#ffffff' className='group-hover:stroke-[#FF8E00]' />} className=' group absolute top-2 right-2' />

          {mode === 'signup' ? (
            <>
              <h2 className=' capitalize text-center font-bold text-4xl text-white mb-2'>sign up</h2>
              <SignUpForm errorMessage={errorMessage} setErrorMessage={setErrorMessage} onSwitch={onSwitch}/>
              <p className='text-neutral-600 pe-2 text-center py-4 font-semibold'>Already have an account ?  <span onClick={() => onSwitch("login")} className=' capitalize text-[#834b06] font-bold cursor-pointer text-[18px]'>log in</span> </p>

              {errorMessage && <p className='text-red-500 text-center font-bold'>{errorMessage}</p>}
            </>
          ) :
            (
              <>
                <h2 className=' capitalize text-center font-bold text-4xl text-white mb-2'>Log in</h2>
                <LogInForm setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} onClose={onClose} />
                <p className='text-neutral-600 pe-2 text-center py-4 font-semibold'>Dont have an account ? <span onClick={() => onSwitch('signup')} className=' capitalize text-[#834b06] font-bold cursor-pointer text-[18px] '> Sign up</span> </p>

                {errorMessage && (
                  <p className="text-red-500 text-center font-bold">{errorMessage}</p>
                )}
                {successMessage && <p className='text-green-500 text-center font-bold'>{successMessage}</p>}
              </>)}
        </div>
      </div>
    </div>
  )
}
