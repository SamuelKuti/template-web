
import Component from '../components/Component'

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className='text-4xl font-extrabold'>
        This is the home page.
      </div>
      <Component />
    </div>
  )
}

