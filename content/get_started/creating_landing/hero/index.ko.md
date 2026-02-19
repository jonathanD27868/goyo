+++
title = "Hero 섹션"
description = "랜딩 페이지 상단의 메인 배너를 구성하세요."
weight = 2
taxonomies = { tags = ["goyo", "landing-page", "hero"], categories = ["guide"] }
+++

Hero 섹션은 랜딩 페이지 상단에 표시되는 메인 배너입니다. 제목, 선택적 배지, 설명, 배경 이미지 및 행동 유도 버튼을 포함합니다.

## 구성

```toml
[extra.hero]
title = "Goyo에 오신 것을 환영합니다!"
badge = "Clean Theme, Tranquil Feel"
description = "문서화를 위한 간단하고 깔끔한 Zola 테마입니다."
image = "/images/landing.jpg"                # 배경 이미지
image_mobile = "/images/landing-mobile.webp" # 모바일용 소형 배경 이미지
gradient_opacity = 20                        # 애니메이션 그라데이션 배경의 불투명도 (0-100, 기본값: 20)
image_opacity = 20                           # 배경 이미지의 불투명도 (0-100, 기본값: 20)
cta_buttons = [
    { text = "시작하기", url = "/get-started/installation/", style = "primary" },
    { text = "GitHub에서 보기", url = "https://github.com/your/repo", style = "secondary" },
]
```

## 속성

- **`title`** (필수): 메인 헤딩 텍스트
- **`badge`** (선택): 제목 위에 표시되는 작은 배지 텍스트
- **`description`** (필수): 제목 아래의 설명 텍스트
- **`image`** (선택): 배경 이미지 경로
- **`image_mobile`** (선택): 모바일용 소형 배경 이미지 경로 (@media max-width: 576px)
- **`gradient_opacity`** (선택): 애니메이션 그라데이션 배경의 불투명도. 유효한 값: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100 (기본값: 20)
- **`image_opacity`** (선택): 배경 이미지의 불투명도. 유효한 값: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100 (기본값: 20)
- **`cta_buttons`** (선택): 행동 유도 버튼 배열
  - `text`: 버튼 레이블
  - `url`: 링크 대상
  - `style`: 버튼 스타일 (`primary` 또는 `secondary`)
