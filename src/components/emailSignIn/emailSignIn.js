import StyledEmailSignIn from './styledEmailSignIn'


const EmailSignIn = () => {

    return(
        <StyledEmailSignIn >
            <div className="content-wrapper">
                <div className="form-wrapper">
                    <h1>Request a list of headings</h1>
                    <form>
                        <label >Please enter your email address to receive course titles, the topics will be emailed to you.</label>
                        <input type="mail" placeholder="AfshinT2Y@gmail.com" />
                        <p className="message"><span className="checked-icon">&#10004;</span>Your email has been successfully registered, headlines will be sent to you soon.</p>
                    </form>
                </div>
                <div className="image-wrapper">
                    <div className="bigger-img"></div>
                    <div className="smaller-img"></div>
                </div>
            </div>
        </StyledEmailSignIn>
    )
}

export default EmailSignIn