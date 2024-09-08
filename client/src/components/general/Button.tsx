interface IProps {
  className: string
  content: string
  onClick: () => void
}

const Button = ({ className, content, onClick }: IProps) => {
  return (
    <button onClick={onClick} className={`${className} text-sm rounded-full py-2 outline-none`}>
      {content}
    </button>
  )
}

export default Button