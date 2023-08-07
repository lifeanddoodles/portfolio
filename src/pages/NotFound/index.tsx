import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Heading from '../../components/Heading'

const NotFound = (): JSX.Element => {
  const { t } = useTranslation('translation', { keyPrefix: 'notFound' })

  return (
    <section className="container px-5 py-10 mx-auto text-center lg:px-40">
      <Heading level={1} text={t('title')} />
      <p>{t('description')}</p>
      <Link to="/">{t('goBack')}</Link>
    </section>
  )
}

export default NotFound
