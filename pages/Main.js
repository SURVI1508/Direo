import Header from './components/Header'
import Activity from './components/Activity'
import BestListing from './components/BestListing'
import WhyWe from './components/WhyWe'
import Destination from './components/Destination'
import Trusted from './components/Trusted'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'


import 'bootstrap/dist/css/bootstrap.min.css';
const Main = () => {
    return (
        <>
            <div>
                <Header/>
                <Activity/>
                <BestListing/>
                <WhyWe/>
                <Destination/>
                <Trusted/>
<Subscribe/>
<Footer/>

            </div>
        </>
    )
}

export default Main