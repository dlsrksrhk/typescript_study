# typescript_study

Node.js 22.14.0에서 실행하는 TypeScript 학습 예제입니다.
`hello-world`, `section2`, `section3`, `section4`는 각각 독립된 npm 프로젝트입니다.

## 환경

- Node.js: 22.14.0 (`.nvmrc`와 각 프로젝트의 `engines`에 명시)
- TypeScript: 5.9.3
- Node.js 타입 정의: `@types/node` 22.14.1
- 실행 도구: `tsx` 4.23.15

패키지 버전과 lockfile을 고정했습니다. 전역 TypeScript 설치는 필요하지 않습니다.
`.nvmrc`와 `engines` 자체가 Node.js를 설치하거나 자동 전환하지는 않습니다.

## 설치와 실행

PowerShell에서 공부할 폴더로 이동한 뒤 실행하세요.

```powershell
cd C:\dev\git\typescript_study\section2
node --version
npm.cmd ci

# 원하는 TypeScript 파일 실행 (타입 검사는 하지 않음)
npm.cmd run dev -- src/index.ts
# 같은 역할
npx.cmd tsx src/index.ts

# 파일 변경 시 다시 실행 (Ctrl+C로 종료)
npm.cmd run watch -- src/index.ts

# 프로젝트 전체 타입 검사
npm.cmd run typecheck

# tsconfig.json에 따라 dist에 JavaScript 생성
npm.cmd run build
node dist/index.js
```

`hello-world`, `section2`, `section3`에는 `src/index.ts`가 있습니다.
`section4`에는 index 파일이 없으므로 다음처럼 원하는 예제를 지정합니다.

```powershell
cd C:\dev\git\typescript_study\section4
npm.cmd run dev -- src/function-overloading.ts
```

## 컴파일 설정과 학습용 오류

기존 `target: ESNext`, `module: ESNext`, `outDir: dist`,
`moduleDetection: force`, `include: ["src"]`를 유지했습니다.
`hello-world`의 `strict: false`, 나머지의 `strict: true`,
`section3`과 `section4`의 `strictNullChecks: true`도 그대로입니다.

Node.js 타입 정의의 의존성을 찾고 tsx의 모듈 탐색에 맞추기 위해
`moduleResolution: bundler`를 추가했습니다. 모든 프로젝트는
`package.json`의 `type: module`로 ESM을 명시합니다.
ts-node 대신 tsx를 사용하므로 ts-node 패키지와 전용 설정은 제거했습니다.

`main: index.js`는 실제 파일을 가리키지 않았고, 이 저장소는 배포용 패키지가
아니므로 제거했습니다. 실행할 파일은 명령어에서 직접 지정합니다.

`section2`와 `section3`에는 타입 호환성, null, never 등을 공부하는 오류 예제가
있습니다. 원본 소스를 유지했으므로 전체 타입 검사와 빌드는 오류 종료할 수 있습니다.
기존 설정상 타입 오류가 있어도 JavaScript가 출력될 수 있으므로,
dist 파일이 생성되었다고 타입 검사를 통과한 것은 아닙니다.
tsx 역시 타입 검사를 생략하므로 타입 오류를 확인하려면 `typecheck`를 실행하세요.

나중에 파일 간 import를 추가하고 빌드 결과를 `node`로 직접 실행하려면
상대 경로에 출력 파일 확장자를 적으세요 (예: `import { value } from "./other.js"`).
`bundler` 설정과 tsx가 허용하는 확장자 없는 import를 Node.js ESM이 그대로
지원하는 것은 아니며, tsc는 import 경로에 `.js`를 자동으로 붙이지 않습니다.
