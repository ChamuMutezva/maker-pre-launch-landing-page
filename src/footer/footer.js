import { useState } from 'react'
const Footer = () => {
    const [newdata, setNewdata] = useState('')
    const addNewData = (evt) => {       
        console.log("form handler", evt.target)
        evt.preventDefault()
    }
    const changeHandler = (evt) => {
        console.log(evt.target.value)
        setNewdata(evt.target.value)
    }
    return (
        <footer>
            <div className="footer__heading">
                <h4 className="footer__title"> Get notified when we launch</h4>
            </div>

            <form onSubmit={addNewData}>
                <label htmlFor="emailAddress"> 
                    <input type="email" value={newdata} aria-required="true"
                     className="email__address" onChange={changeHandler}
                     id="emailAddress" placeholder="Email address"
                     required />
                </label>
                <button className="submitbtn" type="submit">Get notified</button>
            </form>

        </footer>
    )
}
export default Footer