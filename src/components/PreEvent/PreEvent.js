import React from 'react'
import './PreEventstyle.css'
const PreEvent = () => {
  return (
    <div class="pre">
       <h1 className="eventLabel">Pre Event</h1>
       <div id="booking" class="section">
      <div class="section-center">
        <div class="container-fluid">
          <div className="row"></div>
         
            <div class="booking-form">
              <form>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="col-25">
                        <span class="form-label"></span>
                        <input
                          disabled
                          class="form-control"
                          type="text"
                          id="eId"
                          name="eventID"
                          placeholder="YYYY - INSTITUTE - DEPARTMENT - COUNT"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input class="form-control" type="text" />
                      <span class="form-label">Event Name</span>
                    </div>
                    <div class="form-group">
                      <span class="form-label">Type of Event</span>
                      <select class="form-control">
                        <option>Select Event Type</option>
                        <option value="Webinar">Webinar</option>
                        <option value="Seminar">Seminar</option>
                        <option value="Confrence">Confrence</option>
                        <option value="Technical">Technical</option>
                        <option value="Nontechnical">Non-Technical</option>
                        <option value="Cultural">Cultural</option>
                        <option value="FTP">FTP</option>
                        <option value="HTTP">HTTP</option>
                      </select>
                      <span class="select-arrow"></span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input class="form-control" type="date" required />
                      <span class="form-label">Date From</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input class="form-control" type="date" required />
                      <span class="form-label">To</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <span class="form-label">Duration of Event</span>
                      <input class="form-control" type="number" min="1" required />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <span class="form-label">Level of Event</span>
                      <select class="form-control">
                        <option>Select Level Of Event</option>
                        <option value="Institute">Institute</option>
                        <option value="University">University</option>
                        <option value="International">International</option>
                        <option value="National">National</option>
                        <option value="State">State</option>
                      </select>
                      <span class="select-arrow"></span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <span class="form-label">Organising Institute</span>
                      <select class="form-control">
                        <option>Select Organizing Institute</option>
                        <option value="CSPIT">CSPIT</option>
                        <option value="DEPSTAR">DEPSTAR</option>
                        <option value="PDPIAS">PDPIAS</option>
                        <option value="CMPICA">CMPICA</option>
                        <option value="I2IM">I2IM</option>
                        <option value="RPCP">RPCP</option>
                        <option value="ARIP">ARIP</option>
                        <option value="MTIN">MTIN</option>
                        <option value="CIPS">CIPS</option>
                      </select>
                      <span class="select-arrow"></span>
                    </div>	
                  </div>
				  <div class="col-md-6">
					<div class="form-group">
						<span class="form-label">Department Name</span>
						<select class="form-control">
						  <option>Select Department Name</option>
						  <option value="CSPIT">CSE</option>
						  <option value="DEPSTAR">CE</option>
						  <option value="PDPIAS">IT</option>
						  <option value="CMPICA">CL</option>
						  <option value="I2IM">ME</option>
						  <option value="RPCP">EE</option>
						  <option value="ARIP">EC</option>
						  <option value="MTIN">MBA</option>
						 
						</select>
						<span class="select-arrow"></span>
					  </div>	
				  </div>
                </div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<input class="form-control" type="text" />
							<span class="form-label">Cordinator Name</span>
						  </div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<input class="form-control" type="text" />
							<span class="form-label">Cordinator Email</span>
						  </div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<input class="form-control" input type="tel" id="phone" name="phone"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
							<span class="form-label" type="number">Cordinator Contact Number</span>
						  </div>
					</div>
				</div>

                <div class="form-btn">
                  <button class="submit-btn">Next</button>
                </div>
              </form>
            </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}
export default PreEvent