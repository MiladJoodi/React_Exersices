import React from "react";
import "./Contact.css";
import Background from "../Background/Background";


export default function Contact() {
  return (
    <div className="contact centered">
      <Background />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h4 className="py-3">ارسال پیام </h4>
            <form action="" className="form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="نام شما" />
              </div>
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="ایمیل شما" />
              </div>
              <div className="form-group">
                <textarea type="text" name="name" className="form-control" placeholder="پیام شما" />
              </div>

              <input type="submit" className="btn btn-success full w-100" value='ارسال' />

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
