+++
title = "Features 섹션"
description = "아이콘과 설명이 포함된 그리드 레이아웃으로 주요 기능을 표시하세요."
weight = 3
taxonomies = { tags = ["goyo", "landing-page", "features"], categories = ["guide"] }
+++

Features 섹션은 프로젝트의 주요 기능을 깔끔한 그리드 레이아웃으로 표시합니다. 각 기능에는 제목, 설명 및 선택적 Font Awesome 아이콘이 포함됩니다.

## 구성

```toml
# 섹션 제목과 설명을 설정합니다
[extra.features_section]
title = "주요 기능"
description = "깔끔하고 미니멀하며 콘텐츠에 집중"

# 개별 기능을 추가합니다
[[extra.features_section.features]]
title = "문서 친화적"
desc = "깔끔한 문서 작성 경험을 제공합니다."
icon = "book"

[[extra.features_section.features]]
title = "심플한 디자인"
desc = "미니멀리즘을 추구하는 테마입니다."
icon = "minimize"

[[extra.features_section.features]]
title = "빠른 성능"
desc = "성능을 염두에 두고 제작되었습니다."
icon = "bolt"
```

## 속성

### 섹션 속성
- **`title`** (선택): 섹션 제목
- **`description`** (선택): 섹션 설명

### 기능 속성
- **`title`** (필수): 기능 이름
- **`desc`** (필수): 기능 설명
- **`icon`** (선택): static/icons/ 폴더 내 SVG 아이콘 파일의 이름이며, .svg 확장자는 제외합니다 (예: book)

## 아이콘 사용

전체 클래스 이름을 지정하여 Font Awesome 아이콘을 사용합니다. [fontawesome.com](https://fontawesome.com/icons)에서 사용 가능한 아이콘을 찾아보세요.
static/icons/ 폴더에 아이콘을 추가하거나, static/css/에 font-awesome.min.css를 추가할 수 있습니다 (출처: [Font Awesome](https://github.com/FortAwesome/Font-Awesome/releases)).  
사용 가능한 Font Awesome 아이콘은 fontawesome.com에서 찾아보세요.
