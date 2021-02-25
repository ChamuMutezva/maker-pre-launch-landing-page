import passions from '../assets/illustration-passions.svg'
import financial from '../assets/illustration-financial-freedom.svg'
import lifestyle from '../assets/illustration-lifestyle.svg'
import work from '../assets/illustration-work-anywhere.svg'
import Features from './features'
import Pricing from './pricing'

const Main = () => {
    return (
        <main>
            <section className="feature__parent">
                <Features src={passions} alt="passions" caption="Indulge your passions"
                    text=" Your passions shouldn't be just for the weekend. Earn a living doing what you love." />
                <Features src={financial} alt="passions" caption="Gain financial freedom"
                    text="Start making money work for you. There’s nothing quite like earning while you sleep." />
                <Features src={lifestyle} alt="passions" caption="Choose your lifestyle"
                    text="Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week." />
                <Features src={work} alt="passions" caption=" Work from anywhere"
                    text=" Selling online means not being pinned down. Want to work AND travel? Go for it!
                "/>
            </section>
            <Pricing/>
        </main>

    )
}
export default Main





