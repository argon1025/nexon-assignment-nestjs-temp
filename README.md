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
- [📘 API 규약](https://github.com/argon1025/nexon-assignment?tab=readme-ov-file#-api-%EA%B7%9C%EC%95%BD)문서 준수
  - 전역 예외 필터 적용 → 예외 응답 형식 통일
- Swagger를 통한 문서화

### ⚙️ 환경 변수
- 환경별 `.env` 파일 사용 (local, development, production)
- NestJS ConfigModule을 통한 전역 설정 관리

### 🐳 Docker 빌드
- 멀티스테이지 Dockerfile 적용 → 경량 이미지 생성 최적화

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
