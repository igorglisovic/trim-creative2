import Image from 'next/image'

const PortfolioGalleryRight = ({ images }) => {
  return (
    <div className="w-full flex sm:gap-6 gap-4">
      {images.length ? (
        <>
          <div className="flex flex-1 flex-grow-[2] relative pb-[36.55%] min-h-[180px] overflow-hidden w-full shadow-md sm:rounded-[38px] rounded-2xl">
            <Image
              src={images[0]}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover z-30"
            />
          </div>
          <div className="flex flex-1 relative pb-[36.55%] min-h-[180px] overflow-hidden w-full shadow-md sm:rounded-[38px] rounded-2xl">
            <Image
              src={images[1]}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover z-30"
            />
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default PortfolioGalleryRight
