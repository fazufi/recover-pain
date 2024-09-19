'use client';
import React, { useEffect } from 'react';
import Person from './person';
import useComplaint from '@/stores/complaint';
import { useRouter } from 'next/navigation';
import { areObjectValuesFilled } from '@/utils/helpers';
import Treatment from './treatment';
import Details from './details';

export default function Page({ searchParams }: any) {
  const { condition, person, treatment, details } = useComplaint();
  const router = useRouter();
  const question = searchParams?.question ? searchParams?.question : 2;

  useEffect(() => {
    if (!condition) {
      router.push('/');
      return;
    }
    const questions = [condition, person, treatment, details];
    for (let i = 0; i < questions.length; i++) {
      const S = questions[i];
      if (typeof S === 'string' && !S) {
        router.push(i === 0 ? '/' : `/complaint?questions=${i + 1}`);
        return;
      }

      if (typeof S === 'object' && !areObjectValuesFilled(S)) {
        router.push(`/complaint?question=${i + 1}`);
        return;
      }
    }
    // eslint-disable-next-line
  }, []);
  if (question === 1 || question === 2) {
    return <Person />;
  }
  if (question === 3) {
    return <Treatment />;
  }
  if (question === 4) {
    return <Details />;
  }
  return <></>;
}
