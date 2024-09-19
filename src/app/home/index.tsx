import { inter } from '@/utils/fonts';
import Condition from './condition';
import DefaultLayout from '@/components/layout/defaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
      <section className="mt-5 md:mt-12 flex flex-wrap justify-center items-center gap-6">
        <div className="flex justify-start items-center gap-3">
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#fff9f0]">
            <img src="/icons/stars.svg" alt="" className="w-5 h-5" />
          </div>
          <p className="text-secondary text-xl font-semibold">
            2.000+{' '}
            <span
              className={`${inter.className} opacity-80 text-[#2d2d2d] text-lg font-light`}
            >
              Clients helped
            </span>
          </p>
        </div>
        <div className="justify-start items-center gap-3 flex">
          <img src="/icons/social-media.svg" alt="" className="h-6 w-auto" />
          <p className="text-secondary text-xl font-semibold ">
            663K+{' '}
            <span
              className={`${inter.className} opacity-80 text-[#2d2d2d] text-lg font-light`}
            >
              Following
            </span>
          </p>
        </div>
      </section>

      <h1 className="mt-7 md:mt-12 md:max-w-[726px] w-full mx-auto text-center text-secondary text-3xl md:text-[64px] md:leading-[76.80px]">
        Personalized Care For Chronic Pain
      </h1>
      <section className="mt-7 px-3 md:px-0 flex justify-center items-center gap-6 md:max-w-[682px] w-full mx-auto">
        <img src="/icons/rings.svg" alt="" className="h-[77px] w-auto" />
        <h2 className="opacity-80 text-[#06335d] leading-tight">
          Addressing the multi-factorial complexity of chronic pain, to help
          recover- and remain pain-free. Not just another "quick fix" for
          temporary relief.
        </h2>
      </section>
      <section className="mt-6 w-full  bg-[url('/images/bg-ring.svg')] bg-no-repeat bg-top bg-cover">
        <p className="pt-[75px] mb-7 text-center text-secondary text-[28px] font-medium">
          Select your condition
        </p>
        <Condition />
        <div className="h-[78px]" />
      </section>
    </DefaultLayout>
  );
}
