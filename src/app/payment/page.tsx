"use client"

import Button from "@/components/ui/Button/Button";
import { CartContextType } from "@/Typs/AllProduct.model";
import { PaymentDataType } from "@/Typs/paymentDataType";
import { useContext, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { cartContext } from "../context/CartContext";
import { getCashOrder, getOlineOrder } from "../action/payment.action";
import toast from "react-hot-toast";

import Link from "next/link";
import { useRouter } from "next/navigation";





export default function Orderpage() {

  const route = useRouter()

  const { cartId, setProductsCart } = useContext<CartContextType>(cartContext);



  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online' | null>(null)

  const { handleSubmit, register, formState } = useForm<PaymentDataType>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    if (paymentMethod === 'cash') {

      try {

        const res = await getCashOrder(cartId, data as PaymentDataType)

        console.log(res, "pay");

        if (res.status === "success") {
          toast.success("Order created successfully 🎇🎆")
          setProductsCart([])
          route.push("/")
        } else { toast.error("Error occurred while creating order") }

      } catch (error) {
        console.log(error);

      }
    } else if (paymentMethod === 'online') {

      try {

        const res = await getOlineOrder(cartId, data as PaymentDataType)

        if (res.status === "success") {

          window.location.href = res.session.url

        }

      } catch (error) {
        console.log(error);

      }
    }


  }

  return (
    <>
      <div className="payment w-sceen h-full flex justify-center items-center">
        <div className="container mx-auto   flex flex-col justify-center items-center ">
          <h2 className="text-3xl text-[#FF8E00] font-bold py-6 capitalize ">checkout now</h2>

          <div className="form w-1/2  p-12 rounded-lg shadow-lg">

            <form onSubmit={handleSubmit(onSubmit)} className="backdrop-blur-2xl p-10 rounded-lg">

              {/* user details */}

              <input type="text" placeholder='Enter your details' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#f0efef]'      {...register('details', {
                required: { value: true, message: 'details is required' },

              })} />

              {formState.errors.details && formState.touchedFields.details && <p>{formState.errors.details?.message}</p>}
              {/* phone */}

              <input type="tel" placeholder='Enter your phone' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#f0efef]'
                {...register("phone", {
                  required: { value: true, message: 'phone is required' },
                  pattern: { value: /^\+?[1-9]\d{1,14}$/, message: 'invalid phone number' },
                  minLength: { value: 10, message: 'phone must be at least 10 characters' },
                  maxLength: { value: 15, message: 'phone must be at most 15 characters' }
                })} />

              {formState.errors.phone && formState.touchedFields.phone && <p className='text-red-500'>{formState.errors.phone?.message}</p>}


              {/* city */}

              <input type="text" placeholder='Enter your city' className='w-full p-5 my-4 border border-[#FF8E00] rounded-md outline-0 focus:border-2 text-gray-800 bg-[#f0efef]'      {...register('city', {
                required: { value: true, message: 'your city is required' }
              })} />

              {formState.errors.city && formState.touchedFields.city && <p>{formState.errors.city?.message} </p>}

              {/* readio button */}


              <div className="flex justify-start items-center gap-6">
                <div className="cash flex items-center">
                  <input onClick={() => setPaymentMethod('cash')} type="radio" id="cash" name="payment" value="cash " className="me-0.5" />
                  <label htmlFor="cash" >cash</label>
                </div>
                <div className="online flex items-center">
                  <input onClick={() => setPaymentMethod('online')} type="radio" id="online" name="payment" value="online" className="me-0.5 " />
                  <label htmlFor="online" >online payment</label>
                </div>
              </div>



              <div className="btn flex flex-col gap-2">
                <Button tittel='checkout now' size='lg' type='primary' className='w-full mt-5' />
                <Link href="/cart" ><Button tittel='cancel' size='lg' type='secondary' className='w-full mt-5' /></Link>
              </div>


            </form>
          </div>

        </div>
      </div>

    </>
  )
}
