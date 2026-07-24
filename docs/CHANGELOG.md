# EQUIV M&A Website Changelog

## CONTENT QA-01 - Repeated Copy Cleanup

- `좋은 거래는 올바른 원칙에서 시작됩니다.`를 HOME Principle의 고유 문구로 유지하고 다른 페이지·Modal의 반복 표현 제거
- HOME Principle 본문, Service 안내와 Insights 소개를 `사업·재무구조 / 거래 목적 / M&A 판단과 실행` 중심의 구체적 문구로 정리
- Consultation Modal을 `M&A 상담 신청`과 상담 범위·담당자 검토 안내 중심으로 변경하고 철학적 소개 문구 제거
- Business Valuation 사전진단 Modal을 기업가치 검토와 M&A 상담을 위한 기초자료 준비 목적이 명확하도록 수정
- HOME 공통 CTA와 매각·인수·기업가치 CTA를 사용자의 다음 행동과 지원 범위가 직접 드러나는 문구로 정리
- 전체 HTML·JavaScript에서 `좋은 거래 / 성공적인 거래 / 기업의 가치 / 함께 만들어갑니다 / 상담을 통해` 반복 문구 정리
- Hero 핵심 문구, Principle 카드 제목, 서비스명, Layout, Typography, Modal 기능, Form 항목과 JavaScript 동작은 변경하지 않음

## QA-05 - Mobile Modal Typography & Density

- Mobile Header 높이를 `64px`에서 `58px`로 축소하고 기존 Logo·Menu 정렬과 `48px` Touch Area 유지
- HOME Insights Card의 Mobile 상단 Padding을 `24px`에서 `16px`, Title을 `22px`에서 `20px`, Grid Gap을 `16px`에서 `10px`로 조정
- 상담 신청 Modal과 Business Valuation 사전진단 Modal에 공통 Mobile Modal Semantic Token 적용
- Mobile 기준 제목 `22px`, 설명 `15px`, 질문 `18px`, Label `14px`, Input·Button `16px`로 역할별 위계 통일
- Input과 Button 높이 `48px`, Textarea `104px`, Modal 좌우 여백 `14px`, 내부 Padding `20px / 24px` 기준 적용
- 상담 Modal은 Mobile에서 Form을 안내 영역보다 먼저 배치하여 첫 화면에 제목·설명과 네 개의 입력항목이 함께 노출되도록 개선
- Business Valuation Modal은 안내문·단계·질문·Section 제목을 Compact하게 조정하고 선택형 항목의 고정 높이 없이 콘텐츠 기반 높이 유지
- `100vh` Fallback과 `100dvh`, `-webkit-backdrop-filter`, 내부 `overflow-y: auto`, Safe Area Padding으로 Safari·Chromium·In-App Browser의 짧은 Viewport 대응
- 375·390·412·430px Computed Style 검수, 375·390px 상태별 화면 캡처와 최종 Header·Insights·두 Modal 시각 검수 완료
- Desktop 1440px·Tablet 768px의 두 Modal 전체 하위 요소 비교 결과 Style·Layout 차이 0건 확인
- Form 문구·입력항목·Validation·전송 로직·Modal Event는 변경하지 않음

## QA-04 STEP 13 - CSS Size Optimization

- 전체 HTML·JavaScript 19개 파일을 기준으로 실제 참조되지 않는 CSS 규칙을 정적 감사
- 모든 선택자 분기가 미사용인 규칙 175개와 동일 Context에서 완전히 대체된 선언 19개를 제거
- `style.css`를 `128,814 bytes / 6,300 lines`에서 `106,971 bytes / 5,185 lines`로 축소
- 총 파일 크기 `16.96%` 감소, 단순 Minify 없이 읽을 수 있는 Source 구조 유지
- 공개·내부 페이지 14개를 1440·768·390px에서 비교한 42개 조합에서 계산 Style·Layout 차이 0건 확인
- CSS Brace, CSS Variable, Typography Token, JavaScript 문법 및 Consultation Modal 열기·닫기·Focus Return 정상 확인

## QA-04 - CSS Architecture Refactoring

- Desktop·Mobile Primitive Typography Scale을 각각 `Display / H1 / H2 / H3 / Body Large / Body / Small` 7단계로 정리
- 기존 H4·Caption·CTA·Button·Form·Card 보조 크기는 Core Scale에서 계산되는 Root Semantic Alias로 전환하여 기존 화면값 유지
- 숫자 `font-size` 직접 선언 0건과 미정의 CSS Variable 0건 유지
- 중복 Media Query 18개를 9개 고유 조건 블록으로 통합: Mobile `5→1`, Tablet `3→1`, Desktop `2→1`, Reduced Motion `2→1`
- Base·Component·Responsive의 책임과 CSS 관리 순서를 Architecture 주석으로 명시
- Home·About·Sell-side·Business Valuation·M&A Practice의 최대 800개 요소를 1440·768·390px에서 신·구 비교하여 계산 스타일 차이 0건 확인
- HTML, 콘텐츠, 기능, Animation, Color, Navigation, Component 구조는 변경하지 않음
## QA-03 - Mobile Typography & Density Correction

- Mobile Typography를 `26 / 28 / 24 / 22 / 18 / 20 / 15 / 13px` 역할별 Scale로 교정하고 Button·Card Link `16px` 적용
- HOME Hero를 `70svh`에서 `60svh`로 축소하고 제목 `26px / 1.24`, Label `13px`, Button `48px / 16px`, Gap `8px` 적용
- Mobile Container Gutter를 `20px`로 통일하고 Principle `48px`, Service·Insights `56px`의 역할별 Section Padding 적용
- HOME Service·Insight Card를 `24px 20px` Padding과 `16px` Gap으로 정리하고 Mobile 최소·고정 높이 및 하단 강제 정렬 제거
- Service Card는 `15 / 22 / 18 / 16px`, Insight Card는 `14 / 22 / 16 / 16px` 정보 위계 적용
- HOME Service·Insights 제목은 `28px`, Principle 제목은 `24px`로 구분하고 Insights 소개문은 `20px / 1.45 / 600`으로 조정
- 모든 변경은 `760px 이하` 최종 Media Query에 한정하고 Desktop·Tablet·색상·콘텐츠·구조·Animation은 변경하지 않음

## QA-01 - Homepage Section Title Refinement

- HOME Featured Expertise 제목을 `M&A, 그 전략.`에서 `EQUIV(이퀴브) 전문 서비스`로 변경
- 감성적 표현 대신 EQUIV 브랜드와 전문 서비스 역할을 직접 전달하도록 Section Naming 정리
- 기존 Section H2 Typography, Font Size, Line Height, Spacing, Layout, Card와 CTA는 변경하지 않음
- 서비스 Section에는 기존 Subtitle이 없으므로 새로운 설명 문구를 추가하지 않고 현재 간결한 구조 유지

## Sprint 18 - Mobile Fine Tuning

- `760px 이하` HOME Hero 제목을 `26px`에서 `24px`로 약 7.7% 축소하고 행간을 `1.22`에서 `1.2`로 미세 조정
- Mobile Hero Brand Label을 `11px`에서 `10px`로 낮추고 기존 Weight와 Letter Spacing 유지
- Label과 Title 사이 간격을 `10px`에서 `4px`, Title과 CTA 사이 간격을 `14px`에서 `8px`로 정리
- HOME Hero CTA 높이를 `48px`에서 접근성 최소 기준인 `44px`로 낮추고 폭·Typography·Radius 유지
- Hero 높이를 `72svh`에서 `70svh`로 줄여 일반 모바일 화면에서 하단 여백을 약 `15~20px` 축소
- Primary와 Secondary 간격은 이미 최소 분리 기준인 `4px`이므로 추가 축소하지 않고 유지
- 두 줄 Hero Headline 구조, Scroll Indicator, Header, Desktop·Tablet, 공통 Typography·Spacing Token, Navigation, Footer, 색상과 이미지는 변경하지 않음

## Sprint 17 - Mobile UX Refinement

- `760px 이하` HOME Hero만 대상으로 제목을 Mobile Display Token보다 `4px` 작게 보정하고 행간을 `1.22`로 조정
- Mobile Hero Brand Label을 `--type-caption`으로 한 단계 낮추되 기존 Weight와 Letter Spacing 유지
- Mobile Hero 높이를 `80svh`에서 `72svh`로 줄이고 Content Top Padding을 Header 높이에 맞춰 약 `20~30px` 축소
- HOME Hero CTA의 폭과 Typography는 유지하고 높이를 `52px`에서 `48px`, 버튼 간격을 `8px`에서 `4px`로 조정
- Hero 제목과 CTA 사이 간격을 `20px`에서 `14px`로 줄여 첫 화면의 Vertical Rhythm 개선
- Scroll Indicator, Header, Desktop·Tablet, 공통 Typography Token, CTA 문구, Navigation, Footer, 색상과 이미지는 변경하지 않음

## Sprint 16 - Home Page Layout Balance Refinement

- HOME Featured Expertise Grid를 `1076px`로 소폭 확대해 Desktop 서비스 카드 폭을 약 `12px` 늘리고 기존 3열·마지막 행 중앙 정렬 유지
- HOME Service Card 최소 높이를 `182px`로 보정해 Padding과 Typography를 바꾸지 않고 약간의 안정감 추가
- HOME Insights를 서비스와 분리된 `1260px` Grid로 확장하고 `1280px 이상`에서 4열로 배치해 중앙에 작은 위젯처럼 몰리던 인상 개선
- HOME Insights Card 최소 높이를 `260px`로 복원하고 Grid Gap `24px`, 기존 Card Padding과 콘텐츠 비율 유지
- HOME Card Action을 Desktop `16px`, Mobile `14px`, `600` 굵기로 보강하고 기존 Hover 이동 유지
- Principle·Featured Expertise·Insights Section에 공통 Large Section보다 `12px` 넓은 상하 여백을 적용해 HOME 주요 영역의 호흡 복원
- `1279px 이하` 2열, `760px 이하` 1열 전환과 상세페이지·Typography·CTA·Navigation·Footer·Modal은 변경하지 않음

## Sprint 15 - Home Service & Insights Card Compact Layout

- HOME Featured Expertise와 Insights Card Grid를 `1040px` 전용 폭 안에서 중앙 정렬하고 상세페이지 Grid는 유지
- Desktop Service Card를 약 `331px`, Insights Card를 `320px` 폭으로 제한해 Container 전체 폭으로 늘어나던 문제 개선
- HOME Card의 고정 `min-height`와 하단 Action의 `margin-top:auto`를 해제하여 콘텐츠 기반 높이와 자연스러운 읽기 흐름 적용
- HOME Card Padding을 Desktop `22px 20px`, Mobile `20px 18px`로 분리하고 Label·Title·Summary·Action 간격 정리
- Card Action 전용 Typography를 Desktop `15px`, Mobile `14px`, `600` 굵기로 추가하고 최소 `32px` 클릭 높이 확보
- Desktop 3열 Service의 마지막 두 Card와 Tablet 2열 Service의 마지막 Card를 중앙 정렬해 불규칙한 빈 Column 제거
- 서비스·인사이트 상세페이지, 본문 Typography, Section Spacing, CTA, Navigation, Footer, Modal과 콘텐츠는 변경하지 않음

## Sprint 14 - Premium Layout Polishing

- Desktop Regular / Compact Card Padding을 `24px / 22px`로 보정하고 Mobile Card Padding `20px`은 유지
- Principle·Service·Insight·Expertise·Process Card의 과도한 `min-height`와 제목 위 간격을 줄여 콘텐츠 중심 밀도로 정리
- Service Card를 상단 정렬로 전환하고 Insight Link 간격과 Service Process Row 간격을 공통 Spacing Token으로 보정
- CTA 전용 Typography Token을 Desktop `32/16px`, Mobile `25/15px`로 추가해 일반 Section과 Conversion CTA 위계를 분리
- HOME Final CTA와 Service·Insights Sub CTA Button을 Desktop `52px/15px`, Mobile `48px/14px` 기준으로 통일
- HOME Contact CTA의 설명과 Action Row 사이 중복 여백 및 좌우 Column Gap을 축소해 상담 흐름을 강화
- 페이지 구조, 콘텐츠, 브랜드 컬러, 이미지, 애니메이션, Footer 구조, Modal과 Business Valuation 기능은 변경하지 않음

## Sprint 13.1 - Design System Calibration & CSS Consolidation

- Desktop Typography를 `48 / 34 / 27 / 20 / 16 / 16 / 15 / 13 / 11px`로 보정하여 큰 제목은 절제하고 본문 가독성은 강화
- Mobile Typography를 `30 / 25 / 22 / 18 / 16 / 15 / 14 / 12 / 11px`로 보정하고 Display부터 Caption까지 시각적 계층 복원
- Hero·Page·Section·Card·Small Heading·Lead·Body·Label·Caption 역할을 공통 Component Typography Rule로 재분류
- Section Spacing을 Desktop `96 / 72 / 56px`, Mobile `64 / 52 / 40px`의 Large / Medium / Small Semantic Token으로 분리
- Card Padding을 Regular `28px / Mobile 20px`, Compact `24px / Mobile 20px`로 구분
- 반복되는 본문 폭 `620 / 720 / 820 / 860px`을 Content Width Token으로 통합
- CSS 후반의 무효화된 380px Override, 중복 Section·Card·Footer Padding과 과도한 Mobile H2 역할 지정 제거
- `index.html`의 임시 `og:url` 위에 실제 운영 도메인 확정 전 교체해야 하는 SEO TODO 주석 추가
- 페이지 구조, 콘텐츠, 브랜드 컬러, 이미지, 애니메이션, 상담 Modal과 기업가치 기능은 변경하지 않음

## Sprint 13 - EQUIV Design System Foundation

- 기존 브랜드 컬러를 유지하면서 `Primary / Secondary / Background / Surface / Border / Text Primary / Text Secondary / Muted` Semantic Color Token으로 통합
- Desktop Typography Token을 `52 / 36 / 28 / 22 / 17 / 15 / 13.5 / 12 / 10.5px`의 절제된 Premium Corporate Scale로 조정
- Container에 `Full` Token을 추가하고 12 Column, Column Gap, Card Gap과 Section Gap의 공통 Grid Token 정의
- Radius 4단계와 함께 Small / Medium / Large Shadow Token 및 Overlay·Float·Focus Semantic Shadow를 구축
- Section, Card, Grid, Button, Input과 Modal에 공통 Component Token을 연결하여 페이지별 수치 의존도를 축소
- HOME, About, Service, Business Valuation, Insights, Contact, Footer와 Modal이 동일한 Foundation을 사용하도록 규칙 문서화
- 페이지 구조, 브랜드 컬러, 콘텐츠, 애니메이션과 반응형 Layout은 변경하지 않음

## Sprint 12.1 - Layout & Spacing Design System

- Desktop `4/8/12/16/24/32/48/96px`, Mobile `4/8/10/14/20/28/40/72px` 공통 Spacing Token 생성
- Container `1180/780/1280px`과 Radius `4/8/16/20px` Token 생성
- CSS의 571개 개별 px 여백 값을 Token으로 변환하여 `padding / margin / gap` 직접 px 선언 제거
- Section, Card, Grid, Heading Group, Button, Input과 Footer에 공통 Component Spacing Rule 적용
- HOME, About, Service, Business Valuation, Insights, Contact, Modal과 Footer가 동일한 Token System을 사용하도록 통합
- `760px 이하`에서 같은 Token 이름을 Mobile Scale로 자동 전환하고 Tablet은 Desktop Scale 기반으로 유지
- Layout 구조, Color, Animation과 Component 구조는 변경하지 않음

## Sprint 12 - Typography Design System

- Desktop과 Mobile에 각각 `Display / H1 / H2 / H3 / H4 / Body Large / Body / Small / Caption` 9단계 Device Token 생성
- Device Token을 페이지 전반에서 사용하는 공통 `--type-*` Semantic Token으로 연결
- CSS의 381개 `font-size` 선언을 모두 Typography Token 참조로 전환하고 직접 수치 선언 제거
- HOME, About, Service, Business Valuation, Insights, Contact, Footer, Modal, Navigation, Card와 Button에 공통 계층 적용
- `760px 이하`에서 Semantic Token을 Mobile Token으로 자동 전환하고 Tablet은 Desktop Token 기반으로 유지
- Mobile Form Input은 iOS Safari 자동 확대 방지를 위해 `--mobile-h2(16px)` Token을 사용
- Layout, Color, Spacing과 Component 구조는 변경하지 않음

