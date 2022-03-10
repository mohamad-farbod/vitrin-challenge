import React from 'react'
import { useRouter } from 'next/router'

const Header = () => {
  const headerData = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
  ]
  const router = useRouter()

  return (
    <div className="flex h-16 items-center justify-start bg-gray-700 pl-12 text-white">
      {headerData.map((item) => {
        return (
          <span
            className={`mx-4 cursor-pointer ${
              router.pathname === item.path ? 'text-yellow-400' : ''
            }`}
            key={item.name}
            onClick={() => {
              router.push(item.path)
            }}
          >
            {item.name}
          </span>
        )
      })}
    </div>
  )
}

export default Header
