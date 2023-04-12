import React from 'react';
import styles from "./Charts.module.css";
import TradingViewWidget from './TradingViewWidget';
import AboutUs from '../AboutUs/AboutUs';

const Charts = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate() - 3;

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '-' + mm + '-' + dd;
    console.log(formattedToday);

    // const [data, setData] = useState({});


    // useEffect(() => {
    //     fetch(`https://api.polygon.io/v1/open-close/O:SPY251219C00650000/${formattedToday}?adjusted=true&apiKey=HNXizPQ6fbLPdWsrH8gpKZaX1CUTJe1I`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const timeSeries = data["Time Series (Daily)"]
    //             // setData(timeSeries[formattedToday]);
    //             console.log(data);
    //         })
    // }, [])

    return (
        <div id={styles.chartContainer} className="pt-[66px] relative">
         
            {/* <div className="w-11/12 lg:w-1/2 mx-auto bg-[#0A081E] rounded-lg overflow-hidden z-10">
                <div className='bg-[#140D39] h-[54px]'></div>
                <div className="p-[16px]">
                    <div className="flex flex-col lg:flex-row lg:gap-[16px]">
                        <div className="lg:w-2/3 bg-[#8383ff21] py-2 ">
                            <TradingViewWidget />
                        </div>
                        <div className="lg:w-1/3 bg-[#8383ff21] py-2 h-32 mt-[16px]"></div>
                    </div>
                    <div className="bg-[#8383ff21] py-2 mt-[17px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi cum, earum aspernatur ab adipisci, ut iure odio quas veritatis debitis eius? Magnam repellat illo id blanditiis laborum totam officiis, consequatur veniam omnis itaque rem nobis velit fugit. Repellendus voluptas sit possimus dolor rem, numquam soluta omnis ducimus iure ullam facilis velit eos eum perspiciatis quibusdam minima impedit, libero dolore nam laboriosam blanditiis sequi nemo sapiente. Soluta neque optio aliquid veniam molestiae, fugiat, consequuntur illum cupiditate non doloremque quibusdam voluptatem. Sequi consequatur itaque quasi eveniet nobis eius distinctio officia. Officiis soluta sed molestias eaque enim libero consectetur, eligendi consequuntur fuga alias iste repudiandae molestiae saepe aliquid quod ratione! Asperiores mollitia repellendus omnis odio aut sunt quas porro laboriosam dignissimos, vero quibusdam ad ipsam maiores quasi accusantium sit nihil beatae, iste officia, tempore sint. Id voluptate, dolore eaque omnis et unde a temporibus enim distinctio soluta! Enim fugit error aut est quibusdam porro minus et, consequatur quisquam officiis laborum ipsum voluptatum exercitationem consequuntur! Optio perferendis nemo est. Recusandae voluptas aliquid magnam quia facere nulla officiis? Sit alias ratione, hic vero deserunt nesciunt dolorem obcaecati velit inventore impedit rem quibusdam molestias, fugit in! Qui ipsum impedit autem totam dolore provident repellendus non ut?
                    </div>
                </div>
            </div> */}
          
            <TradingViewWidget />
            
            <AboutUs />
        </div>
    );
};

export default Charts;