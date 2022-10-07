import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex justify-between pl-10 items-center'>
      <div className=' hidden md:block'>
        <Image src={"/images/mediumImg.png"} width="200" height="80"></Image>
      </div>
      <div className='flex flex-col space-y-4 justify-center items-center'>
        <div className='flex flex-col items-end'>
          <h1 className='hidden md:text-2xl  lg:block font-semibold tracking-wide'>National Association Of Polytechnic Engineering Student (NAPES)</h1>
          <span className='text-orange-500 font-bold hidden'>YCT CHAPTER</span>
        </div>
        <nav>
          <ul className='hidden md:flex space-x-12 text-xl '>
            <li className='hover:text-green-800'><a href="#">Home</a></li>
            <li className='hover:text-green-800'><a href="#">Department</a></li>
            <li className='hover:text-green-800'><a href="#">Dues</a></li>
            <li className='hover:text-green-800'><a href="#">Account</a></li>
            <li className='hover:text-green-800'><a href="#">Gallery</a></li>
            <li className='hover:text-green-800'><a href="#">Contact us</a></li>
          </ul>
        </nav>
      </div>
      <div className='hidden md:block'>
        <Image src={"/images/yabatech.png"} objectFit='contain' width={200} height={80}></Image>
      </div>
    </header>
  )
}

export default Header