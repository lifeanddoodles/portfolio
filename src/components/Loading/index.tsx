import { useTranslation } from 'react-i18next'

const Loading = () => {
  const { t } = useTranslation('translation')

  return <p>{t('loading')}</p>
}

export default Loading
