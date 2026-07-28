# EQUIV Website Release Checklist

Version: v1.0.0

Status:

- [x] Draft
- [ ] Release Candidate
- [ ] Ready for Release
- [ ] Released

Release Owner:

Release Date:

Last Updated: 2026-07-28

---

## Purpose

이 문서는 EQUIV 홈페이지를 Release하기 전에 기능, 디자인, 브랜드, 성능, SEO와 운영 준비를 최종 점검하기 위한 Release Gate 실행 문서이다.

모든 필수 항목이 완료되어야 Release를 승인한다.

## Governance Authority

이 체크리스트는 Release별 점검 결과를 기록하는 실행 문서이다.

- 세부 QA 기준과 Release Gate의 Single Source of Truth는 `DESIGN_QA_GOVERNANCE.md`를 따른다.
- Release 순서, Version과 승인 절차는 `EQUIV_AI_OPERATING_MANUAL.md` Chapter 6을 따른다.
- 실제 변경 이력은 `CHANGELOG.md`, 보류 항목은 `TODO.md`에 기록한다.
- 이 문서의 완료만으로 Production Release 권한이 부여되지 않는다. Project Owner의 명시적 승인이 필요하다.

---

## Release Principle

Release는 “기능이 완성되었다”가 아니라 “고객이 사용해도 될 수준이다”를 의미한다.

모든 필수 수정과 검증이 완료된 이후 Release를 진행하며, 새로운 기능 추가는 Release 이후 별도 Sprint에서 관리한다.

---

## 1. Brand Review

- [ ] Hero Copy 최종 확인
- [ ] Brand Message 일관성 확인
- [ ] About EQUIV 검토
- [ ] Premium Tone 유지
- [ ] 오탈자 확인
- [ ] 한글 표현 최종 확인
- [ ] Footer 내용 확인

---

## 2. UI Review

- [ ] Typography
- [ ] Heading Size
- [ ] Body Text
- [ ] Line Height
- [ ] White Space
- [ ] Card Alignment
- [ ] Button Size
- [ ] Button Position
- [ ] Hover Effect
- [ ] Icon Size
- [ ] Divider
- [ ] Section Spacing
- [ ] Mobile Layout
- [ ] Tablet Layout
- [ ] Desktop Layout

---

## 3. Functional Review

- [ ] 모든 버튼 정상 동작
- [ ] Contact Form 정상 제출
- [ ] Navigation 정상 이동
- [ ] Anchor Link 확인
- [ ] Modal 정상 동작
- [ ] Scroll Animation 확인
- [ ] Back To Top 확인
- [ ] Console Error 없음
- [ ] Broken Link 없음

---

## 4. Responsive Review

### Desktop

- [ ] 1920px
- [ ] 1440px
- [ ] 1200px

### Laptop

- [ ] 1024px

### Tablet

- [ ] 768px

### Mobile

- [ ] 430px
- [ ] 390px
- [ ] 375px
- [ ] 360px

모든 화면에서 레이아웃과 주요 사용자 흐름이 정상인지 확인한다.

---

## 5. Browser Review

- [ ] Chrome
- [ ] Edge
- [ ] Safari
- [ ] Firefox

브라우저별 표시, 상호작용과 폰트 렌더링 차이를 확인한다.

---

## 6. Performance

- [ ] 이미지 최적화
- [ ] Lazy Loading
- [ ] Font Loading
- [ ] CSS 최적화
- [ ] JavaScript 최적화
- [ ] Lighthouse 점검
- [ ] PageSpeed 확인

---

## 7. SEO

- [ ] Title
- [ ] Description
- [ ] Canonical
- [ ] Open Graph Title
- [ ] Open Graph Description
- [ ] `og:image`
- [ ] `og:url`
- [ ] favicon
- [ ] `robots.txt`
- [ ] `sitemap.xml`
- [ ] Structured Data 적용 여부 확인
- [ ] URL 구조 확인

---

## 8. Accessibility

- [ ] Heading Structure
- [ ] Alt Text
- [ ] Contrast
- [ ] Keyboard Navigation
- [ ] Focus Style
- [ ] Link Visibility
- [ ] Form Label
- [ ] ARIA 속성

---

## 9. Security

- [ ] HTTPS 확인
- [ ] 외부 링크 확인
- [ ] 개인정보 안내 확인
- [ ] Contact Form 검토

---

## 10. Content Review

- [ ] 모든 문장 최종 확인
- [ ] 문체 일관성
- [ ] 브랜드 톤 유지
- [ ] 불필요한 영어 제거
- [ ] Placeholder 제거
- [ ] 테스트 데이터 제거
- [ ] `example.com` 제거

---

## 11. Repository Review

- [ ] `CHANGELOG.md` 업데이트
- [ ] `TODO.md` 업데이트
- [ ] AI Operating Manual 최신 상태 확인
- [ ] Version Tag 적용
- [ ] Git Commit 정리
- [ ] Release Branch 확인

---

## 12. Deployment Review

- [ ] 운영 도메인 연결
- [ ] DNS 확인
- [ ] SSL 적용
- [ ] GitHub 배포 확인
- [ ] 실제 URL 확인
- [ ] Open Graph 공유 확인
- [ ] 모바일 실기기 확인

---

## 13. Final Approval

모든 필수 항목이 완료되었는가?

- [ ] YES
- [ ] NO

Release 승인

Project Manager

______________________

Date

______________________

---

## Post Release Review

- [ ] 홈페이지 정상 접속
- [ ] Contact 정상 동작
- [ ] 모바일 접속 확인
- [ ] Open Graph 공유 확인
- [ ] 검색엔진 메타 확인
- [ ] Console Error 확인
- [ ] 사용자 피드백 수집

---

## Release Decision

- [ ] Release Approved
- [ ] Hold Release
- [ ] Rollback Required

---

## Notes

Release Checklist는 EQUIV 홈페이지의 최종 품질 보증 기록이다.

모든 필수 항목과 승인 절차를 만족한 경우에만 Release를 진행한다.

Release 이후 발견되는 개선 사항은 `CHANGELOG.md`와 `TODO.md`를 통해 다음 Sprint에서 관리한다.
