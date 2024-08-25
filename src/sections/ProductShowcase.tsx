import ProductImage from '@/assets/product-image.png'
import PyramidImage from "@/assets/pyramid.png"
import TubeImage from '@/assets/tube.png'
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
        <section className='py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]'>
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
            <div className='flex justify-center'>
              <div className="tag ">
              Boost your productivity
              </div>
            </div>
            <h2 className="text-3xl md:text-[54px] md:leading-[60px] text-center font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
                A more effective way to track progress
            </h2>
            <p className="text-[22px] text-center leading-[30px] text-[#010D3E] tracking-tight mt-5">
              Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template
            </p>
          </div>
          <div className='relative'>
          <Image src={ProductImage} alt='Product Image' className='mt-10' />
          <Image src={PyramidImage} alt='Pyramid Image' className='absolute hidden md:block -right-36 -top-32' height={262} width={262} />
          <Image src={TubeImage} alt='Tube Image' className='absolute hidden md:block bottom-24 -left-36' height={248} />
          </div>
      </div>
    </section>
  );
};
