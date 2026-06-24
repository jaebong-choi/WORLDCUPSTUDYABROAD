---
name: image-extract-transfer
description: 【이미지 해체추출·이식·합성 스킬】 레퍼런스 이미지를 올리면 해체분석해서 그 레퍼를 그대로 재현하는 완성형 프롬프트를 추출한다. 인물·제품·풍경(장소)·음식·기타 사물 등 무엇이 와도 주피사체를 자동 판별해 그에 맞는 디테일로 해체한다. 인물 컨셉샷은 내 모델 초상화와 함께 쓰면 얼굴만 내 모델로 바뀌도록(컨셉 동일) 정체성을 세팅한다. 출력 본문에는 사용자가 채우는 빈 슬롯을 절대 넣지 않는다. 인물 초상화 + 배경을 같이 주면 조명·색온도·그림자·질감까지 맞춰 "원래 거기 있던 사람"처럼 합성하고, 인상·퍼스널컬러·배경 조화에 맞는 의상까지 세팅한다. 출력은 항상 ① 영어 실사용본 + ② 한국어 검증 해석 + ③ 미감 계승·카피 회피 버전 + ④ 활용 예시 4가지를 동시에 낸다. 사용자가 "추출", "추출해줘", "이 사진 해체분석", "이거랑 똑같이 만들어줘", "이 컨셉 내 모델에", "이 스타일 내 제품에", "이 배경에 합성", "배경에 넣어줘", "원래 있던 사람처럼", "의상도 맞춰줘" 같은 말을 하며 이미지를 주면 반드시 이 스킬을 사용한다.
---

# image-extract-transfer — 레퍼런스 해체 → 추출 → (옵션) 이식 → 합성

레퍼런스 이미지를 받아 **올린 레퍼 그대로 재현하는 완성형 프롬프트**를 뽑는다. 인물·제품·풍경·음식·사물 무엇이 와도 작동한다. 인물 컨셉샷은 내 모델 초상화와 함께 써서 **얼굴만 교체**되는 걸 기본으로 한다.

## ★ 최상위 원칙 (모든 모드 공통 — 위반 금지)

1. **빈 슬롯 금지.** 출력 영어 본문에 `[YOUR MODEL: ...]`, `[YOUR PRODUCT: ...]`, `[YOUR SCENE: ...]` 같이 **사용자가 채워야 하는 대괄호 빈칸을 절대 넣지 않는다.** 레퍼의 피사체까지 끝까지 서술해 그 자체로 생성 가능한 완성 프롬프트를 만든다. (단, "첨부한 내 모델 초상화를 얼굴 소스로 쓰라"는 워크플로우 지시문은 빈칸이 아니므로 허용.)
2. **"Replace the ~" 선언 금지.** 피사체를 빼라는 문장을 쓰지 않는다. 레퍼 전체를 충실히 재현하는 선언만 쓴다.
3. **이식은 명시할 때만.** 제품·풍경·음식 등에서 "내 제품으로 / 이 지형을 ~로" 교체 대상을 말했을 때만 본문에 그 대상으로 적는다. 안 하면 원본 그대로. (인물 컨셉샷은 §3에서 별도 규칙.)
4. **안 읽히는 정보는 추측 금지.** 본문은 읽힌 것만으로 완성하고, 불명확한 핵심은 한국어 해석에 "원본에서 불명확 — 확인 필요"로 적는다.
5. 모델 종속 문법(`--ar`, `::`, `/imagine`, 가중치 기호) 금지. 전부 자연어 서술. 화면비·해상도 숫자 임의 지정 금지.

## 1. 입력 처리 + 주피사체 판별

- **인물** → §3 인물 레이어
- **제품** → §3 제품 레이어
- **풍경·장소** → §3 풍경 레이어
- **음식** → §3 음식 레이어
- **기타(동물·사물·인테리어 등)** → §3 일반 사물 레이어
- **인물 초상화 + 배경 2장**, 또는 "합성 / 이 배경에 넣어 / 원래 있던 사람처럼" → §4 합성 모드

주피사체 애매하면 무엇을 주인공으로 둘지 한 줄로 먼저 묻는다.

## 2. 공통 해체 레이어 (무엇이 와도 반드시 읽는다)

- **샷·구도**: 샷 타입, 피사체 위치, 여백, 수평선, 시점 높이.
- **카메라 리드**: 렌즈 감, 촬영 매체(스마트폰/필름/디지털), 거리감.
- **조명**: 광원 방향·개수·질(하드/소프트)·그림자 모양·낙폭·하이라이트 위치. 물리적으로.
- **색·그레이딩**: 화이트밸런스, 채도, 콘트라스트, 색 캐스트, 필름톤.
- **질감**: 표면 디테일, 반사, 입자감, 마감.
- **배경·환경**: 공간, 표면, 소품, 분위기.

## 3. 피사체별 디테일 레이어 (전부 "레퍼 그대로" — 빈칸 없음)

### 인물 (컨셉샷 추출 — 얼굴만 내 모델로 교체되는 게 기본)
이 프롬프트는 **내 모델 초상화와 함께** 생성기에 넣는 용도다. 컨셉(헤어·표정·포즈·의상·배경·조명·카메라·그레이딩)은 레퍼 그대로 담고, **얼굴 정체성만 첨부한 내 모델 초상화를 따르게** 한다. 결과는 "컨셉 동일, 얼굴만 내 모델"이어야 한다.

영어 본문 블록 순서:
1. **Identity declaration (기본)** — `Use the attached model portrait for facial identity. Reproduce the concept described below and change only the face to match the attached portrait. Keep hair, expression, pose, outfit, background, lighting and color grading as described.`
   - 사용자가 "레퍼 인물 그대로"를 원하면 대신: `Keep the exact facial identity from the reference; do not alter the face.`
2. **HAIR** — 컨셉의 헤어를 레퍼 그대로 서술(기본). "내 모델 헤어 유지" 명시 시 그 지시로 교체.
3. **POSE** — 포즈·시선·손 위치(레퍼 그대로).
4. **Shot + composition** — 샷·구도·여백.
5. **Camera read** — 렌즈 감, 매체, 거리.
6. **Expression + accessories** — 표정, 액세서리.
7. **Outfit** — 상·하의 핏/소재/드레이프 정밀하게.
8. **Background** — 공간·소품.
9. **Lighting** — 방향·질·그림자.
10. **Skin** — 아래 고정 스킨 블록 + 웜/쿨/뉴트럴 + no retouching.
11. **ANTI-AI** — 매체에 맞춘 한 줄. 보케 금지.

고정 스킨 블록:
```
ultra-realistic bare skin, visible pores, subtle freckles, natural skin luminance, dewy texture, uneven skin tone, natural flush on cheeks, no retouching, no AI smoothing, no plastic skin, 4K skin detail, authentic skin imperfections
```
미감 조정: 광 피부=dewy 강조 / 세미매트=dewy 빼고 semi-matte / 필름=약한 그레인 허용.
ANTI-AI: 필름 룩 `no film border, no scan artifacts, no HDR, no AI enhancement` / 스마트폰 룩 `Shot on [기기명], no bokeh, no grain, no HDR, no AI enhancement`. **인물은 보케 절대 금지.** 인종·국적 키워드 배제.

> 검증 기준: 이 프롬프트 + 내 모델 초상화로 생성 시 **얼굴만 내 모델, 나머지 컨셉은 레퍼와 동일**해야 한다. 얼굴 외 요소가 임의로 바뀌면 블록 서술이 부족한 것.

### 제품
1. **Declaration** — `Recreate this product exactly as shown.`
2. **Product** — 용기 타입·형태·캡·디테일 레퍼 그대로. **라벨 텍스트·로고는 복제하지 않고** 형태·위치·색만 묘사.
3. **Placement + composition** — 위치·각도·여백.
4. **Camera read** — 매크로/표준, 시점 높이, 거리.
5. **Surface + set** — 표면, 배경, 소품.
6. **Lighting** — 키/필/림, 방향, 그림자, 반사·하이라이트.
7. **Texture + material** — 재질·마감·물방울·반사 충실 재현.
8. **Color + grading** — 화이트밸런스·채도·콘트라스트.
9. **ANTI-AI** — `realistic product photography, accurate material reflections, no CGI plastic look, no fake highlights, no HDR, no AI enhancement`

### 풍경·장소
1. **Declaration** — `Recreate this landscape/scene exactly as shown.`
2. **Terrain + subject** — 지형·주요 지물 레퍼 그대로.
3. **Vegetation / structures** — 식생·건물·인공물.
4. **Sky + atmosphere** — 하늘·구름·대기감·시간대·날씨.
5. **Water / reflective** — 수면·반사(있으면).
6. **Depth** — 근경/중경/원경, 원근, 소실 방향.
7. **Camera read** — 렌즈 감, 시점 높이, 거리.
8. **Lighting** — 광원 방향·시간대 광질·그림자 길이.
9. **Color + grading** — 화이트밸런스·채도·콘트라스트·색 캐스트.
10. **ANTI-AI** — `realistic landscape photography, natural light falloff, no HDR halo, no oversaturation, no AI enhancement`

### 음식
1. **Declaration** — `Recreate this dish exactly as shown.`
2. **Dish + components** — 음식 종류·구성·플레이팅·양·배치 레퍼 그대로.
3. **Texture cues** — 윤기/김/바삭함/소스 흐름/단면.
4. **Tableware + surface** — 식기·커트러리·테이블 표면·린넨.
5. **Garnish + props** — 가니시·재료·소품.
6. **Camera read** — 탑다운/45도/아이레벨, 렌즈 감, 거리.
7. **Lighting** — 방향(주로 사이드/백라이트)·질·그림자·하이라이트.
8. **Color + grading** — 화이트밸런스·채도·콘트라스트.
9. **ANTI-AI** — `realistic food photography, appetizing natural texture, accurate reflections, no CGI look, no HDR, no AI enhancement`

### 기타 사물·동물·인테리어
공통 해체 레이어 + 피사체 형태·재질·디테일·표면을 레퍼 그대로. 동물은 털/깃/눈 질감, 인테리어는 가구·재질·공간감 중심.

## 4. 합성 모드 (PORTRAIT + BACKGROUND)

인물 초상화(얼굴 정체성) + 배경(고정 환경)을 받아 **인물이 원래 그 장면에서 촬영된 것처럼** 합성. 초상화가 얼굴/상반신만이어도 전신·포즈·조명적응은 배경에 맞춰 새로 생성.

영어 본문 블록:
1. **Declaration** — `Use the portrait for facial identity. Use the background image as the fixed scene. Composite the person as if originally photographed in that environment.`
2. **Identity** — `Keep the exact facial identity from the portrait; do not alter the face.`
3. **Subject build** — 배경 시점·스케일에 맞춘 포즈·전신, 지평선·아이레벨 정합, 자연스러운 접지.
4. **Light matching (핵심)** — 배경 광원 방향·높이·색온도·질·콘트라스트를 인물에 동일 적용.
5. **Shadow + grounding** — contact shadow, 드리운 그림자 방향·길이·연함 일치. 부유 금지.
6. **Color + grade unify** — 배경 화이트밸런스·색 캐스트·필름톤으로 통일, 가장자리 환경광 번짐.
7. **Perspective + scale** — 배경 렌즈 감·원근에 인물 크기·각도 정합.
8. **Texture + grain match** — 배경 입자감·선예도·매체감에 맞춤.
9. **Outfit** — §4-1.
10. **Skin** — §3 인물 고정 스킨 블록 상속.
11. **ANTI-AI** — `seamless composite, matched lighting and color temperature, natural contact shadows, consistent perspective, no cut-out look, no edge halo, no floating subject, no mismatched lighting, no bokeh, no HDR, no AI enhancement`

### 4-1. 의상 세팅 (인상 + 퍼스널컬러 + 배경 조화)
1. **인상 톤** — 초상화 분위기. **사진 기준 추정, 확정 아님.**
2. **퍼스널컬러 방향** — 웜/쿨 + 명도·채도. **반드시 "이미지 기준 추정, 확정 진단 아님" 명시.** 조명 왜곡 가능 시 "확인 필요".
3. **배경 조화 전략** — 톤온톤 / 유사색 / 보색 포인트 중 1택.
4. **구체 의상** — 상의/하의/아우터/소재/실루엣 + 컬러명. 완성형으로(빈칸 없음). 인종·국적 키워드 배제.

## 5. 출력 형식 (항상 이 4블록 동시)

### ① English (ready to use)
- 해당 레이어 블록을 한 덩어리 자연어 완성 프롬프트로. **빈 슬롯·"Replace the~" 없음.** 복붙 즉시 사용.

### ② 한국어 검증 해석 (키워드 끊기 금지)
- 각 요소를 **읽기 쉬운 문장**으로. "원본에서 [무엇을 관찰] → 프롬프트에 [어떻게 반영]" 식으로 검증 가능하게.
- 콤마 키워드 나열 금지. 예: (X) "소프트 라이트, 좌측, 35mm" → (O) "광원은 화면 왼쪽 위에서 들어오는 부드러운 빛으로 읽혀, 오른쪽에 연한 그림자가 지도록 반영했습니다."
- 추정·불명확은 문장 안에서 "추정" / "확인 필요"로 분리 표기.

### ③ Inspired version (미감 계승 · 카피 회피)
레퍼를 베끼지 않고 **분위기만 가져온** 별도 영어 프롬프트. 표절·식별성 리스크를 줄이고 오리지널리티를 확보하는 용도.
- **가져오는 것(미감)**: 조명의 질·방향감, 색 그레이딩/팔레트, 질감·매체감, 전반 무드, 렌즈 감성.
- **새로 바꾸는 것(카피 회피)**: 구체적 포즈·구도 배치·고유 소품·시그니처 디테일·특정 배경 → 같은 톤 안에서 다른 변주로 재구성.
- 출력은 영어 완성 프롬프트 1개 + 한국어 한 줄("무엇을 유지하고 무엇을 바꿨는지"). 빈 슬롯 없음. 인물이면 ①과 동일하게 첨부 초상화로 얼굴 처리.

### ④ 활용 예시 4가지
교체·변형 시 **바꿀 부분만 1~2줄 영어 패치**로(전체 재출력 X).
- **인물(컨셉샷)**: ① 다른 컨셉 변주(포즈/구도) ② 의상·헤어 교체 ③ 조명·시간대·무드 변형 ④ 샷·구도 변형/시리즈 확장.
- **제품/풍경/음식**: ① 피사체 이식(내 제품·내 지형으로 교체하는 패치) ② 배경·세트 교체 ③ 조명·시간대 변형 ④ 샷·구도 변형.
- **합성 모드**: ① 다른 배경에 같은 인물 ② 의상 톤 대안 ③ 시간대·조명 변형 ④ 샷 확장.

## 6. 하드룰

- **출력 본문에 빈 슬롯·"Replace the~" 금지.** 레퍼를 완성형으로 추출.
- **인물 컨셉샷은 "얼굴만 내 모델 교체"가 기본** — 첨부 초상화를 얼굴 소스로 선언, 그 외 컨셉은 전부 레퍼대로. "레퍼 인물 그대로"는 명시 시에만.
- 제품·풍경·음식 이식은 교체 대상을 말했을 때만 본문 반영, 그 외엔 ④ 활용 예시에서 패치로.
- 안 읽히는 정보 추측·날조 금지. "확인 필요" 표기.
- 모델 종속 문법·화면비 숫자 금지. 전부 물리적·자연어.
- 인물·합성: 보케 금지, 스킨 블록·ANTI-AI 항상.
- 합성: 광원 방향·색온도·그림자·원근·질감 매칭 최우선, 컷아웃·헤일로·부유 금지.
- ③ 미감 버전은 미감만 계승하고 고유 식별 요소는 반드시 변주(카피 금지).
- 퍼스널컬러는 확정 진단 아님 — "추정"으로만. 인종·국적 키워드 배제.
- 라벨·로고 등 타인 저작 텍스트/디자인은 그대로 복제하지 않는다.
- 한국어 해석은 검증용 문장으로 — 키워드 파편 금지.
