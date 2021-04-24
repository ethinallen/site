// If you set NODE_PATH variable in .env file you can do
// absolute imports
import { useEffect, useState } from 'react'
import { useStocks } from '../../net/stocks'

export default function Stocks(){

    // using state in functional components with hooks
    const [currentAsk, setCurrentAsk] = useState(0)

    // this is our SWR hook to make API calls
    const stocks = useStocks('tsla')

    /**
     * This is another react hook that will fire AFTER every render and perform an 'effect'.
     * We add a dependency array at the end to indicate we only want to call this function
     * after a render if any of the values of whatever items are in the dependency array
     * have changed. This way, we can safely set state inside this hook and avoid
     * infinite re-renders.
     */
    useEffect(() => {
        if(stocks.data){
          setCurrentAsk(stocks.data.quoteResponse.result[0].ask)
        }
    }, [stocks.data])

    console.log(stocks)
    if(stocks.isLoading || stocks.isError){
        return(
            <>
                <h1>We are loading...</h1>
            </>
        )
    }
    console.log(stocks.data.quoteResponse.result[0].ask)
    return(
        <>
        <h1>{currentAsk}</h1>
        </>
    )
}
