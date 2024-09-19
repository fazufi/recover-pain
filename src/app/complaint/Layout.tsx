import React, { memo, useCallback } from 'react';
import DefaultLayout from '@/components/layout/defaultLayout';
import { useRouter, useSearchParams } from 'next/navigation';
import useComplaint from '@/stores/complaint';
import Steps from './steps';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default memo(function Layout({ title, children }: Props) {
  const { person, treatment, details, setPerson } = useComplaint();

  const router = useRouter();
  const SP = useSearchParams();
  const question = SP.get('question') ? Number(SP.get('question')) : 2;

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      const { firstName, lastName, email } = e.target;
      if (question === 2)
        setPerson({
          firsName: firstName.value,
          lastName: lastName.value,
          email: email.value,
        });
      router.push(`/complaint?question=${question + 1}`);
    },
    [question, router, setPerson],
  );

  return (
    <DefaultLayout headerProps={{ hideMenus: true }}>
      <form onSubmit={handleSubmit} className="relative md:mt-20">
        <div className="absolute top-0 right-0 left-0 px-3 md:px-0">
          <section className="space-y-3 md:space-y-10 mt-7 md:mt-14 text-center">
            <p>Just a couple question</p>
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
              className="text-center text-[#06335c] text-2xl md:text-5xl font-medium md:whitespace-pre-line"
            />
          </section>
          <div className="md:max-w-[810px] w-full mx-auto">{children}</div>
          <div className="mt-20 md:hidden">
            <Steps question={question} />
          </div>
        </div>
        <div>
          <img
            src="/images/bg-ring.svg"
            alt=""
            className="w-full md:md:max-w-[711px] h-auto mx-auto"
          />
          <div className="hidden md:block">
            <Steps question={question} />
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
});
