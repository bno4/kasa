import React from 'react'
import ErrorLayout from '../components/ErrorLayout'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Error = () => {
  return (
    <div>
      <div className="main-wrapper">
        <div className="error-page">
          <Header />
          <ErrorLayout />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Error
