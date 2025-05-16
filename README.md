# 🧭 Nexon Assignment NestJS Template

모든 마이크로서비스가 일관된 방식으로 개발될 수 있도록  
[Event Reward System](https://github.com/argon1025/nexon-assignment?tab=readme-ov-file#-api-%EA%B7%9C%EC%95%BD) 저장소에서 정의한 컨벤션을 준수하는  
NestJS 기반 MSA 프로젝트의 초기 구성을 위한 템플릿 저장소입니다.

## 📦 프로젝트 구성

### 🔌 적용 기술

[🐱 기술](https://github.com/argon1025/nexon-assignment?tab=readme-ov-file#-%EA%B8%B0%EC%88%A0)문서 준수

### 🗂 폴더 구조

```
📦src
 ┣ 📂common               # 공통 모듈
 ┃ ┣ 📂dto                # - 공통 DTO
 ┃ ┣ 📂exception          # - 서비스 예외 처리
 ┣ 📂health               # 헬스 체크 API
 ┣ 📜app.module.ts        # 루트 모듈
 ┣ 📜.env.local           # 환경변수
 ┗ 📜main.ts
```

### 📘 API

- [📘 API 규약](https://github.com/argon1025/nexon-assignment?tab=readme-ov-file#-api-%EA%B7%9C%EC%95%BD)문서를 준수합니다.
  - 전역 예외 필터를 적용하여 예외 응답 형식을 통일합니다.
- Swagger를 통해 API 명세 문서를 제공합니다.

### ⚙️ 환경 변수

- 환경별 `.env` 파일을 통해 설정을 분리할 수 있습니다. (local, development, production)
  > NestJS ConfigModule을 사용합니다.

### 📜 로깅

- 모든 요청 헤더에 `x-request-id`를 포함하여 추적이 가능하도록 지원합니다.
- 요청 및 응답 로그를 기록하여 디버깅과 모니터링을 용이하게 합니다.
  > asyncLocalStorage ClsModule을 사용합니다.

### 🐳 Docker 빌드

- 멀티스테이지 빌드를 사용하여 경량 이미지를 생성합니다.

## 🚀 로컬 실행 가이드

### 1. 노드 버전 확인 및 설치

```bash
$ cat .nvmrc
$ fnm use
```

### 2. pnpm 패키지 설치

```bash
$ corepack enable
```

> pnpm 버전의 경우 package.json > packageManager 에서 관리됩니다.

### 4. 의존성 설치

```bash
pnpm install
```

### 5. 개발 서버 실행

```bash
pnpm run start:local
```
