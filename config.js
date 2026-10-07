/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "이 현",
    nameEn: "Lee Hyun",
    father: "이재식",
    mother: "김인남",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김혜연",
    nameEn: "Kim Hyeyeon",
    father: "김동윤",
    mother: "장이경",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-29",
    time: "14:10",
    venue: "더파티움 안양",
    hall: "브리에홀 5층",
    address: "경기도 안양시 동안구 시민대로 311",
    tel: "031-731-5000"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
    },

// ── 4. 소개사진 ──
  introduce: {
    //title: "",
  },

  // ── 4. 시 ──
  poem: {
      content: "그대 모습 그대로를 어여삐\n바라보겠습니다\n\n그대가 내게\n서운하게 대할 때면\n나의 잘못을 되돌아 보겠습니다\n\n그대 마음속에\n미움이 싹 틔울 때면\n그대를 이해하려 한 걸음 다가가겠습니다\n\n그대가\n큰 실망과 슬픔에 잠길 때면\n묵묵히 그대의 옆자리를 지키겠습니다\n\n세월이 흘러\n그대 모습 조금씩 변해가도\n그 모습 그대로의 당신을 어여삐 바라보겠습니다\n\n\n Written by Hyun"
  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/138147430",
    naver: "https://naver.me/FZ2AZzfH"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    bride: [
      { role: "", name: "김동윤", bank: "우리은행", number: "167-08-485997" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이현 ♥ 김혜연 결혼합니다",
    description: "2026년 11월 29일, 소중한 분들을 초대합니다."
  }
};
