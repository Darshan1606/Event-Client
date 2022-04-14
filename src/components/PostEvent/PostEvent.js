import React from 'react'

const PostEvent = () => {
  return (
    <div>
        <h1 className="eventLabel">Post Event</h1>
        <div class="grid-container">
                <div className="col-25" id="card">
                    <div className="container">
                        <div>
                            <div className="row">
                                <div class="col-25">
                                    <label htmlFor="eventId"><b>Event ID</b></label>
                                </div>
                                <div class="col-75">
                                    <input className="input" type="text" id="eId" name="eventID" placeholder="YYYY - INSTITUTE - DEPARTMENT - COUNT"
                                
                                    />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="adate"><b>Actual Date</b></label>
                                </div>
                                <div class="col-75">
                                    <input className="input" type="date" id="adate" name="actualdate" 
                                     
                                    />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="atdate"><b>To</b></label>
                                </div>
                                <div class="col-75">
                                    <input className="input" type="date" id="atdate" name="eventenddate" 
                                   
                                    />
                                </div>
                            </div>
                        
                            <div class="row">
                                    <div class="col-25">
                                        <label for="date"><b>Speaker's Details</b></label>
                                    </div>
                                    <div class="col-75">
                                        {/* <SpeakerFields /> */}
                                        
                                            <div>
                                                <div className="row">
                                                    <div class="col-25">
                                                        <label for="date">Speaker's Name</label>
                                                    </div>
                                                    <div className="col-75">
                                                        <input
                                                        className="input"
                                                        type="text"
                                                        name="spkName"
                                                        placeholder="Speaker Name"
                                                        
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div class="col-25">
                                                        <label for="date">Speaker's Email</label>
                                                    </div>
                                                    <div className="col-75">
                                                        <input
                                                        type="email"
                                                        className="input"
                                                        name="spkEmail"
                                                        placeholder="Speaker Email"
                                                        
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div class="col-25">
                                                        <label for="date">Speaker's CV<br/><i>(file format: jpg, jpeg, png) Under 1MB</i></label>
                                                    </div>
                                                    <div className="col-75">
                                                        <input
                                                        type="file"
                                                        className="input"
                                                        name="spkCV"
                                                        placeholder="Speaker CV"
                                                        // value={x.spkCV}
                                                        
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div class="col-25">
                                                        <label for="date">Speaker's Photo<br/><i>(file format: jpg, jpeg, png) Under 500KB</i></label>
                                                    </div>
                                                    <div className="col-75">
                                                        <input
                                                        type="file"
                                                        className="input"
                                                        name="spkPhoto"
                                                        placeholder="Speaker Photo"
                                                        // value={x.spkCV}
                                                       
                                                        />
                                                    </div>
                                                </div>
                                                <div className="btn-box">
                                               </div>
                                            </div>
                                        
                                        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
                                    </div>
                            </div>
                            
                            <div class="row">
                                    <div class="col-25">
                                        <label for="edesc"><b>Event Description</b></label>
                                    </div>
                                    <div class="col-75">
                                        <textarea className="input" id="edesc" name="eventdesc" rows="10"
                                       
                                        />
                                    </div>
                            </div>

                            <div class="row">
                                    <div class="col-25">
                                        <label for="studno"><b>Number of Student's Attended the Event</b></label>
                                    </div>
                                    <div class="col-75">
                                        <input className="input" type="number" id="studno" name="studentno" 
                                        
                                        />
                                    </div>
                            </div>

                            <div class="row">
                                    <div class="col-25">
                                        <label for="ephoto"><b>Photograph's Of Even</b>t<br/>(upload 4 photographs)<br/><i>(file format: jpg, jpeg, png) Under 500KB</i></label>
                                    </div>
                                    <div class="col-75">
                                        <input className="input" type="file" id="ephoto" name="eventPhoto1" 
                                         
                                        />
                                        <br/>
                                        <input className="input" type="file" id="ephoto" name="eventPhoto2" 
                                       
                                        />
                                        <br/>
                                        <input className="input" type="file" id="ephoto" name="eventPhoto3" 
                                        
                                        />
                                        <br/>
                                        <input className="input" type="file" id="ephoto" name="eventPhoto4" 
                                        
                                        />
                                        <br/>
                                    </div>
                            </div>
                            <br />
                            <div class="row">
                                    <div class="col-25">
                                        <label for="cert"><b>Certificate</b><br/><i>(file format: jpg, jpeg, png) Under 500KB</i></label>
                                    </div>
                                    <div class="col-75">
                                        <input className="input" type="file" id="cert" name="certificate" 
                                        
                                        />
                                    </div>
                            </div>
                            <div class="row">
                                    <div class="col-25">
                                        <label for="poster"><b>Event Poster</b><br/><i>(file format: jpg, jpeg, png) Under 500KB</i></label>
                                    </div>
                                    <div class="col-75">
                                        <input className="input" type="file" id="poster" name="poster" 
                                       
                                        />
                                    </div>
                            </div>
                            <div class="row">
                                    <div class="col-25">
                                        <label for="cert"><b>Sheet Of Registered Student's</b></label>
                                    </div>
                                    <div class="col-75">
                                        <input className="input" type="url" id="cert" name="sheeturl" placeholder="https://www.google.com"
                                        
                                        />
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
            <div>
                <div className="sub-btn">
                    <div class="row">
                        <input className="submit"  type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        </div>
  )
}
export default PostEvent