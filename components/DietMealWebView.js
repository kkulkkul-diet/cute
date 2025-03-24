
export default function DietMealWebView() {
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
    </main>
  );
}

