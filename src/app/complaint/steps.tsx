import ButtonSpan from '@/components/ButtonSpan';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import useComplaint from '@/stores/complaint';
import { inter } from '@/utils/fonts';
import Link from 'next/link';
import React from 'react';

type props = {
  question: number;
};

export default function Steps({ question }: props) {
  const { person, treatment, details, setPerson } = useComplaint();
  const questions = [person, treatment, details, null, null, null];

  return (
    <>
      <div className="flex justify-between items-center gap-7 md:max-w-[810px] w-full mx-auto -mt-5">
        <Link href={question > 2 ? `/complaint?question=${question - 1}` : '/'}>
          <ButtonSpan
            variant="blue"
            outline
            className="flex justify-center items-center rounded-full gap-1 px-6 py-1"
          >
            {/* <ArrowRightIcon className="stroke-primary w-[11.25px] h-[9.04px] rotate-180" /> */}
            <img
              src="/icons/arrow-left.svg"
              alt=""
              className="w-[11.25px] h-auto"
            />
            <span>Back</span>
          </ButtonSpan>
        </Link>
        <div className="grow grid grid-cols-6 gap-1 md:gap-6">
          {Array(6)
            .fill(null)
            .map((_, i) => {
              return (
                <div
                  key={i}
                  className={`h-1 w-full ${
                    i + 2 <= question ? 'bg-[#1976cb]' : 'bg-[#d9d9d9]'
                  }  rounded-[20px]`}
                />
              );
            })}
        </div>
        <button
          type="submit"
          disabled={!questions[question - 2] || question === 4}
        >
          <ButtonSpan
            variant="blue"
            className="flex justify-center items-center rounded-full gap-1 px-6 py-1 cursor-pointer"
          >
            <span>Next</span>
            <ArrowRightIcon className="stroke-white w-[11.25px] h-[9.04px]" />
          </ButtonSpan>
        </button>
      </div>
      <p
        className={`${inter.className} text-[#9badbe] text-lg text-center mb-10`}
      >
        {question} of 7 Question
      </p>
    </>
  );
}