## Sprint 11 - Desktop Premium Typography Refinement

- `1025px 이상` Desktop 전용 공통 Typography Scale을 추가하고 Tablet·Mobile 값을 분리 보존
- HOME Hero Label·H1·Brand Description을 약 10~20% 축소
- 공통 Section Title, Principle, Contact와 CTA 제목을 영역별 기존 비율 안에서 약 15~20% 축소
- Service·Insights 상세 H1·H2·본문을 공통 Desktop Scale로 정리
- Principle·Service·Insights·Process·FAQ Card 제목과 본문을 약 10~15% 축소
- 공통 Button Text와 Footer Typography를 약 10% 축소
- 기존 Section Padding, Layout, Color와 Component 구조는 변경하지 않음

## Business Valuation Content Simplification

- `EQUIV Value Framework`와 `Strategic Value Analysis` 섹션 삭제
- `기업을 이해하는 것이 좋은 거래의 시작입니다.` 이하 하단 Brand Statement 삭제
- CTA를 마지막 콘텐츠로 유지하여 Desktop과 Mobile 모두 CTA 이후 Footer로 바로 이어지는 흐름 적용
- Hero 사전진단 CTA, Modal, 계산 엔진, Calibration, Value Driver와 결과 화면은 변경하지 않음

## Sprint 10 - Mobile Typography Benchmark

- LISTING 모바일을 기준으로 `760px 이하` Typography Scale을 여백 우선 Premium Corporate 밀도로 재조정
- HOME Hero Label `10.5px`, H1 `20px / 1.28`, Hero 높이 `80svh` 적용
- 공통 Section H2와 상세 CONTACT H1을 `17px / 1.42`로 축소
- Service·Insights 상세 H1을 `12.5px / 1.55`, Hero·Detail Description을 `11.25~14.5px`로 조정
- Mobile Button을 `12px / 47px`로 축소하되 Form Input `16px`, Card Title `16px`, Body `14px`은 유지
- 기존 Section Padding, Desktop·Tablet Layout, Color와 Component 구조는 변경하지 않음

## Header Wordmark Tracking Rebalance

- EQUIV Wordmark 자간을 `0.18em`에서 `0.10em`으로 축소
- Header·Tablet·Mobile·Consultation Modal에만 적용하고 다른 Typography는 유지

## Header Wordmark 18% Tracking

- Header와 Consultation Modal의 EQUIV Wordmark 자간을 `0.10em`에서 `0.18em`으로 확대
- Inter `600`, 기본 Kerning, Wordmark 크기와 Logo Lockup 비례는 유지
- Header·Tablet·Mobile·Consultation Modal 선택자에만 범위를 한정하고 HOME Hero 제목 자간은 기존 `0` 유지

## Header Wordmark 10% Tracking

- Header와 Consultation Modal의 EQUIV Wordmark 자간을 `0.03em`에서 `0.10em`으로 확대
- Inter `600`, 기본 Kerning과 기존 Logo Lockup 비례는 유지

## Header Wordmark Positive Tracking

- 기본 자간 `0`에서 체감 가능한 양수 자간 `0.03em`으로 확대
- Inter `600`, 기본 Kerning, Wordmark 크기와 Logo Lockup 비례는 유지

## Header Wordmark Navigation Spacing Only

- HOME Navigation의 `EQUIV 소개`에서는 기본 자간 `0`만 Header Wordmark에 적용
- Logo 고유의 Inter `600`, 기본 Kerning, 크기와 Lockup 비례는 복원·유지

## Header Wordmark Navigation Typography Match

- HOME Navigation의 `EQUIV 소개`에 적용된 Inter `500`, 기본 자간 `0`을 Header Wordmark에 동일 적용
- Wordmark의 Desktop·Tablet·Mobile 크기와 Mark·Divider Lockup 비례는 유지
- Header와 공통 Consultation Modal에서 동일한 EQUIV 글자 형태 사용

## Header Wordmark Tracking Expansion — Second 30%

- EQUIV Wordmark 음수 자간을 `-0.048em`에서 `-0.034em`으로 약 30% 추가 완화
- Inter `600`, 기본 Kerning과 기존 Logo Lockup 비례는 유지

## Header Wordmark Tracking Expansion 30%

- EQUIV Wordmark 음수 자간을 `-0.068em`에서 `-0.048em`으로 약 30% 추가 완화
- Inter `600`, 기본 Kerning과 기존 Header Logo 비례는 유지

## Header Wordmark Final Tracking Adjustment

- EQUIV Wordmark 자간을 `-0.08em`에서 `-0.068em`으로 정확히 15% 완화
- Inter `600`, 기본 Kerning, Mark·Divider·Wordmark 비례와 내부 Gap은 유지

## Header Wordmark Reference Typography Match

- 첨부된 최종 시안의 굵고 정돈된 Wordmark 인상을 기준으로 Inter `600` 유지
- 자간을 `-0.13em`에서 `-0.08em`으로 조정해 글자 사이 여유와 단어 형태의 균형 확보
- `font-kerning: normal`과 OpenType `kern` 기능을 활성화해 `EQ / QU / UI / IV` 조합의 자연스러운 광학 간격 적용

## Header Wordmark Optical Spacing Balance

- EQUIV Wordmark 자간을 `-0.16em`에서 `-0.13em`으로 약 19% 완화
- `EQ / QU / UI` 사이에 숨 쉴 공간을 확보하면서 하나의 Wordmark로 읽히는 균형으로 조정
- `font-weight: 600`, 폰트, 심볼 크기와 Header Lockup 비례는 유지

## Header Wordmark Weight & Tight Spacing

- EQUIV Wordmark 자간을 `-0.10em`에서 `-0.16em`으로 추가 압축해 개별 글자가 아닌 하나의 Wordmark로 보이도록 조정
- Wordmark 굵기를 `500`에서 `600`으로 높여 Header와 Consultation Modal에서 선명도와 브랜드 존재감 강화
- 폰트 종류, 글자 크기, 심볼과 Header 구조는 변경하지 않음

## Header Wordmark Aggressive Condensing

- Header와 Consultation Modal의 `EQUIV` 자간을 `-0.01em`에서 `-0.10em`으로 과감하게 축소
- Header 내부 Gap을 Desktop·Tablet `7px`, Mobile `6px`로 줄여 Mark·Divider·Wordmark를 하나의 간결한 Lockup으로 정리
- 폰트, 심볼 형태와 높이는 유지하면서 전체 Header Logo Group의 가로 폭을 약 10~15% 압축

## Header Logo Final Proportion & Wordmark Spacing

- 전체 공개 페이지 Header의 공통 `The EQUIV Mark | EQUIV` Lockup 비례를 최종 정리
- EQUIV Wordmark를 단일 텍스트로 유지하고 자간을 `-0.01em`, 굵기를 `500`으로 조정해 하나의 단단한 브랜드명으로 표현
- Desktop `30px / 26px / 23px / 10px`, Tablet `28px / 24px / 22px / 9px`, Mobile `26px / 22px / 19px / 8px` 기준으로 Mark·Divider·Wordmark·Gap을 비례 조정
- Divider는 `1px`, `opacity: 0.62`를 유지하고 Mobile Logo Group에 최대 폭을 적용해 메뉴 버튼과의 충돌 방지
- 공통 Consultation Modal Wordmark에도 동일한 자간을 적용하고 Footer와 Header Navigation 구조·기능은 변경하지 않음

## HOME Typography Reference Mapping

- 새로운 상세페이지 Typography 수치를 만들지 않고 HOME Component의 실제 CSS 값을 직접 매핑
- Service·Business Valuation 상세 H1에 HOME Service Card Title의 Desktop `32px / 1.28`, Mobile `16px / 1.5` 적용
- M&A 실무·업종별 M&A·시장분석·거래사례 H1에 HOME Insights Card Title의 Desktop `21px / 1.45`, Mobile `16px / 1.5` 적용
- 모든 상세페이지 하단 CONTACT Title은 HOME Contact Title과 공유하는 Mobile `22px / 1.36` 규칙 유지
- About H1, HOME Hero, HOME Card와 Desktop·Tablet Layout은 변경하지 않음

## Sprint 9.4 - Typography Consistency

- HOME Typography를 Master로 사용하여 Service·Insights·Business Valuation·About 상세 H1 Scale 통일
- Desktop 상세 H1의 별도 `36~68px` Scale을 제거하고 HOME Main Section과 같은 `30~52px / 1.22` 적용
- Mobile 상세 H1을 별도 `25px`에서 HOME Main Section과 같은 `22px / 1.36`으로 조정
- 상세페이지 주요 Section Title도 HOME Section과 같은 `30~52px / 1.22` Scale로 통일
- Insights Article, Service Hero Copy, About Copy와 Expertise 본문을 HOME Card Body 기준인 Desktop `15px`로 정리
- HOME Contact와 상세 CONTACT는 기존 공통 Mobile `22px` 규칙 유지
- 공통 Button Component와 Mobile `14px` Button Scale 유지
- 독립 Contact HTML 페이지는 현재 존재하지 않아 HOME Contact Section과 공통 Consultation Modal을 Conversion 기준으로 유지

## Mobile Detail CONTACT Title Alignment

- HOME Contact의 `M&A 상담` 제목과 모든 Service·Insights 상세페이지 하단 CONTACT 제목을 동일한 공통 규칙으로 통일
- 두 영역 모두 Mobile `22px`, Pretendard, `700`, Line Height `1.36`, Letter Spacing `0` 적용
- 상세페이지별 상속 차이로 제목이 더 크게 보일 수 있던 시각적 편차 제거
- Desktop·Tablet과 CTA Layout·Copy는 변경하지 않음

## Mobile Typography Scale Reset

- 760px 이하 Mobile Typography를 단일 최종 Scale로 재정렬
- HOME Hero Title `28px`, Main Section Title `22px`, Detail Page Title `25px` 적용
- Card Title `16px`, Body `14px`, Auxiliary Text `13px`로 통일
- Button Text `14px`, Mobile Navigation `13px` 적용
- Form Input은 iOS 자동 확대 방지를 위해 기존 `16px`을 유지하고 Label·Placeholder는 `13px` 적용
- 380px 이하에서도 동일한 Hero·Card Scale을 유지하고 Desktop·Tablet은 변경하지 않음

## HOME Mobile Hero Title Scale Adjustment

- 760px 이하 HOME Hero의 `기업을 연결하고, 성공적인 M&A를 만듭니다.` 제목을 `11px`에서 `16.5px`로 1.5배 확대
- 380px 이하에서도 동일한 `16.5px`을 유지
- Desktop·Tablet과 다른 Section·Card Typography는 변경하지 않음

## Mobile Typography Final Point Alignment

- 760px 이하 HOME Hero Title을 `11px`로 조정
- Mobile 공통 Section Title을 `10px`로 조정
- Principle·Expertise Card 내부 영문 제목을 `9px`로 통일
- Service Card 한글 제목과 영문 제목을 모두 `9px`로 통일
- 380px 이하 Hero도 동일한 `11px`을 유지하고 Desktop·Tablet은 변경하지 않음

## Mobile Typography Point Adjustment

- 760px 이하 HOME Hero Title을 `10px`로 고정
- Mobile 공통 Section Title을 `9.5px`로 통일
- Service·Principle·Expertise Card 내부 영문 제목을 `8.6px`로 통일
- 380px 이하 별도 Hero 보정에서도 동일한 `10px` 유지
- Desktop·Tablet Typography와 Layout은 변경하지 않음

## Mobile Service Card Title Refinement

- 760px 이하 Featured Expertise 서비스 카드 제목을 `9px`로 통일
- Desktop·Tablet Typography, Card Layout, Padding과 Touch 영역은 변경하지 않음

## Website Sprint 9.3 - Premium Mobile Typography Final Tuning

- Desktop와 761px 이상 Tablet Typography를 유지하고 760px 이하 Mobile Scale만 최종 축소
- HOME Hero Title을 현재 Scale에서 약 30% 낮춘 12~13.25px, Line Height 1.14로 조정
- 공통 Section Title을 10~12px, Subpage Hero Title을 12~14px로 낮춰 화면을 지배하던 제목 비중 완화
- Section Label을 6.25px, Letter Spacing 0.08em으로 축소해 Caption 수준의 보조 위계로 정리
- Card Title을 Component에 따라 9~11.5px 범위로, Body를 주로 9.5~9.75px 범위로 최종 조정
- 기본 Button Text를 11.25px, Contact Primary CTA를 12.5px로 축소하고 Button Height와 Touch Target은 유지
- Form Label과 Placeholder를 한 단계 낮추되 Input Text 16px은 iOS 자동 확대 방지를 위해 유지
- Footer Wordmark를 13.5px, Footer Label·Small Text·Site Map을 8.5px로 축소
- 360·390·430px과 iPhone 15 Pro Max 폭에서 Mobile Scale, 768px에서 기존 Tablet Scale 적용을 정적으로 확인

## Website Sprint 9.2 - Aggressive Mobile Typography Redesign

- Desktop와 761px 이상 Tablet Typography를 유지하고 760px 이하 Mobile Scale을 별도 체계로 전면 재설계
- HOME Hero Title을 17~19px로 축소하고 Line Height를 1.2로 낮춰 첫 화면의 밀도 완화
- 공통 Section Title을 15.5~18px, Subpage Hero Title을 18~21px로 축소해 모든 Section의 위계를 통일
- Section Label을 8px, Letter Spacing 0.1em으로 낮춰 보조 정보 역할 강화
- Card Title을 Component에 따라 12~16px 범위로 낮추고 Body를 주로 11.5~12px 범위로 정리
- 기본 Button Text를 12.5px, Contact Primary CTA를 14px로 축소하되 기존 Button Height와 Touch Target 유지
- Consultation·Readiness·Valuation Form의 Label과 Placeholder를 Compact하게 조정하고 Input Text 16px은 iOS 확대 방지를 위해 유지
- Footer Wordmark를 17px, Footer 보조정보와 Site Map을 10.5px로 축소
- Mobile Section Padding을 64~68px 중심으로, Principle·CTA·Footer와 서브페이지 구간을 40~60px 범위로 재조정
- Principle Card 200px, Expertise·Insights Card 156px로 최소 높이를 낮춰 축소된 Typography와 여백 균형 개선
- 360·390·430px과 iPhone 15 Pro Max 폭은 Mobile Scale, 768px은 기존 Tablet Scale 적용을 정적으로 확인

## Sprint 9.1 - Mobile Typography Refinement

- Desktop와 761px 이상 Tablet 규칙을 변경하지 않고 760px 이하 Mobile Typography만 재설계
- HOME Hero Headline을 26~30px로 낮추고 Line Height를 1.28로 조정해 두 줄 균형 개선
- Section Label을 10px, Letter Spacing 0.12em으로 통일해 영문 Label의 시각적 강도 완화
- 공통 Section Title을 24~29px 범위로 조정하고 한글 가독성을 위해 Line Height를 1.34로 확대
- Principle·Expertise·Insights·Process Card Title을 약 10~12% 축소하고 본문 행간을 확대
- 서브페이지 Hero, About, Service Page, FAQ, CTA와 Footer Typography를 동일한 Mobile Scale로 정제
- Button Text를 1px 축소하되 기존 52~56px Touch Target은 유지
- Consultation·Readiness·Valuation Modal의 Heading, Label과 보조문구를 축소하고 Input Text는 iOS 확대 방지를 위해 16px 유지
- 360·390·430px은 Mobile Scale, 768px은 기존 Tablet Scale이 적용되도록 Breakpoint 영향 범위 확인

## Sprint 9 - Mobile Experience Optimization

- Desktop Selector와 기존 Navigation breakpoint를 유지하고 760px 이하 Mobile·761~900px Tablet 전용 보정만 적용
- Mobile Header를 64px로 조정하고 Logo 간격, 48px Hamburger Touch Area와 Navigation 항목 간격 최적화
- Hero를 88svh, 상단 Content Offset -18px, 29~34px Headline과 52px CTA로 조정해 첫 화면 집중도 개선
- Mobile 공통 Section Padding을 84px 중심으로 정리하고 Principle·Contact 등 섹션별 높이를 별도 조정
- Section Title 28~34px, Body 14.5~15.5px, Button 15~17px 범위로 가독성 중심 Typography 조정
- Principle Card 244px, Expertise·Insight Card 184px의 최소 높이와 통일된 Padding·12px Gap 적용
- Transaction Process와 About Flow의 번호, 제목, 본문과 세로 간격을 Mobile 흐름에 맞게 축소
- Contact CTA를 56px Full Width로 조정하고 Footer Padding·Logo 크기·Site Map 간격 최적화
- Consultation Modal의 좌우 16px 여백, 48px Input, 52px Submit, 44px Close, 자연스러운 내부 Scroll 적용
- Consultation Success의 Full Viewport 최소 높이를 제거하여 불필요하게 큰 완료 화면 개선
- Readiness Modal에 44px Close, 52px Option과 `dvh` 기반 내부 Scroll 적용
- 768px에서 Header Navigation 간격, 104px Section Padding, Card 높이와 Consultation Modal Touch Target 보정
- 사용되지 않는 Principle Heading Span CSS와 중복 Modal Mobile Selector 제거

## EQUIV Principle Premium Content Refinement - MASTER CONTENT SPEC v2.0

- Main Title을 `좋은 거래는 올바른 원칙에서 시작됩니다.`로 간결하게 변경
- Body Copy를 기업가치 이해, 최적의 거래 전략과 성공적인 M&A를 연결하는 두 줄 메시지로 정리
- Card 01·02의 구조와 문구는 유지하고 Card 03을 `Trusted Brokerage & Advisory / 신뢰기반 중개자문`으로 개선
- Card 03 설명을 `정확성과 기밀성을 최우선으로 하는 중개 및 자문`으로 변경
- 하단 한·영문 반복 문구 전체와 사용하지 않는 CSS 제거
- Section 하단 Padding을 Desktop 112px, Mobile 70px로 소폭 줄여 다음 Expertise Section과의 연결 개선

## About EQUIV - The EQUIV Mark Story Layout

- About EQUIV의 The EQUIV Mark 소개 영역 왼쪽에 실제 Gold Mark SVG 추가
- Desktop·Tablet에서 `Mark / Thin Divider / Brand Story`의 가로 구조 적용
- Mobile에서는 Mark, 가로 Divider와 소개 글이 자연스럽게 이어지는 세로 구조로 전환
- 기존 브랜드 소개 문구, 컬러와 타이포그래피는 유지하고 별도 Card나 장식 요소는 추가하지 않음

## EQUIV Header Logo Fix & Hero Copy Simplification - MASTER FIX SPEC v1.0

- Header Logo가 Divider만 남고 보이지 않던 원인을 외부 SVG Mask 렌더링 실패로 확인
- The EQUIV Mark는 실제 Gold SVG `<img>`, EQUIV는 항상 표시되는 Text Wordmark로 변경하여 이미지 Mask와 CSS Background 의존 제거
- Header Logo 높이를 Desktop 32px, Scrolled 28px, Mobile 26px로 조정하고 기존 메뉴와 수직 정렬 유지
- HOME Header Logo를 `#top`에 연결하여 재로딩 없이 부드럽게 최상단으로 이동하도록 수정
- HOME Hero에서 `EVERY GREAT TRANSACTION BEGINS WITH M&A.`와 `EVERY SUCCESSFUL TRANSACTION ENDS WITH EQUIVALENCE.` 영역 전체 삭제
- 영문 문구 전용 CSS와 여백을 제거하고 Eyebrow → Main Headline → CTA 흐름으로 복원
- Footer와 Consultation Modal에도 동일한 안정적 Logo 렌더링 구조 적용

## The EQUIV Mark V1.0 Final

- 첨부 확정안을 기준으로 Gold The EQUIV Mark, Vertical Divider와 EQUIV Wordmark의 공식 Primary Logo 자산을 제작
- 공개 페이지 13개의 Header와 Footer에서 기존 Text Logo와 `M&A Brokerage & Advisory` 보조 문구를 제거하고 공식 Lockup으로 통일
- Header Logo를 Header 높이의 약 60~65%로 조정하고 Mark → Divider → EQUIV 순서의 0.2초 간격 Fade-in 적용
- Footer와 공통 Consultation Modal Header에 배경별 White/Gold 공식 Logo 적용
- The EQUIV Mark 단독 심볼 Favicon을 모든 공개 페이지에 연결
- HOME Hero에 두 줄 Official Brand Statement를 추가하고 `M&A`, `EQUIVALENCE`만 Gold로 강조
- About EQUIV에 The EQUIV Mark의 M&A, Equivalence와 EQUIV 의미를 설명하는 공식 브랜드 문구 추가
- Business Valuation의 사전진단 Modal, 계산 엔진, Calibration, Value Driver와 결과 로직은 변경하지 않음

## EQUIV Consultation Modal Success State UX Upgrade - MASTER UX SPEC v2.0

- Consultation Modal을 `consultation`과 `success`의 명시적인 두 상태로 분리
- Success 상태에서 Header를 `SUCCESS / 상담 신청 완료 / 상담 신청이 정상적으로 접수되었습니다.`로 함께 전환
- Header 우측 입력 안내를 제거하고 비밀유지 원칙과 필요 시 NDA 체결 안내로 교체
- Success Body의 Small Label을 `CONSULTATION`에서 `SUCCESS`로 변경하고 기존 Icon·Headline·본문·확인 버튼 유지
- Form Submit 후 Header와 Body를 0.14초 Fade Out과 0.14초 Fade In으로 동시에 교체하여 약 0.28초 전체 상태 전환 구현
- Modal `data-state`, 상태별 Header 요소와 공통 `setModalState()`로 Header·Body·ARIA Label/Description을 함께 관리
- Google Workspace 연동 후에도 Form Submit 성공 시 동일한 `success` 상태를 호출할 수 있도록 상태 구조 유지

## EQUIV Consultation Success Modal Upgrade - MASTER UX SPEC v1.1

- 기존 Success 레이아웃, Header, Typography, Spacing과 확인 버튼 위치를 유지
- Success 상단에 60px Gold Outline Circle과 절제된 Check Line Icon 추가
- Success 문구를 정상 접수, 영업일 기준 1~2일 이내 연락, 필요 자료 별도 안내와 비밀유지 원칙 중심으로 개선
- 정적 전송 안내를 localhost, 로컬 파일과 `.local` 개발 환경에서만 표시하고 Production Host에서는 자동으로 숨기도록 분기
- Icon에 0.28초 Fade·Scale 전환을 적용하고 Reduced Motion 환경에서는 Animation 제거
- 확인 버튼 Transition을 0.22초로 조정하고 확인 클릭·Enter·ESC 닫기, Scroll 유지와 호출 CTA Focus 복귀를 보강

## EQUIV Consultation UX Upgrade - MASTER UX SPEC v2.0

- 별도 `contact.html` 상담 페이지를 제거하고 HOME Contact Section과 공통 Consultation Modal 중심의 상담 경험으로 전환
- Header와 Footer의 Contact Link를 HOME `#contact` Anchor로 복원하고 Contact CTA를 `상담 시작하기`로 변경
- HOME Hero, Service Pages, Insights, Deal Readiness 결과와 Business Valuation 결과의 상담 CTA를 하나의 공통 Modal 호출 구조로 통일
- Modal을 860px Desktop, 720px 수준 Tablet, Mobile 여백형 Full Width 구조와 50% Overlay·약한 Blur·18px Radius·Soft Shadow로 구성
- Modal 안에 상담 대상, 5단계 상담 절차, NDA 안내와 최소 입력 Form을 40:60 구조로 배치
- 개인정보 수집 및 이용 안내를 Modal 내부 Accordion으로 제공하고 별도 페이지 이동을 제거
- Form Validation과 Success 화면을 Modal 안에서 처리하고 우측 상단 닫기, ESC, Overlay 클릭, 확인 버튼을 모두 지원
- Focus Trap, Tab 이동, `aria-modal`, `aria-hidden`, `aria-expanded`와 호출 요소 Focus 복원 적용
- Business Valuation 결과 상담 CTA는 사전진단 Modal을 닫은 뒤 공통 Consultation Modal을 열도록 연결하고 계산 엔진·Calibration·Value Driver는 변경하지 않음
- 현재는 입력값을 전송하거나 저장하지 않는 정적 Form으로 유지하고 Google Apps Script·Sheets·Gmail 연동 지점을 보존

## Contact & Consultation Page - MASTER UX SPEC v1.0

- 독립 Conversion Page `contact.html`을 생성하고 모든 Header, Footer와 상담 CTA를 해당 페이지로 연결
- Hero를 `M&A 상담 / 좋은 거래는 충분한 이해에서 시작됩니다.` 메시지로 구성하고 브랜드 설명 대신 상담 시작 역할에 집중
- Desktop 40:60의 상담 안내·신청 Form 2단 구조와 Tablet·Mobile 단일 열 반응형 구조 적용
- 좌측에 상담 대상, 5단계 상담 절차와 NDA 중심 비밀유지 안내를 구성
- 우측 Form을 회사명, 담당자명, 연락처, 이메일, 상담 유형, 선택 문의 내용과 필수 개인정보 동의만으로 최소화
- 개인정보 수집항목, 목적, 보유기간, 법령상 예외와 동의 거부 안내를 접이식 상세 영역으로 구현
- 정적 Form Validation, 개인정보 안내 Toggle과 Submit Success 화면을 추가하고 입력값 전송·저장 기능은 추가하지 않음
- 정적 버전임을 Form과 완료 화면에 명시하여 실제 접수로 오인되지 않도록 구성
- Business Valuation의 사전진단 Modal, 계산 엔진, Calibration, Value Driver와 결과 화면은 변경하지 않음
- `MASTER_SPEC.md`에 Contact Page 구조, 최소 수집 원칙, 개인정보와 향후 Google Workspace 연동 원칙을 반영

## Insights Final Structure

- Insights 최종 카테고리를 `M&A 실무 / 업종별 M&A / 시장분석 / 거래사례` 네 개로 확정
- 가치평가 인사이트를 Header Dropdown과 HOME Insights 카드에서 제외하고 Business Valuation과 역할을 분리
- `ma-practice.html`을 추가하고 대표 글 `기업 매각은 언제 준비해야 할까요?` 작성
- `industry-ma.html`을 추가하고 대표 글 `제조업 M&A에서 가장 중요하게 보는 것은 무엇일까요?` 작성
- `market-insights.html`을 시장분석 대표 글 `최근 국내 M&A 시장은 어떻게 변화하고 있을까요?`로 재작성하고 공정거래위원회·삼일PwC 자료를 참고 출처로 표시
- `deal-stories.html`을 거래사례 대표 글 `거래는 가격보다 구조가 중요했던 사례`로 재작성하고 특정 거래가 아닌 재구성 사례임을 명시
- HOME Insights를 네 개 카드의 2열 구조로 정리하고 Header Insights Dropdown을 실제 네 페이지 경로로 통일
- 기존 `valuation-insight.html`은 메뉴에서 제외하되 기존 경로 호환을 위해 삭제하지 않음
- 짧고 명확한 문장, 실무 설명 중심 문체와 향후 카테고리별 확장 원칙을 `MASTER_SPEC.md`에 반영

## Header Dropdown Surface Refinement

- Desktop Header Dropdown 배경을 흰색에서 기존 Design System의 Light Gray로 변경
- Dropdown 상단 중앙에 메뉴와 동일한 배경색의 작은 삼각형 Pointer를 추가
- Pointer에는 Dropdown과 동일한 얇은 Navy 계열 테두리를 적용하고 기존 절제된 Shadow를 유지
- Mobile Accordion에서는 Pointer를 표시하지 않고 기존 투명 배경과 세로 흐름을 유지
- Dropdown 구조, 링크, 접근성 속성과 동작 로직은 변경하지 않음

## Header Navigation Dropdown - 서비스 및 인사이트

- 전체 공개 페이지 Header의 `서비스`와 `인사이트` 메뉴에 미니멀한 1단 Dropdown을 적용
- Service Dropdown을 `기업 매각 / 기업 인수 / 기업가치 검토 / 투자유치 / 성장 전략`과 현재 공개 경로로 연결
- 실제 존재하는 Insights 페이지를 확인하여 `시장 동향 / 가치평가 인사이트 / 거래 사례` Dropdown을 적용
- Desktop에서 Hover·Focus·Toggle Click을 지원하고, 외부 Click·Focus 이탈·ESC로 닫히며 한 번에 하나만 열리도록 구현
- Mobile에서는 상위 Link와 Toggle Button의 역할을 구분하고 Accordion 방식으로 하위 메뉴를 열고 닫도록 구현
- 하위 Link 선택 시 Mobile Navigation이 닫히며, 서비스·인사이트 상세페이지에서는 상위 메뉴와 현재 하위 Link를 Active 상태로 표시
- Dropdown Toggle에 `aria-expanded`, `aria-haspopup`, `aria-controls`와 상태별 접근성 Label을 적용
- 기존 Home 가치평가 인사이트 카드의 잘못된 `valuation-insights.html` 경로를 실제 파일인 `valuation-insight.html`로 수정
- Header 높이·기본 정렬·한글 메뉴·EQUIV 로고와 Footer Signature는 변경하지 않음
- `MASTER_SPEC.md`에 `Header Dropdown Principle`을 추가

## Brand Polishing Sprint - Header Navigation Localization

- 전체 공개 페이지 Header 메뉴를 `홈 / EQUIV 소개 / 서비스 / 인사이트 / 상담`의 한글 중심 표기로 통일
- 브랜드명 `EQUIV`는 영문으로 유지하고 `About EQUIV`만 `EQUIV 소개`로 현지화
- Home과 About을 포함한 모든 공개 페이지 Header에서 `M&A Advisory` 보조 문구를 제거하고 `EQUIV`만 표시
- 메뉴 위치, 간격, 링크, Hover·Active 효과, 색상, 타이포그래피와 반응형 동작은 변경하지 않음
- Hero의 브랜드 소개 문구와 Footer의 `M&A Brokerage & Advisory` Signature는 변경하지 않음
- `MASTER_SPEC.md`에 한글 중심 UI와 Header 로고 역할을 정의하는 `Header Navigation Language` 원칙을 추가

## Home & About Header Logo Simplification

- HOME Header 로고에서 보조 문구 `M&A Advisory`를 삭제하고 `EQUIV`만 표시
- About EQUIV Header도 동일하게 보조 문구를 삭제하고 `EQUIV`만 표시
- 로고의 Home 링크, Header 레이아웃, 나머지 페이지 Header와 Footer Signature는 변경하지 않음

## Brand Polishing Sprint 6 - Footer Signature

- 전체 공개 페이지 Footer를 중앙 정렬 정보 구조에서 좌측 Brand Signature와 우측 Site Map의 2단 구조로 통일
- Brand Signature를 `EQUIV / M&A Brokerage & Advisory / by 정진아시아M&A센터 / © 2026 EQUIV. All Rights Reserved.`로 재구성
- 기존 이메일 정보와 `M&A Advisory` 보조 표기를 제거하고 요청된 Brokerage & Advisory 브랜드 표기로 통일
- Site Map을 `About / Expertise / Business Valuation / Insights / Contact`의 최소 메뉴로 구성하고 Home은 로고 링크로만 유지
- Desktop은 좌우 배치, Tablet·Mobile은 세로 배치로 전환하며 Footer 상하 패딩과 좌우 균형을 조정
- 새로운 아이콘, 배경과 컬러를 추가하지 않고 기존 Navy·Gold·White 디자인 시스템을 유지
- `MASTER_SPEC.md`의 Footer Principle을 최종 Signature 구조와 Site Map 정책에 맞게 업데이트

## Brand Polishing Sprint 5.1 - Contact Layout Refinement

- 제공된 최종 레이아웃 시안을 현재 디자인 시스템에 맞춰 Contact 영역에 반영
- CTA 버튼과 응답 안내는 기존 좌측 위치를 유지하고 Confidential 안내를 같은 행의 오른쪽 열로 이동
- CTA 버튼과 Confidential 영역을 상단선 기준으로 정렬하고 별도 구분선 없이 충분한 열 간격으로 구분
- `문의 후 영업 목적의 연락은 하지 않습니다.`를 포함한 추가 Trust Message를 삭제하고 Confidential 문구만 유지
- Contact 상하 패딩과 내부 간격을 줄여 전체 높이를 컴팩트하게 조정
- Mobile에서는 CTA 아래에 Confidential이 자연스럽게 배치되는 단일 열 구조를 유지
- 기존 Navy·Gold 색상, 타이포그래피, CTA 버튼과 Footer 디자인은 변경하지 않음

## Brand Polishing Sprint 5 - Contact Simplification

- HOME의 `#contact` 영역을 브랜드 설명이 아닌 상담 시작에 집중하는 Conversion 영역으로 간소화
- 상단 라벨 `CONTACT`는 유지하고 메인 제목을 `M&A 상담`으로 변경
- Hero 설명을 기업 매각·인수 검토와 거래 가능성 상담을 제안하는 두 문장으로 축약
- 중복 정보인 4단계 상담 진행 순서와 Contact 하단 한·영문 Brand Statement를 삭제하여 Contact 다음에 Footer가 바로 이어지도록 정리
- Confidential 안내를 제출 정보와 상담 내용의 비밀유지 원칙을 전달하는 간결한 문장으로 수정
- Contact CTA, 응답 안내, 입력·실행 동선과 Footer 디자인은 변경하지 않음
- `MASTER_SPEC.md`에 페이지별 브랜드 메시지 중복을 금지하고 Contact는 상담 시작만 담당하는 `Brand Communication Principle`을 추가

## MASTER_SPEC Update - Website Page Architecture

- 웹사이트를 `Brand Pages / Service Pages / Lead Generation Page / Conversion Page`의 네 가지 Page Type으로 구분하고 각 역할을 공식화
- Home, About EQUIV, Expertise는 브랜드 경험과 신뢰 형성을 담당하고, Service Pages는 `Hero / Overview / How We Work / FAQ / CTA` Master Template으로 서비스 설명과 상담 연결을 담당하도록 명시
- Business Valuation을 일반 Service Page가 아닌 독립 Lead Generation Page로 규정하고 Hero 우측 사전진단 CTA, Modal, 계산 엔진, Calibration, Value Driver, 결과 화면을 보호 대상으로 명시
- Contact는 브랜드 설명을 반복하지 않는 공통 상담 Conversion Page로, Footer는 회사소개가 아닌 Brand Signature로 정의
- `Home → About → Expertise → Service Page → Business Valuation → Contact → Footer` 역할 흐름과 페이지 간 중복 설명 금지 원칙을 추가
- 문서 정책만 업데이트했으며 HTML, CSS, JavaScript 및 기존 페이지 기능은 변경하지 않음

## Business Valuation Direct Route Restore

- HOME Expertise의 `기업가치 검토` 카드 연결을 `business-valuation-review.html`에서 기존 Lead Page인 `business-valuation.html`로 복원
- 사용자 진입 흐름을 `Expertise → 기존 Business Valuation → Hero 사전진단 시작하기 → Modal`로 정리
- `business-valuation-review.html`은 삭제하지 않고 보존하되 현재 공개 주 진입 경로에서는 제외
- Business Valuation Hero, 사전진단 CTA, Modal, 계산 엔진, Calibration, Value Driver, 결과 화면과 관련 JavaScript는 변경하지 않음

## Business Valuation Restore

- Business Valuation이 일반 Service Page가 아닌 기업가치 사전진단 전용 Lead Generation Page임을 재확인
- 기존 좌측 Business Valuation 메시지와 우측 기업가치 사전진단 영역의 2열 Hero 구조 유지
- Hero Lead를 `기업가치평가는 거래의 목적이 아닙니다. 좋은 거래 전략을 위한 출발점입니다.`로 최종 확정 카피에 맞게 복원
- 우측 설명을 핵심 재무정보와 사업 특성에 기반한 `예비 기업가치 범위` 안내로 복원
- `사전진단 시작하기` CTA를 Hero에 유지하고 하단 이동이나 상세페이지 직접 Modal 실행을 적용하지 않음
- Modal 실행·스크롤·계산·결과·닫기 UX와 계산 엔진, Calibration, Value Driver, 결과 화면 및 관련 JavaScript는 변경하지 않음
- 기업 매각, 기업 인수, 기업가치 검토, 투자유치와 성장 전략 서비스 페이지는 현재 Master Template 구조 유지

## Service Page Scope Clarification - 기업가치 검토와 Business Valuation 분리

- `business-valuation-review.html`을 기업가치 검토 서비스 상세페이지로 새로 생성하고 기업 매각 Master Template의 `Hero / Overview / How We Work / FAQ / CTA` 구조 적용
- HOME Expertise의 `기업가치 검토` 카드 연결을 사전진단 페이지가 아닌 새 서비스 상세페이지로 변경
- 기업가치 검토 CTA를 `business-valuation.html`로 연결해 `Expertise → 서비스 상세페이지 → Business Valuation → 사전진단 Modal` 흐름 구성
- 서비스 상세페이지에는 Modal과 Valuation 관련 JavaScript를 연결하지 않아 사전진단 기능의 중복 실행을 방지
- `business-valuation.html`의 Hero 오른쪽 사전진단 영역, 실행 CTA, Modal 위치, 계산 엔진, Calibration, Value Driver와 결과 화면은 변경하지 않음
- `MASTER_SPEC.md`와 `SERVICE_PAGE_TEMPLATE.md`에 두 페이지의 별도 역할, 파일과 연결 원칙을 명시

## Brand Polishing Sprint 4.5 - Apply Service Page Master Template

- 기업 인수, 투자유치와 성장 전략 상세페이지를 기업 매각 Master Template와 동일한 `Hero / Overview / How We Work / FAQ / CTA` 구조로 재구성
- 세 페이지의 Hero 제목과 영문 부제를 `기업 인수 / Buy-side M&A`, `투자유치 / Capital Raising`, `성장 전략 / Growth Strategy`로 정리
- 각 Overview를 서비스가 필요한 이유를 설명하는 두 개의 짧은 문단으로 축약
- 기존 Key Points, Why EQUIV와 What EQUIV Does를 삭제하고 Our Approach를 서비스별 네 단계 How We Work로 통합
- FAQ를 실제 상담 전 대표가 자주 묻는 네 질문으로 정리하고 CTA를 서비스별 한 문장과 구체적인 상담 버튼으로 간소화
- 새로운 CSS, 카드, 섹션과 애니메이션을 추가하지 않고 기업 매각 페이지의 기존 Layout·Typography·Spacing·Responsive 규칙을 그대로 사용
- 공개 사전진단과 계산 Modal의 유일한 진입점을 포함한 Business Valuation은 `Business Valuation 변경 금지` 원칙과 기존 전용 정책에 따라 이번 구조 변경에서 제외
- `MASTER_SPEC.md`에 일반 Service Page의 동일 구조·디자인·UX·톤앤매너 기준과 Business Valuation 예외 원칙을 명시
- HOME, About, Expertise Navigation, Contact, Footer와 Business Valuation 계산 기능은 변경하지 않음

## Brand Polishing Sprint 4 - Service Page Master Template (기업 매각)

- 기업 매각 상세페이지의 제목을 `기업 매각`, 영문 제목을 `Sell-side M&A`로 변경
- 페이지 구조를 `Hero / Overview / How We Work / FAQ / CTA`의 다섯 섹션으로 간소화
- Hero의 핵심 문장 `좋은 매각은 거래 이전의 전략에서 시작됩니다.`를 유지하고 반복 설명 삭제
- Overview 본문을 거래 목적과 방향 중심의 두 문장으로 축약
- `Key Points`와 `Why EQUIV` 섹션을 삭제하고, `What EQUIV Does`와 `Our Approach`를 네 단계 `How We Work`로 통합
- How We Work 설명을 `검토 / 설계 / 발굴·연결 / 협상·계약 체결`의 실제 거래 업무 중심 한 문장으로 축약
- FAQ를 실제 상담 전 대표가 자주 묻는 네 질문으로 정리
- CTA를 `기업 매각을 검토하고 계십니까? / 거래 가능성과 전략을 함께 검토해 보십시오. / 기업 매각 상담`으로 간결하게 변경
- `MASTER_SPEC.md`와 `SERVICE_PAGE_TEMPLATE.md`를 기업 매각 Master Template 기준의 5개 섹션 원칙으로 개정
- 기존 디자인 시스템과 Header, Footer, 애니메이션을 유지하고 다른 서비스 페이지는 변경하지 않음

## EQUIV Valuation Engine Version History

| Engine Version | Date | Changes |
|---|---|---|
| `v1.5` | 2026-07-16 | 자산형 기업 Asset Value Adjustment 40% 추가 |
| `v1.4` | 2026-07-16 | IT·소프트웨어 Technology Business Premium 추가 |
| `v1.3` | 2026-07-15 | Distribution Premium 폐지, 유통업 Revenue Contribution 90:10 모델 적용 |
| `v1.2` | 2026-07-15 | 유통업 전용 Distribution Premium 추가, 유통·서비스 업종 선택 분리 |
| `v1.1` | 2026-07-15 | EQUIV Scale Premium 추가, 결과 금액 표시 개선 |

## Brand Polishing Sprint 3.3 - Expertise Terminology Refinement

- Expertise 카드 CTA를 `기업 매각 알아보기 / 기업 인수 알아보기 / 기업가치 검토 알아보기 / 투자유치 알아보기 / 성장 전략 알아보기`로 거래 중심 용어에 맞게 통일
- 영문 부제를 `Sell-side M&A / Buy-side M&A / Business Valuation / Capital Raising / Growth Strategy`로 변경
- Expertise 카드 내 `자문` 표현을 제거하고 Home Hero, About, Footer와 회사 소개의 `M&A 중개·자문` 브랜드 표기는 유지
- 카드 제목, 순서, 디자인, 레이아웃, 상세페이지 링크와 CSS는 변경하지 않음
- `MASTER_SPEC.md`에 Expertise Terminology Principle 추가

## Expertise Refinement - Navigation Menu Layout

- Home Expertise 섹션 영문 라벨을 `FEATURED EXPERTISE`에서 `EXPERTISE`로 간결하게 변경
- Featured Expertise 제목을 `M&A, 그 전략.`으로 변경하고 기존 설명 문구 삭제
- Desktop·Tablet 카드 최소 높이를 340px에서 260px로 약 24% 추가 축소
- 카드 콘텐츠를 수직 중앙에 모으고 CTA의 자동 하단 정렬을 해제해 서비스 선택 메뉴처럼 재구성
- 한글 제목과 CTA 사이의 전체 정보 간격을 약 38px로 조정하고 CTA를 카드 하단에서 위로 이동
- 영문 부제 크기를 16px에서 14px로 축소해 보조 정보 계층 강화
- 기존 카드 제목, 영문 부제, CTA 문구, 상세페이지 링크와 카드 수 유지

## Brand Polishing Sprint 3.1 - Expertise Card Simplification

- 다섯 Featured Expertise 카드의 설명 문단을 모두 제거하고 `번호 / 제목 / 영문 부제 / 알아보기 CTA`만 유지
- Desktop 카드 높이를 기존 실측 474px에서 목표 340px로 약 28% 축소하고 상하 여백을 정리
- 영문 부제 크기를 23px에서 16px로 낮춰 제목을 보조하는 정보 계층으로 조정
- 카드별 기존 `알아보기` CTA와 상세페이지 링크 유지
- 하단 문구를 `좋은 거래는 기업을 이해하는 것에서 시작됩니다.`로 간결하게 변경
- `MASTER_SPEC.md`의 Expertise Principle을 서비스 선택을 위한 Navigation 역할 중심으로 보완

## Brand Polishing Sprint 3 - Expertise Repositioning

- Featured Expertise를 서비스 나열에서 대표가 현재 필요한 M&A 지원을 찾는 문제 해결형 구조로 리포지셔닝
- 카드 제목을 `기업 매각 / 기업 인수 / 기업가치 검토 / 투자유치 / 성장 전략`으로 간결하게 변경
- 다섯 카드 설명을 사용자의 현재 질문과 EQUIV의 실제 검토·발굴·연결·조율·지원 업무 중심으로 재작성
- 공통 `자세히 보기`를 `매각자문 알아보기 / 인수자문 알아보기 / 기업가치 검토 알아보기 / 투자유치 알아보기 / 성장전략 알아보기`로 구체화
- 기업가치 카드에서 정식 평가기관으로 오인될 수 있는 `기업가치평가` 표현을 줄이고 참고 범위 검토 관점으로 변경
- Business Valuation 상세페이지에 기존 `기업가치 사전진단` CTA가 있음을 확인해 별도 TODO는 추가하지 않음
- 카드 수, 레이아웃, 아이콘, 애니메이션, 상세페이지 링크와 CSS는 변경하지 않음
- `MASTER_SPEC.md`에 고객 문제 해결 중심의 Expertise Principle 반영

## Brand Polishing Sprint 2 - About EQUIV Simplification

- About 페이지를 `About Hero / EQUIV 소개 / 거래 진행 방식 / 상담 CTA`의 네 개 본문 섹션으로 간소화
- `Who We Are`와 `Our Philosophy`를 실제 M&A 중개·자문 업무와 거래 원칙 중심의 `EQUIV 소개` 섹션으로 통합
- `EQUIV 소개`, `거래 진행 방식` 소제목을 Desktop·Tablet 24px, Mobile 20px로 확대해 섹션 구분과 한글 가독성 강화
- Why EQUIV 네 개 카드, Brand Statement, About Quote와 반복 철학 문구 삭제
- Hero Copy를 기업 매각·인수 연결과 거래 시작부터 성사까지의 지원 역할로 간결하게 변경
- How We Work를 `이해 / 검토 / 설계 / 연결 / 진행`의 한글 중심 5단계 가로형 프로세스로 재구성
- Desktop 5열, Tablet 3+2열, Mobile 세로형 흐름으로 반응형 구성하고 Line·여백·Typography 중심의 Minimal 디자인 적용
- CTA를 `기업 매각이나 인수를 검토하고 계십니까? / M&A 상담 신청`으로 정리
- meta description을 `M&A 중개·자문 브랜드` 중심의 공개 문구로 변경
- `MASTER_SPEC.md`에 About Page Principle과 Footer 브랜드 표기 후속 검토사항 반영

## Brand Polishing Sprint 1.2 - Home Hero Layout Balance

- Home Hero의 브랜드 영역, 메인 제목과 CTA 전체 그룹을 기존 조정 위치에서 20px 추가 상향해 누적 48px 이동
- `EQUIV (이퀴브) │ M&A 중개·자문 브랜드`의 영문·한글 브랜드 표기를 Desktop·Mobile에서 각각 1px 확대
- 브랜드 아이덴티티와 메인 제목 사이 간격을 Desktop·Mobile 모두 10px 축소해 하나의 메시지로 연결
- 메인 제목과 CTA 사이 간격을 12px 확대해 메시지와 행동 영역의 위계 강화
- Desktop·Tablet·Mobile에 동일한 수직 균형 원칙을 적용하고 기존 반응형 CTA 정렬 유지
- Hero 카피, CTA 문구·디자인, 배경 이미지, 오버레이, 색상, 폰트, 높이와 전체 디자인 콘셉트는 변경하지 않음
- `MASTER_SPEC.md`의 Home Hero Principle에 콘텐츠 그룹의 시각적 중심 및 여백 원칙 추가

## Brand Polishing Sprint 1.1 - Home Hero Brand Identity Refinement

- Home Hero 상단을 `EQUIV (이퀴브) │ M&A 중개·자문 브랜드`의 구조화된 브랜드 아이덴티티 라인으로 변경
- EQUIV는 기존 Gold 강조를 유지하고 한글명은 작은 연한 Gold, 브랜드 설명은 작은 연회색으로 계층화
- 브랜드명과 업종 설명 사이에 절제된 연회색 세로 구분선 적용
- 메인 제목과 매각·인수 CTA 및 기존 Primary·Secondary 버튼 디자인 유지
- Hero의 회사 설명, 거래 설명과 가치 설명 문단을 모두 제거해 브랜드명·정체성·대표 메시지에 집중
- Desktop·Tablet·Mobile에서 브랜드 아이덴티티가 한 줄을 우선 유지하고 좁은 화면에서는 묶음 단위로 자연스럽게 줄바꿈하도록 구성
- `MASTER_SPEC.md`에 Home Hero Principle과 About EQUIV의 상세 설명 역할 반영
- About, Business Valuation, 기업가치 사전진단, 평가 엔진, Expertise, Contact와 Footer는 변경하지 않음

## Brand Polishing Sprint 1 - Home Hero M&A Brokerage Positioning

- Home Hero 보조문구를 `기업가치와 거래의 균형`으로 변경하고 `Premium M&A Advisory` 전면 표현 제거
- 메인 제목을 `기업을 연결하고, / 성공적인 M&A를 만듭니다.`의 Desktop 2줄 구조로 변경
- EQUIV를 기업 매각과 인수를 연결하고 거래 시작부터 성사까지 함께하는 `M&A 중개·자문 브랜드`로 명확히 표현
- 기업 이해, 거래상대방 발굴, 거래 구조와 협상 방향 검토를 설명하는 보조 카피 추가
- 기존 `기업 매각 상담` Primary CTA와 `기업 인수 상담` Secondary CTA 및 Contact 앵커 연결 유지
- 모바일에서 본문을 의미 단위로 줄바꿈하고 CTA를 세로 배치한 기존 반응형 구조를 유지하면서 간격과 Hero 전용 버튼 높이 조정
- `MASTER_SPEC.md`에 EQUIV Brand Positioning Principle, `COPY_GUIDE.md`에 중개·자문 권장 및 지양 표현 추가
- 도시 이미지, 네이비 오버레이, Hero 높이, 타이포그래피 위계와 반응형 구조 유지
- Business Valuation, 기업가치 사전진단, 평가 엔진, Expertise, About, Contact와 Footer는 변경하지 않음

## Sprint 12.1 - Business Valuation Hero Branding Refinement

- Hero 우측 영문 라벨을 한글 `기업가치 사전진단`으로 변경하고 메인 제목 `내 회사의 기업가치는?` 유지
- 모달 제목과 닫기 접근성 문구도 `기업가치 사전진단`으로 통일해 Hero와 진단 화면의 명칭 일치
- 설명을 핵심 재무정보와 사업 특성에 기반한 `현재 기업가치의 참고 범위` 안내로 정제
- 입력정보가 저장되거나 전송되지 않는다는 개인정보 안내를 본문보다 작은 회색 문구로 추가
- 예상 소요시간을 `약 2~3분`, CTA를 `사전진단 시작하기`로 변경해 Hero 내 용어 통일
- Hero CTA 버튼 높이와 좌우 패딩을 축소해 보다 슬림한 미니멀 스타일 적용
- 데스크톱에서 우측 진단 블록을 26px 아래로 조정하고 모바일에서는 추가 이동을 해제해 시각적 균형 유지
- 기존 카드 제거 방식과 단일 골드 CTA 원칙을 유지하고 계산 엔진, Calibration, 업종, Value Driver와 페이지 구조는 변경하지 않음

## Sprint 12.0 - Business Valuation Public Release UX

- Business Valuation 페이지 Hero를 좌측 브랜드 카피와 우측 예비진단 CTA 영역의 균형 있는 2열 구성으로 확장
- Hero 예비진단 영역의 흰색 카드, 골드 상단선, 그림자를 제거하고 주위 배경과 통합하여 CTA 버튼만 골드로 강조
- CTA 영역에 `내 회사의 기업가치는?`, 핵심 입력 안내, 예상 소요시간 약 3분과 `예비진단 시작하기` 버튼 적용
- 공개 진입점을 Business Valuation Hero 한 곳으로 제한하고 HOME 및 페이지 하단에는 동일 예비진단 CTA를 추가하지 않음
- 공개 페이지에 기업가치 예비진단 Modal Shell과 기존 Valuation 스크립트를 연결
- 최종 입력 버튼을 `예비 기업가치 확인하기`로 변경하고 내부 테스트 확인 문구를 공개용 참고진단 확인 문구로 교체
- 결과 화면의 TEST_ONLY, 내부 테스트, Prototype과 Engine Version 노출을 제거하고 공개용 EQUIV Business Valuation Branding 및 Disclaimer 적용
- 비활성 상담 버튼을 EQUIV 거래전략 이메일 상담 링크로 전환
- 기존 `valuation-prototype.html`은 기능 중복 없이 Business Valuation 페이지로 안내하는 호환 리디렉션으로 정리
- 공개 승인 설정을 `PUBLIC_RELEASE / publicReleaseApproved: true`로 전환하고 입력값 비저장·비전송 원칙 유지
- 엔진 v1.5, 계산 로직, 업종, Value Driver, Premium, Calibration과 결과 수치는 변경하지 않음

## Sprint 11.11 - Asset-Based Industry Label Clarification

- 업종 선택 Label을 `자산형 (임대업·호텔·골프장·물류창고 등)`으로 변경
- 자산형 선택 시 모바일과 좁은 화면에서도 적용 대상을 확인할 수 있도록 기존 작은 회색 보조문구 추가
- 기타 업종 안내와 자산형 안내를 각 업종 선택값에 따라 독립적으로 표시하도록 안내문 전환 로직 정리
- MASTER_SPEC와 VALUATION_MODEL_SPEC에 자산형 정의 및 임대업·호텔·골프장·물류창고·기타 자산 중심 운영기업 예시 반영
- 내부 업종 Key `asset`, 평가 엔진 v1.5, Asset Value Adjustment 40%, 분류 로직과 결과 수치는 변경하지 않음

## Sprint 11.10 - Asset-Based Business Calibration

- 자산형 업종과 Asset-Based Model에만 적용되는 Asset Value Adjustment를 내부 테스트 설정으로 추가
- 기존 자산형 업종 배수, Income·Asset 혼합가중치, Asset disposal discount와 기업 특성 Adjustment 유지
- 기존 Asset-Based Model 산출가치 이후 사업용 자산가치의 40%를 별도 Value Driver로 가산
- 대표 테스트에서 예비 기업가치가 약 `17.7억~20.5억원`에서 `37.7억~40.5억원`으로 조정되어 목표 `35억~45억원` 범위에 진입
- 자산형 결과 화면에 영업성과와 사업용 자산을 함께 고려한 예비 평가임을 설명하는 안내문 추가
- 엔진 버전을 `v1.5`로 갱신하고 MASTER_SPEC, VALUATION_MODEL_SPEC와 Calibration Log에 적용 원칙 및 검증 기록 추가
- 제조업·식품·유통·서비스·IT Calibration, Scale Premium, Revenue Contribution과 Technology Business Premium은 변경하지 않음

## Sprint 11.9 - Construction Industry Rollback & Other Industry Policy Finalization

- 업종 선택에서 건설업을 제거하고 `제조업 / 식품 / 유통 / 서비스 / IT·소프트웨어 / 자산형 / 기타`의 최종 7개 체계로 정리
- 건설업 제조업 배수 참조 설정을 제거하고 건설업을 기타 업종의 일반 평가모델 및 전문 상담 대상으로 전환
- 코드에 Construction Business Premium, Construction Adjustment, 건설업 전용 가중치나 결과 안내 로직이 존재하지 않음을 확인
- 기타 업종 입력 안내를 사업모델, 면허, 인허가, 자산구조와 거래관행 중심으로 수정
- 기타 업종 결과 안내와 상담 문구를 일반 모델의 적용 범위와 업종별 전문 검토 필요성이 명확히 드러나도록 개선
- `MASTER_SPEC.md`에 Other Industry Principle과 검증 완료 업종만 독립 운영하는 정책 반영
- `VALUATION_MODEL_SPEC.md`와 Calibration Log에서 건설업 독립 모델 및 향후 Construction Adjustment 계획 제거
- 기타 업종의 예비 기업가치, 예상 지분가치와 기존 결과 신뢰도 산출 흐름 유지
- 엔진 버전 `v1.4`, 평가 엔진, 업종 배수, Scale Premium, Revenue Contribution과 Technology Business Premium은 변경하지 않음

## Sprint 11.7 - IT Technology Business Premium Calibration

- IT·소프트웨어 업종에만 적용되는 Technology Business Premium을 내부 테스트 설정으로 추가
- `기술·특허·노하우`, `장기계약`과 반복매출 50% 이상 조건을 모두 충족할 때 +10% 적용
- 필수조건을 충족하면서 최근 3년 매출이 성장 또는 급성장한 경우 +15% 적용
- 현행 공통 UI의 `40~70%`와 `70% 이상` 반복매출 선택값을 후보 구간으로 사용하고 별도 IT 입력항목은 추가하지 않음
- 기존 기업 특성 Adjustment와 Scale Premium 이후 Technology Business Premium을 순차 적용
- IT·소프트웨어 결과의 예비 기업가치 아래에 기술력, 성장성, 반복매출, 고객 기반과 전문 상담 필요성을 설명하는 안내문 추가
- 엔진 버전을 `v1.4`로 갱신하고 MASTER_SPEC, VALUATION_MODEL_SPEC와 Calibration Log에 적용 원칙과 검증 기록 추가
- 업종 배수, Scale Premium, Distribution Revenue Contribution, 입력 UI, 신뢰도 알고리즘과 기업 유형 분류는 변경하지 않음

## Sprint 11.6 - Industry Structure Finalization

- 업종 선택을 `제조업 / 식품 / 유통 / 서비스 / 건설업 / IT·소프트웨어 / 자산형 / 기타`의 최종 8개 체계로 정리
- 건설업을 독립 업종으로 추가하고 초기에는 제조업과 동일한 기존 Earnings Multiple·Revenue Multiple을 사용
- 기타 업종을 Additional Review 자동 차단 대상에서 일반 평가모델 적용 대상으로 전환
- 평가 엔진을 수정하지 않고 UI 계산 어댑터에서 기타 업종을 서비스업 기준의 기존 일반 모델로 전달
- 기타 선택 시 업종 특성, 사업모델, 인허가와 고객구조에 관한 입력 안내문을 동적으로 표시
- 기타 결과 화면에 일반 모델 기반 산출 안내를 추가하고 기존 버튼을 유지한 채 상담 문구를 구체화
- `MASTER_SPEC.md`에 Construction Industry Principle과 Industry Expansion Principle 추가
- `VALUATION_MODEL_SPEC.md`에 최종 업종 구조, 건설업 모델 참조와 기타 업종 라우팅 정책 기록
- `EQUIV_CALIBRATION_LOG.md`에 건설업 Calibration 계획과 기타 업종 정책 추가
- 엔진 버전 `v1.3`, 업종 배수, Scale Premium, Revenue Contribution, 서비스·IT Calibration, 신뢰도 알고리즘과 기업 유형 분류는 변경하지 않음

## Sprint 11.5 - Core Competitiveness UI & Industry Interpretation Refinement

- `보유 경쟁력` 섹션명과 기존 2열 체크박스 구조 유지
- `기술 또는 특허`를 `기술·특허·노하우`, `우월적 유통망`을 `유통망·판매채널`로 변경
- 복수 선택 안내 아래에 업종별 핵심 경쟁력의 범위를 설명하는 작은 회색 보조문구 추가
- `특별한 경쟁력 없음` 선택 시 다른 항목을 자동 해제하고, 다른 경쟁력 선택 시 `특별한 경쟁력 없음`을 자동 해제하도록 상호 배타 UX 보완
- 기존 상호 배타 Validation을 보조 안전장치로 유지
- 결과 Insight의 경쟁력 명칭도 입력 UI와 동일한 용어로 정리
- `MASTER_SPEC.md`에 Business Valuation Input Consistency Principle과 Industry-Specific Value Driver Principle 추가
- `VALUATION_MODEL_SPEC.md`에 공통 보유 경쟁력 항목과 제조·식품·유통·서비스·IT 업종별 해석 기준 기록
- `EQUIV_CALIBRATION_LOG.md`에 공통 UI 유지, IT 기술 가중치와 성장성·기술력 정량화 검토 계획 추가
- 계산 엔진, 설정값, 업종 배수, Scale Premium, Revenue Contribution, 신뢰도 알고리즘과 기업 유형 분류는 변경하지 않음

## Sprint 11.4 - Distribution Revenue Contribution Model

- 유통업 전용 Distribution Premium 설정과 계산 로직 제거
- 유통업의 영업이익 기반 가치 90%와 매출 기반 가치 10%를 혼합하는 Revenue Contribution 모델 추가
- 향후 Calibration 후보인 `85:15`, `80:20` 가중치를 설정 파일에서 현재 적용값과 분리해 관리
- Stable Profit, Temporary Loss와 Turnaround 유통기업에 적용하고 기존 매출 혼합 방식이 있는 High-Growth에는 중복 적용하지 않음
- 제조업, 식품·소비재, 서비스, IT·소프트웨어와 자산 중심 기업에는 Revenue Contribution 미적용
- 기존 기업 특성 Adjustment를 혼합가치에 반영한 후 기존 Scale Premium 적용
- 기존 유통업 Earnings Multiple·Revenue Multiple, Scale Premium 기준, 가중치와 기업 유형 분류는 변경하지 않음
- EQUIV Valuation Engine 버전을 `v1.3`으로 갱신하고 관련 Version History 업데이트
- `EQUIV_CALIBRATION_LOG.md`에 Distribution Premium의 한계, Revenue Contribution 전환 이유, 테스트 결과와 90:10 채택 근거 기록
- Case 1·5·10 원본 입력값이 저장소에 없어 동일 사례 수치 재현은 보류하고 가중치·업종/모델 격리·Adjustment·Scale Premium 회귀 테스트로 대체
- Marketability Premium은 추가하지 않음

## Sprint 11.3 - Distribution Premium (Distribution Industry Calibration)

- 기존 `유통·서비스` 입력 업종을 `유통`과 `서비스`로 분리해 Distribution Premium의 적용 대상을 유통기업으로 한정
- 유통과 서비스의 기존 Earnings Multiple 및 Revenue Multiple 값은 동일하게 유지
- 적격 유통기업의 최근 사업연도 매출 100억원·300억원·500억원·1,000억원 이상에 각각 +5%·+10%·+15%·+20% Distribution Premium 적용
- 반복매출 비중 40% 이상이며 대표자 의존도가 `높음` 또는 `매우 높음`이 아닌 경우에만 Premium 적용
- 기존 Adjustment와 Scale Premium 이후 Distribution Premium을 반영하고 두 Premium 합산 적용률을 최대 +35%로 제한
- 합산 Premium은 복리 방식이 아닌 단일 보정계수로 영업가치에 적용
- 서비스업과 제조업 등 다른 업종의 Distribution Premium 비적용 유지
- EQUIV Valuation Engine 버전을 `v1.2`로 갱신하고 관련 문서의 Version History 업데이트
- `EQUIV_CALIBRATION_LOG.md`에 유통업 Calibration 목적, 적용 내용, 테스트 결과와 결론 기록
- Case 1·5·10 원본 입력값이 저장소에 없어 동일 사례 수치 재현은 보류하고 매출 경계·적용 조건·업종 격리·합산 상한 회귀 테스트로 대체
- 기존 업종 배수, Scale Premium 기준, 가중치, 기업 유형 분류와 Marketability Premium은 변경하지 않음

## Sprint 11.2 - EQUIV Calibration Log 구축

- 비공개 내부 의사결정 문서 `docs/EQUIV_CALIBRATION_LOG.md` 신규 생성
- 제조업·식품 Calibration 완료 상태와 현재 적용 엔진 버전 `v1.1` 기록
- 제조업의 기존 업종 배수 유지, EQUIV Scale Premium 적용 배경과 규모별 결과 및 유지 결론 문서화
- 식품기업의 업종 배수 변경 불필요 판단과 제조업 Scale Premium 유지 결론 기록
- 브랜드, 장기 납품관계와 반복매출에 대한 향후 Marketability Premium 검토 항목 추가
- 유통업, 서비스업, IT·소프트웨어, 자산형 기업과 실제 거래사례 기반 미세조정 순서 정리
- 날짜, 업종, 수정 내용, 담당과 결론을 누적하는 Calibration Version History 생성
- `MASTER_SPEC.md`에서 Calibration Log를 공식 내부 기록으로 연결하고 관리 원칙 명시
- 엔진 버전, 계산 로직, 업종별 배수, 보정계수와 Scale Premium 설정값은 변경하지 않음

## Sprint 11.1 - Business Valuation Display Polish & Version Management

- 결과 표시 함수만 조정해 10억원 미만은 소수 첫째 자리, 10억원 이상은 1억원 단위 반올림으로 표시
- `Low ~ High` 범위 구조와 계산 엔진 내부 정밀도는 그대로 유지
- `valuation-engine.js` 상단에 EQUIV Valuation Engine Version 1.1 주석과 별도 버전 상수 추가
- 프로토타입 문서 버전 `0.1-prototype`과 엔진 버전 `v1.1`을 분리해 관리
- 결과 상단 버전 표기를 `TEST_ONLY · Engine v1.1`로 변경
- `MASTER_SPEC.md`, `VALUATION_MODEL_SPEC.md`, `CHANGELOG.md`에 Engine Version History 추가
- 계산 로직, 업종별 배수, Scale Premium, 가중치와 기업 유형은 변경하지 않음

## Sprint 11.0 - EQUIV Scale Premium Model

- 기존 업종별 Earnings Multiple과 기업 특성 Adjustment를 변경하지 않고 별도 EQUIV Scale Premium 설정 추가
- Stable Profit Model의 기존 영업가치 산출 이후 최근 사업연도 영업이익 규모에 따라 0%·3%·7%·12%·18%·25% Premium 적용
- 최근 사업연도 매출 300억원·500억원·1,000억원 이상에 각각 5%·10%·15% Premium 적용
- 영업이익 Premium과 매출 Premium의 동시 적용을 허용하되 총 Premium을 최대 +35%로 제한
- Scale Premium 적용 후 기존 순차입금·비영업자산 조정과 범위 제한을 수행하도록 계산 순서 구성
- Temporary Loss, Turnaround, High-Growth와 Asset-Based Model은 Scale Premium 적용 대상에서 제외해 기존 계산 방식 유지
- Scale Premium 적용률과 계산식은 결과 화면에 노출하지 않고 `TEST_ONLY` 내부 알고리즘으로 관리
- `VALUATION_MODEL_SPEC.md`와 `MASTER_SPEC.md`에 EQUIV Scale Premium 기준·적용 순서·공개 제한 원칙 반영
- Case 1·5·10 원본 입력값은 저장소와 첨부 모델 문서에 없어 경계값·누적 상한·비적용 모델 회귀 테스트로 우선 검증

## Sprint 10.15 - Final UX & Copy Polish

- 예비 기업가치 범위 아래에 현재 입력자료 기반 참고 범위이며 실제 거래가치는 거래구조·성장성·기술력·고객구성·실사 결과에 따라 달라질 수 있다는 소형 안내문 추가
- 결과 항목명을 `기업가치의 강점 / 기업가치 검토 포인트`로 변경해 대표 관점의 이해도 개선
- `EQUIV Insight` 라벨은 유지하고 Insight 제목을 간결한 `EQUIV Advisory`로 변경
- 결과 CTA 버튼을 `EQUIV와 거래전략 상담하기`로 변경해 Premium Advisory 브랜드 주체를 명확히 표현
- `INTERNAL TEST PROTOTYPE` 표기는 유지하고 공개 승인 시 제거하거나 `EQUIV Business Valuation`으로 교체하도록 소스 주석 추가
- 기존 정적 구조와 디자인 시스템을 유지하고 새로운 Section 또는 Component는 추가하지 않음
- 계산 엔진, 업종별 배수, 가중치, 기업 유형과 결과 수치는 변경하지 않음

## Sprint 10.14 - Result Experience Polish

- 결과 신뢰도 명칭을 `매우 높음 / 높음 / 양호 / 제한적 / 참고용 결과`의 Premium Advisory Tone으로 정리
- 누락 연도 중심의 개발자형 문구를 최근 사업연도 기준 산출과 과거 재무자료 추가 효과를 설명하는 대표 관점의 안내로 변경
- EQUIV Insight를 매출 성장·감소·변동·안정 흐름에 따라 자동 분기
- 기술력·특허, 브랜드, 인허가·진입장벽, 장기계약과 유통망 등 실제 선택한 경쟁력을 Insight에 반영
- 반복 매출, 영업이익, 대표자 의존도, 거래처 집중도와 자료 준비 상태에 따른 Advisory Comment 추가
- 고부채 기업에는 사업가치와 재무구조를 구분하고 거래구조 검토 필요성을 안내하는 전용 Insight 적용
- Insight를 입력정보 기반 2~3문장으로 제한해 긍정적이고 간결한 해석 흐름 유지
- 계산 엔진, 업종별 배수, 가중치, 기업 유형과 결과 수치는 변경하지 않음

## Sprint 10.13 - Business Valuation Result Presentation Polish

- `결과 보기` 선택 후 0.85초 동안 EQUIV Business Valuation 분석 진행 화면 표시
- Navy·Gold 기반의 절제된 Spinner와 간결한 분석 안내 문구로 Premium Loading Experience 구성
- Loading 시작과 결과 렌더링 완료 후 모달의 `기업가치 예비진단` 타이틀 위치로 Smooth Scroll
- 결과 완료 시 타이틀에 포커스를 이동해 키보드·스크린리더 사용자도 결과 시작점을 인지하도록 보완
- Loading 중 모달을 닫으면 예약된 결과 렌더링을 취소하도록 타이머 정리
- 별도 뒤로가기 버튼 없이 기존 닫기 버튼과 결과 흐름 유지
- 계산 엔진, 배수, 가중치, 기업 유형, 결과 수치와 결과 내용은 변경하지 않음

## Sprint 10.11 - Result Auto Scroll UX

- 결과 생성 직후 모달 내부 스크롤을 `내 회사의 예비 기업가치` 제목 위치로 부드럽게 이동
- 하단 초기화 버튼의 포커스 접근성은 유지하되 `preventScroll`을 적용해 결과 하단으로 이동하는 현상 방지
- 결과 렌더링이 완료된 다음 화면 프레임에서 `scrollIntoView`를 실행해 안정적인 Smooth Scroll 적용
- 계산 엔진, 레이아웃과 Business Valuation 결과 내용은 변경하지 않음

## Sprint 10.10 - High Debt Company Result Message Refinement

- 고부채 기업의 예상 지분가치 상태를 일반적인 `추가 검토 필요`에서 `거래구조 검토가 필요합니다.`로 구체화
- 사업 자체의 예비 기업가치는 존재하며 현재 금융부채 때문에 단순 지분가치 산출이 제한된다는 설명으로 사업가치와 재무구조를 분리
- 예상 지분가치 제목 옆 Tooltip을 고부채 결과에 맞춰 `왜 전문가 검토가 필요한가요?` 안내로 동적 변경
- 중복되던 고부채 사유 Tooltip을 제목 옆 도움말 하나로 통합하고 기존 Hover·Focus·Click 접근성 동작 유지
- 결과 신뢰도 설명을 `예비 기업가치 정상 산출`과 `예상 지분가치 전문가 검토 권장`의 두 문장으로 분리
- 계산 엔진, 업종별 배수, 가중치와 기업 유형 분류는 변경하지 않음
- `MASTER_SPEC.md`에 고부채 기업의 거래구조 검토 안내와 비평가 원칙을 구체화

## Sprint 10.9 - High Debt Company Result UX Improvement

- 고부채 기업도 영업가치가 산출되면 부채 반영 전 예비 기업가치 범위를 계속 표시
- 금융부채가 예비 기업가치를 초과해 양수의 지분가치 산출이 어려운 경우 예상 지분가치에만 `추가 검토 필요` 표시
- 채무조정, 거래구조, 부채 승계 방식, 자산 활용과 인수자 전략에 따라 실제 거래조건이 달라질 수 있다는 설명 추가
- `추가 검토 필요` 옆에 Hover·Focus·Click으로 동작하는 사유 Tooltip과 접근성 속성 적용
- 예상 지분가치가 추가 검토 대상이어도 결과 신뢰도를 유지하고, 예비 기업가치는 정상 산출되었다는 설명을 신뢰도 문구에 반영
- 고부채 결과의 EQUIV Insight가 부채 반영 전 예비 기업가치를 기준으로 생성되도록 UI Adapter 보정
- 계산 엔진, 업종별 배수, 가중치와 기업 유형 분류는 변경하지 않음
- `MASTER_SPEC.md`에 고부채 기업의 사업가치·재무구조 분리 설명 원칙 추가

## Sprint 10.8 - Optional Numeric Field Normalization Fix

- 계산 엔진 실행 전 계산용 입력 복사본에서 선택 금액 필드의 빈 문자열·`null`·`undefined`를 명시적인 `0`으로 정규화
- 사업용 자산, 비영업용 부동산·금융자산, 조정부채, 정상화 비용과 일회성 이익에 공통 `0` 정규화 적용
- EBITDA, 감가상각비와 예상 실적은 입력 존재 자체가 계산 기준과 분류를 바꾸므로 빈칸과 명시적 `0`을 동일한 미입력 상태로 정규화
- 예상 실적이 모두 빈칸 또는 `0`이면 예상 실적 근거를 요구하지 않도록 Validation 보정
- 원본 입력값은 변경하지 않아 선택 정보의 실제 입력 여부와 결과 신뢰도 계산을 분리
- 일반 기업의 사업용 자산 빈칸은 `0`으로 처리하고, Asset-Based Model에서만 기존 원칙에 따라 자산정보 부족을 추가 검토
- 빈칸 입력 Case와 명시적 `0` 입력 Case의 기업가치·지분가치·평가모델 동일성 검증
- 업종별 배수, 가중치와 기업 분류의 기본 철학은 변경하지 않음
- `VALUATION_MODEL_SPEC.md`에 선택 숫자값 정규화 및 Additional Review 적용 원칙 추가

## Sprint 10.7 - Business Valuation Result Tuning

- 기업가치와 지분가치 계산 흐름을 점검하고 기존 `기업가치 - 금융부채 + 현금 + 비영업자산 - 조정부채` 구조가 정상 적용됨을 확인
- 순현금이 아니더라도 비영업자산을 포함한 순재무조정값이 양수이면 예상 지분가치가 예비 기업가치보다 높아질 수 있음을 결과 화면에 설명
- 재무구조 Divider를 비영업자산 입력 여부에 따라 `금융부채·보유 현금·비영업자산 반영`으로 확장하고 동적 보조 설명 추가
- 예비 기업가치와 예상 지분가치의 `중심 검토 범위`를 삭제해 핵심 Low–High 범위에 집중
- 적용 평가모델에 Stable Profit 등 영문 모델명과 함께 대표가 이해하기 쉬운 한글 모델 설명 추가
- 결과 신뢰도 단계별 설명을 짧고 단정한 Premium Advisory 문장으로 간결화
- Divider의 여백, Line Color, Typography와 방향 화살표를 조정해 `기업가치 → 재무구조 반영 → 지분가치` 흐름 강화
- 계산 엔진, 업종 체계, 배수 체계, 가중치와 기업 유형 분류는 변경하지 않음

## Sprint 10.5 - Valuation Input Placeholder Cleanup

- Business Valuation의 모든 숫자 입력 필드에서 예시 숫자 Placeholder를 제거해 빈 입력창으로 표시
- 매출, 영업이익, 부채, 현금, 자산과 재무조정 항목의 `억원` 단위 표시는 유지
- EBITDA, 감가상각비, 예상 실적과 선택 연도 등 기존 선택 표시는 유지
- 비영업 자산, 별도 조정 부채와 일회성 이익 등 선택 금액 항목은 Label에 `선택`을 명시
- 사업용 자산 가치와 정상화 가능한 비용의 도움말은 `선택 입력`과 기존 설명을 결합한 작은 보조문구로 유지
- 숫자 입력의 `step="0.1"`과 Chrome·Edge·Safari Number Spinner 제거 CSS 유지
- 계산 엔진, 업종별 배수, 가중치, 기업 유형 분류와 결과 신뢰도 알고리즘은 변경하지 않음

## Sprint 10.4 - Required Fields & Input UX Refinement

- 최근 실적 입력 순서를 `최근 사업연도 필수 → 직전 사업연도 권장 → 2개년 전 선택`으로 재구성
- 직전 및 2개년 전 매출·영업이익의 HTML 필수 속성과 3개년 일괄 Validation을 제거하고, 선택 연도는 매출·영업이익을 함께 입력하도록 검증
- 최근 사업연도만으로도 다음 단계와 결과까지 진행할 수 있도록 UI 계산 입력 보완 계층 추가
- 누락된 과거 실적은 가장 가까운 입력 연도의 값으로만 보완하여 기존 엔진에 전달하고, 성장률을 임의로 생성하지 않도록 구성
- 실제 입력한 재무 연도 수에 따라 참고 신뢰도를 최대 3개·4개·5개 별표로 자동 제한
- 과거 실적 보완 여부를 결과의 `추가 검토가 필요한 요소`에 표시해 산출 전제를 투명하게 안내
- 2개년 전 입력란 아래에 선택 입력과 결과 신뢰도 관계를 설명하는 보조 문구 추가
- 계산 엔진, 업종별 배수, 가중치와 기업 유형 분류 로직은 변경하지 않음
- `MASTER_SPEC.md`에 최소 필수 입력과 신뢰도 중심 결과 설명 원칙 반영

## Sprint 10.3 - Business Valuation Philosophy Refinement

- Business Valuation을 정확한 가격 확정 시스템이 아닌 대표가 대략적인 기업가치와 거래 관점을 이해하는 Preliminary Valuation Tool로 재정의
- 기존 계산 엔진, 업종별 배수, 가중치와 기업 유형 분류를 변경하지 않고 산출 가능한 예비 기업가치와 예상 지분가치 범위를 계속 표시
- 자료 충족도에 따른 참고 신뢰도를 1~5개 별표로 세분화하고 각 단계의 Label과 안내 문구를 Premium Advisory Tone으로 정리
- 재무구조 영향으로 지분가치만 추가 검토되는 경우에는 사업가치 평가모델의 자료 충족도를 기준으로 삼되 참고 신뢰도를 보통 이하로 제한
- `결과 신뢰도` 옆에 Hover·Focus·Click으로 동작하는 작은 `?` Tooltip을 추가해 지표의 의미와 비평가 원칙을 설명
- 신뢰도 영역에 기업의 우수성이나 경쟁력을 평가하는 점수가 아니라는 고정 안내 문구 추가
- 산출 근거가 없는 경우 임의 금액을 생성하지 않고 추가 검토 안내를 유지하는 안전 원칙 반영
- `MASTER_SPEC.md`에 `가능한 범위 제시 → 결과 신뢰도로 참고 수준 설명 → 정확한 가치평가는 상담으로 진행` 철학 추가

## Sprint 10.2 - Business Valuation Result Experience Enhancement

- 기업가치와 지분가치 사이에 `금융부채 및 보유 현금 반영` Divider와 방향 표시를 추가해 두 값의 관계를 직관적으로 표현
- 예비 기업가치 → 재무구조 반영 → 예상 지분가치 순서가 레이아웃만으로도 읽히도록 결과 정보 흐름을 보강
- 예상 지분가치 설명을 `현재 재무구조를 반영한 예비 지분가치입니다.`로 간결하게 정리
- 예상 지분가치 Tooltip의 실사, 운전자금, 우발채무, 거래조건 안내 순서를 M&A 실무 흐름에 맞게 조정
- 지분가치 산출이 제한되는 경우에도 `측정 불가` 표현 없이 `추가 검토가 필요합니다.` 안내를 유지
- 기업가치 계산 엔진, 업종별 배수, 가중치, 기업 유형 분류는 변경하지 않음

앞으로 기능, 디자인, 문구, 페이지 구조를 변경할 때는 이 문서를 함께 업데이트한다.

## Sprint 10.1 - Business Valuation Result Structure Refinement

- 기업가치 계산 공식, 엔진 파일, 업종별 배수, 가중치와 기업 유형 분류를 변경하지 않고 결과 표현 구조를 기업가치와 지분가치로 분리
- 기존 엔진을 재무구조 조정 전·후 조건으로 각각 호출하는 UI Adapter를 적용해 사업가치 기준의 `내 회사의 예비 기업가치`와 순차입금 등을 반영한 `예상 지분가치`를 함께 표시
- 예비 기업가치는 수익성과 성장성을 기준으로 한 범위와 적용 평가모델을 표시하고, 예상 지분가치는 금융부채·현금 등 현재 재무구조 반영 결과로 설명
- 영업가치 범위가 존재하지만 재무구조 영향으로 지분가치가 제한되는 경우 기업가치는 유지하고 예상 지분가치에만 `추가 검토가 필요합니다.` 안내 적용
- `측정 불가`, `Value Not Available` 등 기업가치를 부정하는 표현은 사용하지 않음
- `예상 지분가치` 옆에 Hover·Focus·Click으로 열리는 작은 `?` Tooltip 추가
- Tooltip에서 지분가치의 의미와 실사, 거래조건, 운전자금, 우발채무에 따른 변동 가능성을 대표 관점에서 설명
- Tooltip에 `aria-label`, `aria-expanded`, `aria-controls`, `role="tooltip"`을 적용하고 Mobile 위치·폭을 별도로 보완
- 결과 신뢰도, 가치 영향 요인, EQUIV Insight, Disclaimer와 상담 CTA 흐름은 유지

## Sprint 9.7 - Business Valuation Final Brand Polish

- 기능, 입력 화면, 기업가치 계산과 Sprint 9.6 모델별 참고 신뢰도 산정 기준을 변경하지 않고 결과 화면의 Brand Copy와 시각적 구분만 정제
- 결과 신뢰도 영역의 영문 `Result Confidence`를 제거하고 한글 제목 `결과 신뢰도`만 유지
- 신뢰도 Label을 `참고 신뢰도 높음 / 보통 / 낮음`으로 변경해 기업 평가가 아닌 예비 결과의 참고 가능성임을 명확히 표현
- 고정 설명문도 `참고 신뢰도` 중심으로 통일해 기업의 우수성이나 M&A 준비도를 의미하지 않는다는 원칙 강화
- Navy 예비 기업가치 범위와 결과 신뢰도가 하나의 정보로 보이지 않도록 신뢰도 영역을 얇은 Line, 충분한 여백과 White Background의 절제된 Card로 구분
- Mobile에서는 기존 정보 흐름을 유지하면서 Card Padding만 축소해 가독성 보완
- 새로운 색상, 장식, Animation 또는 Component를 추가하지 않고 기존 디자인 시스템 안에서 Premium Advisory 분위기 유지

## Sprint 9.6 - Business Valuation Final UX Polish

- 기업가치 계산 엔진, 업종별 배수, 가치평가 가중치와 기업 유형 분류를 변경하지 않고 최종 UX와 결과 신뢰도 기준 정제
- 숫자 입력의 `step="0.1"`을 유지하고 Chrome·Edge·Safari용 Number Spinner 제거 CSS가 모든 Valuation 숫자 입력에 적용되는지 재확인
- 입력 Label의 `테스트 업종`을 일반 사용자 중심의 `업종`으로 변경
- 결과 신뢰도를 전체 입력 개수가 아닌 적용 평가모델별 핵심정보 충족 비율로 변경
- Stable Profit·Temporary Loss는 최근 3개년 실적, 이익 기준, 부채·현금과 자료 준비도를 기준으로 사용
- Turnaround는 최근 실적, 예상 실적, 예상 실적 근거, 자료 준비도와 순차입금 정보를 기준으로 사용
- High Growth는 매출 성장 정보, 경쟁력, 예상 실적·근거와 순차입금 정보를 기준으로 사용
- Asset Based는 사업용 자산 가치, 부채·현금, 최근 실적과 자료 준비도를 기준으로 사용
- 정상화 가능한 비용은 모든 모델에서 선택 정보로 유지하고 미입력 시 신뢰도 불이익을 적용하지 않음
- 사업용 자산 가치는 Asset Based 이외 모델의 신뢰도 기준에서 제외
- 신뢰도 설명을 적용 모델의 핵심정보 충족도와 실제 거래가치 변동 요인을 자연스럽게 설명하는 문장으로 개선
- 최근 확정 사업연도 자동 표시 방식은 유지하고 공개 버전의 연도 선택 기능은 TODO로 이관

## Sprint 9.5 - Business Valuation UX Polish

- 계산 엔진, 업종별 배수, 가치평가 가중치, 기업 유형 분류와 Sprint 9.4 결과 신뢰도 산정 규칙을 변경하지 않고 입력·결과 UX만 정제
- 기존 5개 입력 단계를 `회사 기본정보·최근 실적`과 `재무조정·사업 특성`의 2개 입력 단계로 통합하고 결과를 STEP 3으로 구성
- 업종, 최근·예상 실적, 재무조정, 사업 특성, 경쟁력과 내부 테스트 확인 등 기존 입력 항목은 모두 유지
- 현재 연도의 직전 연도를 최근 사업연도로 보고 최근 3개년과 예상 실적 연도를 자동 표시
- 모든 숫자 입력창에 억원 단위 입력을 이해할 수 있는 간단한 예시 Placeholder 추가
- 모든 금액 입력 Label에 `억원` 단위를 표시하고 EBITDA·감가상각비 등 선택 입력 여부를 함께 안내
- `step="0.1"` 계산 정밀도와 숫자 입력 기능은 유지하면서 Chrome·Edge·Safari의 기본 증감 버튼을 CSS로 제거
- 결과 상단에 `EQUIV Preliminary Valuation Model`을 절제된 보조 브랜드 문구로 추가하고 TEST_ONLY 버전 표시는 유지
- 결과 설명을 `입력하신 정보를 바탕으로 예비 기업가치 범위를 산출하였습니다.`로 정제
- CTA를 산업환경, 거래구조, 인수자 전략과 실사 결과에 따라 실제 거래가치가 달라질 수 있음을 설명하는 Premium Advisory 문구로 개선
- 비공개 접근, Disclaimer, 입력값 비저장·비전송과 공개 미승인 상태 유지

## Sprint 9.4 - Result Confidence UX

- 기업가치 계산 엔진, 업종별 배수, 가중치와 기업 유형 분류를 변경하지 않고 결과 화면에 `결과 신뢰도` Section 추가
- 최근 3개년 재무정보, 부채·현금, 사업용·비영업 자산, 정상화 정보, 자료 준비도, 예상 실적 근거와 보조 재무정보의 입력 충실도를 UI 계층에서 자동 종합
- 결과 신뢰도를 5개 기준의 별표와 `신뢰도 높음 / 보통 / 낮음` 문구로 표시하고 내부 산정 숫자는 노출하지 않음
- Additional Review 또는 금액 범위 미산출 결과는 신뢰도 낮음으로 제한
- 신뢰도 수준별 자동 설명문을 추가해 사용자가 예비 결과의 참고 가능성과 추가 자료 필요성을 이해하도록 개선
- 결과 신뢰도가 기업의 우수성이나 M&A 준비도를 의미하지 않는다는 고정 안내문 추가
- 결과 흐름을 `예비 기업가치 범위 → 결과 신뢰도 → 긍정 요인 → 추가 검토 요인 → EQUIV Insight → 거래 전략 상담` 순서로 정렬
- HOME의 Deal Readiness Check와 혼동되는 READY / PREPARING / 준비도 점수 표현은 사용하지 않음
- `TEST_ONLY`, 비공개 접근 정책, 결과 Disclaimer와 입력값 비저장·비전송 원칙 유지

## Sprint 9.2 - Business Valuation UX & Brand Refinement

- 기업가치 계산 로직, 배수, 가중치와 기업 유형 분류를 유지하고 내부 프로토타입의 UX·Copy·Brand Experience만 정제
- `식별 가능 사업용 자산 시가`를 `사업용 자산 가치`로 변경하고 공장·설비 시가에 대한 보조 설명 추가
- `정상화 가능한 비용`에 대표자 급여, 접대비, 일회성 비용 등 조정 가능 항목을 설명하는 보조 문구 추가
- 결과 제목을 `내 회사의 예비 기업가치`로 변경하고 입력정보 기반의 예비 범위임을 설명하는 문장 추가
- 결과 흐름을 예비 가치 범위, 긍정 요인, 추가 검토 요인, EQUIV Insight, 거래 전략 상담 순서로 재구성
- 입력한 성장성, 반복 매출, 대표자 의존도, 거래처 집중도와 자료 준비 수준에 따라 달라지는 EQUIV Insight 문장 추가
- CTA를 실제 거래가치에 영향을 주는 성장성·산업환경·거래구조·인수자 전략을 설명하는 Advisory 메시지로 개선
- M&A Ready Score와 READY / PREPARING 등 거래 준비도 표현은 추가하지 않고 기업가치와 가치 영향 요인에만 집중
- `INTERNAL TEST PROTOTYPE` Disclaimer와 비활성 상담 버튼을 유지하고 입력값 저장·전송 기능은 추가하지 않음

## Sprint 9.0 - Preliminary Valuation Private Prototype

- 공개 페이지와 연결되지 않은 `valuation-prototype.html` 내부 테스트 페이지 추가
- 5단계 기업정보 입력 Modal, 입력값 검증, 초기화 및 다시 계산하기 구현
- Stable Profit / Temporary Loss / Turnaround / High-Growth / Asset-Based / Additional Review 자동 분류 구현
- 예비 지분가치 범위, 중심 검토 범위, 적용 모델, 긍정 요인, 추가 검토 요인, Strategic Comment 결과 구성
- 업종별 배수·가중치·보정값을 `valuation-config.js`의 `TEST_ONLY` 설정으로 분리하고 공개 승인 플래그를 `false`로 고정
- 계산 엔진과 Modal UI를 `valuation-engine.js`, `valuation-modal.js`로 분리
- 모든 계산을 브라우저 내부에서 수행하고 입력·결과 저장 및 외부 전송 기능을 추가하지 않음
- 결과 화면에 `INTERNAL TEST PROTOTYPE`과 정식 평가·실제 거래가격이 아니라는 Disclaimer 고정 표시
- HOME 및 Business Valuation 페이지에는 프로토타입 링크를 추가하지 않고 검색엔진 색인 차단
- `AI_RULES.md`, `MASTER_SPEC.md`, `VALUATION_MODEL_SPEC.md`, `TODO.md`에 정책·구현·검증 기준 반영

## Sprint 8.3 - Strategic Consulting Brand Language Refinement

- Strategic Consulting의 8단계 구조와 기존 디자인 시스템을 유지하고 Brand Language와 Terminology만 정제
- Overview 마지막 문장을 `실행 가능한 성장 전략을 설계합니다.`로 변경해 전략 설계 Advisory의 역할을 명확히 표현
- What EQUIV Does의 첫 두 카드를 `Business Assessment / 기업 현황 진단`, `Growth Strategy / 성장 전략 설계`로 변경
- Our Approach 마지막 단계를 `Build Readiness`로 변경해 성장 전략을 다음 선택과 거래 준비로 연결
- Key Points, Why EQUIV, FAQ에서 불필요한 `정리·방향` 표현을 전략 설계·진단·준비 언어로 개선
- 메타 설명과 Philosophy Copy를 성장 전략, 실행, 거래 가능성 중심으로 정제
- `Growth / Strategy / Assessment / Design / Readiness / Transaction` 중심의 핵심 언어로 페이지 메시지를 정렬
- Layout, Typography, Spacing, Component, CSS 및 Section 구조 변경 없음

## Sprint 8.2 - Capital Advisory Brand Language Refinement

- Capital Advisory의 8단계 구조와 기존 디자인 시스템을 유지하고 Brand Language와 Terminology만 정제
- Overview 마지막 문장을 `지속 가능한 투자 전략을 설계합니다.`로 변경해 EQUIV의 전략 설계 관점을 강화
- 첫 번째 What EQUIV Does 카드를 `Funding Strategy / 자금 전략 설계`로 변경하고 성장·자금·주주 목표를 투자 전략으로 연결
- Our Approach를 `Understand / Develop Strategy / Structure Investment / Execute Transaction` 흐름으로 개선
- CTA를 `성장 전략에 맞는 투자유치를 함께 설계해 보십시오.`로 변경해 자금 연결보다 성장 전략과 투자 구조 설계를 강조
- `Growth / Strategy / Structure / Design / Transaction` 중심의 핵심 언어로 페이지 메시지를 정렬
- Layout, Typography, Spacing, Component, CSS 및 Section 구조 변경 없음

## Sprint 8.1.2 - Buy-side Advisory Terminology Refinement

- Buy-side Advisory의 구조와 디자인을 유지하고 `전략(Strategy)` 중심으로 페이지 용어를 정제
- Overview 마지막 문장을 `실행 가능한 인수 전략을 설계합니다.`로 변경해 EQUIV의 Advisory 역할을 명확히 표현
- Why EQUIV의 `인수 기준`을 `명확한 인수 전략`으로 변경해 전략 설계 차별성을 강화
- Key Points, Our Approach, CTA에서 전략 의미로 사용된 `기준·판단` 표현을 `방향·전략`으로 정리
- FAQ와 거래 검토 카드에서는 실제 선별 및 의사결정 의미에 필요한 `기준` 용어를 유지
- Layout, Typography, Spacing, Component, CSS 변경 없이 Copy와 Terminology만 수정

## Sprint 8.1.1 - Buy-side Advisory Copy Rhythm Refinement

- Buy-side Advisory의 구조, 레이아웃, 디자인, Component를 유지하고 Section Headline 두 곳만 정제
- Overview에서 `좋은`의 반복을 제거하고 `인수는 미래의 성장 방향을 선택하는 일입니다.`로 변경해 인수의 본질을 설명
- Why EQUIV를 `성공적인 인수는 명확한 전략에서 시작됩니다.`로 변경해 EQUIV의 전략 설계 차별성을 강조
- Hero의 기존 철학 문구는 유지하여 `철학 → 의미 → 차별성`으로 발전하는 Brand Rhythm 완성

## Sprint 8.1 - Buy-side Advisory Brand Refinement

- Buy-side Advisory의 8단계 Service Page 구조와 기존 디자인 시스템을 유지한 채 브랜드 카피만 정제
- Hero Sub Copy를 기업별 성장 전략과 그에 맞는 인수 설계 관점의 짧은 Brand Statement로 개선
- Overview Headline을 `좋은 인수는 미래의 성장 방향을 선택하는 일입니다.`로 변경해 인수자의 장기 성장 관점을 강화
- Key Points의 `가치와 리스크 검토`를 `기업가치 및 리스크 검토`로 구체화하고 기업가치 분석 전문성을 반영
- 첫 번째 What EQUIV Does 카드의 `Acquisition Thesis`를 보다 직관적인 `Acquisition Strategy`로 변경
- Our Approach를 `Define Strategy / Identify Targets / Evaluate Opportunities / Execute Transaction` 흐름으로 정제
- CTA를 성장 목적과 인수 판단 기준 중심의 차분한 상담 메시지로 개선
- 새로운 Section, Component, Layout, CSS 변경 없이 문장과 용어만 수정

## Sprint 8.0 - Featured Expertise Service Pages Standardization

- `SERVICE_PAGE_TEMPLATE.md`를 추가하고 일반 서비스 페이지의 공식 8단계 구조를 정의
- Sell-side Advisory를 Master Template으로 재정리하고 Buy-side, Capital Advisory, Strategic Consulting에 동일한 IA와 디자인 언어 적용
- 네 페이지를 `Hero / Overview / Key Points / Why EQUIV / What EQUIV Does / Our Approach / FAQ / CTA` 순서로 통일
- 서비스별 Key Points와 Why EQUIV를 추가하고 Deliverables 및 독립 Brand Statement를 공통 구조에서 제거
- What EQUIV Does를 영문 업무명, 한글 역할명, 설명으로 구성된 네 개 카드로 통일
- Our Approach를 서비스별 네 단계 전략 수행 방식으로 재구성
- 각 서비스 FAQ를 실제 상담 질문 중심의 5개 항목으로 보강하고 CTA 문구를 서비스별 전략 상담 표현으로 정리
- 기존 Typography, Grid, Spacing, Color, Animation, Card, CTA 디자인을 유지하고 공통 텍스트 보조 스타일만 추가
- Business Valuation은 Sprint 8.1 대상이므로 이번 구조 변경에서 제외
- `MASTER_SPEC.md`와 `TODO.md`에 Sprint 8.0 기준 및 완료 상태 반영

## Sprint 7.6 - The EQUIV Principle Refinement

- HOME의 `THE EQUIV PRINCIPLE`을 서비스 설명이 아닌 Brand Manifesto 영역으로 정리
- Headline에서 `EQUIV는 성공적인 M&A를 설계합니다.`를 한 문장으로 자연스럽게 연결
- 본문 카피를 분석 항목 나열에서 `기업 이해 / 가치 해석 / 거래 전략 설계` 중심의 짧은 브랜드 철학 문장으로 변경
- 본문 max-width와 Headline-Body 간 여백을 조정해 Premium Editorial 느낌을 강화
- `MASTER_SPEC.md`에 Principle 영역의 Brand Manifesto 운영 기준 반영

## Brand Message Refinement - The EQUIV Principle

- HOME의 `THE EQUIV PRINCIPLE` 헤드라인을 `좋은 거래는 우연히 만들어지지 않습니다. EQUIV는 성공적인 M&A를 설계합니다.`로 변경
- 기업가치 중심 표현에서 M&A Advisory와 거래 설계 중심의 브랜드 메시지로 정리
- 기존 Typography, Spacing, Component 구조는 유지하고 카피만 브랜드 철학에 맞게 개선
- `MASTER_SPEC.md`에 Principle 영역의 브랜드 메시지 운영 기준 반영

## Sprint 7.5 - Home Experience Optimization

