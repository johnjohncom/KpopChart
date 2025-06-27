# 보안 가이드

## 적용된 보안 조치

### 1. 환경 변수 보안
- ✅ API_BASE_URL 검증 및 fallback 처리
- ✅ 허용된 도메인만 접근 가능 (localhost, .local 도메인)
- ✅ 환경 변수 미설정 시 안전한 기본값 사용

### 2. 입력값 검증
- ✅ PropTypes를 통한 컴포넌트 props 검증
- ✅ API 응답 데이터 유효성 검사
- ✅ 이미지 URL 검증 및 sanitization
- ✅ HTML 특수문자 이스케이프 처리

### 3. 에러 처리 개선
- ✅ 사용자에게 노출되는 에러 메시지 일반화
- ✅ 상세 에러 정보는 개발 환경에서만 표시
- ✅ API 에러 상태별 적절한 메시지 제공

### 4. XSS 방어
- ✅ 사용자 입력 데이터 sanitization
- ✅ 외부 이미지 URL 검증
- ✅ 기본 이미지 fallback 처리

### 5. 보안 린팅
- ✅ ESLint security plugin 적용
- ✅ 위험한 JavaScript 패턴 감지
- ✅ console.log 사용 제한 (개발 환경 제외)

## 설정 방법

### 환경 변수 설정
1. `.env.example` 파일을 `.env`로 복사
2. `REACT_APP_API_BASE_URL` 설정:
   ```
   REACT_APP_API_BASE_URL=http://localhost:5000
   ```

### 보안 테스트 실행
```bash
npm test -- validation.test.js
```

### ESLint 보안 검사
```bash
npm run lint
```

## 추가 보안 권장사항

### 프로덕션 환경
- HTTPS 사용 필수
- Content Security Policy (CSP) 헤더 설정
- 적절한 CORS 정책 설정
- 정기적인 의존성 취약점 검사

### 코딩 가이드라인
- 사용자 입력값은 항상 검증 및 sanitize
- 외부 리소스 로딩 시 URL 검증
- 에러 메시지에 민감한 정보 포함 금지
- 정기적인 보안 린팅 수행

## 취약점 신고
보안 취약점 발견 시 이슈로 신고해주세요.