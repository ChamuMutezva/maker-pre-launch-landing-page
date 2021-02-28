import { useState } from 'react'
const Footer = () => {
    const inputs = Array.from(document.querySelectorAll(".email__address"))

    inputs.forEach(input => {
        const label = document.querySelector("label")
        const errorDisplay = document.querySelector(".display__error")
        input.addEventListener("invalid", () => {            
            label.classList.add("red__border")
            errorDisplay.classList.add("show__error")
        })
    })

    inputs.forEach(input => {
        const label = document.querySelector("label")
        const errorDisplay = document.querySelector(".display__error")
        input.addEventListener("input", function () {
            if (input.validity.valid) {
                label.classList.remove("red__border")
                errorDisplay.classList.remove("show__error")
            }
        })
    })


    //console.log(input)
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
                <div className="form__input">
                    <label htmlFor="emailAddress">
                        <input type="email" value={newdata} aria-required="true"
                            className="email__address" onChange={changeHandler}
                            id="emailAddress" placeholder="Email address"
                            required />
                    </label>
                    <p className="display__error">Oops! That doesn't look like an email address</p>
                </div>
                <button className="submitbtn" type="submit">Get notified</button>
            </form>

        </footer>
    )
}
export default Footer