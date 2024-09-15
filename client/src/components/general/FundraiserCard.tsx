import { useState, useEffect, useRef } from 'react'
import { FaHeart, FaTrash } from 'react-icons/fa'
import { PiDotsThreeBold } from 'react-icons/pi'
import { BsClockHistory } from 'react-icons/bs'
import { IoIosSend } from 'react-icons/io'
import { MdModeEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface IProps {
  image: string
  title: string
  description: string
  collectedFund: number
  goals: number
  donatorCount: number
  isAdmin?: boolean
}

const FundraiserCard = ({ image, title, description, collectedFund, goals, donatorCount, isAdmin }: IProps) => {
  const [openControlPanel, setOpenControlPanel] = useState(false)

  const controlPanelRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openControlPanel && controlPanelRef.current && !controlPanelRef.current.contains(e.target as Node)) {
        setOpenControlPanel(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openControlPanel])

  return (
    <Link to={`${isAdmin ? '' : '/fundraiser/dad'}`} className={`rounded-xl border border-gray-300 p-4 ${isAdmin ? 'cursor-default' : 'hover:scale-105'} transition outline-none`}>
      {
        isAdmin &&
        <div className='mb-3 flex items-center justify-between'>
          <div className='bg-secondary text-white text-xs rounded-md w-fit py-1 px-2'>
            <p>Active</p>
          </div>
          <div ref={controlPanelRef} className='relative'>
            <PiDotsThreeBold onClick={() => setOpenControlPanel(!openControlPanel)} className='cursor-pointer text-xl' />
            <div className={`absolute top-full right-0 mt-1 border border-gray-300 shadow-xl rounded-lg bg-white w-[170px] ${openControlPanel ? 'scale-y-100 pointer-events-auto' : 'scale-y-0 pointer-events-none'} transition origin-top`}>
              <div className='flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 rounded-t-lg'>
                <MdModeEdit className='text-orange-600' />
                <p className='text-gray-600 text-sm'>Edit</p>
              </div>
              <div className='flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 rounded-t-lg'>
                <IoIosSend className='text-blue-600' />
                <p className='text-gray-600 text-sm'>Withdraw Funds</p>
              </div>
              <div className='flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 rounded-t-lg'>
                <BsClockHistory className='text-green-800' />
                <p className='text-gray-600 text-sm'>Activity Log</p>
              </div>
              <div className='w-full h-[1px] border-b border-gray-300' />
              <div className='flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 rounded-t-lg'>
                <FaTrash className='text-red-500' />
                <p className='text-gray-600 text-sm'>Delete</p>
              </div>
            </div>
          </div>
        </div>
      }
      <div className='rounded-xl h-48 bg-gray-200'></div>
      <h1 className='font-medium text-lg leading-relaxed mt-4'>{title.length > 45 ? `${title.substring(0, 45)} ...` : title}</h1>
      <p className='mt-3 text-xs text-gray-400'>{description.length > 40 ? `${description.substring(0, 40)} ...` : description}</p>
      <div className='flex items-center gap-2 mt-5'>
        <p className='text-lg font-medium'>${collectedFund.toLocaleString()}</p>
        <p className='text-xs font-semibold text-gray-500'>raised of ${goals.toLocaleString()} goal</p>
      </div>
      <div className='w-full rounded-full h-2 bg-gray-200 mt-5 relative after:content-[ ] after:absolute after:h-2 after:w-1/2 after:rounded-full after:top-0 after:left-0 after:bg-secondary' />
      <div className='mt-6 flex items-center gap-2'>
        <FaHeart className='text-red-500' />
        <p className='text-xs text-gray-600 font-semibold'>{donatorCount.toLocaleString()} supporters</p>
      </div>
    </Link>
  )
}

export default FundraiserCard