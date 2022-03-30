import Image from 'next/image'

function SidebarRow({id, src, Icon, title, onClick}) {
  var tailcss =  ''
  var imgSize = 0

  if (id == "sidebarDMsg") {
    tailcss = 'flex  max-h-10 items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer mb-2'
    imgSize = 30
  } else {
    tailcss  = 'flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'
    imgSize = 40
  }

  return (
    <div onClick={onClick} id={id} className={tailcss}>
      {src && (
        <Image 
        className='rounded-full'
        src={src}
        width={imgSize}
        height={imgSize}
        layout='fixed'
        />  
      )}
      {Icon && <Icon className='h-10 w-10 text-blue-500'/>}
      <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow





