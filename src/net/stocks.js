import useSWR from 'swr'
import { fetcher } from './fetcher'

// we use the naming convention appending 'use'
// to the function name to keep consistent with React
// native hook naming conventions
export function useStocks(symbol){
    const {data, error} = useSWR(`market/v2/get-quotes?region=US&symbols=${symbol}`, fetcher)
    // to refresh each second manually:
    // const {data, error} = useSWR(`market/v2/get-quotes?region=US&symbols=${symbol}`, fetcher, { refreshInterval: 1000 })
    return {
        data:data,
        isLoading: !error && !data,
        isError: error,
      }
}