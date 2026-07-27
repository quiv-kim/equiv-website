# EQUIV Visual Asset Guide

Version 1.0
Status: Approved Draft
Document Type: Asset Governance Standard
Owner: EQUIV Brand & Digital
Applies To: Website, Product UI, Social Preview, Digital Marketing and Future Applications

---

## Table of Contents

1. Visual Asset Philosophy
2. Asset Classification
3. Directory Structure
4. File Naming Convention
5. Image Standards
6. Icon Library Rules
7. Photography Guide
8. Illustration Guide
9. Background Guide
10. Color Usage in Assets
11. SVG Optimization
12. Image Optimization
13. Accessibility
14. Dark Mode Preparation
15. SEO and Distribution
16. Asset QA Checklist
17. Asset Lifecycle
18. Version Control
19. Work Implementation Rules
20. Final Governance

Appendices:

- A. Asset Registry Schema
- B. Asset Request Template
- C. Review Record Template
- D. Deprecation Notice Template
- E. Format Decision Tree
- F. Alt Text Decision Tree
- G. Pull Request Checklist
- H. Operational DO / DON'T
- I. PM Release Note
- J. Final QA Summary

---

## 0. Document Control

### 0.1 Purpose

이 문서는 EQUIV가 제작·구매·수정·배포하는 모든 시각 자산의 운영 기준을 정의한다. Design Bible이 브랜드가 지향하는 시각 철학을, Design System이 UI Token과 Component를 정의한다면, 이 문서는 개별 Asset이 프로젝트에 들어오고 나가는 전체 과정을 관리한다.

이 문서는 다음 질문에 답한다.

1. 이 Asset이 필요한가?
2. 기존 Asset으로 해결할 수 있는가?
3. 어떤 분류와 경로에 저장해야 하는가?
4. 어떤 크기와 형식으로 제작해야 하는가?
5. 누가 검토하고 승인하는가?
6. 접근성·성능·저작권·SEO 기준을 충족하는가?
7. 교체되거나 폐기될 때 어떻게 추적하는가?

### 0.2 Relationship to Other Standards

중복 규정을 만들지 않는다. 충돌이 발생하면 아래 우선순위를 적용한다.

1. `EQUIV_DESIGN_BIBLE.md`: 브랜드 철학과 승인 기준
2. `BRAND_GUIDE.md`: Logo, Color, Photography Tone과 브랜드 표현
3. `DESIGN_SYSTEM.md`: Token, Component, Responsive와 Motion 구현
4. `VISUAL_ASSET_GUIDE.md`: Asset 운영, 규격, 최적화, 배포와 Lifecycle
5. `COMPONENT_LIBRARY.md`: 실제 UI Component의 Asset 사용 방식

Copy, 법률 문구와 개인정보 기준은 `COPY_GUIDE.md`, `MASTER_SPEC.md`와 별도 법률 검토를 따른다.

Component가 Asset을 호출하는 위치, Fallback, Loading, Empty State와 Accessible Name은 `COMPONENT_LIBRARY.md`의 해당 Component 계약을 따른다. 이 문서는 Asset 파일 자체의 승인·최적화·배포·폐기만 관리하며 Component의 Variant나 Interaction을 재정의하지 않는다.

### 0.3 Normative Language

- **MUST / 반드시**: 예외 없이 준수한다.
- **MUST NOT / 금지**: 사용하거나 배포하지 않는다.
- **SHOULD / 권장**: 특별한 이유가 없다면 준수한다.
- **MAY / 허용**: 필요성과 영향 검토 후 사용할 수 있다.
- **EXCEPTION / 예외**: 문서화된 승인 없이는 적용할 수 없다.

### 0.4 Scope

적용 대상:

- Website와 Web Application
- Header, Hero, Card, Modal, Footer
- Social Preview와 OG Image
- Presentation이나 PDF에서 Web으로 재사용되는 Asset
- 외부 Agency, Freelancer와 AI Tool이 제작한 Asset
- 향후 Mobile App, Dashboard와 Internal Tool

적용 제외:

- 재무 원본 문서와 고객 제출 자료
- 거래 실사 과정의 Confidential File
- 내부 분석용 원시 데이터

단, 제외 대상이 공개 UI에 노출되는 순간 이 문서의 적용 대상이 된다.

### 0.5 Publication Profile

Markdown은 고정 페이지 개념이 없다. A4 문서로 발행할 때는 목차, 표, QA Checklist와 Template을 포함해 장별 Page Break를 적용하며, 조직 운영본은 약 80~120페이지 규모로 확장 가능한 구조를 유지한다. 페이지 수를 맞추기 위해 규정을 반복하거나 불필요한 설명을 추가하지 않는다.

---

## 1. Visual Asset Philosophy

### 1.1 Asset의 역할

Asset은 화면을 꾸미는 재료가 아니다. 정보의 의미를 분명하게 하고, 사용자의 이해와 행동을 돕고, EQUIV의 전문성과 신뢰를 일관되게 전달하는 운영 자원이다.

Asset은 최소 하나의 역할을 수행해야 한다.

- Brand Identification
- Information Support
- Navigation Support
- Context and Evidence
- State Communication
- Content Discovery
- Social Distribution

역할을 설명할 수 없는 Asset은 추가하지 않는다.

### 1.2 Brand Consistency

모든 Asset은 `Professional / Premium / Balanced / Strategic / Modern / Minimal / Trustworthy / Global` 기준을 충족해야 한다. Asset이 개별적으로 좋아 보여도 기존 Visual Language와 맞지 않으면 사용하지 않는다.

### 1.3 Reuse Principle

새 Asset 제작 전 다음 순서로 검토한다.

1. 동일 목적의 승인 Asset이 있는가?
2. Crop, Size 또는 Color Variant로 해결 가능한가?
3. Existing Component에서 표현 가능한가?
4. 새 Asset이 여러 화면에서 재사용될 수 있는가?
5. 일회성 Asset이라면 정적 이미지가 반드시 필요한가?

### 1.4 Asset Lifecycle

모든 Asset은 다음 상태 중 하나를 가진다.

`Requested → Draft → In Review → Approved → Optimized → Active → Deprecated → Archived → Deleted`

상태가 불명확한 파일은 Production에서 사용하지 않는다.

### 1.5 Single Source of Truth

Production에서 사용하는 파일은 Repository의 승인 경로가 유일한 원본이다. 메신저, 이메일, 개인 Desktop, Cloud Drive의 사본을 Production Source로 간주하지 않는다.

### 1.6 DO

- 기존 Asset을 먼저 검색한다.
- Asset의 목적과 사용 위치를 기록한다.
- 한 Asset은 한 개의 승인 원본을 가진다.
- 배포 전 최적화와 접근성을 함께 검토한다.
- 의미 없는 장식보다 여백과 Typography를 우선한다.

### 1.7 DON'T

- `final`, `final2`, `new`, `latest` 파일을 Production에 추가하지 않는다.
- 화면마다 비슷한 이미지를 새로 만들지 않는다.
- 출처와 사용 권한이 불명확한 Asset을 사용하지 않는다.
- 승인 전 Asset을 공개 경로에 연결하지 않는다.
- Asset으로 해결할 필요가 없는 문제를 이미지로 덮지 않는다.

### 1.8 Best Practice

한 개의 승인된 Hero Image를 Desktop과 Mobile에서 재사용할 수 있다면 동일 원본과 Art Direction 규칙을 사용한다. 피사체가 Mobile Crop에서 손상되는 경우에만 별도 Mobile Variant를 승인한다.

### 1.9 PM Note

Asset 일정은 단순 제작 시간으로 산정하지 않는다. Brief, Rights 확인, Review, Optimization, Accessibility, QA와 Migration 시간을 포함한다.

---

## 2. Asset Classification

### 2.1 Classification Table

| Class | 목적 | 기본 형식 | 승인 수준 | 예시 |
|---|---|---|---|---|
| Logo | 브랜드 식별 | SVG | Brand Owner | The EQUIV Mark |
| Favicon | Browser 식별 | SVG/PNG | Brand Owner | favicon.svg |
| App Icon | Application 식별 | SVG/PNG | Brand Owner | app-icon-512.png |
| Icon | 기능·상태 보조 | SVG | Design System Owner | icon-check.svg |
| Illustration | 복잡한 개념 보조 | SVG/WebP | Brand + Design | illustration-deal-flow.svg |
| Photography | 실제 사업 맥락 전달 | AVIF/WebP | Brand + PM | hero-city.webp |
| Background | Content 대비와 분위기 | AVIF/WebP/SVG | Design | bg-office-dark.webp |
| Pattern | 제한적 구조 보조 | SVG | Brand | bg-grid-light.svg |
| Chart | 데이터 설명 | SVG/HTML Canvas | Data + Design | chart-market-volume.svg |
| Decoration | 비정보성 강조 | CSS/SVG | Design | divider-balance.svg |
| Marketing Asset | Campaign 전달 | WebP/PNG | Brand + PM | campaign-ma-report.webp |
| OG Image | Link Preview | WebP/JPEG/PNG | Brand + SEO | og-home-1200x630.webp |
| Social Image | Social Channel 배포 | WebP/PNG | Brand + Channel Owner | social-linkedin-report.webp |
| Thumbnail | Content Discovery | AVIF/WebP | Content + Design | article-market-2026.webp |
| Profile | 인물 식별 | AVIF/WebP | Brand + Subject | profile-partner-kim.webp |
| Loading Asset | 대기 상태 | CSS/SVG | Design System | skeleton-card |
| Placeholder | 빈 상태·오류 대체 | SVG/WebP | Design System | placeholder-article.svg |

### 2.2 Logo

Logo는 브랜드 표현이며 Icon으로 취급하지 않는다. 형태, 비율, 색상, Clear Space와 Lockup은 `BRAND_GUIDE.md`를 따른다. UI 상태에 따라 임의로 Stroke, Shadow 또는 Gradient를 추가하지 않는다.

### 2.3 Icons

Icon은 기능과 정보를 보조한다. Action, Status, Direction, Category와 Object Icon으로 세분화할 수 있으나 시각 체계는 하나만 사용한다.

### 2.4 Illustrations

Illustration은 사진이나 UI만으로 설명하기 어려운 추상적 과정에 한해 사용한다. EQUIV 기본 경험에서는 Optional Asset이다.

### 2.5 Photography

Photography는 실제 Business Context와 신뢰를 전달한다. 장식적 분위기보다 업무 맥락과 현실성을 우선한다.

### 2.6 Backgrounds and Patterns

Background는 Typography Contrast를 확보하는 역할이다. Pattern은 구조를 설명하지 못하면 사용하지 않는다.

### 2.7 Charts

Chart는 데이터의 의미를 전달해야 한다. Screen Decoration을 위한 임의 수치와 3D 효과를 금지한다.

### 2.8 Decorations

Decoration은 Line, Divider와 Section Highlight 수준으로 제한한다. 정보 기능이 없으므로 접근성 트리에서 숨긴다.

### 2.9 Marketing and Social

Marketing Asset은 Website Design System의 Brand Color와 Typography를 유지하되 Channel 규격을 따른다. Campaign별 새 Visual Language를 만들지 않는다.

### 2.10 Loading and Placeholder

Loading은 Skeleton을 우선한다. Placeholder는 오류를 감추는 이미지가 아니라 사용자에게 상태와 다음 행동을 설명하는 Component의 일부다.

---

## 3. Directory Structure

### 3.1 Canonical Structure

```text
/assets
  /logos
    /primary
    /symbol
    /partners
  /icons
    /action
    /status
    /navigation
    /category
  /images
    /hero
    /service
    /article
    /profile
    /thumbnail
  /backgrounds
  /illustrations
  /charts
  /social
    /og
    /linkedin
    /other
  /favicons
  /app-icons
  /placeholders
  /archive
```

현재 정적 Website는 기존 경로 호환을 위해 아래 구조를 사용한다.

```text
/images
  /logos
  /backgrounds
```

실제 Asset이 생길 때만 하위 폴더를 추가한다. 빈 폴더를 구조 시연용으로 생성하지 않는다.

### 3.2 Directory Ownership

| Directory | Owner | Reviewer |
|---|---|---|
| logos, favicons, app-icons | Brand Owner | Design Lead |
| icons, placeholders | Design System Owner | Accessibility Reviewer |
| images, backgrounds | Brand/Content | Design + PM |
| illustrations | Design | Brand Owner |
| charts | Data/Content | Design + Domain Reviewer |
| social | Marketing/Content | Brand + SEO |
| archive | Repository Maintainer | Asset Owner |

### 3.3 Path Rules

- Path는 소문자 Kebab Case만 사용한다.
- 파일은 자신의 Class Directory 안에 저장한다.
- Root에 Asset File을 직접 저장하지 않는다.
- Page 이름을 폴더로 만들지 않는다.
- 동일 파일을 여러 폴더에 복제하지 않는다.
- Build Tool이 Fingerprint를 생성하는 경우 Source Filename 규칙은 유지한다.

### 3.4 Migration Rule

경로 변경 시 반드시 다음을 함께 처리한다.

1. 전체 참조 검색
2. CSS, HTML, JavaScript와 Metadata 경로 변경
3. Redirect 또는 Cache Strategy 검토
4. Old File 제거
5. 404 Audit
6. Changelog 기록

---

## 4. File Naming Convention

### 4.1 Canonical Pattern

```text
{class}-{subject}-{context}-{variant}-{size}.{extension}
```

모든 Segment가 필요한 것은 아니다. 의미가 충분하면 짧게 유지한다.

### 4.2 Examples

```text
hero-city.webp
service-ma-sell.webp
icon-growth.svg
bg-grid-light.svg
profile-ceo.webp
article-market-outlook-2026.webp
og-home-1200x630.webp
logo-equiv-mark-gold.svg
placeholder-article.svg
```

### 4.3 Naming Rules

- 영문 소문자와 숫자만 사용한다.
- 단어 구분은 Hyphen을 사용한다.
- 한글, 공백, Underscore와 특수문자를 사용하지 않는다.
- 최대 64자를 권장한다.
- 의미 없는 숫자는 사용하지 않는다.
- 날짜가 필요한 Editorial Asset은 `YYYY` 또는 `YYYY-MM`을 사용한다.
- Pixel Size는 Channel 규격이 중요한 Export에만 사용한다.
- 동일 의미의 동의어를 혼용하지 않는다.

### 4.4 Approved Class Prefixes

`logo`, `mark`, `favicon`, `app-icon`, `icon`, `illustration`, `hero`, `banner`, `thumbnail`, `card`, `profile`, `article`, `bg`, `pattern`, `chart`, `og`, `social`, `placeholder`

### 4.5 Reserved Terms

다음 용어는 시스템 또는 상태 의미로 예약한다.

- `primary`, `secondary`
- `light`, `dark`
- `mobile`, `desktop`
- `active`, `disabled`
- `deprecated`, `archive`
- `source`, `master`
- `draft`, `review`

승인 상태를 Filename으로 관리하지 않는다. `draft`, `review`, `approved`는 Asset Registry와 Pull Request에서 관리한다.

### 4.6 Prohibited Names

```text
final.*
final-final.*
new.*
new2.*
latest.*
copy.*
untitled.*
image1.*
screen-shot.*
test.*
sample.*
temp.*
```

### 4.7 Variant Naming

Variant는 명확한 사용 차이가 있을 때만 추가한다.

- `-light`, `-dark`: 배경 대응
- `-mobile`, `-desktop`: Crop이 실제로 다른 경우
- `-outline`, `-filled`: Icon Library에서 승인된 경우
- `-ko`, `-en`: 이미지 안에 언어가 포함된 경우
- `-1x`, `-2x`: Raster Export가 필요한 경우

### 4.8 Best Practice

`hero-city-mobile-final.webp` 대신 `hero-city-mobile.webp`를 사용하고 Version은 Git과 Registry에서 관리한다.

---

## 5. Image Standards

### 5.1 Master and Delivery Files

- Master: 원본 Crop이 가능한 고해상도, 비파괴 편집 파일
- Delivery: 실제 Web에서 사용하는 AVIF/WebP/SVG
- Source 편집 파일은 Public Directory에 배포하지 않는다.
- PSD, AI, TIFF, RAW는 Repository Public Asset 경로에 저장하지 않는다.

### 5.2 Standard Matrix

| Use | 권장 해상도 | Ratio | Preferred Format | Target Weight |
|---|---:|---:|---|---:|
| Desktop Hero | 2560×1440 | 16:9 | AVIF/WebP | ≤ 300KB |
| Mobile Hero Variant | 1080×1440 | 3:4 | AVIF/WebP | ≤ 220KB |
| Wide Banner | 1920×640 | 3:1 | AVIF/WebP | ≤ 220KB |
| Section Image | 1600×1000 | 8:5 | AVIF/WebP | ≤ 220KB |
| Service Card | 1200×800 | 3:2 | AVIF/WebP | ≤ 160KB |
| Insight Thumbnail | 1200×675 | 16:9 | AVIF/WebP | ≤ 140KB |
| Article Lead | 1600×900 | 16:9 | AVIF/WebP | ≤ 220KB |
| Article Inline | 1200×800 | 3:2 | AVIF/WebP | ≤ 160KB |
| Profile Portrait | 800×1000 | 4:5 | AVIF/WebP | ≤ 140KB |
| Logo Raster Fallback | 512×512 | 1:1 | PNG | ≤ 80KB |
| OG Image | 1200×630 | 1.91:1 | WebP/JPEG/PNG | ≤ 300KB |
| Social Square | 1200×1200 | 1:1 | WebP/PNG | ≤ 350KB |
| Social Portrait | 1080×1350 | 4:5 | WebP/PNG | ≤ 350KB |

Target Weight는 최대 허용치가 아니라 목표 상한이다. 화질과 가독성을 유지하며 더 작게 만들 수 있으면 줄인다.

### 5.3 Hero Standards

- 피사체가 Headline과 경쟁하지 않아야 한다.
- Text Safe Area를 Desktop과 Mobile 모두 확인한다.
- Overlay가 없는 원본과 Overlay 적용 결과를 함께 검수한다.
- Background Position은 피사체를 자르지 않는 범위에서 Token 또는 Component Rule로 관리한다.
- Mobile Crop이 실패할 때만 별도 Variant를 제작한다.
- 첫 화면 Hero는 Lazy Loading을 사용하지 않는다.

### 5.4 Banner Standards

- Banner 내부에 중요한 Text를 Raster로 삽입하지 않는다.
- UI Text는 HTML로 제공한다.
- Campaign Name이나 Report Cover처럼 이미지 자체가 콘텐츠인 경우에만 Embedded Text를 허용한다.
- 200% Zoom과 High Contrast 환경에서 의미가 유지되어야 한다.

### 5.5 Thumbnail and Card

- 같은 Grid 안의 Thumbnail은 동일 Ratio를 사용한다.
- 중요한 피사체 위치를 일관되게 유지한다.
- Card Crop은 `object-fit: cover`를 사용하되 얼굴, 문서와 핵심 Object를 자르지 않는다.
- Thumbnail만 보고 Content Category를 오인하게 만드는 장면을 사용하지 않는다.

### 5.6 Profile

- 배경, 조명, Crop과 Eye Line을 통일한다.
- 과도한 Retouch와 AI 보정은 금지한다.
- Subject의 사용 동의와 공개 범위를 기록한다.
- Alternative Text에는 직책과 이름을 포함하되 외모를 불필요하게 설명하지 않는다.

### 5.7 Article Image

- Article 이해에 기여해야 한다.
- 출처, 촬영자와 License를 Registry에 기록한다.
- Caption이 필요한 경우 HTML Text로 제공한다.
- Chart Screenshot보다 원본 Data Visualization을 우선한다.

### 5.8 OG Image

- `1200×630`을 기준으로 한다.
- 핵심 Text와 Logo는 중앙 Safe Area 안에 둔다.
- 작은 Preview에서도 식별 가능한 대비를 확보한다.
- Website Hero Image를 그대로 사용할 수 있지만 공유 맥락이 불명확하면 전용 OG Variant를 제작한다.
- Page별 OG가 없다면 승인된 Default OG를 사용한다.

### 5.9 Quality

- AVIF: 품질 45~65 범위에서 육안 검수
- WebP: 품질 75~85 권장
- JPEG: 품질 75~85, Progressive 권장
- PNG: Lossless Optimization 필수
- 작은 Text, Logo와 Line Art는 Raster보다 SVG 우선

### 5.10 Work Rule

권장 해상도를 맞추기 위해 작은 원본을 인위적으로 확대하지 않는다. 필요한 원본 품질이 없으면 Asset 요청을 반려하거나 다른 Visual Solution을 선택한다.

---

## 6. Icon Library Rules

### 6.1 Style

- Outline를 기본으로 한다.
- Filled Icon은 Success, Warning처럼 작은 면적의 명확한 상태에만 제한한다.
- 한 화면에서 Outline와 Filled Style을 임의로 혼용하지 않는다.
- Simple Geometry와 낮은 Corner Radius를 사용한다.

### 6.2 Grid

- Master Grid: 24×24
- Optical Safe Area: 2px
- Pixel Alignment: 주요 수평·수직 Stroke는 Pixel Grid에 정렬
- ViewBox: `0 0 24 24`

특수 Brand Mark는 Icon Grid 적용 대상이 아니다.

### 6.3 Size Roles

| Role | CSS Token | 기본 용도 |
|---|---|---|
| Small | `--component-icon-size-sm` | Caption, Compact Action |
| Medium | `--component-icon-size-md` | Standard UI, Notice |
| Large | `--component-icon-size-lg` | Success, Empty State |

임의의 네 번째 크기를 만들지 않는다. Touch Target 크기와 Graphic 크기를 혼동하지 않는다.

### 6.4 Stroke

- Standard Stroke: `1.5`
- Line Cap: Round
- Line Join: Round
- 동일 Icon 안에서 Stroke Width를 혼합하지 않는다.
- 작은 크기에서 형태가 무너지면 Path를 단순화하지 Stroke를 임의로 굵게 하지 않는다.

### 6.5 Radius

Icon 내부 Radius는 최소화한다. UI Component Radius와 Icon Radius를 동일하게 만들 필요는 없다. Friendly Consumer Icon처럼 과도하게 둥근 형태를 사용하지 않는다.

### 6.6 Color

- Default: `currentColor`
- Brand Emphasis: Accent Token
- Disabled: Component Disabled Token
- Error, Warning, Success: Semantic Feedback Token
- Icon 자체 SVG에 Hex Color를 하드코딩하지 않는다. 공식 Logo는 예외다.

### 6.7 Hover and State

- Hover에서 Icon Size와 Stroke Width를 바꾸지 않는다.
- Color와 Container State만 변경한다.
- Rotate, Bounce와 Scale Animation을 사용하지 않는다.
- Direction Icon은 Component Motion 규칙 안에서 짧은 Translate를 사용할 수 있다.

### 6.8 Icon-only Controls

Icon-only Button은 다음을 모두 충족해야 한다.

1. 최소 44×44 Touch Target
2. Accessible Name
3. Visible Focus
4. Tooltip 또는 Context상 충분한 Label
5. Disabled State

### 6.9 SVG Rules

- 불필요한 Group, Metadata, Mask와 Clip Path를 제거한다.
- `viewBox`를 반드시 포함한다.
- 외부 Font와 Embedded Raster를 포함하지 않는다.
- CSS에서 제어할 Icon은 `currentColor`를 사용한다.
- Decorative Icon은 `aria-hidden="true"`와 `focusable="false"`를 사용한다.

### 6.10 DON'T

- 서로 다른 Icon Set을 혼합하지 않는다.
- Emoji를 Product Icon으로 사용하지 않는다.
- Icon만으로 전문 용어를 설명하지 않는다.
- 장식용 대형 Icon을 Card마다 추가하지 않는다.

---

## 7. Photography Guide

### 7.1 Recommended Subjects

- 실제 Business Meeting
- Negotiation과 Document Review
- Office와 Advisory Work
- Business City와 Infrastructure
- Executive Portrait
- Investment Committee Context
- Finance와 M&A 관련 실제 업무 환경

### 7.2 Visual Tone

- 자연스러운 명암
- 절제된 채도
- Calm하고 Professional한 표정
- 현실적인 Office와 Meeting Room
- 지나치게 넓거나 비현실적인 공간보다 실제 업무 밀도
- Natural Light 또는 Soft Directional Light

### 7.3 Composition

- Text Safe Area를 확보한다.
- 인물을 Hero Text 뒤에 배치하지 않는다.
- Group Shot은 위계가 지나치게 광고처럼 보이지 않게 한다.
- Desk, Document, Screen과 Architecture를 활용해 업무 맥락을 보여준다.
- 촬영 위치와 피사체를 고정관념으로 표현하지 않는다.

### 7.4 Prohibited Styles

- 악수만 클로즈업한 Stock Photo
- 모든 인물이 과도하게 웃는 장면
- 승리를 연출하는 제스처
- 돈, 금괴, 동전과 상승 화살표의 직접적 상징
- 과장된 Skyline과 Luxury Image
- 얼굴·손·문자가 왜곡된 AI Image
- 과도한 HDR, Lens Flare와 Teal–Orange Grade
- 회의 맥락과 무관한 Laptop Stock Photo

### 7.5 People and Representation

- 역할과 전문성을 중심으로 표현한다.
- 성별, 연령과 배경을 단일 이미지에 고정하지 않는다.
- 고객과 임직원의 초상권·사용 동의를 확인한다.
- 민감한 Document와 Screen Content가 노출되지 않게 한다.

### 7.6 AI-generated Photography

AI Image는 실제 촬영 Asset을 확보하기 어려운 경우에만 검토한다.

반드시 확인:

- 손과 손가락
- 눈, 치아와 피부
- Glass와 Reflection
- Screen Text와 Document
- Logo와 Signage
- Perspective와 Furniture
- 비현실적인 Lighting
- 유사 인물·저작권 Risk

AI 생성 사실과 Tool, Prompt Owner, 생성일, Review 결과를 Registry에 기록한다.

### 7.7 PM Note

Stock License는 “다운로드 가능”과 “상업적 사용 가능”이 다르다. Territory, 기간, Channel, Model Release와 재배포 조건을 확인한다.

---

## 8. Illustration Guide

### 8.1 When to Use

- 사진으로 표현하기 어려운 추상적 Process
- 여러 단계의 Deal Structure
- Data가 없는 Concept Explanation
- Empty State에서 짧은 이해 보조가 필요한 경우

### 8.2 When Not to Use

- 단순히 빈 공간을 채우기 위해
- 서비스마다 대표 그림을 만들기 위해
- Card 수를 맞추기 위해
- 실제 사례나 업무 환경을 대체하기 위해
- Icon으로 충분한 개념에

### 8.3 Approved Style

- Flat 또는 매우 제한적인 Layer
- Simple Geometry
- Brand Navy, Light Gray와 제한된 Gold
- 명확한 Business Context
- Text 없이도 구조를 이해할 수 있는 Composition

### 8.4 3D

기본적으로 사용하지 않는다. Data Product나 향후 특정 Product Experience에서 기능적 필요가 입증되고 Brand Owner가 승인한 경우에만 제한적으로 검토한다.

### 8.5 Gradient

Subtle Gradient만 허용한다. Glow, Neon, Metallic Effect와 다중 Color Mesh를 사용하지 않는다.

### 8.6 Character

Cartoon Character, Mascot와 감정 중심 Character Illustration은 EQUIV Visual Language에 사용하지 않는다.

### 8.7 Business Illustration

Business Illustration은 추상적 서류, 구조, 연결과 의사결정 흐름을 표현할 수 있다. 돈주머니, Rocket, Trophy와 과장된 성공 상징은 사용하지 않는다.

### 8.8 Deliverables

Illustration 승인 시 다음을 제공한다.

- Editable Source
- Optimized SVG 또는 WebP
- Light Background Variant
- Dark Background Variant가 필요한 경우
- Alt Text 또는 Decorative Decision
- License와 Creator 정보

---

## 9. Background Guide

### 9.1 Solid Background

기본 Background는 White, Light Gray와 Brand Navy다. Semantic Background Token을 사용하며 Page마다 새 Color를 만들지 않는다.

### 9.2 Gradient

- 같은 Color Family 안에서 사용한다.
- Text Contrast를 높이는 목적이어야 한다.
- Gradient 자체가 먼저 보이지 않게 한다.
- Hero Overlay와 Section Transition 외 사용을 최소화한다.

### 9.3 Texture

기본적으로 사용하지 않는다. 실제 인쇄물 Texture를 디지털에 모방하지 않는다. 접근성이나 Compression Artifact를 유발하는 Noise Texture를 금지한다.

### 9.4 Pattern

Pattern은 거의 사용하지 않는다. Grid나 Data Context를 보조해야 하며 Decorative Density가 Text를 방해하면 제거한다.

### 9.5 Background Image

- Text가 있는 경우 Overlay를 사용한다.
- Contrast를 실제 Crop에서 검수한다.
- Background Image에 의미가 있다면 별도 Accessible Description을 제공한다.
- 단순 장식이면 접근성 트리에서 제외한다.

### 9.6 Overlay

- Brand Navy 기반
- 한 Component 안에서 한 개의 목적 있는 Overlay
- Text 대비를 충족하는 최소 농도
- 피사체를 완전히 숨길 정도로 어둡게 하지 않는다.
- Gold Glow, Radial Glow와 Spotlight Effect를 사용하지 않는다.

### 9.7 Responsive Crop

`background-position`과 Art Direction을 검토한다. Mobile에서 핵심 피사체가 잘리면 전용 Variant 또는 `<picture>`를 사용한다.

---

## 10. Color Usage in Assets

### 10.1 Source of Truth

정확한 Brand Color 값은 `BRAND_GUIDE.md`와 `DESIGN_SYSTEM.md`의 Semantic Token을 따른다. 이 문서에서 새로운 Color Value를 정의하지 않는다.

### 10.2 Primary and Background

- Navy: Brand Background, Overlay, Key Structural Graphic
- White: Primary Surface와 Negative Space
- Light Gray: Secondary Surface와 Grouping
- Gold: Accent와 제한된 Highlight

### 10.3 Accent

Gold는 한 화면에서 우선순위를 만드는 작은 Accent로 사용한다. 넓은 Gold Background, 과도한 Gradient와 Glow를 금지한다.

### 10.4 Highlight

Highlight는 정보의 중요도를 나타내야 한다. 강조할 내용이 여러 개면 색을 늘리지 않고 정보 구조를 다시 검토한다.

### 10.5 Charts

- Primary Series: Navy
- Key Comparison 또는 Selected Series: Gold
- Secondary Series: Gray Scale
- Success, Warning, Error: Semantic Feedback Color
- 범례와 직접 Label을 함께 사용한다.
- 색상만으로 Series를 구분하지 않는다.

### 10.6 Icons

기본 `currentColor`를 사용한다. 상태 Icon은 Semantic Feedback Token을 사용하고 Text Label을 함께 제공한다.

### 10.7 Image Overlay

Overlay는 Navy 계열만 사용한다. Brand Color를 사진에 Multiply하여 피부색과 문서색을 왜곡하지 않는다.

### 10.8 Contrast

- Normal Text: WCAG AA 4.5:1 이상
- Large Text: 3:1 이상
- Meaningful Graphic과 Control Boundary: 3:1 이상
- 실제 이미지 Crop과 Overlay 상태에서 측정한다.

---

## 11. SVG Optimization

### 11.1 Preflight

- ViewBox 존재
- 불필요한 Width/Height 제거 또는 사용 목적에 맞게 지정
- Empty Group 제거
- Hidden Layer 제거
- Editor Metadata 제거
- Decimal Precision 정리
- Duplicate Path 병합
- Unused Definition 제거

### 11.2 Path Rules

- Path 수가 많을수록 무조건 나쁜 것은 아니지만 불필요한 세분화는 제거한다.
- 형태가 달라질 정도의 과도한 Simplification은 금지한다.
- Stroke를 Outline Path로 변환할지는 사용 방식과 Scaling을 기준으로 결정한다.

### 11.3 ViewBox

모든 SVG는 명확한 ViewBox를 가진다. Negative ViewBox와 과도한 Empty Space는 제거한다. Icon은 공통 Grid를 따른다.

### 11.4 Inline SVG

사용 기준:

- CSS로 Color와 State를 제어해야 함
- 단일 페이지에서 작은 Icon 사용
- ARIA State와 직접 연결됨

주의:

- 반복 Markup이 과도해지지 않게 한다.
- 중복 ID 충돌을 방지한다.
- Decorative SVG는 숨긴다.

### 11.5 External SVG

사용 기준:

- Logo와 독립 Asset
- Browser Cache 재사용이 유리함
- 내부 Path를 CSS로 제어할 필요가 없음

`<img>`로 사용하는 SVG는 `alt`를 HTML에서 제공한다.

### 11.6 Sprite

20개 이상의 공통 UI Icon이 여러 화면에 반복되고 Network 요청 또는 Markup 중복이 실제 문제가 될 때 검토한다. 작은 사이트에 미리 Sprite Architecture를 도입하지 않는다.

### 11.7 Security

- Script 제거
- External Reference 제거
- Event Handler 제거
- Foreign Object 사용 금지
- Untrusted SVG는 Sanitization 후 사용

### 11.8 Accessibility

- Meaningful Standalone SVG: `role="img"`와 Accessible Name
- Decorative Inline SVG: `aria-hidden="true"`, `focusable="false"`
- `<img src="*.svg">`: HTML `alt`로 의미 결정
- Icon-only Button: Button에 이름을 제공하고 SVG는 숨김

---

## 12. Image Optimization

### 12.1 Format Decision

| Format | 사용 | 사용하지 않는 경우 |
|---|---|---|
| AVIF | Photography, 큰 배경, 높은 압축 | 지원 전략·Tooling이 없는 경우 |
| WebP | 기본 Web Raster, Photo와 Thumbnail | Vector 또는 투명 Line Art |
| JPEG | Legacy Fallback, Photo | 투명도, Logo, Text-heavy Graphic |
| PNG | 투명 Raster, Favicon Fallback | 일반 Photo와 큰 Background |
| SVG | Logo, Icon, Chart, Simple Illustration | Photo와 복잡한 Texture |

### 12.2 Compression

- 육안 검수 없는 자동 압축만으로 승인하지 않는다.
- 얼굴, Text, Logo, Gradient Banding과 Dark Area를 확대 확인한다.
- Master File은 재압축하지 않는다.
- 이미 압축된 JPEG를 반복 저장하지 않는다.

### 12.3 Responsive Image

Content Image는 가능하면 `<picture>`, `srcset`과 `sizes`를 사용한다.

```html
<picture>
  <source
    type="image/avif"
    srcset="
      images/article/market-640.avif 640w,
      images/article/market-1200.avif 1200w
    ">
  <source
    type="image/webp"
    srcset="
      images/article/market-640.webp 640w,
      images/article/market-1200.webp 1200w
    ">
  <img
    src="images/article/market-1200.webp"
    srcset="
      images/article/market-640.webp 640w,
      images/article/market-1200.webp 1200w
    "
    sizes="(max-width: 767px) 100vw, 720px"
    width="1200"
    height="800"
    alt="설명"
    loading="lazy"
    decoding="async">
</picture>
```

필요한 크기가 하나뿐인 작은 Asset에 형식적 `srcset`을 만들지 않는다.

### 12.4 Lazy Loading

- Hero와 첫 Viewport의 핵심 Image: `loading="eager"` 또는 기본값
- Below-the-fold Image: `loading="lazy"`
- Logo와 UI Icon: 크기와 요청 수를 고려해 기본 로딩
- Lazy Loading이 Layout Shift를 만들지 않도록 Width와 Height 또는 Aspect Ratio를 제공한다.

### 12.5 Fetch Priority

첫 화면 Hero가 `<img>`인 경우에만 `fetchpriority="high"`를 검토한다. 여러 Image에 High Priority를 사용하지 않는다.

### 12.6 Cache

Content Hash가 있는 Build에서는 장기 Cache를 사용한다. 정적 Filename을 유지하는 환경에서는 Version Query 또는 배포 Cache Invalidation을 사용한다.

### 12.7 Performance Budget

- Initial Hero Asset: 300KB 이하 권장
- Initial Viewport 전체 Image Transfer: 500KB 이하 목표
- 단일 Content Image: 220KB 이하
- 단일 SVG Icon: 5KB 이하 권장
- Logo SVG: 20KB 이하 권장

### 12.8 Work Rule

파일 확장자만 WebP로 바꾸는 것은 최적화가 아니다. 실제 Encoding, 크기, 해상도와 육안 품질을 검증한다.

---

## 13. Accessibility

### 13.1 Alt Text Decision

다음 순서로 결정한다.

1. 이미지가 정보를 전달하는가?
2. 주변 Text가 이미 같은 정보를 충분히 제공하는가?
3. 이미지가 Link나 Button의 기능을 설명하는가?
4. 장식용인가?

### 13.2 Meaningful Images

Alt Text는 이미지의 외형이 아니라 해당 Context에서 전달하는 의미를 설명한다.

좋은 예:

```html
alt="서울 금융지구 야경"
alt="기업 매각 협상 자료를 검토하는 자문 회의"
```

피해야 할 예:

```html
alt="이미지"
alt="사진"
alt="예쁜 도시 사진"
```

### 13.3 Decorative Images

- `<img alt="">`
- Inline SVG는 `aria-hidden="true"`
- CSS Background는 기본적으로 접근성 트리에 포함되지 않으므로 의미가 있다면 별도 Text를 제공한다.

### 13.4 Functional Images

Link나 Button 안의 Image는 Control의 목적을 설명해야 한다. Visible Text가 있으면 Image Alt는 빈 값일 수 있다.

### 13.5 Complex Images

Chart, Diagram과 Infographic은 짧은 Alt와 함께 인접한 상세 설명, Table 또는 Data Download를 제공한다.

### 13.6 Icons

- Text와 함께 사용
- 단독 Control은 Accessible Name 필수
- Color만으로 상태 전달 금지
- Focus와 Touch Target은 Component 기준 준수

### 13.7 Contrast and Motion

Asset 내부 Text도 Contrast 기준을 충족해야 한다. Animated SVG, GIF와 Video Poster는 `prefers-reduced-motion`과 대체 정보 전략을 갖춰야 한다.

### 13.8 Accessibility QA

- Screen Reader에서 중복 Logo 이름이 읽히지 않는가?
- Decorative Asset이 불필요하게 읽히지 않는가?
- Image가 로드되지 않아도 Content를 이해할 수 있는가?
- 200% Zoom에서 Embedded Text가 잘리지 않는가?
- High Contrast Mode에서 핵심 Graphic이 사라지지 않는가?

---

## 14. Dark Mode Preparation

### 14.1 Principle

현재 Dark Mode를 즉시 제공하지 않더라도 Asset은 향후 Color Scheme 전환을 방해하지 않아야 한다.

### 14.2 Logo

- Light Background Variant
- Dark Background Variant
- Symbol-only Variant가 필요한 경우
- Clear Space와 Contrast 동일 유지

### 14.3 Icons

`currentColor`를 사용한다. Black 또는 White를 Path에 하드코딩하지 않는다.

### 14.4 Photography

Dark Mode에서 과도하게 밝은 Image가 눈부심을 만들지 않는지 확인한다. 이미지 자체를 무조건 어둡게 하지 않고 Surface와 Overlay Strategy를 검토한다.

### 14.5 Illustrations and Charts

- Semantic Color를 사용한다.
- Light/Dark Background에서 Contrast를 확인한다.
- White Background를 SVG 내부에 하드코딩하지 않는다.
- Chart의 Grid와 Label이 양쪽 Mode에서 유지되어야 한다.

### 14.6 Background

투명 Asset은 주변 Surface Color를 가정하지 않는다. 필요한 경우 `-light`, `-dark` Variant를 승인한다.

### 14.7 Work Rule

Dark Mode 준비를 이유로 현재 사용하지 않는 Asset Variant를 대량 생성하지 않는다. Source가 쉽게 변환될 수 있도록 구조와 Token 의존성을 확보한다.

---

## 15. SEO and Distribution

### 15.1 OG Image

- 기본 규격: 1200×630
- Absolute Production URL 사용
- Page 내용과 일치
- 작은 Preview에서도 Logo와 핵심 내용 식별
- 파일 크기 300KB 이하 목표
- 이미지 내부 Text는 짧게 유지

### 15.2 Twitter/X Card

`summary_large_image`를 기본으로 검토한다. OG Image를 공유할 수 있지만 Channel Preview에서 Crop과 Text Safe Area를 확인한다.

### 15.3 Image Metadata

Web Delivery File에서는 불필요한 EXIF, GPS와 개인 정보를 제거한다. Copyright와 Creator 정보는 Asset Registry와 CMS에서 관리한다.

### 15.4 Filename SEO

Filename은 내용을 설명하되 Keyword를 반복하지 않는다.

좋은 예:

`article-manufacturing-ma.webp`

나쁜 예:

`ma-ma-company-sale-best-ma-advisory.webp`

### 15.5 Alt SEO

Alt Text는 검색 Keyword를 삽입하는 공간이 아니다. 실제 의미와 Context를 설명한다.

### 15.6 Structured Data

Article, Organization과 Person Structured Data에서 사용하는 Image URL은 실제 공개 Asset과 일치해야 한다. Width, Height와 대표성 기준을 확인한다.

### 15.7 Social Preview QA

- Facebook/LinkedIn Debugger
- X Card Validator 또는 Preview
- KakaoTalk Link Preview
- Mobile Messaging Preview
- Cache Refresh Strategy

### 15.8 PM Note

Production Domain이 확정되기 전 Placeholder OG URL을 배포 승인 상태로 간주하지 않는다.

---

## 16. Asset QA Checklist

새 Asset마다 해당 항목을 기록한다. `N/A`는 이유를 남긴다.

### 16.1 Purpose and Brand

- [ ] 01. Asset의 목적이 한 문장으로 정의되었는가?
- [ ] 02. 기존 승인 Asset으로 해결할 수 없는가?
- [ ] 03. Brand Keyword와 일치하는가?
- [ ] 04. Content보다 먼저 보이지 않는가?
- [ ] 05. 장식이 아니라 이해 또는 행동에 기여하는가?
- [ ] 06. Design Bible과 충돌하지 않는가?
- [ ] 07. Photography·Icon·Illustration Style이 기존과 일치하는가?
- [ ] 08. Gold Accent 사용이 제한적인가?

### 16.2 Rights and Source

- [ ] 09. Creator 또는 Source가 기록되었는가?
- [ ] 10. 상업적 사용 권한이 확인되었는가?
- [ ] 11. Model/Property Release가 필요한지 확인했는가?
- [ ] 12. 사용 Channel, Territory와 기간 제한을 확인했는가?
- [ ] 13. AI 생성 여부와 Tool이 기록되었는가?
- [ ] 14. 고객·직원·문서의 민감 정보가 제거되었는가?

### 16.3 File and Naming

- [ ] 15. 올바른 Class Directory에 저장되었는가?
- [ ] 16. Filename이 소문자 Kebab Case인가?
- [ ] 17. `final`, `new`, `copy` 같은 금지어가 없는가?
- [ ] 18. 동일 Asset의 중복 파일이 없는가?
- [ ] 19. Source와 Delivery File이 구분되어 있는가?
- [ ] 20. Version을 Filename이 아니라 Git과 Registry로 관리하는가?

### 16.4 Technical Quality

- [ ] 21. 사용 목적에 맞는 Format인가?
- [ ] 22. 권장 Ratio와 해상도를 충족하는가?
- [ ] 23. 작은 원본을 인위적으로 확대하지 않았는가?
- [ ] 24. Target Weight 안에 있는가?
- [ ] 25. Compression Artifact가 없는가?
- [ ] 26. 불필요한 Metadata가 제거되었는가?
- [ ] 27. SVG에 ViewBox가 있는가?
- [ ] 28. SVG에 Script, External Reference와 Foreign Object가 없는가?
- [ ] 29. Logo와 Text가 작은 크기에서도 선명한가?
- [ ] 30. Width/Height 또는 Aspect Ratio가 제공되는가?

### 16.5 Responsive and Visual

- [ ] 31. Desktop Crop을 확인했는가?
- [ ] 32. Tablet Crop을 확인했는가?
- [ ] 33. Mobile Crop을 확인했는가?
- [ ] 34. 360px과 390px에서 핵심 피사체가 유지되는가?
- [ ] 35. 1440px과 1920px에서 과도하게 확대되지 않는가?
- [ ] 36. Portrait와 Landscape 회전을 확인했는가?
- [ ] 37. Text Safe Area가 유지되는가?
- [ ] 38. Overlay가 Content Contrast를 확보하는가?
- [ ] 39. Retina/고밀도 화면에서 선명한가?
- [ ] 40. Light와 Dark Background에서 필요한 대비가 유지되는가?

### 16.6 Accessibility

- [ ] 41. Meaningful/Decorative 판단이 완료되었는가?
- [ ] 42. Meaningful Image에 적절한 Alt가 있는가?
- [ ] 43. Decorative Image가 접근성 트리에서 숨겨졌는가?
- [ ] 44. Icon-only Control에 Accessible Name이 있는가?
- [ ] 45. 색상 외에 의미 전달 수단이 있는가?
- [ ] 46. Text와 Meaningful Graphic Contrast가 기준을 충족하는가?
- [ ] 47. Image가 없어도 핵심 Task를 수행할 수 있는가?
- [ ] 48. Complex Image에 상세 설명 또는 Data 대안이 있는가?
- [ ] 49. Motion이 Reduced Motion 환경에서 제거되는가?
- [ ] 50. 200% Zoom에서 Embedded Text가 잘리지 않는가?

### 16.7 Performance and Delivery

- [ ] 51. Above-the-fold와 Below-the-fold Loading 전략이 올바른가?
- [ ] 52. 필요한 경우 `srcset`과 `sizes`가 있는가?
- [ ] 53. 불필요한 Variant를 다운로드하지 않는가?
- [ ] 54. Asset URL이 404를 반환하지 않는가?
- [ ] 55. Cache Invalidation 전략이 있는가?
- [ ] 56. Initial Image Budget을 초과하지 않는가?
- [ ] 57. Chrome과 Safari에서 정상 디코딩되는가?
- [ ] 58. Slow Network에서 Layout Shift가 없는가?

### 16.8 SEO and Governance

- [ ] 59. OG/Social Asset은 실제 Page와 일치하는가?
- [ ] 60. Production URL이 올바른가?
- [ ] 61. Filename과 Alt가 Keyword Stuffing 없이 명확한가?
- [ ] 62. Registry에 Owner, Status와 Usage가 기록되었는가?
- [ ] 63. Reviewer와 Approver가 기록되었는가?
- [ ] 64. 교체 대상과 Migration이 확인되었는가?
- [ ] 65. Changelog와 관련 문서가 업데이트되었는가?
- [ ] 66. Rollback 가능한가?

### 16.9 Release Gate

66개 항목 중 Mandatory 항목에 미완료가 있으면 배포하지 않는다. Exception은 Owner, 사유, 영향, 만료일과 보완 계획을 기록해야 한다.

---

## 17. Asset Lifecycle

### 17.1 Create

Asset Request에는 다음을 포함한다.

- Business Objective
- User Context
- Asset Class
- Placement
- Required Ratio와 Size
- Required Date
- Rights Constraint
- Accessibility Intent
- Owner

### 17.2 Review

Review는 세 단계로 진행한다.

1. Brand Review: Tone, Style, Consistency
2. Technical Review: Format, Weight, Responsive, Security
3. Accessibility/Content Review: Meaning, Alt, Contrast, Context

### 17.3 Approve

Approver는 Asset Class에 따라 결정한다. Logo는 Brand Owner, Icon은 Design System Owner, Photography는 Brand/PM, Chart는 Domain Owner가 최종 승인한다.

### 17.4 Optimize

승인된 Visual Source를 Delivery Format으로 변환한다. Optimization 후 육안 비교와 File Size 기록을 남긴다.

### 17.5 Deploy

- 승인 경로에 추가
- 참조 코드 연결
- Cache Strategy 적용
- Browser QA
- Asset Registry `Active` 변경
- Changelog 기록

### 17.6 Archive

