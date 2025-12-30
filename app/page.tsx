import HomeClient from '@/components/HomeClient';

export const dynamic = 'force-dynamic';

export default async function Home() {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  return <HomeClient />;
}
