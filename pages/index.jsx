import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  return (
    <div>
      <h1
        className=" my-12 mx-auto w-1/3 cursor-pointer rounded-md bg-gray-900 p-2 text-center text-white"
        onClick={() => {
          router.push('/products')
        }}
      >
        Welcome! please Click Here to go to the product pages
      </h1>
    </div>
  )
}

export default Home