재사용 가능성 또는 법적 보존 필요가 있는 Asset은 Public Path에서 제거하고 Archive Metadata를 남긴다. Archive Folder를 Production에서 참조하지 않는다.

### 17.7 Replace

교체 시 새 Asset 승인 후 참조를 변경한다. Old Asset을 즉시 삭제하기 전에 전체 참조와 Rollback Window를 확인한다.

### 17.8 Delete

다음을 모두 충족할 때 삭제한다.

- 참조 0건
- Rollback Window 종료
- 법적 보존 의무 없음
- Registry에 Replacement 또는 삭제 이유 기록
- Repository History에서 복구 가능

### 17.9 Lifecycle SLA

| Stage | 기본 목표 |
|---|---|
| Request Triage | 2 Business Days |
| Brand Review | 2 Business Days |
| Technical/Accessibility Review | 2 Business Days |
| Optimization and QA | 1–2 Business Days |
| Emergency Replacement | Risk 기반 별도 승인 |

### 17.10 RACI

| Activity | Requester | Designer | Developer | Brand Owner | PM |
|---|---|---|---|---|---|
| Brief | R | C | C | C | A |
| Visual Create | C | R | C | A | C |
| Optimization | I | C | R | C | A |
| Accessibility | C | C | R | C | A |
| Approval | I | C | C | A | A |
| Deployment | I | I | R | C | A |
| Archive/Delete | C | I | R | A | A |

---

## 18. Version Control

### 18.1 Version Principle

Git History와 Asset Registry가 Version의 Source of Truth다. Filename에 임의 Version을 누적하지 않는다.

### 18.2 Asset Version

Registry Version은 Semantic하게 관리한다.

- Patch: Compression, Metadata와 시각 차이 없는 최적화
- Minor: Crop, Color Variant, 접근성 개선
- Major: Logo, Composition 또는 의미의 Breaking Change

### 18.3 Deprecated Assets

Deprecated Asset은 새 사용을 금지한다. Registry에 다음을 기록한다.

- Deprecated Date
- Reason
- Replacement
- Migration Owner
- Removal Date

### 18.4 Migration Rule

- 모든 참조 위치를 Search한다.
- 동일 Commit 또는 Pull Request에서 새 Asset과 참조 변경을 함께 처리한다.
- Old File 제거는 참조가 0건임을 확인한 후 진행한다.
- Public URL이 외부에 사용된 경우 Redirect 또는 유지 기간을 검토한다.

### 18.5 Breaking Change

다음은 Major Change다.

- Logo 형태 또는 Lockup 변경
- Icon Grid 또는 Stroke System 변경
- Asset Directory Public URL 변경
- Default OG Image 변경
- 대규모 Photography Tone 변경

Major Change는 Design Bible, Brand Guide, Design System, Migration Plan과 Changelog를 함께 갱신한다.

### 18.6 Commit Guidance

좋은 Commit:

```text
assets: optimize home hero and migrate logo paths
docs: add visual asset governance
```

피해야 할 Commit:

```text
update images
final asset changes
misc
```

---

## 19. Work Implementation Rules

### 19.1 Before Work

Work는 새 Asset 추가 전 반드시 다음을 수행한다.

1. `EQUIV_DESIGN_BIBLE.md` 확인
2. `BRAND_GUIDE.md` 확인
3. `DESIGN_SYSTEM.md` 확인
4. 이 문서의 Class와 규격 확인
5. Repository 전체에서 유사 Asset 검색
6. 현재 Asset Registry 확인

### 19.2 Token First

Asset의 색상, 크기, Overlay, Radius, Shadow와 Motion은 Design Token과 Component Rule을 사용한다. Component 내부에서 Asset 전용 숫자와 색상을 임의로 만들지 않는다.

### 19.3 Existing Asset First

새 파일을 만들기 전에 기존 Asset, Crop, Variant와 CSS 표현으로 해결 가능한지 검토한다.

### 19.4 Image Generation

AI 또는 Image Generation Tool을 사용할 때:

- Brief와 금지 요소를 명확히 한다.
- 실제 Brand Asset을 무단 학습·변형하지 않는다.
- 사람, 손, 문서, Logo와 Architecture 오류를 확대 검수한다.
- 결과를 바로 Production에 사용하지 않는다.
- 생성 정보와 검토 결과를 Registry에 기록한다.

### 19.5 SVG

- 외부에서 받은 SVG는 Sanitization한다.
- Logo가 아닌 UI SVG에는 Color Token 제어가 가능하도록 한다.
- 의미 없는 ARIA를 중복하지 않는다.
- Inline과 External 사용 이유를 선택한다.

### 19.6 Raster

- WebP 또는 AVIF를 우선한다.
- 사용 위치보다 과도하게 큰 해상도를 배포하지 않는다.
- Below-the-fold에는 Lazy Loading을 적용한다.
- Layout Shift 방지를 위해 Dimension을 제공한다.

### 19.7 HTML and CSS

- Decorative Background를 Meaningful Content 대신 사용하지 않는다.
- `alt`를 Filename에서 자동 생성하지 않는다.
- 같은 Asset을 Base64와 File로 중복 포함하지 않는다.
- CSS `background-image` 참조는 승인 Asset Path만 사용한다.

### 19.8 JavaScript

- Loading Image를 JavaScript로 반복 생성하지 않는다.
- Dynamic Asset 경로는 허용 목록과 존재 검증을 사용한다.
- 사용자 입력을 Asset URL에 직접 연결하지 않는다.
- Error 시 Placeholder와 Text 상태를 제공한다.

### 19.9 Performance

- 추가 전후 Transfer Size를 기록한다.
- Initial Viewport Budget 영향을 확인한다.
- Format Fallback이 중복 다운로드를 만들지 않게 한다.
- Image Decode와 Layout Shift를 Browser에서 검수한다.

### 19.10 Accessibility

- Alt Decision을 Code Review에 포함한다.
- Icon-only Control의 Name과 Focus를 검수한다.
- Chart는 Data Alternative를 제공한다.
- Decorative Asset은 접근성 트리에서 제외한다.

### 19.11 Documentation

새 Asset Policy, Icon Set 또는 Asset Class를 추가하면 반드시 다음을 갱신한다.

- `VISUAL_ASSET_GUIDE.md`
- `DESIGN_SYSTEM.md`
- `BRAND_GUIDE.md`
- `CHANGELOG.md`

기능 우선순위가 바뀌면 `TODO.md`도 갱신한다.

### 19.12 Work Completion Report

완료 보고에는 다음을 포함한다.

- Added, Replaced, Removed Asset
- Directory와 Filename
- Original/Optimized Size
- Format과 Dimensions
- Usage Pages
- Accessibility Decision
- Browser/Responsive QA
- Documentation Update
- Remaining Risk

### 19.13 Prohibited Implementation

- 임시 Placeholder를 승인 Asset처럼 배포
- Missing Image를 CSS로 숨김
- 404 Asset을 빈 배경으로 방치
- Logo를 Screenshot으로 사용
- PNG Photo를 근거 없이 배포
- Icon Font 신규 도입
- 여러 Icon Library 혼합
- 라이선스 불명 Asset 사용
- Production URL에 `example.com` Metadata 유지

---

## 20. Final Governance

### 20.1 Approval Flow

```text
Asset Request
  ↓
Existing Asset Search
  ↓
Classification & Brief
  ↓
Rights Review
  ↓
Visual Draft
  ↓
Brand Review
  ↓
Technical Optimization
  ↓
Accessibility Review
  ↓
Responsive & Browser QA
  ↓
Final Approval
  ↓
Repository Merge
  ↓
Registry Active
  ↓
Post-release Audit
```

### 20.2 Final Approval Questions

새 Asset 추가 전에 모두 `YES`여야 한다.

1. 기존 Asset으로 해결할 수 없는가?
2. Asset의 정보 역할이 명확한가?
3. Brand Keyword와 일치하는가?
4. 사용 권한이 확인되었는가?
5. 올바른 Class와 Directory에 있는가?
6. Filename 규칙을 준수하는가?
7. Format, Size와 Ratio가 적절한가?
8. 최적화 전후 품질이 검수되었는가?
9. 접근성 대안이 정의되었는가?
10. Desktop, Tablet과 Mobile에서 안정적인가?
11. Chrome과 Safari 계열에서 정상적인가?
12. SEO와 Social Preview가 필요한 경우 준비되었는가?
13. Asset Registry가 갱신되었는가?
14. 문서와 Changelog가 갱신되었는가?
15. Rollback과 Replacement 경로가 있는가?

### 20.3 Exception Process

예외 요청은 다음을 포함한다.

- Policy 항목
- Business Reason
- User Impact
- Performance/Accessibility Risk
- Mitigation
- Owner
- Expiration Date
- Approver

만료일 없는 영구 예외는 허용하지 않는다.

### 20.4 Quarterly Audit

분기별로 다음을 점검한다.

- Unused Asset
- Duplicate Asset
- Oversized Raster
- Missing Alt
- Broken Reference
- Deprecated Asset Usage
- License Expiration
- OG Preview
- Naming Violation
- Format Modernization Opportunity

### 20.5 Annual Review

연 1회 Design Bible, Brand Strategy와 Product Direction 변화에 맞춰 이 문서를 검토한다. 외부 Design System 사례는 참고하되 EQUIV의 현재 규모와 운영 역량보다 복잡한 Process를 무조건 도입하지 않는다.

### 20.6 Governance Principle

좋은 Asset Governance는 파일을 많이 관리하는 체계가 아니다. 필요한 Asset만 승인된 방식으로 사용하고, 누구나 출처·상태·용도·교체 경로를 이해할 수 있게 만드는 체계다.

---

## Appendix A. Asset Registry Schema

| Field | Required | 설명 |
|---|---|---|
| Asset ID | Yes | 영구 식별자 |
| Filename | Yes | Delivery Filename |
| Class | Yes | Logo, Icon, Photography 등 |
| Status | Yes | Draft, Active, Deprecated 등 |
| Owner | Yes | 관리 책임자 |
| Creator/Source | Yes | 제작자 또는 출처 |
| License | Conditional | 권리와 만료 |
| Created Date | Yes | 최초 생성일 |
| Updated Date | Yes | 최근 변경일 |
| Version | Yes | Registry Version |
| Dimensions | Raster | Width×Height |
| Aspect Ratio | Raster | Display Ratio |
| Format | Yes | SVG, WebP 등 |
| File Size | Yes | Byte/KB |
| Alt Decision | Yes | Meaningful/Decorative |
| Default Alt | Conditional | CMS 기본 제안 |
| Usage | Yes | Page/Component |
| Replaces | Conditional | 교체 전 Asset |
| Replacement | Deprecated | 새 Asset |
| Approval | Yes | Reviewer/Date |
| Notes | Optional | 예외와 제약 |

### Current Production Registry

| Asset ID | Path | Class | Status | Format | Size | Usage | Accessibility |
|---|---|---|---|---|---:|---|---|
| EQA-LOGO-001 | `images/logos/the-equiv-mark.svg` | Logo Symbol | Active | SVG | 226B | Header, Footer, About, Modal | Lockup Link Name 또는 Decorative |
| EQA-FAV-001 | `images/logos/favicon.svg` | Favicon | Active | SVG | 250B | All Pages | Browser UI |
| EQA-BG-001 | `images/backgrounds/hero-city.webp` | Hero Background | Active | WebP | 106,764B | HOME Hero, Default OG Preview | Hero Label로 Context 제공 |

---

## Appendix B. Asset Request Template

```markdown
# Asset Request

- Request ID:
- Requester:
- Owner:
- Date:
- Required Date:
- Asset Class:
- Business Objective:
- User Context:
- Placement:
- Existing Asset Search Result:
- Required Dimensions/Ratio:
- Required Formats:
- Content/Subject:
- Must Include:
- Must Avoid:
- Accessibility Intent:
- Rights/License:
- Responsive Variants:
- SEO/Social Need:
- Approvers:
```

---

## Appendix C. Review Record Template

```markdown
# Asset Review Record

- Asset ID:
- Filename:
- Version:
- Visual Review:
- Brand Review:
- Rights Review:
- Technical Review:
- Accessibility Review:
- Responsive Review:
- Browser Review:
- Optimization Before:
- Optimization After:
- Exceptions:
- Decision: Approved / Changes Required / Rejected
- Reviewer:
- Approver:
- Date:
```

---

## Appendix D. Deprecation Notice Template

```markdown
# Asset Deprecation

- Asset ID:
- Deprecated File:
- Reason:
- Replacement Asset:
- New Usage Prohibited From:
- Migration Owner:
- Known References:
- Migration Deadline:
- Removal Date:
- Rollback Plan:
- Approver:
```

---

## Appendix E. Format Decision Tree

```text
Is it a logo, icon, simple chart or simple illustration?
  ├─ Yes → SVG
  └─ No
      ↓
Is it photography or a complex raster image?
  ├─ Yes → AVIF + WebP, or WebP
  └─ No
      ↓
Does it require raster transparency?
  ├─ Yes → WebP or optimized PNG fallback
  └─ No → WebP/JPEG according to support strategy
```

---

## Appendix F. Alt Text Decision Tree

```text
Does the asset convey information?
  ├─ No → Decorative: alt="" or aria-hidden="true"
  └─ Yes
      ↓
Is the same information already fully expressed by adjacent text?
  ├─ Yes → Usually decorative; avoid duplicate announcement
  └─ No
      ↓
Is it a control?
  ├─ Yes → Name the control action, hide the graphic
  └─ No
      ↓
Can a short sentence convey the purpose?
  ├─ Yes → Concise alt text
  └─ No → Short alt + adjacent long description/data alternative
```

---

## Appendix G. Pull Request Checklist

```markdown
## Visual Asset Change

- [ ] Existing assets were searched
- [ ] Asset class and owner are defined
- [ ] Rights are confirmed
- [ ] Naming and directory rules pass
- [ ] SVG or raster optimization is complete
- [ ] Alt/decorative decision is documented
- [ ] Desktop, tablet and mobile crops are reviewed
- [ ] Chrome/Safari compatibility is reviewed
- [ ] No broken references or duplicate files
- [ ] Registry and Changelog are updated
- [ ] Deprecated assets have a migration plan
```

---

## Appendix H. Operational DO / DON'T

### DO

- 목적이 분명한 Asset만 추가한다.
- Existing Asset과 Component를 먼저 재사용한다.
- Source, License, Owner와 Status를 기록한다.
- SVG와 Modern Raster Format을 우선한다.
- 접근성과 성능을 같은 승인 단계에서 검토한다.
- Replacement와 Removal을 동일한 변경에서 관리한다.
- 실제 Browser와 Device Width에서 Crop을 확인한다.
- 문서와 코드를 함께 변경한다.

### DON'T

- Asset로 빈 공간을 채우지 않는다.
- Page마다 다른 Icon Style을 만들지 않는다.
- 사진 위에 읽기 어려운 Text를 배치하지 않는다.
- Filename으로 승인 상태와 Version을 관리하지 않는다.
- Source File을 Public Web Directory에 배포하지 않는다.
- 저작권과 초상권이 불명확한 파일을 사용하지 않는다.
- 자동 생성 Alt를 검수 없이 사용하지 않는다.
- Deprecated File을 삭제만 하고 참조를 남기지 않는다.

---

## Appendix I. PM Release Note

Asset Release는 “이미지 교체”로 기록하지 않는다. 다음 영향을 Release Scope에 포함한다.

- Brand Consistency
- Page Weight
- Largest Contentful Paint
- Layout Shift
- Accessibility
- SEO/Social Cache
- License
- Rollback
- Cross-page Migration

PM은 Asset 요청 시 제작 완료일이 아니라 Production 승인 완료일을 일정 기준으로 사용한다.

---

## Appendix J. Final QA Summary

Production 승인 전 다음 결과를 한 문장씩 보고한다.

1. Asset Purpose
2. Reuse Decision
3. Brand Review
4. Rights Review
5. Format and Optimization
6. Accessibility
7. Responsive Crop
8. Browser Compatibility
9. Performance Impact
10. SEO/Social Impact
11. Registry and Documentation
12. Rollback and Lifecycle

이 12개 결과 중 하나라도 확인되지 않으면 Asset은 `Approved`가 아니라 `In Review` 상태다.