- HOME에서 Transaction Process 섹션을 제거하고 `M&A 준비도 진단` Signature Experience 섹션을 Featured Expertise 아래에 추가
- Deal Readiness Check 모달을 HOME에서 실행되도록 이동하여 브랜드 경험과 상담 유도 흐름을 강화
- About Page의 `Our Approach`를 `How We Work`로 재구성하고 `Understand / Analyze / Design / Connect / Execute` 흐름으로 정리
- Business Valuation 페이지에서 Deal Readiness Check를 제거하고 `EQUIV Value Framework`, `Strategic Value Analysis`, `Case Perspective` 중심으로 재구성
- Business Valuation 페이지의 역할을 기업가치 계산이 아닌 M&A를 위한 전략적 가치 분석 페이지로 명확히 분리
- `MASTER_SPEC.md`와 `TODO.md`에 Sprint 7.5 구조 변경 및 완료 상태 반영

## Sprint 7.3 - Deal Readiness Status Refinement

- Deal Readiness Check 결과를 현재 준비 상태 중심의 `READY / NEARLY READY / PREPARING`으로 변경
- Status 메시지를 사용자가 현재 위치와 다음 전략 검토 방향을 이해하도록 정리
- 결과 화면 Brand Statement를 `현재 위치`와 `거래 전략` 중심의 메시지로 강화
- CTA 위에 다음 단계 안내 문구 추가
- Disclaimer를 초기 진단의 성격과 실제 전략 설계 기준이 드러나도록 수정
- `MASTER_SPEC.md`와 `TODO.md`에 Sprint 7.3 기준 및 완료 상태 반영

## Sprint 7.2 - Deal Readiness Check Refinement

- Deal Readiness Check 결과 표현을 `Excellent / Good / Needs Preparation` 중심으로 변경
- 결과 메시지를 부정적 표현 없이 거래 준비 상태와 다음 전략 검토 방향 중심으로 정리
- 결과 화면에 작은 Brand Statement 추가
- 거래 목적 명확성에 대한 마지막 질문 추가
- Recommended Next Step 영역을 Premium Report 느낌의 라인 기반 구조로 정리
- 모달 CTA 버튼 문구를 `거래 전략 상담하기`로 변경
- CTA 위에 참고용 진단임을 알리는 Disclaimer 추가
- `MASTER_SPEC.md`와 `TODO.md`에 Sprint 7.2 기준 및 완료 상태 반영

## Sprint 7.1 - Deal Readiness Check Experience

- Business Valuation 페이지의 `거래 준비도 진단하기`를 Contact 직접 이동 CTA에서 Premium Modal Experience로 개편
- 6개 질문 기반의 간단한 거래 준비도 점검 흐름 추가
- 결과는 계산 과정 없이 별점형 준비도와 브랜드 친화적 상태 표현으로만 제공
- 결과별 추천 다음 단계와 전문가 상담 CTA를 모달 마지막에 배치
- 기업가치, 예상 매각가, 배수, 금액, 가격, 수익률 등 자동 가치평가처럼 보이는 표현은 표시하지 않음
- ESC 닫기, 배경 클릭 닫기, Focus Trap, `aria-modal` 및 `aria-label`로 접근성 보강
- `MASTER_SPEC.md`와 `TODO.md`에 Sprint 7.1 기준 및 완료 상태 반영

## Sprint 7 - Business Valuation Premium Advisory Page

- `business-valuation.html`을 기업가치평가 판매 페이지가 아닌 M&A 전략 설계 관점의 Premium Advisory Page로 개편
- IA를 `Hero / Why Business Valuation Matters / How EQUIV Approaches Valuation / What We Review / Deal Readiness Check / FAQ / Brand Statement / CTA` 구조로 재정리
- Business Valuation을 EQUIV의 Core Competency로 표현하되, 브랜드 목적은 성공적인 M&A 전략 설계임을 명확히 반영
- Deal Strategy 안에 기업가치평가, 시장분석, 거래구조 검토가 포함되도록 메시지 정리
- Deal Readiness Check를 결과, 점수, 기업가치, 가격을 표시하지 않는 상담 유도형 사전 점검 영역으로 구성
- Pricing Communication Principle에 따라 금액, 수수료, 할인, 무료 가치평가, 배수 중심 표현을 사용하지 않음
- `MASTER_SPEC.md`와 `TODO.md`에 Sprint 7 기준 및 완료 상태 반영

## Brand Policy Update - Pricing Communication Principle

- Added Pricing Communication Principle.
- Defined brand-wide policy to avoid pricing-focused messaging and reinforce premium advisory positioning.
- `BRAND_GUIDE.md`, `AI_RULES.md`, `MASTER_SPEC.md`에 가격 커뮤니케이션 원칙을 반영

## Sprint 6.2 - Back to Top Button

- About 및 5개 Expertise 상세페이지에 Back to Top 버튼 추가
- HOME에는 Back to Top 버튼을 적용하지 않아 기존 Home 경험 유지
- Desktop `right: 32px / bottom: 32px`, Mobile `right: 20px / bottom: 20px` 기준 위치 적용
- White Background, Navy Border, Minimal Shadow, Gold Hover Accent 기준의 Premium 스타일 적용
- 스크롤 600px 이후 Fade In, 상단 복귀 시 Fade Out 동작 추가
- 클릭 시 `window.scrollTo({ top: 0, behavior: "smooth" })`로 부드러운 최상단 이동 적용
- `aria-label="Back to Top"` 및 `focus-visible` 스타일로 접근성 보강

## Sprint 6.1 - Sell-side Advisory Refinement

- `sell-side-advisory.html`을 Expertise 상세페이지의 Reference Page 기준으로 정리
- What EQUIV Does 카드에 영문 서비스 단계 아래 한글 설명을 추가하여 국내 사용자 가독성 강화
- Why It Matters와 What EQUIV Does 사이에 절제된 Quote 영역 추가
- Deliverables 용어를 `투자설명자료(IM)`, `잠재 인수후보군 조사`, `비밀유지계약(NDA)` 등 한국 기업 대표가 이해하기 쉬운 표현으로 정리
- Brand Statement를 한글 중심, 영문 보조 구조로 개편
- CTA 카피를 거래 전략 중심의 상담 유도 문장으로 정리
- 관련 Typography 및 Mobile 보조 스타일을 기존 디자인 시스템 안에서 보강

## Sprint 6 - Expertise Detail Pages

- Expertise 5개 상세페이지를 Premium Expertise Page 구조로 전면 개편
- `Hero / Why It Matters / What EQUIV Does / Our Approach / Deliverables / FAQ / Brand Statement / CTA` 공통 IA 적용
- Sell-side, Buy-side, Capital Advisory, Strategic Consulting 페이지를 서비스 설명보다 거래 철학 중심으로 재작성
- Business Valuation 페이지를 `M&A를 위한 가치 검토` 관점으로 재정리하고 Deal Readiness Check 섹션 추가
- What EQUIV Does 카드, FAQ, Deliverables, Brand Statement용 공통 스타일 추가
- Desktop / Tablet / Mobile에서 기존 디자인 시스템을 유지하도록 반응형 스타일 보강
- `MASTER_SPEC.md`와 `TODO.md`에 Expertise Detail Page 기준 및 Sprint 6 완료 상태 반영

## Sprint 5.6 - Typography & Mobile Polish

- Mobile Hero 제목에 모바일 전용 줄바꿈 포인트를 추가하여 단어 분리 현상을 완화
- Mobile Hero 제목 크기와 상하 간격을 조정하여 Headline, Sub Copy, CTA 흐름을 정리
- Mobile The EQUIV Principle 섹션의 상하 Padding을 줄여 스크롤 피로를 완화
- Mobile Featured Expertise 카드 Padding을 소폭 줄여 정보 밀도를 개선
- Mobile Transaction Process의 Step 번호와 세로 연결 Line을 더 선명하게 조정
- HOME Contact CTA 버튼 아래에 작은 응답 안내 문구 추가
- Footer 법인 표기를 `by / 정진아시아M&A센터` 구조로 정리하고 법인명 Typography를 낮춤
- Mobile Header 햄버거 메뉴 선을 더 선명하게 정리

## Sprint 5.5 - Responsive Optimization

- Mobile 360px~430px 기준 Hero 제목, CTA 버튼, 카드 여백, Process 세로 흐름을 정리
- Tablet 768px~1024px 기준 Expertise/Insights/About 카드 2열과 Contact Process 2열 구성을 보강
- Mobile Transaction Process에 세로 연결 라인을 추가하여 하나의 흐름으로 보이도록 개선
- Mobile Contact CTA, Consultation Process, Confidential Notice의 글자 크기와 여백을 조정
- Mobile Footer를 가운데 정렬과 충분한 간격으로 정리
- 전체 페이지의 viewport, Header, Footer 구조를 정적 점검
- 브라우저 로컬 미리보기 접근이 `ERR_BLOCKED_BY_CLIENT`로 차단되어 실제 캡처 생성은 보류

## Sprint 5 - Header Polish

- Header 스크롤 상태에서 Desktop 높이를 68px로 줄여 더 정제된 인상을 적용
- 스크롤 후 Header 배경을 `rgba(255, 255, 255, 0.96)`와 `backdrop-filter: blur(16px)` 기준으로 정리
- EQUIV 로고 타이포그래피와 `M&A Advisory` 가독성을 미세 조정
- Navigation 간격, 굵기, 짧은 Gold Underline hover/active 효과를 Premium 톤에 맞게 정리
- Mobile Header 메뉴의 White Background, 여백, 메뉴 항목 간격을 개선
- Keyboard `focus-visible` 스타일을 Gold Outline/Underline 기준으로 추가
- `DESIGN_SYSTEM.md`와 `TODO.md`에 Header 기준 및 Sprint 5 완료 상태 반영

## Sprint 4.2 - About EQUIV Final Refinement

- About Hero를 Gold Label `ABOUT`과 Hero Title `EQUIV (이퀴브)`로 분리
- Hero Sub Copy를 브랜드 철학에 맞춰 성공적인 M&A 연결 메시지로 정리
- Brand Statement와 CTA 사이에 Quote Section 추가
- About Footer 브랜드 표현을 `EQUIV / A Premium M&A Advisory Brand / by Jungjin Asia M&A Center`로 정리
- `MASTER_SPEC.md`와 `TODO.md`에 Sprint 4.2 변경 사항 반영

## Sprint 4.1 - Brand Naming Rule

- EQUIV 브랜드 첫 등장 표기 원칙을 `EQUIV (이퀴브)`로 정리
- `about.html` Hero의 `ABOUT EQUIV`를 `ABOUT EQUIV (이퀴브)`로 변경
- About Intro에서 `EQUIV (이퀴브)`와 정진아시아M&A센터 브랜드 설명 문구 적용
- Footer와 반복 브랜드 표기는 `EQUIV`만 유지
- `BRAND_GUIDE.md`에 Brand Naming 항목 추가

## Sprint 4 - About EQUIV Architecture

- `about.html` 독립 브랜드 페이지 생성
- About EQUIV를 회사소개가 아닌 브랜드 철학 페이지로 구성
- HOME에는 About Section을 추가하지 않고 기존 HOME 구조 유지
- Header Navigation을 `HOME / About EQUIV / Expertise / Insights / Contact`로 변경
- About Hero, Who We Are, Our Philosophy, Why EQUIV, Our Approach, Brand Statement, CTA 구성 추가
- `MASTER_SPEC.md`에 About EQUIV 페이지 구조와 Navigation Rules 업데이트
- `TODO.md`에서 About 단계 진행 상태 업데이트

## Sprint 3.2 - Contact Section Final Refinement

- HOME Contact Section의 Sub Copy 줄바꿈을 더 자연스럽게 조정
- Desktop에서 Consultation Process와 Confidential 영역을 가운데 정렬로 조정
- Confidential Notice 본문 크기와 Gray 톤을 더 절제된 방향으로 조정
- Confidential 아래 Trust Message 추가
- Footer 정렬을 가운데 흐름으로 정리
- Tablet/Mobile에서 Consultation Process는 세로 정렬과 읽기 쉬운 왼쪽 흐름 유지
- 새로운 컬러, 카드, 애니메이션 없이 기존 디자인 시스템 유지

## Sprint 3.1 - Contact Section Refinement

- HOME Contact Section에서 Service List 제거
- Sub Copy를 `기업의 적정 가치와 가장 적합한 거래 전략을 EQUIV와 함께 확인하십시오.` 흐름으로 수정
- CTA Button 크기를 약간 확대하여 Premium CTA 존재감 강화
- Consultation Process를 4단계 상세 설명 구조로 개선
- Consultation Process를 Desktop 가로 정렬, Tablet/Mobile 세로 정렬로 조정
- Confidential Notice를 독립 영역으로 분리하고 Shield Line Icon 추가
- 기존 Navy / Gold / White 디자인 시스템과 Reveal 원칙 유지

## Sprint 3 - Contact Enhancement

- HOME Contact Section에 4단계 Consultation Process 추가
- Consultation Process는 Desktop에서 가로 정렬, Mobile에서 세로 정렬로 구성
- Consultation Process 아래 비밀유지 안내 문구 추가
- 기존 Navy / Gold / White 디자인 시스템과 Reveal 원칙 유지

## v1.6 - Contact Section Refinement

- HOME Contact Section을 Premium CTA로 개선
- Headline을 `기업의 가치는 좋은 거래에서 완성됩니다.`로 변경
- CTA 버튼 문구를 `M&A 상담 신청`으로 변경
- 상담 가능 서비스 리스트 추가
- Footer 직전 Brand Message를 한글 중심 메시지로 변경
- 영문 보조 문구를 `Every Company Has Value. / EQUIV Connects Value to Opportunity.`로 변경

## v1.5 - Sell-side Advisory Page Enhancement

- `sell-side-advisory.html`을 상담 유도형 전문 서비스 페이지로 확장
- Hero에 상담 유도 카피와 설명 추가
- `왜 EQUIV인가` 섹션 추가
- Key Points에 01-05 번호 추가
- Process를 5단계로 확장
- Philosophy Copy 추가
- 향후 회사소개서 다운로드 버튼을 추가할 수 있도록 CTA actions 구조 확보

## v1.4 - Detail Page Standardization

- 상세페이지 8개의 공통 레이아웃 정리
- Sub Page Hero를 HOME Hero보다 작고 단정한 Light Gray 스타일로 통일
- 상세페이지 CTA 문구와 버튼을 공통 구조로 통일
- 긴 Process/Content 설명을 제거하고 기본 소개, Key Points, CTA 중심으로 단순화

## v1.3 - Site Expansion

- HOME을 One Page 소개 사이트에서 Corporate Website 구조로 확장
- Featured Expertise 카드 5개를 상세페이지로 연결
- Insights 카드 3개를 상세페이지로 연결
- 서비스 상세페이지 5개 생성
- 인사이트 상세페이지 3개 생성
- 카드 내부에 `자세히 보기` 미니멀 액션 추가

## v1.2 - Insights Refinement

- Insights 섹션을 뉴스가 아닌 EQUIV의 전문성과 관점을 보여주는 공간으로 정리
- 섹션 라벨을 `EQUIV INSIGHTS`로 변경
- 카드 카테고리를 `M&A Market`, `Business Valuation`, `Deal Stories`로 정리
- 카드별 설명 문구 추가

## v1.1 - Transaction Process Refinement

- Process 섹션을 EQUIV만의 M&A 수행 방식으로 개선
- 섹션 타이틀을 `좋은 M&A는 올바른 순서에서 시작됩니다.`로 변경
- Process 영문/한글 단계명 수정
- `Business Valuation` Gold Accent 유지
- Bottom Copy를 기업별 맞춤 거래 전략 관점으로 변경
- Timeline 흐름감을 미세 조정

## v1.0 and Earlier

- HOME 기본 구조 구축
- Hero, Principle, Expertise, Process, Insights, Contact, Footer 구성
- Navy / Gold / White / Gray 기반 디자인 시스템 적용
- 반응형 Header, 모바일 메뉴, reveal 효과 적용
- 히어로 이미지와 기본 정적 사이트 구조 적용

## Documentation

- `docs/MASTER_SPEC.md` 추가
- `docs/BRAND_GUIDE.md` 추가
- `docs/CHANGELOG.md` 추가
- `docs/TODO.md` 추가
- `docs/COPY_GUIDE.md` 추가
- `MASTER_SPEC.md`에 Future Expansion 섹션 추가
- `BRAND_GUIDE.md`에 Brand Personality 항목 추가
- `TODO.md`에 Current Milestone 섹션 추가
- `docs/DESIGN_SYSTEM.md` 추가
- `docs/AI_RULES.md` 추가
- `DESIGN_SYSTEM.md`의 AI_RULES 참고 문구를 생성 완료 상태로 업데이트
