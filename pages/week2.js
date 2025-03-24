import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', color: '#ec407a' }}>10만원 다이어트 챌린지(Vietnam) 버전🧁</h1>
      <p style={{ marginTop: '0.5rem' }}>한 달 식비 200만동 예산으로 구성한 4주치 저녁 다이어트 식단표</p>
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link href="/week1"><button>🍽️ Week 1</button></Link>
        <Link href="/week2"><button>🍽️ Week 2</button></Link>
        <Link href="/week3"><button>🍽️ Week 3</button></Link>
        <Link href="/week4"><button>🍽️ Week 4</button></Link>
      </div>
      <section style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '600px', marginInline: 'auto' }}>
        <h2 style={{ color: '#ec407a' }}>🗓️ 2주차 저녁 다이어트 식단</h2>
        <p>💰 Megamart 기준 약 185,000동 / 2인 / 5일</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '2px solid #ec407a', padding: '0.5rem' }}>요일</th>
              <th style={{ borderBottom: '2px solid #ec407a', padding: '0.5rem' }}>메뉴</th>
              <th style={{ borderBottom: '2px solid #ec407a', padding: '0.5rem' }}>재료 🛒</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.5rem' }}>월</td>
              <td style={{ padding: '0.5rem' }}>계란 샐러드</td>
              <td style={{ padding: '0.5rem' }}>계란🥚, 양상추🥬, 오이🥒, 마요네즈🥄, 후추🧂</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem' }}>화</td>
              <td style={{ padding: '0.5rem' }}>닭가슴살 구이 + 찐 브로콜리</td>
              <td style={{ padding: '0.5rem' }}>닭가슴살🍗, 브로콜리🥦, 소금🧂, 올리브오일🫒</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem' }}>수</td>
              <td style={{ padding: '0.5rem' }}>달걀 두부 부침 + 미역국</td>
              <td style={{ padding: '0.5rem' }}>달걀🥚, 두부🧊, 미역🌿, 마늘🧄, 국간장🥄</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem' }}>목</td>
              <td style={{ padding: '0.5rem' }}>토마토 계란 볶음 + 현미밥</td>
              <td style={{ padding: '0.5rem' }}>토마토🍅, 계란🥚, 양파🧅, 현미🍚</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem' }}>금</td>
              <td style={{ padding: '0.5rem' }}>콩나물 비빔밥 + 김</td>
              <td style={{ padding: '0.5rem' }}>콩나물🌱, 당근🥕, 계란🥚, 김🪸, 고추장🌶️</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
