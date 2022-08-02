import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  // 각 테스트가 실행 시 보고되어야 하는지
  verbose: true,
  // 정규표현식을 이용한 테스트 경로 설정
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  // 자동으로 imported code의 mocked 버전 생성
  automock: true,
};
export default config;
