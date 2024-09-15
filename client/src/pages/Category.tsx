import { FaEdit, FaTrash } from 'react-icons/fa'
import { MdCategory } from 'react-icons/md'
import { useState } from 'react'
import AdminAccount from './../components/template/AdminAccount'
import Delete from '../components/general/Delete'
import NewCategory from '../components/category/NewCategory'
import Pagination from '../components/general/Pagination'

const Category = () => {
  const [openCreate, setOpenCreate] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  return (
    <>
      <AdminAccount>
        <div className='flex items-center justify-between'> 
          <h1 className='text-lg font-medium'>Category</h1>
          <button onClick={() => setOpenCreate(true)} className='bg-secondary hover:bg-primary transition text-white rounded-md px-4 py-3 flex items-center justify-center gap-3 text-sm'>
            <MdCategory />
            <p>New Category</p>
          </button>
        </div>
        <div className='mt-10 overflow-x-auto w-full'>
          <table className='text-sm w-full'>
            <thead>
              <tr className='bg-primary text-white font-medium text-center'>
                <td className='p-3'>No</td>
                <td>Category</td>
                <td>Created Date</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center bg-gray-100'>
                <td className='p-3'>1</td>
                <td>Environment</td>
                <td>12 September 2024</td>
                <td className='flex items-center justify-center mt-3 gap-5'>
                  <FaEdit className='text-orange-500 cursor-pointer text-lg' />
                  <FaTrash onClick={() => setOpenDelete(true)} className='text-red-500 cursor-pointer text-lg' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={1}
          totalPage={15}
        />
      </AdminAccount>

      <NewCategory
        openNewCategory={openCreate}
        setOpenNewCategory={setOpenCreate}
      />

      <Delete
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
      />
    </>
  )
}

export default Category