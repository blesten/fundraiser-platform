import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
  openFilter: boolean
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>
}

const Filter = ({ openFilter, setOpenFilter }: IProps) => {
  const filterRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openFilter && filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setOpenFilter(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openFilter, setOpenFilter])

  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.8)] transition z-30 ${openFilter ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={filterRef} className={`absolute top-0 right-0 w-[300px] overflow-auto hide-scrollbar bg-white h-screen transition origin-right ${openFilter ? 'scale-x-100 pointer-events-auto opacity-100' : 'scale-x-0 pointer-events-none opacity-0'} p-7`}>
        <div className='flex items-center justify-end'>
          <AiOutlineClose onClick={() => setOpenFilter(false)} className='cursor-pointer' />
        </div>
        <div className='mt-8'>
          <div className='mb-7'>
            <label htmlFor='search' className='text-sm font-medium'>Search</label>
            <input type='text' id='search' name='search' placeholder='Title' autoComplete='off' className='outline-none border border-gray-400 w-full p-3 rounded-lg text-sm mt-3' />
          </div>
          <div className='mb-7'>
            <label htmlFor='category' className='text-sm font-medium'>Category</label>
            <div className='mt-5 flex flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <input type='checkbox' />
                <label htmlFor='educationSupport' className='text-sm'>Education Support</label>
              </div>
              <div className='flex items-center gap-3'>
                <input type='checkbox' />
                <label htmlFor='educationSupport' className='text-sm'>Healthh & Wellbeing</label>
              </div>
              <div className='flex items-center gap-3'>
                <input type='checkbox' />
                <label htmlFor='educationSupport' className='text-sm'>Environmental Protection</label>
              </div>
              <div className='flex items-center gap-3'>
                <input type='checkbox' />
                <label htmlFor='educationSupport' className='text-sm'>Poverty Relief</label>
              </div>
              <div className='flex items-center gap-3'>
                <input type='checkbox' />
                <label htmlFor='educationSupport' className='text-sm'>Animal Welfare</label>
              </div>
              <div className='flex items-center gap-3'>
                <input type='checkbox' />
                <label htmlFor='educationSupport' className='text-sm'>Disaster Aid</label>
              </div>
              <div className='flex items-center gap-3'>
                <input type='checkbox' />
                <label htmlFor='educationSupport' className='text-sm'>Other</label>
              </div>
            </div>
          </div>
          <div className='mb-7'>
            <p className='text-sm font-medium'>Sort by Date</p>
            <div className='flex items-center gap-2 mt-4'>
              <button className='flex-1 py-2 rounded-full outline-none border border-gray-400 text-xs hover:bg-primary transition hover:text-white hover:font-medium hover:border-none'>A-Z (Ascending)</button>
              <button className='flex-1 py-2 rounded-full outline-none border border-gray-400 text-xs hover:bg-primary transition hover:text-white hover:font-medium hover:border-none'>Z-A (Descending)</button>
            </div>
          </div>
          <div className='mb-7'>
            <p className='text-sm font-medium'>Sort by Total Funds Raised</p>
            <div className='flex items-center gap-2 mt-4'>
              <button className='flex-1 py-2 rounded-full outline-none border border-gray-400 text-xs hover:bg-primary transition hover:text-white hover:font-medium hover:border-none'>A-Z (Ascending)</button>
              <button className='flex-1 py-2 rounded-full outline-none border border-gray-400 text-xs hover:bg-primary transition hover:text-white hover:font-medium hover:border-none'>Z-A (Descending)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter