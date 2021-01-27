import React from 'react';
import './header.css';
import Typical from 'react-typical';
import emailjs from 'emailjs-com';

const Header = () =>{

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_v7l3tti', 'template_uqy0b1q', e.target, 'user_CAqSK3r6apw3OPzTEXpXr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return (
        <>
            <header id="header-part">
                <div className="outer-div">
                    <div className="inner-div">
                        <p>Myself Munish Kumar Garg</p>
                    </div>
                    <Typical
                    steps={['Student.', 1000, 'Developer.', 1000, 'Programmer.', 1000]}
                    loop={Infinity}
                    wrapper="div"/>
                    <br/>

                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                        Contact Me
                    </button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title" id="exampleModalLabel">After Clicking Submit button, Your message will be transferred to me and form will be reset. Thank You!!</h6>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={sendEmail} method="post">
                                    <div className="form-group">
                                        <label for="exampleInputname">Name</label>
                                        <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter your name" name="from_name" required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your valid email" name="from_email" required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message here" name="message" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    );
}

export default Header;