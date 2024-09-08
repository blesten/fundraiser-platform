interface IProps {
  className: string
  content: string
  onClick: () => void
}

const Button = ({ className, content, onClick }: IProps) => {
  return (
    <button onClick={onClick} className={`${className} text-sm rounded-full outline-none`}>
      {content}
    </button>
  )
}

export default Button