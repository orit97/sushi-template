import React, { useEffect, useState } from 'react'
import { initReactI18next } from 'react-i18next'
import { resources } from './i18n'
import { Route, Routes } from 'react-router-dom'
import { ReactNotifications } from 'react-notifications-component'
import MainLayout from './layouts/MainLayout/MainLayout'
import i18next from 'i18next'
import Home from './pages/home/Home'
import 'react-notifications-component/dist/theme.css'

const App = () => {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false)

  useEffect(() => {
    i18next
      .use(initReactI18next)
      .init({
        resources,
        lng: localStorage.getItem('language') ?? 'en',
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false,
        },
      })
      .then(() => setIsI18nInitialized(true))
  }, [])

  if (!isI18nInitialized) {
    return null
  }

  return (
    <div className='full-height'>
      <ReactNotifications />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Home />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
