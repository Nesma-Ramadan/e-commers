"use client"

import Button from "@/components/ui/Button/Button";
import { useForm } from "react-hook-form";


export default function Orderpage() {


    const { handleSubmit, register, formState, getValues } = useForm();

    async function onSubmit(data) {
  
   console.log(data);
   
  
    }

  return (
    <>
   <div className="payment w-sceen h-full">
    <div className="container mx-auto bg-gray-200 h-full w-full">

      <h2>payment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder='Enter your name' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#e9e3db]'      {...register('name')}/>


              <input type="text" placeholder='Enter your name' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#e9e3db]'      {...register('name')}/>
         
   
      
              <input type="phone" placeholder='Enter your phone' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#e9e3db]'
                {...register("phone")} />
      
             
              <Button tittel='sign up' size='lg' type='primary' className='w-full mt-5' />
      
      
            </form>

    </div>
   </div>
    
    </>
  )
}
