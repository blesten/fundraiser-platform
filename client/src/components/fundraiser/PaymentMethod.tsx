import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'
import Button from '../general/Button'

interface IProps {
  openPaymentMethod: boolean
  setOpenPaymentMethod: React.Dispatch<React.SetStateAction<boolean>>
}

const PaymentMethod = ({ openPaymentMethod, setOpenPaymentMethod }: IProps) => {
  const paymentMethodRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openPaymentMethod && paymentMethodRef.current && !paymentMethodRef.current.contains(e.target as Node)) {
        setOpenPaymentMethod(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openPaymentMethod, setOpenPaymentMethod])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.8)] ${openPaymentMethod ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition`}>
      <div ref={paymentMethodRef} className={`w-[400px] h-screen bg-white absolute top-0 right-0 ${openPaymentMethod ? 'scale-x-100 pointer-events-auto opacity-100' : 'scale-x-0 pointer-events-none opacity-0'} transition delay-150 origin-right p-5 flex flex-col`}>
        <div className='flex items-center justify-between border-b border-gray-300 pb-4'>
          <div className='flex items-center gap-4'>
            <FaHeart className='text-red-500 text-lg' />
            <h1 className='font-medium'>Share your Kindness</h1>
          </div>
          <AiOutlineClose onClick={() => setOpenPaymentMethod(false)} className='cursor-pointer' />
        </div>
        <div className='mt-5'>
          <div className='cursor-pointer border-2 border-gray-400 rounded-xl p-3 w-[110px] bg-gray-200'>
            <img src={`${process.env.PUBLIC_URL}/images/card/provider.svg`} alt='Charity Quest' className='w-full h-full object-cover pointer-events-none' />
          </div>
          <form className='mt-6'>
            <div className='mb-5'>
              <label htmlFor='cardNumber' className='font-medium text-sm'>Card Number</label>
              <div className='mt-3 border border-gray-400 p-3 rounded-lg text-sm flex items-center justify-between gap-3'>
                <input type='text' className='outline-none bg-transparent flex-1' />
                <img src={`${process.env.PUBLIC_URL}/images/card/visa.png`} alt='Charity Quest' className='pointer-events-none' />
              </div>
            </div>
            <div className='mb-5 flex items-center gap-4'>
              <div className='flex-1'>
                <label htmlFor='expDate' className='text-sm font-medium'>Exp. Date</label>
                <input type='text' className='rounded-lg text-sm border border-gray-400 outline-none w-full p-3 mt-3' />
              </div>
              <div className='flex-1'>
                <label htmlFor='expDate' className='text-sm font-medium'>CVV / CVC</label>
                <input type='text' className='rounded-lg text-sm border border-gray-400 outline-none w-full p-3 mt-3' />
              </div>
            </div>
            <div className='mb-8'>
              <label htmlFor='amount' className='text-sm font-medium'>Amount</label>
              <div className='flex items-center gap-3 text-sm border border-gray-400 rounded-lg p-3 mt-3'>
                <p className='font-semibold'>$</p>
                <input type='number' className='outline-none flex-1' />
              </div>
            </div>
            <Button className='bg-secondary hover:bg-primary transition text-white text-sm font-medium  py-3 w-full' content='Pay Now' onClick={() => {}} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod