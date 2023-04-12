// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
    const onLoadScriptRef = useRef();
    const chartContainerRef = useRef(null)
    // const [gainersItems, setGainersItems] = useState([])
    // const [losersItem, setLosersItem] = useState([]);
    // const [show, setShow] = useState(false)

    // const gainers = 'http://localhost:4000/nse/get_gainers'
    // const loosers = 'http://localhost:4000/nse/get_losers'

    // setTimeout(() => {
    //     setShow(true)
    // }, 5000)

    // useEffect(() => {
    //     axios.get(gainers)
    //         .then(({ data }) => {
    //             // console.log(data.data.open);
    //             setGainersItems(data.data);

    //         })
    //         .catch(error => console.error(error));
    //     axios.get(loosers)
    //         .then(({ data }) => {
    //             console.log(data.data);
    //             setLosersItem(data.data);

    //         })
    //         .catch(error => console.error(error));



    //     gsap.fromTo(chartContainerRef.current, {
    //         opacity: 0
    //     }, {
    //         opacity: 1,
    //         delay: 2
    //     })
    // }, [])

    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('watchlist-chart-demo') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        container_id: "watchlist-chart-demo",
                        // width: "100%",
                        // height: "100%",
                        autosize: true,
                        symbol: "BSE:SENSEX",
                        interval: "1",
                        timezone: "Asia/Kolkata",
                        theme: "dark",
                        style: "1",
                        toolbar_bg: "#f1f3f6",
                        withdateranges: true,
                        allow_symbol_change: true,
                        save_image: false,
                        watchlist: ["AAPL", "IBM", "TSLA", "AMD", "MSFT", "GOOG"],
                        locale: "en"
                    });
                }
            }
        },
        []
    );

    return (
        <div className='rounded overflow-hidden relative w-11/12 lg:w-1/2 mx-auto' ref={chartContainerRef}>
            <div className='tradingview-widget-container'>
                <div id='watchlist-chart-demo' style={{ height: '500px' }}>
                    {/* <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span className="blue-text">AAPL stock chart</span></a> by TradingView
            </div> */}
                </div>
                {/* <div className="absolute right-[50px] bottom-0 z-[1] w-[190px] text-justify h-[188px] bg-transparent text-white overflow-y-auto" id="gainers-losers">
                    <h1 className='text-[15px] font-medium'>Top Gainers</h1>

                    <ul>
                        {show ? gainersItems.map((item, index) => <li className='text-[13px] text-green-600 flex justify-between gap-6 pr-2' key={index}>{item.symbol} <span className={item.openPrice > item.previousPrice ? "text-green-600" : "text-red-400"}>
                            {(((parseFloat(item.openPrice) - parseFloat(item.previousPrice)) * 100 / parseFloat(item.previousPrice)).toFixed(2))}%
                        </span></li>) : "Loading..."}
                    </ul>

                    <h1 className='text-[15px] font-medium'>Top Losers</h1>

                    <ul>
                        {show ? losersItem.map((item, index) => <li className='text-[13px] text-red-400 flex justify-between gap-6 pr-2' key={index}>{item.symbol} <span className={item.openPrice > item.previousPrice ? "text-green-600" : "text-red-400"}>
                            {(((parseFloat(item.openPrice) - parseFloat(item.previousPrice)) * 100 / parseFloat(item.previousPrice)).toFixed(2))}%
                        </span></li>) : "Loading..."}
                    </ul>


                </div> */}
            </div>


        </div>
    );
}