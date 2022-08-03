import { useCallback, useEffect, useState } from 'react';

import LineChart from '@/components/LineChart';
import useCoronaDailyForOneWeek from '@/services/useCoronaDailyForOneWeek';
import * as T from '@/types';
import Layout from './components/OneColumnLayout';

function App() {  
  const [lineData, setLineData] = useState<T.BasicLineData[]>()
  const [errorResult, setErrorResult] = useState('')
  
  const { status, data: coronaDailyForOneWeek } = useCoronaDailyForOneWeek()
  
  useEffect(() => {
    if (coronaDailyForOneWeek === undefined) return;
    
    // successfully fetched, but result failed
    if (coronaDailyForOneWeek.response.resultCode !== '1') {
      setErrorResult(coronaDailyForOneWeek.response.resultMsg)
      return;
    }
    
    // successfully fetched, but there is no result
    if (coronaDailyForOneWeek.response.resultCnt === 0) {
      setErrorResult('No result!')
      return;
    }
    
    const resultData: T.ResultData = coronaDailyForOneWeek.response.result[0]
    
    const lineData = Object.entries(resultData).reduce<T.BasicLineData[]>((acc, cur) => {
      const key = cur[0]
      const value = cur[1]
      const idx = Number(key.match(/\d+$/)?.pop()) - 1

      if (/^mmdd.*[1-7]$/.test(key)) {
        acc[idx] = {
          ...acc[idx],
          x: new Date(value).getTime()
        }
      }
      
      if (/^cnt.*[1-7]$/.test(key)) {
        acc[idx] = {
          ...acc[idx],
          y: Number(value)
        }
      }
      
      return acc
    }, [coronaDailyForOneWeek])
    
    setLineData(lineData)
  }, [coronaDailyForOneWeek])
  
  const Contents = useCallback(() => {
    switch (status) {
      case 'loading': 
        return <p>로딩 중입니다...</p>
      case 'error': 
        return <p>API 호출에 실패하였습니다</p>
      case 'success': {
        // successfully fetched, but result failed
        if (lineData === undefined) {
          return errorResult ? <p>{errorResult}</p> : <p>데이터를 불러오는 중입니다</p>
        }
        return <LineChart data={lineData} />
      }
      default:
        throw new Error('Unhandled action type')
    }
  }, [status, lineData, errorResult])

  return (
    <Layout>
      {Contents()}
    </Layout>
  )
}

export default App
