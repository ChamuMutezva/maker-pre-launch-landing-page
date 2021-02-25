import freeversion from '../assets/icon-free.svg'
import paidversion from '../assets/icon-paid.svg'
const Pricing = () => {
    return (
        <section>
            <div className="pricing">
                <h2 className="pricing__title">
                    Our pricing plans
                </h2>
                <p className="pricing__description">
                    We only make money when our creators make money. Our plans are always affordable, and
                    it’s completely free to get started.
                </p>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="cards__img">
                        <img src={freeversion} alt="" />
                    </div>
                    <div className="cards__info">
                        <h3>
                            Dip your toe
                    </h3>
                        <p>
                            Just getting started? No problem at all! Our free plan will take you a long way.
                   </p>
                    </div>
                    <div className="products">
                        <h3> Free</h3>
                        <ul>
                            <li> <span>&#10003;</span>  Unlimited products </li>
                            <li><span>&#10003;</span> Basic analytics</li>
                            <li><span>&#10003;</span>  Limited marketplace exposure</li>
                            <li><span>&#10003;</span>  10% fee per transaction</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Pricing