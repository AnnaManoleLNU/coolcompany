import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-[600px] mt-64 '>
      <p>SIDAN KUNDE INTE HITTAS</p>
      <p className='text-accent text-smallH'>
      <Link href='/'>TILLBAKA TILL START SIDAN</Link>
      </p>
    </div>
  )
}

export default NotFound
