import React, { memo } from 'react';
import Layout from './Layout';
import useComplaint from '@/stores/complaint';
import { inter } from '@/utils/fonts';

export default memo(function Details() {
  const { details, setDetails } = useComplaint();
  return (
    <Layout
      title={`Anything you would like to add? \nPlease provide details below`}
    >
      <div className="mt-[53px] relative flex flex-col space-y-2">
        <p
          className={`${inter.className} absolute bottom-5 right-5 text-[#9badbe]`}
        >
          {details.length}/500
        </p>
        <label htmlFor="details" className="text-secondary text-sm font-medium">
          Details
        </label>

        <textarea
          onChange={(e) => setDetails(e.target.value)}
          name="details"
          id="details"
          className={`${inter.className} placeholder:text-[#9badbe] text-lg border border-[#9badbe] px-6 py-4 rounded-3xl`}
          rows={10}
          placeholder={'Type your response here...'}
          value={details}
        />
      </div>
    </Layout>
  );
});
