import useSWR from 'swr'
import { fetcherLyrics } from './fetcher_lyrics'

// we use the naming convention appending 'use'
// to the function name to keep consistent with React
// native hook naming conventions
export function useLyrics(artist, songTitle){
const { data, error } = useSWR([artist, songTitle], fetcherLyrics)    // to refresh each second manually:
    // const {data, error} = useSWR(`market/v2/get-quotes?region=US&symbols=${symbol}`, fetcher, { refreshInterval: 1000 })
    return {
        data:data,
        isLoading: !error && !data,
        isError: error,
      }
}
