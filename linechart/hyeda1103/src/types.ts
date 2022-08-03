export interface ResultData {
  // 조회 기준일 6일 전
  cnt1: string
  mmdd1: string
  rate1: string
  // 조회 기준일 5일 전
  cnt2: string 
  mmdd2: string 
  rate2: string 
  // 조회 기준일 4일 전
  cnt3: string 
  mmdd3: string
  rate3: string
  // 조회 기준일 3일 전
  cnt4: string 
  mmdd4: string
  rate4: string
  // 조회 기준일 2일 전
  cnt5: string
  mmdd5: string
  rate5: string
  // 조회 기준일 1일 전
  cnt6: string
  mmdd6: string
  rate6: string
  // 조회 기준일
  cnt7: string
  mmdd7: string
  rate7: string
  // 주간 평균
  cnt8: string
  mmdd8: string
  rate8: string
  // 데이터 조회 기준 일시
  mmddhh: string
}

export interface ApiResponse {
  resultCode: string // 결과코드
  resultMsg: string // 결과메시지
  resultCnt: string // 결과개수
  result: ResultData[] // 결과
}

export interface BasicLineData {
  x: number | Date
  y: number
}
