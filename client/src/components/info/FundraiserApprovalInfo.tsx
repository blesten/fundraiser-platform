import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFilePdf } from 'react-icons/fa'

interface IProps {
  openFundraiserInfo: boolean
  setOpenFundraiserInfo: React.Dispatch<React.SetStateAction<boolean>>
}

const FundraiserApprovalInfo = ({ openFundraiserInfo, setOpenFundraiserInfo }: IProps) => {
  const fundraiserInfoRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openFundraiserInfo && fundraiserInfoRef.current && !fundraiserInfoRef.current.contains(e.target as Node)) {
        setOpenFundraiserInfo(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openFundraiserInfo, setOpenFundraiserInfo])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 transition z-40 bg-[rgba(0,0,0,.8)] ${openFundraiserInfo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={fundraiserInfoRef} className={`absolute top-0 right-0 h-full sm:w-[450px] w-[320px] transition origin-right bg-white p-6 ${openFundraiserInfo ? 'opacity-100 scale-x-100 pointer-events-auto' : 'opacity-0 scale-x-0 pointer-events-none'} overflow-auto hide-scrollbar`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium'>Fundraiser Info</h1>
          <AiOutlineClose onClick={() => setOpenFundraiserInfo(false)} className='cursor-pointer' />
        </div>
        <div className='mt-8'>
          <div className='flex sm:flex-row flex-col sm:items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className='bg-secondary rounded-full w-10 h-10 text-white flex items-center justify-center font-medium'>
                <p>JD</p>
              </div>
              <div>
                <h1 className='font-medium'>John Doe</h1>
                <p className='text-gray-400 text-xs font-medium mt-1'>john.doe@gmail.com</p>
              </div>
            </div>
            <p className='text-gray-500 text-xs sm:mt-0 mt-5'>12 September 2024</p>
          </div>
          <div className='mt-10'>
            <p className='text-sm font-medium'>Request Fundraiser Account Date</p>
            <p className='mt-3 text-sm text-gray-500'>15 September 2024</p>
          </div>
          <div className='mt-8'>
            <p className='text-sm font-medium'>Request Proposal</p>
            <p className='mt-3 text-sm text-gray-500 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae esse error suscipit ullam assumenda fugiat nisi consequatur at accusamus, repellendus temporibus illo modi consectetur eaque quae rem dignissimos ipsum ipsa quasi cupiditate tempore non maiores inventore. Quasi doloribus facere vero aliquid molestiae iusto amet nam, beatae obcaecati molestias aut harum incidunt? Dolore rem ipsa corrupti consequuntur aut, repellat ratione expedita facilis accusamus voluptatem, nostrum ut et atque. Quaerat, repudiandae explicabo? Amet excepturi atque alias consectetur.</p>
          </div>
          <div className='mt-8'>
            <p className='text-sm font-medium'>Supporting Document</p>
            <button className='rounded-full w-full bg-red-500 text-white hover:bg-red-600 transition py-3 flex items-center justify-center gap-3 mt-3'>
              <FaFilePdf className='text-lg' />
              <p className='font-medium'>Download</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundraiserApprovalInfo