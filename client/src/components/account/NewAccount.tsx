import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../general/Button'

interface IProps {
  openNewAccount: boolean
  setOpenNewAccount: React.Dispatch<React.SetStateAction<boolean>>
}

const NewAccount = ({ openNewAccount, setOpenNewAccount }: IProps) => {
  const newAccountRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openNewAccount && newAccountRef.current && !newAccountRef.current.contains(e.target as Node)) {
        setOpenNewAccount(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openNewAccount, setOpenNewAccount])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 z-50 bg-[rgba(0,0,0,.8)] transition ${openNewAccount ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={newAccountRef} className={`absolute top-0 right-0 h-full bg-white sm:w-[400px] w-[350px] transition origin-right p-7 ${openNewAccount ? 'scale-x-100 opacity-100 pointer-events-auto' : 'scale-x-0 opacity-0 pointer-events-none'}`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium'>New Withdrawal Account</h1>
          <AiOutlineClose onClick={() => setOpenNewAccount(false)} className='cursor-pointer' />
        </div>
        <form className='mt-8'>
          <div className='mb-6'>
            <label htmlFor='bankName' className='text-sm'>Bank Name</label>
            <input type='text' autoComplete='off' className='w-full outline-none border border-gray-400 rounded-lg p-3 text-sm mt-3' />
          </div>
          <div className='flex items-center gap-6 mb-6'>
            <div className='flex-1'>
              <label htmlFor='accountNumber' className='text-sm'>Account Number</label>
              <input type='text' autoComplete='off' className='outline-none border border-gray-400 p-3 text-sm mt-3 w-full rounded-lg' />
            </div>
            <div className='flex-1'>
              <label htmlFor='expDate' className='text-sm'>Exp. Date</label>
              <div className='flex items-center gap-3 mt-3'>
                <select className='flex-1 outline-none border border-gray-400 text-sm p-3 rounded-lg'>
                  <option value='01'>01</option>
                  <option value='02'>02</option>
                  <option value='03'>03</option>
                  <option value='04'>04</option>
                  <option value='05'>05</option>
                  <option value='06'>06</option>
                  <option value='07'>07</option>
                  <option value='08'>08</option>
                  <option value='09'>09</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                </select>
                <select className='flex-1 outline-none border border-gray-400 text-sm p-3 rounded-lg'>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                  <option value='25'>25</option>
                  <option value='26'>26</option>
                  <option value='27'>27</option>
                  <option value='28'>28</option>
                  <option value='29'>29</option>
                  <option value='30'>30</option>
                  <option value='31'>31</option>
                </select>
              </div>
            </div>
          </div>
          <div className='mb-7'>
            <label htmlFor='cardholderName' className='text-sm'>Cardholder Name</label>
            <input type='text' autoComplete='off' className='outline-none p-3 rounded-lg text-sm border border-gray-400 w-full mt-3' />
          </div>
          <Button content='Request for Approval' onClick={() => {}} className='w-full py-3 text-white text-sm font-medium bg-secondary hover:bg-primary transition' />
        </form>
      </div>
    </div>
  )
}

export default NewAccount