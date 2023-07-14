import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import NativeLink from '../components/NativeLink'
import { Footer } from './Footer'
import { Header } from './Header'

const PageWrapper = (): JSX.Element => {
  const { t } = useTranslation('translation')

  return (
    <>
      <NativeLink
        className="skip-link screen-reader-text"
        url="#content"
        label={t('skipToContent')}
      />
      <Header />
      <div id="content" className="content grow h-full">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default PageWrapper
