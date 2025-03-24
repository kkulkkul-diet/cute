import Link from 'next/link';

export default function Week2(){
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>      
      <section style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '600px', marginInline: 'auto' }}>
        <Link href="/">
          <button style={{ marginBottom: '1rem', backgroundColor: '#fff3f8', border: '1px solid #ec407a', color: '#ec407a', padding: '0.5rem 1rem', borderRadius: '6px' }}>← 뒤로가기</button>
        </Link>

      <h2 style={{ fontSize: '1.5rem', color: '#ec407a' }}>🗓️ Week 2 저녁 식단표 (2인 × 5일)</h2>
      <table border="1" cellPadding="8" style={{ marginTop: '1rem', width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#ffe0f0' }}>
          <tr>
            <th>요일</th><th>메뉴 구성</th><th>주요 재료</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>월요일</td><td>계란 샐러드</td><td>🥚 🥬 🥒 🥄 🧂</td></tr>
          <tr><td>화요일</td><td>닭가슴살 구이 + 찐 브로콜리</td><td>🍗 🥦 🧂 🫒</td></tr>
          <tr><td>수요일</td><td>계란두부 부침 + 미역국</td><td>🥚 🧊 🌿 🧄 🥄</td></tr>
          <tr><td>목요일</td><td>토마토 계란볶음 + 현미밥</td><td>🍅 🥚 🧅 🍚</td></tr>
          <tr><td>금요일</td><td>콩나물 비빔밥 + 김</td><td>🌱 🥕 🥚 🪸 🌶️</td></tr>
        </tbody>
      </table>

      <details style={{ marginTop: '1.5rem' }}>
        <summary style={{ cursor: 'pointer' }}>🛒 Week 2 장보기 리스트</summary>
        <ul>
          <li>🥚 계란 1판 — 35,000 VND</li>
          <li>🥬 양상추 1통 — 28,000 VND</li>
          <li>🥒 오이 3개 — 18,000 VND</li>
          <li>🍗 닭가슴살 500g — 45,000 VND</li>
          <li>🥦 브로콜리 1송이 — 25,000 VND</li>
          <li>🧊 순두부 2모 — 140,000 VND</li>
          <li>🌿 미역 1봉 — 12,000 VND</li>
          <li>🧅 양파 1개 — 5,000 VND</li>
          <li>🍚 현미 1kg — 30,000 VND</li>
          <li>🌱 콩나물 1봉 — 12,000 VND</li>
          <li>🥕 당근 1개 — 8,000 VND</li>
          <li>🪸 김 1봉 — 12,000 VND</li>
        </ul>
        <strong>총합: 약 370,000 VND</strong>
      </details>

      <details style={{ marginTop: '1rem' }}>
        <summary style={{ cursor: 'pointer' }}>🍳 Week 2 재료 손질 가이드</summary>
        <ul>
          <li>🥚 계란: 6개 삶아 냉장 보관</li>
          <li>🥬 샐러드채소: 씻고 키친타월에 싸서 보관</li>
          <li>🥒 오이: 흐르는 물에 씻고 반 자르기</li>
          <li>🍗 닭가슴살: 소금후추 후 랩에 감싸 냉장 보관</li>
          <li>🥦 브로콜리: 자른 후 찜용 보관</li>
          <li>🧊 두부: 물기 제거 후 냉장 보관</li>
          <li>🌱 콩나물: 데쳐서 물기 빼고 냉장 보관</li>
        </ul>
      </details>
       </section>

    <h1 style={{ fontSize: '2rem', color: '#ec407a' }}>10만원 다이어트 챌린지(Vietnam) 버전🧁</h1>
      <p style={{ marginTop: '0.5rem' }}>한 달 식비 200만동 예산으로 구성한 4주치 저녁 다이어트 식단표</p>
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link href="/week1"><button>🍽️ Week 1</button></Link>
        <Link href="/week2"><button>🍽️ Week 2</button></Link>
        <Link href="/week3"><button>🍽️ Week 3</button></Link>
        <Link href="/week4"><button>🍽️ Week 4</button></Link>
    
      </div>

    </main>
  );
}
