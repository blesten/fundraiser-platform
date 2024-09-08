import { Helmet, HelmetProvider } from 'react-helmet-async'

interface IProps {
  title: string
}

const HeadInfo = ({ title }: IProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Charity Quest - {title}</title>
      </Helmet>
    </HelmetProvider>
  )
}

export default HeadInfo