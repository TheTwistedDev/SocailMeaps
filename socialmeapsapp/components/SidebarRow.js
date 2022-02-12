import Image from 'next/image'

function SidebarRow({id, src, Icon, title, onClick}) {

  return (
    <div onClick={onClick} id={id} className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer '>
      {src && (
        <Image 
        className='rounded-full'
        src={src}
        width={40}
        height={40}
        layout='fixed'
        />  
      )}
      {Icon && <Icon className='h-10 w-10 text-blue-500'/>}
      <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow





