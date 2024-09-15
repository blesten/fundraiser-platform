import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface IProps {
  currentPage: number
  totalPage: number
}

const Pagination = ({ currentPage, totalPage }: IProps) => {
  return (
    <div className='flex items-center gap-4 justify-center mt-10'>
      <FaChevronLeft className='cursor-pointer' />
      <p>Page {currentPage} of {totalPage}</p>
      <FaChevronRight className='cursor-pointer' />
    </div>
  )
}

export default Pagination