import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
  openCharityProgramInfo: boolean
  setOpenCharityProgramInfo: React.Dispatch<React.SetStateAction<boolean>>
}

const CharityProgramInfo = ({ openCharityProgramInfo, setOpenCharityProgramInfo }: IProps) => {
  const charityProgramInfoRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (openCharityProgramInfo && charityProgramInfoRef.current && !charityProgramInfoRef.current.contains(e.target as Node)) {
        setOpenCharityProgramInfo(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => document.removeEventListener('mousedown', checkIfClickedOutside)
  }, [openCharityProgramInfo, setOpenCharityProgramInfo])
  
  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 transition z-40 bg-[rgba(0,0,0,.8)] ${openCharityProgramInfo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div ref={charityProgramInfoRef} className={`absolute top-0 right-0 h-full sm:w-[450px] w-[320px] transition origin-right bg-white p-6 ${openCharityProgramInfo ? 'opacity-100 scale-x-100 pointer-events-auto' : 'opacity-0 scale-x-0 pointer-events-none'} overflow-auto hide-scrollbar`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-medium'>Charity Program Info</h1>
          <AiOutlineClose onClick={() => setOpenCharityProgramInfo(false)} className='cursor-pointer' />
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
            <p className='text-sm font-medium'>Banner Image</p>
            <div className='w-full bg-gray-200 rounded-lg h-[200px] mt-3'></div>
          </div>
          <div className='mt-8'>
            <p className='text-sm font-medium'>Category</p>
            <p className='mt-3 text-sm text-gray-500 leading-relaxed'>Environment</p>
          </div>
          <div className='mt-8'>
            <p className='text-sm font-medium'>Title</p>
            <p className='mt-3 text-sm text-gray-500 leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className='mt-8'>
            <p className='text-sm font-medium'>Description</p>
            <p className='mt-3 text-sm text-gray-500 leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nam quae tempore, fugiat iusto labore debitis! Eveniet expedita reprehenderit atque fugit aperiam, culpa quis molestiae cum fugiat dignissimos consectetur eos ea quisquam nam, accusantium voluptate distinctio officiis quae et ipsam! Aspernatur reprehenderit ullam necessitatibus neque, quia recusandae vero, repudiandae ut fugiat libero beatae asperiores voluptas blanditiis, similique quaerat expedita distinctio. Ut, fugit commodi error non odio vel ea maiores praesentium magnam, veniam excepturi unde voluptatibus?</p>
          </div>
          <div className='mt-8'>
            <p className='text-sm font-medium'>Goals</p>
            <p className='mt-3 text-sm text-gray-500 leading-relaxed'>$40,000</p>
          </div>
          <div className='mt-8'>
            <p className='text-sm font-medium'>Changes Proposal</p>
            <p className='mt-3 text-sm text-gray-500 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis quo cum modi saepe eligendi soluta deleniti. Reprehenderit harum natus rerum, adipisci veritatis ad provident aliquam consectetur sint. Commodi ad modi, facere est quidem unde consequuntur! Quos obcaecati iste dignissimos velit impedit hic nihil in totam culpa, minus dolorem doloremque ad qui nisi neque laborum mollitia non tempore. Ut expedita fugit dolore distinctio consequatur quasi explicabo iusto blanditiis ab rerum facilis aut aperiam, aspernatur mollitia?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharityProgramInfo