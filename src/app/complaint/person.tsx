'use client';
import useComplaint from '@/stores/complaint';
import Layout from './Layout';

const inputs = [
  {
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Enter first name',
    type: 'text',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter last name',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Your Email',
    placeholder: 'example@gmail.com',
    type: 'email',
  },
];
export default function Person() {
  const { person, setPerson } = useComplaint();
  return (
    <Layout title="Please select your type of complaint?">
      <div className="mt-7 md:mt-[122px] space-y-5">
        {inputs.map((v, i) => (
          <div key={i} className="w-full space-y-2">
            <label
              htmlFor={v.name}
              className="text-secondary text-sm font-medium"
            >
              {v.label}
            </label>
            <div className="mt-1">
              <input
                onChange={(e) => setPerson({ [v.name]: e.target.value })}
                value={person[v.name as keyof typeof person]}
                id={v.name}
                name={v.name}
                type={v.type}
                placeholder={v.placeholder}
                required
                className="w-full text-lg px-6 py-4 rounded-[27px] border border-[#9badbe] focus:border-primary  "
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
