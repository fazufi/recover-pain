import { Metadata } from 'next';
import Home from './home';

export const metadata: Metadata = {
  title: 'Recover Pain',
  description: 'Personalized Care For Chronic Pain',
};

export default function Page() {
  return <Home />;
}
