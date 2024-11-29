import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [darkmode, setDarkMode] = useState(false);

  const darkModeToggler = () => {
    setDarkMode ((prevMode) => (!prevMode))
  }

  return (
    <div className={darkmode ? 'dark-mode' : 'light-mode' }>
      <button className="toggler" onClick={darkModeToggler}>
        {darkmode ? 'lightmode' : 'darkmode'}
      </button>

      <h1>Welcome to My Website </h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci aliquid veniam quod ex totam, qui consectetur voluptatem ipsum sequi illo officiis dolore eius quo commodi libero nobis voluptatibus omnis.</p>

    </div>
  )
}

export default App
