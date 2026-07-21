# EQUIV Preliminary Valuation Model Specification

## Document Information

- Korean Name: EQUIV 기업가치 예비진단 모델
- Version: `1.0-public`
- Engine Version: `EQUIV Valuation Engine v1.5`
- Status: `PUBLIC_RELEASE`
- Public Release Approved: `true`
- Purpose: 대표가 예비 기업가치와 주요 Value Driver를 이해하고 전문 상담으로 이어지는 공개용 Advisory Experience
- Public Page: `business-valuation.html`

## Safety and Access Policy

본 기능은 정식 기업가치평가가 아닌 공개용 예비진단 서비스이다.

- 공개 진입점은 Business Valuation Hero의 단일 CTA로 제한한다.
- HOME과 Business Valuation 페이지 하단에는 동일 예비진단 CTA를 추가하지 않는다.
- 사용자 화면에 내부 테스트, 개발 버전과 Calibration 상태를 표시하지 않는다.
- 단일 확정금액이 아니라 예비 지분가치 범위만 표시한다.
- 계산이 불가능하거나 신뢰도가 낮으면 금액을 표시하지 않고 `Additional Review`로 제한한다.
- Reverse DCF, 희망가격, 확정 매각가격, 세무상 평가액, 수수료와 성공보수는 입력하거나 산출하지 않는다.
- 모든 계산은 브라우저 안에서 수행하며 입력값과 결과를 저장하거나 전송하지 않는다.

## File Structure

- `business-valuation.html`: 공개 Hero CTA와 Modal Shell
- `valuation-prototype.html`: Business Valuation 페이지로 연결하는 호환 안내 페이지
- `js/valuation-config.js`: 비공개 내부 배수, 가중치, 보정값, 범위 제한
- `js/valuation-engine.js`: 검증, 분류, 정상화, EV와 지분가치 범위 계산
- `js/valuation-modal.js`: 단계별 입력, 접근성, 결과 렌더링, 초기화
- `css/style.css`: 기존 디자인 시스템 기반 공개용 Premium UI

## Input Flow

1. 업종
2. 최근 3개년 매출과 영업이익, 선택 EBITDA·감가상각비·예상 실적
3. 금융부채, 현금, 사업용·비영업 자산과 정상화 항목
4. 매출 안정성, 반복 매출, 고객 집중도, 대표자 의존도, 자료 준비도
5. 경쟁력과 예비진단 Disclaimer 확인
6. 자동 분류와 예비 결과

모든 금액 입력 단위는 억원이다.

## Core Competitiveness Input

모든 업종은 동일한 `보유 경쟁력` 입력 UI와 2열 체크박스 구조를 사용한다. 업종별 전용 체크박스나 추가 입력단계를 만들지 않고, 선택한 공통 항목을 업종 특성에 맞게 내부적으로 해석한다.

공통 선택항목:

- 기술·특허·노하우
- 브랜드
- 인허가 또는 진입장벽
- 장기계약
- 유통망·판매채널
- 특별한 경쟁력 없음

`특별한 경쟁력 없음`은 다른 항목과 상호 배타적으로 동작한다. 해당 항목을 선택하면 다른 경쟁력 선택을 자동 해제하고, 다른 경쟁력을 선택하면 `특별한 경쟁력 없음`을 자동 해제한다. Validation에서도 동시 선택을 허용하지 않는다.

업종별 핵심 해석:

| 업종 | 기술·특허·노하우 | 유통망·판매채널 |
|---|---|---|
| 제조업 | 생산기술, 공정기술, 특허, 설계능력, 제조 노하우 | 대리점망, 납품망, 판매채널, 유통 네트워크 |
| 식품기업 | 제조기술, 레시피, 공정 노하우, 품질관리 역량 | 대형마트, 온라인몰, 프랜차이즈, 납품망 |
| 유통업 | 물류관리 시스템, 재고관리 노하우, ERP·운영체계 | 거래처 기반, 전국 유통망, 독점 판매채널, 온라인 채널 |
| 서비스업 | 운영 노하우, 표준화된 서비스 체계, 업무 프로세스 | 가맹망, 제휴채널, 영업 네트워크 |
| IT·소프트웨어 | AI 기술, SaaS, 플랫폼, 독자 알고리즘, 핵심 소스코드, 데이터, 기술개발 역량 | 리셀러, 파트너사, 앱마켓, 기업고객 채널 |

브랜드, 인허가 또는 진입장벽, 장기계약은 선택 업종의 사업구조와 시장 특성에 따라 해당 기업의 브랜드 인지도·고객 신뢰, 사업 허가·인증·진입장벽, 계약 기반 매출 안정성으로 해석한다. 자산 중심 기업도 동일한 공통 UI를 사용하되 기업가치 산출은 기존 Asset-Based Model의 자산가치와 수익성을 우선한다.

IT·소프트웨어 업종의 AI, SaaS, 플랫폼, 알고리즘, 클라우드, API, 소스코드와 기술인력은 `기술·특허·노하우` 안에서 해석한다. Sprint 11.7에서는 별도 입력이나 업종 배수 변경 없이, 기존 공통 입력조건을 모두 충족한 경우에만 Technology Business Premium으로 성장성과 기술 기반 무형가치를 제한적으로 반영한다.

## Optional Numeric Input Normalization

계산 엔진을 실행하기 전에 UI 계층에서 계산용 입력 복사본을 생성하고 선택 숫자값을 정규화한다. 사용자가 실제로 입력했는지 여부는 원본 입력 상태에 보존하여 결과 신뢰도와 분리한다.

다음 선택 금액 항목은 빈 문자열, `null`, `undefined`인 경우 계산용 입력에서 `0`으로 처리한다.

- 사업용 자산 가치
- 비영업용 부동산 시가
- 비영업 금융자산
- 우발채무 등 별도 조정 부채
- 정상화 가능한 비용
- 일회성 이익

EBITDA, 감가상각비와 예상 실적은 입력 존재 자체가 계산 기준 또는 기업 분류에 영향을 주므로, 빈칸과 명시적인 `0`을 모두 미입력 상태로 정규화한다. 계산상 영향은 `0`과 동일하지만 입력 근거가 있는 것으로 표시하지 않는다. EBITDA와 감가상각비가 미입력이면 기존 원칙에 따라 영업이익을 사용하고, 예상 실적이 미입력이면 예상 실적 근거를 요구하지 않는다.

일반 기업은 사업용 자산 가치가 비어 있어도 `0`으로 계산을 계속한다. Asset-Based Model은 기존 분류 원칙에 따라 사업용 자산 가치가 `0`이거나 미입력인 경우 추가 자료 검토 대상으로 처리한다.

선택 금액 항목의 빈칸 자체는 Additional Review 사유로 사용하지 않는다. 최근 사업연도 매출·영업이익, 금융부채, 현금과 필수 사업 특성 등 필수값은 기존 Validation을 유지한다.

## Company Classification

분류 우선순위:

1. Additional Review
2. Asset-Based
3. High-Growth
4. Turnaround
5. Temporary Loss
6. Stable Profit

### Stable Profit

- 정상화 최근 이익이 양수
- 최근 3개년 중 2개년 이상 흑자
- 정상화 이익 × 조정 업종배수로 영업가치 산출

### Temporary Loss

- 최근 연도 적자
- 직전 2개 연도 모두 흑자
- `3년 가중이익`과 `최근 정상화 이익` 중 큰 값을 인정
- 최근 3년 최고 이익을 테스트 상한으로 적용

### Turnaround

- 최근 연도 적자
- 올해 예상이익이 양수이며 근거 수준 입력
- 과거 정상화 이익 40%와 할인된 예상이익 60% 반영

### High-Growth

- 최근 이익이 적자 또는 낮은 마진
- 2개 구간 연환산 매출성장률이 테스트 기준 이상
- 기술·브랜드·인허가·계약 등 경쟁력 입력
- 매출가치 50%, 이익가치 20%, 전략가치 30%의 테스트 가중치 적용

### Asset-Based

- `자산 중심 기업` 업종 선택
- 대표 적용 예시: 임대업, 호텔, 골프장, 물류창고, 기타 자산 중심 운영기업
- 식별 가능 사업용 자산 시가 입력 필수
- 흑자기업은 Income 70% / Asset 30%
- 저수익기업은 Income 30% / Asset 70%
- 기존 혼합가치 산출 후 사업용 자산가치의 40%를 Asset Value Adjustment로 추가 반영

### Additional Review

다음 조건에서는 금액 범위를 표시하지 않는다.

선택 금액 항목이 비어 있다는 사실만으로는 Additional Review를 적용하지 않는다.

- 필수값 누락 또는 잘못된 숫자
- 정상화 가능 비용이 최근 매출의 테스트 상한 초과
- 일반 분류요건을 충족하지 못함
- 자산형 모델에 필요한 사업용 자산가치 누락
- 금융부채가 테스트 산출 영업가치를 크게 초과
- 순차입금 조정 후 양수 지분가치 범위 산출 불가

## Internal Calibration Configuration

아래 값은 EQUIV 내부 Calibration 기준으로 관리하며 사용자 화면에는 배수와 계산식을 표시하지 않는다.

| Category | Earnings Multiple Low/Base/High | Revenue Multiple Low/Base/High |
|---|---:|---:|
| 제조업 | 3.5 / 4.5 / 5.5 | 0.45 / 0.65 / 0.85 |
| 식품 | 3.0 / 4.0 / 5.0 | 0.40 / 0.60 / 0.80 |
| 유통 | 3.0 / 4.0 / 5.0 | 0.35 / 0.55 / 0.75 |
| 서비스 | 3.0 / 4.0 / 5.0 | 0.35 / 0.55 / 0.75 |
| IT·소프트웨어 | 4.0 / 5.5 / 7.0 | 0.80 / 1.20 / 1.60 |
| 자산형 (임대업·호텔·골프장·물류창고 등) | 2.5 / 3.5 / 4.5 | 0.25 / 0.40 / 0.55 |
| 기타 | 서비스 기준 일반 모델 참조 | 서비스 기준 일반 모델 참조 |

## Industry Structure and Routing

Business Valuation의 업종 선택은 `제조업 / 식품 / 유통 / 서비스 / IT·소프트웨어 / 자산형 (임대업·호텔·골프장·물류창고 등) / 기타`의 7개 체계로 운영한다. Calibration과 실무 검증이 완료된 대표 산업군만 독립 선택지로 유지하고 특수업종을 불필요하게 세분화하지 않는다. 자산형은 영업이익보다 사업용 자산가치가 기업가치에 큰 영향을 미치는 사업모델을 의미하며 내부 Key는 `asset`을 유지한다.

### Other Industries

기타 업종은 Additional Review로 자동 차단하지 않고 서비스업 기준의 기존 일반 평가모델을 참조한다. UI 계산 어댑터에서 일반 모델로 전달하며 엔진의 배수, 분류식과 가치 산식은 변경하지 않는다.

기타에는 건설업, 운송업, 물류업, 병원, 교육, 호텔, 여행, 문화콘텐츠, 엔터테인먼트와 기타 특수업종이 포함된다. 결과는 일반 모델 기반의 예비 범위이며 실제 거래가치는 업종 특성, 사업모델, 면허, 인허가, 자산구조와 거래관행에 따라 달라질 수 있음을 입력 및 결과 화면에서 안내한다. 업종별 상세 기업가치와 거래 전략은 EQUIV 상담을 통해 검토한다.

기타 업종도 예비 기업가치와 예상 지분가치를 정상적으로 산출하고 기존 신뢰도 알고리즘을 그대로 적용한다. 검증되지 않은 특수업종이라는 이유만으로 결과를 숨기거나 신뢰도를 임의로 낮추지 않으며, 일반 모델의 적용 범위와 전문 상담 필요성을 안내문으로 설명한다.

기타 테스트 설정:

- High-Growth 매출 CAGR 기준: 20%
- Low Profit Margin 기준: 3%
- 예상실적 인정률: Strong 70% / Partial 60% / Limited 50%
- Temporary Loss 역사 가중치: 20% / 30% / 50%
- Turnaround 가중치: Historical 40% / Forecast 60%
- High-Growth 가중치: Revenue 50% / Earnings 20% / Strategic 30%
- Asset disposal discount: 10%
- Asset Value Adjustment: 사업용 자산가치의 40%
- 일반 범위 제한: Base 대비 Low 최대 -20% / High 최대 +25%
- High-Growth·Asset 예외 범위: Base 대비 Low 최대 -30% / High 최대 +35%
- 정상화 비용 테스트 상한: 최근 매출의 15%
- 과도한 금융부채 기준: 테스트 영업가치 상단의 150%

기업 특성 배수 조정값은 `valuation-config.js`의 Growth, Recurring Revenue, Customer Concentration, Owner Dependency, Competitive Strength, Legal Readiness 설정을 따른다.

## EQUIV Scale Premium

EQUIV Scale Premium은 기존 업종 배수와 기업 특성 Adjustment를 변경하지 않고, Stable Profit Model의 영업가치 산출이 완료된 이후 기업 규모에 따른 시장 프리미엄을 반영하는 내부 보정계수이다. Temporary Loss, Turnaround, High-Growth와 Asset-Based Model에는 적용하지 않는다.

적용 순서:

1. 기존 업종 배수 적용
2. 기존 기업 특성 Adjustment 적용
3. 예비 영업가치 산출
4. EQUIV Scale Premium 적용
5. 금융부채·현금·비영업자산 등 재무구조 반영
6. 최종 범위 제한

영업이익 기준 Premium은 최근 사업연도 영업이익을 사용한다.

| 최근 사업연도 영업이익 | Premium |
|---:|---:|
| 5억원 미만 | 0% |
| 5억원 이상 | +3% |
| 10억원 이상 | +7% |
| 20억원 이상 | +12% |
| 30억원 이상 | +18% |
| 50억원 이상 | +25% |

| 최근 사업연도 매출 | Premium |
|---:|---:|
| 300억원 이상 | +5% |
| 500억원 이상 | +10% |
| 1,000억원 이상 | +15% |

영업이익 Premium과 매출 Premium은 동시에 적용할 수 있으며 총 Premium은 +35%로 제한한다. 이 보정계수는 결과 화면에 계산식이나 적용률로 공개하지 않고 내부 알고리즘으로만 사용한다. 모든 기준값은 실제 사례와 비교하여 지속적으로 보정한다.

## EQUIV Distribution Revenue Contribution Model

EQUIV Distribution Revenue Contribution Model은 영업이익 기반 가치만으로 설명하기 어려운 유통기업의 매출 규모, 유통망, 거래 안정성과 시장 기반을 일부 반영하는 유통업 전용 평가 로직이다. Sprint 11.3의 Distribution Premium은 폐지하며 기존 유통업 Earnings Multiple, Revenue Multiple과 EQUIV Scale Premium 기준은 변경하지 않는다.

현재 Calibration 가중치:

| 구성요소 | 가중치 |
|---|---:|
| 영업이익 기반 가치 | 90% |
| 매출 기반 가치 | 10% |

향후 실제 사례 결과에 따라 `85:15` 또는 `80:20`을 검토할 수 있도록 후보 가중치를 설정 파일에 분리해 둔다. 현재 엔진은 `90:10`만 사용한다.

적용 대상:

- 업종: 유통
- 적용 모델: Stable Profit, Temporary Loss, Turnaround
- 비적용 업종: 제조업, 식품·소비재, 서비스, IT·소프트웨어, 자산 중심 기업
- High-Growth Model은 기존에 매출·이익·전략가치를 혼합하므로 Revenue Contribution을 중복 적용하지 않는다.

적용 순서:

1. 기존 유통업 Earnings Multiple로 영업이익 기반 가치 산출
2. 기존 유통업 Revenue Multiple로 매출 기반 가치 산출
3. 영업이익 기반 가치 90%와 매출 기반 가치 10% 혼합
4. 기존 기업 특성 Adjustment 반영
5. EQUIV Scale Premium 적용(해당 시)
6. 금융부채·현금·비영업자산 등 재무구조 반영
7. 최종 범위 제한

구현에서는 각 가치 구성요소에 대응하는 기존 Adjustment 차이를 혼합가치에 반영한다. Revenue Contribution 가중치와 계산식은 결과 화면에 공개하지 않고 내부 알고리즘으로만 사용한다. 실제 거래사례를 통한 Calibration 기록은 `EQUIV_CALIBRATION_LOG.md`에서 관리한다.

## EQUIV Technology Business Premium

Technology Business Premium은 IT·소프트웨어 기업의 기술력, 반복매출, 장기계약과 고객 기반 등 정량화하기 어려운 무형가치를 일부 반영하는 업종 전용 내부 보정계수이다. 기존 IT 업종 배수, 기업 특성 Adjustment, Scale Premium과 입력 UI는 변경하지 않는다.

적용 조건은 다음 네 가지를 모두 충족해야 한다.

- 업종: IT·소프트웨어
- 보유 경쟁력: `기술·특허·노하우` 선택
- 보유 경쟁력: `장기계약` 선택
- 반복매출 비중: 50% 이상

현행 공통 UI는 반복매출을 `40~70%`와 `70% 이상` 구간으로 입력받는다. 신규 입력항목을 만들지 않는 원칙에 따라 두 구간을 50% 이상 후보 구간으로 운영상 해석하되, 기술·특허·노하우와 장기계약 조건을 모두 충족할 때만 Premium을 적용한다. 실제 반복매출이 40~49%인 사례는 향후 상담과 실제 사례 Calibration에서 별도로 확인한다.

| 조건 | 적용률 |
|---|---:|
| 필수조건 충족 | +10% |
| 필수조건 충족 + 최근 3년 매출 성장 또는 급성장 | +15% |

매출 성장은 공통 입력의 성장 선택값을 사용하고, 급성장은 최근 3개년 매출 CAGR이 기존 High-Growth 분류 기준 이상인지 함께 확인한다.

적용 순서:

1. 기존 평가모델로 기본 기업가치 산출
2. 기존 기업 특성 Adjustment 반영
3. EQUIV Scale Premium 적용(해당 시)
4. Technology Business Premium 적용(IT·소프트웨어만)
5. 금융부채·현금·비영업자산 등 재무구조 반영
6. 최종 범위 제한

AI, SaaS, SI, 플랫폼 등을 직접 구분하거나 별도 IT 전용 입력을 추가하지 않는다. 적용률과 계산식은 결과 화면에 공개하지 않고, IT 업종 결과에는 무형가치와 전문 상담 필요성을 설명하는 안내문만 표시한다. 모든 기준은 실제 사례와 비교하여 지속적으로 Calibration한다.

## EQUIV Asset Value Adjustment

Asset Value Adjustment는 자산형 기업의 기존 Asset-Based Model 산출가치에 사업용 자산가치의 일부를 추가 반영하는 내부 Value Driver이다. 기존 자산형 업종 배수, Income·Asset 혼합가중치, Asset disposal discount와 기업 특성 Adjustment는 변경하지 않는다.

적용 대상과 초기 기준:

- 업종: 자산형
- 적용 모델: Asset-Based Model
- 대상 정보: 사업용 자산 가치
- 초기 반영률: 40%
- 비적용 업종: 제조업, 식품, 유통, 서비스, IT·소프트웨어와 기타

적용 순서:

1. 기존 Asset-Based Model로 영업성과와 할인된 사업용 자산의 혼합가치 산출
2. 사업용 자산가치의 40%를 Asset Value Adjustment로 가산
3. 기존 재무구조 조정 반영
4. Asset-Based Model의 기존 범위 제한 적용

사업용 자산을 전액 가산하지 않는 이유는 영업활동에 사용되는 자산이 기존 산출가치에도 반영되어 있어 전액 반영 시 이중계산 위험이 있기 때문이다. 40%는 내부 Calibration 값이며, 실제 자산가치는 부동산, 시설, 입지, 운영현황과 전문 실사를 통해 확인한다. 조정률과 계산식은 결과 화면에 공개하지 않고 자산형 결과 안내문으로 적용 철학만 설명한다.

## Result Structure

### Display Rounding Rule

계산 엔진의 내부 산출 정밀도는 변경하지 않고 결과 화면에서만 금액을 다음과 같이 표시한다.

- 10억원 미만: 소수 첫째 자리까지 표시
- 10억원 이상: 1억원 단위로 반올림하여 정수 표시
- Low–High 범위 구조는 그대로 유지

예시: `3.8억원 ~ 5.4억원`, `34억원 ~ 53억원`, `265억원 ~ 398억원`

### Result Items

- 예비 지분가치 Low–High
- 중심 검토 범위
- 적용 평가모델
- 계산 기준: EBITDA / 추정 EBITDA / 영업이익
- 가치에 긍정적인 요소
- 추가 검토가 필요한 요소
- Strategic Comment
- 고정 Disclaimer
- 초기화 및 다시 계산하기
- EQUIV 거래전략 상담 링크

## Disclaimer

> 예비진단 안내
>
> 본 결과는 현재 입력정보를 바탕으로 산출한 참고용 예비 기업가치 범위입니다. 정식 기업가치평가 또는 실제 거래가격을 의미하지 않으며, 산업환경, 거래구조, 실사 결과와 인수자의 전략에 따라 달라질 수 있습니다.

## Values Requiring Ongoing EQUIV Approval

- 업종 분류 체계와 업종별 EV/EBITDA 배수
- 기타 업종 일반 모델의 적용 적정성과 상담 전환 기준
- 고성장 업종별 매출배수
- 성장·반복매출·고객집중도·대표자 의존도별 보정계수
- 기술·브랜드·인허가 등 경쟁력 보정계수
- 재무·세무·법률자료 준비도 할인
- Temporary Loss 이익 상한과 역사 가중치
- Turnaround 예상실적 인정률과 가중치
- High-Growth 구성요소와 가중치
- Asset-Based 수익·자산 가중치와 처분 할인
- 순차입금 및 우발채무 조정 기준
- EQUIV Scale Premium의 영업이익·매출 구간과 최대 적용률
- EQUIV Distribution Revenue Contribution의 영업이익·매출 가중치
- Technology Business Premium의 적용조건, 반복매출 구간 해석과 +10%·+15% 적용률
- Asset Value Adjustment의 사업용 자산가치 반영률 40%와 기존 혼합가치 중복 반영 적정성
- 결과 범위 제한과 Additional Review 임계값
- Strategic Comment 생성 기준

## Actual Case Validation Form

| Field | Test Input / Actual Case |
|---|---|
| Case ID | |
| Industry | |
| Valuation Date | |
| Year -3 Revenue / Operating Profit | |
| Year -2 Revenue / Operating Profit | |
| Latest Revenue / Operating Profit | |
| EBITDA / D&A | |
| Forecast Revenue / Profit / Evidence | |
| Debt / Cash | |
| Operating Asset Market Value | |
| Non-operating Assets | |
| Normalizable Expenses / One-off Income | |
| Revenue Stability | |
| Recurring Revenue | |
| Customer Concentration | |
| Owner Dependency | |
| Competitive Strength | |
| Legal and Accounting Readiness | |
| Engine Classification | |
| Preliminary Low / Base / High | |
| EQUIV Existing Valuation Range | |
| Difference and Cause | |
| Required Multiple Adjustment | |
| Required Weight Adjustment | |
| Reviewer / Review Date | |

실제 사례를 지속적으로 기록하고 모델별 편향, 범위 폭, 예외 분류와 조정 필요 원인을 정기적으로 검토한다.

## Engine Version History

| Engine Version | Date | Changes |
|---|---|---|
| `v1.5` | 2026-07-16 | 자산형 기업 Asset Value Adjustment 40% 추가 |
| `v1.4` | 2026-07-16 | IT·소프트웨어 Technology Business Premium 추가 |
| `v1.3` | 2026-07-15 | Distribution Premium 폐지, 유통업 Revenue Contribution 90:10 모델 적용 |
| `v1.2` | 2026-07-15 | 유통업 전용 Distribution Premium 추가, 유통·서비스 업종 식별 분리, Premium 합산 +35% 상한 적용 |
| `v1.1` | 2026-07-15 | EQUIV Scale Premium 추가, 10억원 기준 결과 금액 표시 정리 |
