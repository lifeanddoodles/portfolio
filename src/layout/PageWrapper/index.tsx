import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import NativeLink from '../../components/NativeLink'
import { Footer } from '../Footer'
import { Header } from '../Header'

const PageWrapper = (): JSX.Element => {
  const { t } = useTranslation('translation')

  return (
    <div
      data-testid="page-wrapper"
      className="text-neutral-800 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-950 body-font flex flex-col items-stretch min-h-screen"
    >
      <NativeLink
        className="skip-link screen-reader-text text-neutral-100 bg-primary"
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
    </div>
  )
}

export default PageWrapper
