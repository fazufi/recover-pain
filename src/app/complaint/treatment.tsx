import React, { memo } from 'react';
import Layout from './Layout';
import useComplaint from '@/stores/complaint';

const treatments = [
  'Over the counter medication',
  'Prescription medication',
  'Pysical therapy',
  'None',
];

export default memo(function Treatment() {
  const { treatment, setTreatment } = useComplaint();
  return (
    <Layout title={`Have you tried any treatments \n for this pain?`}>
      <div className="mt-7 md:mt-[130px] grid grid-cols-2 gap-6">
        {treatments.map((v, i) => (
          <p
            key={i}
            onClick={() => setTreatment(v)}
            className={`${
              treatment === v
                ? 'border-[#1f7dd4] bg-[#1f7dd4]/10 '
                : 'border-[#9badbe]'
            } font-medium text-secondary text-center rounded-2xl border md:text-2xl py-7 cursor-pointer `}
          >
            {v}
          </p>
        ))}
      </div>
    </Layout>
  );
});
