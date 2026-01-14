import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import FloatingBubble from '../components/FloatingBubble';
import TrendSection from '../components/TrendSection';
import GlassCard from '../components/GlassCard';
import TrendNews from '../components/TrendNews';

function Dashboard() {
  // 50 Real Keywords per platform (Globalized)
  // 100+ Diverse Keywords per platform for vibrance and variety
  const googleKw = [
    'AI Ethics', 'Quantum Computing', 'Web3 Future', 'SpaceX Mars', 'James Webb Telescope',
    'Mental Health Tips', 'Intermittent Fasting', 'World Cup 2026', 'Met Gala 2024', 'Grammy Awards',
    'Renewable Energy', 'ESG Investing', 'Startup Funding', 'Stock Market Live', 'Inflation Data',
    'Travel Hacks', 'Hidden Gems Italy', 'Seoul Street Food', 'Iceland Northern Lights', 'Bali Surf',
    'Sustainable Fashion', 'Capsule Wardrobe', 'Home Office Setup', 'Ergonomic Design', 'DIY Renovation',
    'Coding Bootcamp', 'Python v3.13', 'TypeScript 5.0', 'React 19 Hooks', 'Vite Speed',
    'Bose Ultra', 'AirPods Max 2', 'Mechanical Keyboards', 'Custom PC Build', 'Gaming Monitor',
    'Plant Parent', 'Monstera Care', 'Urban Gardening', 'Hydroponics', 'Vertical Farming',
    'Street Art', 'Digital Illustration', 'AI Art Tools', 'Graphic Design 2024', 'Typography Trends',
    'Yoga Retreat', 'Cold Plunge', 'Biohacking', 'Nootropics', 'Longevity Research',
    'Cybersecurity', 'Zero Trust', 'Cloud Security', 'Password Manager', 'Phishing Alerts',
    'NFT Market', 'Solana Ecosystem', 'Ethereum Merge', 'Mining Hashrate', 'Ledger Wallet',
    'Indie Game Dev', 'Unreal Engine 5', 'Unity C#', 'Godot Engine', 'Retro Gaming',
    'Formula 1 News', 'Tennis Grand Slam', 'NBA Playoffs', 'Premier League', 'UFC Results'
  ];

  const naverKw = [
    '서울 아파트 시세', '엔저 현상', '금리 동결', '한국 경제 전망', '배당금 높은 주식',
    '벚꽃 개화 시기', '강원도 가볼만한 곳', '제주도 한달살기', '베트남 여행 추천', '유럽 패키지',
    '드라마 추천', '넷플릭스 신작', '티빙 독점', '유튜브 프리미엄', '디즈니 플러스',
    '캠핑 용품', '등산화 브랜드', '테니스 라켓', '골프 입문', '크로스핏 후기',
    '아이폰 16 실물', '갤럭시 S24 울트라', '태블릿 추천', '가성비 노트북', '모니터 암',
    '결혼 준비', '신혼 가전', '인테리어 소품', '자취 꿀팁', '이사 견적',
    '봄 신상 코디', '데일리룩', '명품 가방', '향수 추천', '피부과 시술',
    '맛집 탐방', '스타벅스 신메뉴', '성수동 팝업', '익선동 카페', '광장시장 먹거리',
    '운동 식단', '단백질 쉐이크', '오운완', '바디 프로필', '필라테스 동작',
    '청년 지원금', '주택 청약', '근로장려금', '연말정산 팁', '최저임금 2024',
    '야구 일정', '축구 국가대표', '배구 올스타', '피겨 스케이팅', '양궁 순위'
  ];

  const youtubeKw = [
    'Tech Review ASMR', 'Lofi Girl Study', 'Piano Relaxing', 'Thunderstorm Sounds', 'Nature 4K',
    'Daily Vlog Korea', 'Living in Japan', 'New York Walk', 'London Travel Guide', 'Paris Food',
    'MrBeast Giveaway', 'Mark Rober Tech', 'Veritasium Science', 'Kurzgesagt Space', 'Ted Ed Lessons',
    'K-Pop Dance Cover', 'NewJeans Ditto', 'IVE Baddie', 'BTS Solo Album', 'BLACKPINK Solo',
    'Minecraft Hardcore', 'Roblox Tycoon', 'Valorant Streams', 'League Recap', 'Overwatch 2',
    'Gordon Ramsay Recipe', 'Pasta Carbonara', 'Korean BBQ DIY', 'Vegan Street Food', 'Tasty Buzzfeed',
    'Minimalist Morning', 'Night Routine', 'Desk Setup 2024', 'Nightstand Items', 'Journaling Tips',
    'Workout at Home', 'Yoga for Back Pain', '10min Abs', 'Full Body Stretch', 'Running Progress',
    'Mystery Case', 'True Crime Stories', 'Unsolved Riddles', 'Ghost Hunt', 'Urban Legends',
    'Funny Cats 2024', 'Duo Dogs', 'Bird Watching', 'Panda Life', 'Hamster Obstacle',
    'Coding Tutorial', 'React Project', 'Python Automation', 'Machine Learning Easy', 'Web Dev News'
  ];

  const [trends, setTrends] = useState(() => {
    return {
      google: googleKw.map((k, i) => ({ id: `g${i}`, keyword: k, volume: Math.floor(Math.random() * 90) + 10, growth: Math.floor(Math.random() * 100) })),
      naver: naverKw.map((k, i) => ({ id: `n${i}`, keyword: k, volume: Math.floor(Math.random() * 90) + 10, growth: Math.floor(Math.random() * 100) })),
      youtube: youtubeKw.map((k, i) => ({ id: `y${i}`, keyword: k, volume: Math.floor(Math.random() * 90) + 10, growth: Math.floor(Math.random() * 100) }))
    };
  });

  const [news] = useState(() => {
    const categories = ['AI/테크', '경제', '스포츠', '연예', '세계', '라이프'];
    const images = [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', // AI
      'https://images.unsplash.com/photo-1611974714851-eb60516122d6?auto=format&fit=crop&q=80&w=800', // Economy
      'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800', // Sports
      'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&q=80&w=800', // Entertainment
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=800', // World
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'  // Life
    ];
    return Array.from({ length: 51 }).map((_, i) => ({
      title: `${googleKw[i % googleKw.length]} 관련 혁신적 변화와 미래 트렌드 보고서`,
      summary: `최근 ${googleKw[i % googleKw.length]} 키워드가 글로벌 시장에서 뜨거운 화두로 떠오르고 있습니다. 이번 분석에서는 해당 트렌드가 우리의 일상과 산업 생태계에 어떤 영향을 미칠지 집중 조명합니다.`,
      category: categories[i % categories.length],
      image: images[i % images.length],
      time: `${Math.floor(Math.random() * 24)}시간 전`
    }));
  });

  
  
  const bubbleColors = useMemo(() => [
    'mint', 'blue', 'coral', 'yellow', 'purple', 'pink', 'teal', 'orange', 'indigo', 'lime'
  ], []);

  // Combine and Sort for Bubbles & Lists
  const getBubbleData = useCallback(() => {
    // Flatten all platform keywords
    const allKeywords = [
      ...trends.google, 
      ...trends.naver, 
      ...trends.youtube
    ].sort((a, b) => b.volume - a.volume); 
    
    // Take Top 50 for bubbles (Increased for vibrancy)
    return allKeywords.slice(0, 50).map((kw, index) => {
      const pos = {
        x: Math.floor(Math.random() * 800) - 400,
        y: Math.floor(Math.random() * 240) - 120 // Further tightening vertical spread
      };
      return {
        ...kw,
        x: pos.x,
        y: pos.y,
        color: bubbleColors[index % bubbleColors.length],
        size: Math.max(50, Math.min(180, (kw.volume * 2) + (Math.random() * 40))) // More diverse sizes
      };
    });
  }, [trends, bubbleColors]);

  const [bubbles, setBubbles] = useState(getBubbleData);

  // Real-time simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTrends(prev => {
        const randomize = (items) => items.map(item => {
           // Randomly fluctuate volume significantly to cause re-ranking
           const change = Math.floor(Math.random() * 30) - 15;
           let newVol = Math.max(5, Math.min(100, item.volume + change));
           
           // Occasional big boost for random items (simulate "viral")
           if (Math.random() > 0.95) newVol += 40;

           return {
             ...item,
             volume: newVol,
             growth: item.growth + Math.floor(Math.random() * 10) - 2
           };
        }).sort((a, b) => b.volume - a.volume); // Re-sort by NEW volume

        return {
          google: randomize(prev.google),
          naver: randomize(prev.naver),
          youtube: randomize(prev.youtube)
        };
      });
    }, 3000); // 3 seconds cycle

    return () => clearInterval(interval);
  }, []);

  // Sync bubbles
  useEffect(() => {
    setBubbles(getBubbleData());
  }, [getBubbleData]);

  // Derive Top 10 lists for display
  const top10 = useMemo(() => ({
    google: trends.google.slice(0, 10),
    naver: trends.naver.slice(0, 10),
    youtube: trends.youtube.slice(0, 10)
  }), [trends]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, minHeight: 0 }}>
      {/* Top: Bubble Map and Lists */}
      <div style={{ display: 'flex', gap: '20px', minHeight: '380px' }}>
        {/* Left: Interactive Bubble Map - Bounded Box */}
        <GlassCard style={{ 
          flex: 3, 
          position: 'relative', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <AnimatePresence>
          {bubbles.map((bubble) => (
            <FloatingBubble 
              key={bubble.id}
              text={bubble.keyword} 
              color={bubble.color} 
              size={bubble.size} 
              xOffset={bubble.x} 
              yOffset={bubble.y} 
            />
          ))}
          </AnimatePresence>
           
           <div style={{ 
             position: 'absolute', 
             bottom: '24px', 
             left: '24px',
             zIndex: 2,
             pointerEvents: 'none'
           }}>
             <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Live Trends</h2>
             <p style={{ opacity: 0.6 }}>Real-time 1~50th Rank Analysis</p>
           </div>
        </GlassCard>

        {/* Right: Detailed Metrics (Top 10) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto' }}>
           <TrendSection platform="Google" trends={top10.google} color="#4285F4" />
           <TrendSection platform="Naver" trends={top10.naver} color="#03C75A" />
           <TrendSection platform="YouTube" trends={top10.youtube} color="#FF0000" />
        </div>
      </div>

      {/* Bottom: Trend News Section (Essential for AdSense) */}
      <TrendNews news={news} />
    </div>
  );
}

export default Dashboard;
