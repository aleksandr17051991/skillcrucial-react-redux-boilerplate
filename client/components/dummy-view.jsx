import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dummy = () => (
  <>
    <Head title="Hello" />
    <div className="flex fd-column justify-center items-center h-screen">
      <div className="flex flex-col justify-center bg-neutral-900 p-10 rounded-xl select-none">
        <img alt="wave" src="images/logo-new-text.png" />
        <span className="text-white text-right font-semibold">Boilerplate</span>
      </div>

      { /* Added new router link week11 React-Router */}
      <div className='text-center border shadow-lg p-5 font-bold bg-indigo-400'>
        <Link to='/dashboard'>GO TO DASHBOARD</Link>
      </div>

    </div>
  </>
)

Dummy.propTypes = {}

export default React.memo(Dummy)
