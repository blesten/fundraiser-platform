import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBankFill } from 'react-icons/pi'
import Button from '../general/Button'

interface IProps {
  openWithdrawFund: boolean
  setOpenWithdrawFund: React.Dispatch<React.SetStateAction<boolean>>
}

const WithdrawFund = ({ openWithdrawFund, setOpenWithdrawFund }: IProps) => {
  const withdrawFundRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openWithdrawFund && withdrawFundRef.current && !withdrawFundRef.current.contains(e.target as Node)) {
        setOpenWithdrawFund(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openWithdrawFund, setOpenWithdrawFund])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 z-40 bg-[rgba(0,0,0,.8)] transition ${openWithdrawFund ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={withdrawFundRef} className={`absolute top-0 right-0 w-[400px] bg-white h-screen overflow-auto hide-scrollbar ${openWithdrawFund ? 'scale-x-100 opacity-100 pointer-events-auto' : 'scale-x-0 opacity-0 pointer-events-none'} transition origin-right p-7 overflow-auto hide-scrollbar`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium'>Withdraw Funds</h1>
          <AiOutlineClose onClick={() => setOpenWithdrawFund(false)} className='cursor-pointer' />
        </div>
        <form className='mt-8'>
          <div className='mb-6'>
            <p className='text-sm'>Select registered account</p>
            <div className='mt-4 flex flex-col gap-4'>
              <div className='flex items-center justify-between bg-gray-100 rounded-lg p-3 cursor-pointer hover:border-2 hover:border-secondary hover:bg-green-100 group'>
                <div className='flex items-center gap-4'>
                  <PiBankFill className='text-4xl text-gray-400 group-hover:text-secondary' />
                  <div>
                    <p className='text-sm font-medium text-gray-800 mb-1'>Bank of ABC</p>
                    <p className='text-xs text-gray-400'>Stxxxy Clxxxxs - 52xxxx63</p>
                  </div>
                </div>
                <div className='text-xs text-gray-500'>12/28</div>
              </div>
              <div className='flex items-center justify-between bg-gray-100 rounded-lg p-3 cursor-pointer hover:border-2 hover:border-secondary hover:bg-green-100 group'>
                <div className='flex items-center gap-4'>
                  <PiBankFill className='text-4xl text-gray-400 group-hover:text-secondary' />
                  <div>
                    <p className='text-sm font-medium text-gray-800 mb-1'>Bank of ABC</p>
                    <p className='text-xs text-gray-400'>Stxxxy Clxxxxs - 52xxxx63</p>
                  </div>
                </div>
                <div className='text-xs text-gray-500'>12/28</div>
              </div>
            </div>
          </div>
          <div className='mb-6'>
            <label htmlFor='amount' className='text-sm'>Amount</label>
            <div className='border border-gray-300 w-full rounded-lg flex items-center gap-4 p-3 mt-3'>
              <p>$</p>
              <input type='number' id='goals' name='goals' className='outline-none flex-1 text-sm' min={1} />
            </div>
          </div>
          <div className='mb-6'>
            <label htmlFor='description' className='text-sm'>Description</label>
            <textarea name='description' id='description' className='outline-none p-3 text-sm rounded-lg resize-none h-32 mt-3 w-full border border-gray-300' />
          </div>
          <div className='mb-8'>
            <div className='flex items-end gap-4'>
              <div className='flex-1'>
                <label htmlFor='code' className='text-sm'>Code</label>
                <input type='text' id='code' name='code' className='w-full border border-gray-300 rounded-lg p-3 outline-none text-sm mt-3' />
              </div>
              <button className='bg-secondary text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-primary transition outline-none '>Send Code</button>
            </div>
            <p className='text-gray-400 font-medium mt-3 text-xs'>Code has been sent to stxxxxts@gmail.com</p>
          </div>
          <Button content='Withdraw Funds' onClick={() => {}} className='w-full text-white py-3 text-sm font-medium bg-secondary hover:bg-primary transition' />
        </form>
      </div>
    </div>
  )
}

export default WithdrawFund