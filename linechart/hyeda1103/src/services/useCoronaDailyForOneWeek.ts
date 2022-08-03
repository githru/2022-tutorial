import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { coronaDailyForOneWeek } from '@/constants/url';

function useCoronaDailyForOneWeek() {
  return useQuery(['coronaWeek'], async () => {
    const { data } = await axios.get(`${coronaDailyForOneWeek}${import.meta.env.VITE_SERVICE_KEY}`)
    return data
  })
}

export default useCoronaDailyForOneWeek
