
import dynamic from 'next/dynamic'
import Head from 'next/head'

const DietMealWebView = dynamic(() => import('../components/DietMealWebView'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>꿀꿀 다이어트 식단 앱 🧁</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <DietMealWebView />
    </>
  );
}
