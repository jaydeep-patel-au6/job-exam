import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container contact-form">
                <div className="contact-image">
                    <center>
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                    </center>
                </div>
                <form>
                    <h3>Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name *"  />
                            </div><br></br>
                            <div className="form-group">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" />
                            </div><br></br>
                            <div className="form-group">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *"  />
                            </div><br></br>
                            <div className="form-group">
                                <input type="submit" name="btnSubmit" className="btnContact"  />
                            </div><br></br>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: "100%", height: "150px"}}></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact