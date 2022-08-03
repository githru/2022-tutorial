# Making a basic line chart with `D3`

## Table of contents

- [Tech Stacks](#tech-stacks)
- [Dataset Info](dataset-info)
- [References](#references)
  - [Vite React-ts Boilerplate](#vite-react-ts-boilerplate)
  - [TanStack Query](#tanstack-query)

## Tech Stacks

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [pnpm](https://pnpm.io/ko/)

## Dataset Info

- [질병관리청 코로나19 국내발생현황(확진) 조회](https://www.data.go.kr/data/15099854/openapi.do)
  - **위 링크에서 공용 API 활용을 신청하고, `env` 파일에 `VITE_SERVICE_KEY`라는 변수 이름으로 발급받은 service key를 등록해야 합니다**

## References

#### Vite React-ts Boilerplate

- [Scaffolding a vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [How to set up a Front-End project with Vite, React, and TypeScript](https://www.pixelmatters.com/blog/how-to-set-up-a-front-end-project-with-vite-react-and-typescript)
- [How to use absolute paths in Vite React-ts Project](https://stackoverflow.com/questions/68241263/absolute-path-not-working-in-vite-project-react-ts)
- [How to set Env Variables in Vite](https://vitejs.dev/guide/env-and-mode.html#env-variables)

#### TanStack Query

- [Basic Example: How to fetch data using TanStack Query (v4)](https://tanstack.com/query/v4/docs/examples/react/basic)
