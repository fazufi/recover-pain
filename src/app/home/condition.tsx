'use client';
import ButtonSpan from '@/components/ButtonSpan';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import useComplaint from '@/stores/complaint';
import React, { memo } from 'react';
import { conditions } from './constants';
import Link from 'next/link';

export default memo(function Condition() {
  const { condition, setCondition } = useComplaint();
  return (
    <div className="md:max-w-[657px] w-full mx-auto px-3 md:px-0">
      <ul className="grid grid-cols-2 gap-6 list-none">
        {conditions.map((v, i) => {
          const selected = condition === v.label;
          return (
            <li
              key={i}
              onClick={() => setCondition(v.label)}
              className={`${
                selected
                  ? 'border-2 border-[#1f7dd4] bg-[#e9f2fb]'
                  : 'border border-[#cddff0]'
              } relative p-7 space-y-6 rounded-2xl hover:border-primary hover:scale-105 tr-transform-300 cursor-pointer`}
            >
              {selected && (
                <div className="absolute top-3 right-3 flex justify-center items-center w-5 h-5 bg-primary rounded-full">
                  <img alt="" src="/icons/checked.svg" className="h-[7px]" />
                </div>
              )}
              <div className="flex justify-center items-center gap-3">
                {v.images.map((v2, i2) => (
                  <img
                    key={i2}
                    src={`/images/${v2}`}
                    alt=""
                    className="w-auto h-20"
                  />
                ))}
              </div>
              <p className="text-center text-secondary md:text-2xl font-semibold">
                {v.label}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="mt-7 flex justify-end">
        <Link href={'/complaint'}>
          <ButtonSpan
            variant="blue"
            className="flex justify-center items-center gap-2 px-6 py-0.5"
          >
            <span className="text-white text-lg font-medium">Next</span>
            <ArrowRightIcon className="stroke-white w-[11.25px] h-[9.04px]" />
          </ButtonSpan>
        </Link>
      </div>
    </div>
  );
});
