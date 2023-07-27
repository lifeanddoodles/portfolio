import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import i18n from './i18n'
import './tailwind.css'
import Loading from './components/Loading'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
