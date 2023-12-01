import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div>
<ul className='flex m-0 p-0 border-2 justify-end ' >
    <Link href="/"><li className="text-center text-blue-500 mx-5">Home</li></Link>
    <Link href="/About"> <li className='mx-5'>About</li></Link>
    <li className='mx-5'>About</li>
    <li className='mx-5'>Contact</li>
</ul>
    </div>
  )
}

export default Nav