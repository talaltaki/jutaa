import Image from 'next/image';
import { MdOutlineArrowCircleRight } from 'react-icons/md';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={'/hero-img.jpg'}
          className="rounded-lg shadow-2xl"
          width={500}
          height={500}
          alt="White Puma Shoe"
        />
        <div className="text-center px-10">
          <h1 className="text-7xl font-bold">
            Enjoy Your Life <br /> With Jutaa
          </h1>
          <Link href="/shop-men">
            <button className="btn btn-primary mt-8 mr-2">
              Shop For Men <MdOutlineArrowCircleRight className="text-3xl" />
            </button>
          </Link>
          <Link href="/shop-women">
            <button className="btn btn-primary mt-8 ml-2">
              Shop For Women <MdOutlineArrowCircleRight className="text-3xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
