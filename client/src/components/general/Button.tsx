import { ReactNode } from 'react'

interface IProps {
  className: string
  content: string | ReactNode
  disabled?: boolean
  onClick: () => void
}

const Button = ({ className, disabled, content, onClick }: IProps) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`${className} text-sm rounded-full outline-none`}>
      {content}
    </button>
  )
}

export default Button