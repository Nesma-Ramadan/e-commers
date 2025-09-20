"use client"

import { RegesterAction } from '@/app/action/Register.action';
import Button from '@/components/ui/Button/Button'
import { LogInFormeType, RegesterFormeType } from '@/Typs/InputTyps';
import { signIn } from 'next-auth/react';






import { FieldValues, useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';


export  function SignUpForm({errorMessage, setErrorMessage ,onSwitch}: { errorMessage?: string | null,setErrorMessage: React.Dispatch<React.SetStateAction<string | null>> ,  onSwitch: (mode: 'login' | 'signup') => void }) {

  const { handleSubmit, register, formState, getValues } = useForm<RegesterFormeType>();


  const onSubmit:SubmitHandler<FieldValues> = async (data)=> {

    const result = await RegesterAction(data as RegesterFormeType);
    if (!result.success) {
      setErrorMessage(result.message); // 👈 هنا بناخد الرسالة من الـ action
    } else {
      setErrorMessage(null); // مسح الخطأ لو التسجيل نجح
      onSwitch('login')
    }

  }


  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Enter your name' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#e9e3db]'      {...register('name',
          {
            required: { value: true, message: 'name is required' },
            minLength: { value: 3, message: 'name must be at least 3 characters' },
            maxLength: { value: 20, message: 'name must be at most 20 characters' },
            pattern: { value: /^[A-Za-z]+$/i, message: 'name must be only letters' }
          })} />
        {formState.errors.name && formState.touchedFields.name && <p className='text-red-500'>{formState.errors.name?.message}</p>}

        <input type="email" placeholder='Enter your mail' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#e9e3db]'
          {...register('email',
            {
              required: { value: true, message: 'email is required' },
              pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'invalid email address' }
            })} />

        {formState.errors.email && formState.touchedFields.email && <p className='text-red-500'>{formState.errors.email.message}</p>}

        <input type="password" placeholder='Enter your password' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#e9e3db]'{...register('password',
          {
            required: { value: true, message: 'password is required' },
            minLength: { value: 6, message: 'password must be at least 6 characters' },
            maxLength: { value: 20, message: 'password must be at most 20 characters' },
            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, message: 'password must contain at least one uppercase letter , one Lowercase letter,one number and one special character' }

          })} />

        {formState.errors.password && formState.touchedFields.password && <p className='text-red-500'>{formState.errors.password?.message}</p>}

        <input type="password" placeholder='Enter your password again' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#e9e3db]'
          {...register("rePassword",
            {
              required: { value: true, message: 'repassword is required' },

              validate: (value: string) => {
                const passwordValue = getValues("password")
                if (value === passwordValue) { return true } else { return "The password do not match" }

              }

            })}
        />

        {formState.errors.rePassword && formState.touchedFields.rePassword && <p className='text-red-500'>{formState.errors.rePassword?.message}</p>}

        <input type="tel" placeholder='Enter your phone' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#e9e3db]'
          {...register("phone",
            {
              required: { value: true, message: 'phone is required' },
              pattern: { value: /^\+?[1-9]\d{1,14}$/, message: 'invalid phone number' },
              minLength: { value: 10, message: 'phone must be at least 10 characters' },
              maxLength: { value: 15, message: 'phone must be at most 15 characters' }
            })}

        />

        {formState.errors.phone && formState.touchedFields.phone && <p className='text-red-500'>{formState.errors.phone?.message}</p>}

        <Button tittel='sign up' size='lg' type='primary' className='w-full mt-5' />


      </form>

    </>
  )
}

export function LogInForm({ setErrorMessage, setSuccessMessage, onClose }: { setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>, setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>, onClose: () => void }) {

  const { handleSubmit, register, formState } = useForm<LogInFormeType>();




  const onSubmit:SubmitHandler<FieldValues>= async (data)=> {

    try {

      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      })
      console.log(response);


      if (response?.ok) {
        onClose();
        setErrorMessage(null)
        setSuccessMessage("You are logged in successfully 🎉");

      } else {
        setErrorMessage(response?.error || "Invalid login");
      }


    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unexpected error");
      setSuccessMessage(null);
    }

  }



  return (
    <>


      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="email" placeholder='Enter your mail' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#e9e3db]'
          {...register('email',
            {
              required: { value: true, message: 'email is required' },
              pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'invalid email address' }
            })}

        />

        {formState.errors.email && formState.touchedFields.email && <p className='text-red-500'>{formState.errors.email?.message}</p>}

        <input type="password" placeholder='Enter your password' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#e9e3db]'

          {...register("password",

            {
              required: { value: true, message: 'password is required' },
              minLength: { value: 6, message: 'password must be at least 6 characters' },
              maxLength: { value: 20, message: 'password must be at most 20 characters' },
              pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, message: 'password must contain at least one uppercase letter , one Lowercase letter,one number and one special character' }
            })}

        />

        {formState.errors.password && formState.touchedFields.password && <p className='text-red-500'>{formState.errors.password?.message}</p>}



        <Button tittel='Log in' size='lg' type='primary' className='w-full mt-5' />





      </form>

    </>
  )
}
