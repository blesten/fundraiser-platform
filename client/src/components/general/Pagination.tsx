import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface IProps {
  currentPage: number
  totalPage: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({ currentPage, totalPage, setPage }: IProps) => {
  const handleChangePage = (kind: string) => {
    if (kind === 'minus') {
      const newPage = currentPage - 1

      if (newPage < 1) {
        setPage(1)
      } else {
        setPage(newPage)
      }
    } else if (kind === 'plus') {
      const newPage = currentPage + 1

      if (newPage > totalPage) {
        setPage(totalPage)
      } else {
        setPage(newPage)
      }
    }
  }

  return (
    <div className='flex items-center gap-4 justify-center mt-10'>
      <FaChevronLeft onClick={() => handleChangePage('minus')} className='cursor-pointer' />
      <p>Page {currentPage} of {totalPage}</p>
      <FaChevronRight onClick={() => handleChangePage('plus')} className='cursor-pointer' />
    </div>
  )
}

export default Pagination