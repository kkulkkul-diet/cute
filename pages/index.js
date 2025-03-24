
import dynamic from 'next/dynamic'
import Head from 'next/head'

const DietMealWebView = dynamic(() => import('../components/DietMealWebView'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>베트남 다이어트 챌린지 🧁</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <DietMealWebView />
    </>
  );
}
