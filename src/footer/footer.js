const Footer = () => {
    return (
        <footer>
            <div className="footer__heading">
                <h4 className="footer__title"> Get notified when we launch</h4>
            </div>

            <form>
                <label htmlFor="emailAddress">
                    <input type="email" className="email__address" id="emailAddress" placeholder="Email address" />
                </label>
                <button className="submitbtn" type="submit">Get notified</button>
            </form>

        </footer>
    )
}
export default Footer