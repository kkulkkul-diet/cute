export default function Week1() {
  return (
    <main style={{ padding: '1.5rem', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '1.5rem', color: '#ec407a' }}>📅 Week 1 저녁 식단표 (2인 × 5일)</h2>
      <table border="1" cellPadding="8" style={{ marginTop: '1rem', width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#ffe0f0' }}>
          <tr>
            <th>요일</th><th>메뉴 구성</th><th>주요 재료</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>월요일</td><td>닭가슴살 오븐구이 + 샐러드</td><td>🐓 🥬 🥑</td></tr>
          <tr><td>화요일</td><td>두부 스테이크 + 나물 반찬</td><td>🧈 🧄 🥬</td></tr>
          <tr><td>수요일</td><td>소고기 미역국 + 현미밥</td><td>🐄 🌿 🍚</td></tr>
          <tr><td>목요일</td><td>계란말이 + 오이무침</td><td>🥚 🥒</td></tr>
          <tr><td>금요일</td><td>모짜렐라 토마토 샐러드 + 통밀빵</td><td>🧀 🍅 🍞</td></tr>
        </tbody>
      </table>

      <details style={{ marginTop: '1.5rem' }}>
        <summary style={{ cursor: 'pointer' }}>🛒 Week 1 장보기 리스트</summary>
        <ul>
          <li>🐓 닭가슴살 500g — 45,000 VND</li>
          <li>🥬 양상추 1통 — 25,000 VND</li>
          <li>🥑 아보카도 2개 — 48,000 VND</li>
          <li>🧈 두부 2모 (콩마을 손두부) — 140,000 VND</li>
          <li>🌿 미역 1봉 — 12,000 VND</li>
          <li>🍚 현미 1kg — 30,000 VND</li>
          <li>🥚 계란 1판 — 35,000 VND</li>
          <li>🥒 오이 3개 — 18,000 VND</li>
          <li>🍅 토마토 3개 — 28,000 VND</li>
          <li>🍞 통밀빵 1봉 — 20,000 VND</li>
        </ul>
        <strong>총합: 약 401,000 VND</strong>
      </details>

      <details style={{ marginTop: '1rem' }}>
        <summary style={{ cursor: 'pointer' }}>🍳 Week 1 재료 손질 가이드</summary>
        <ul>
          <li>🧈 두부: 물기 제거 후 냉장 보관</li>
          <li>🐓 닭가슴살: 소금·후추 후 랩에 감싸 보관</li>
          <li>🥒 오이: 흐르는 물에 씻고 반 자르기</li>
          <li>🥚 계란: 6개 삶아 냉장 보관</li>
          <li>🥬 샐러드채소: 씻고 키친타월에 싸서 보관</li>
        </ul>
      </details>
    </main>
  );
}
