import React, { useEffect, useState } from "react";
import { Tabs, Input } from "antd";
import "./EventListstyle.css";
import axios from "axios";
const { TabPane } = Tabs;
const { Search } = Input;
export const EventList = () => {
  const [events, setEvents] = useState([]);
  const [items, setItems] = useState([]);

  function callback(key) {
    console.log(key);
  }
  const onSearch = (value) => console.log(value);

  const fetchData = () => {
    fetch(`http://localhost:5000/events`)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setEvents(data.evnts);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="cont">
        <div className="search">
          <Search
            placeholder="Search Event By Enter EventID"
            onSearch={onSearch}
            style={{ width: 500 }}
          />
        </div>
        <Tabs className="tab" defaultActiveKey="1" onChange={callback}>
        
          <TabPane tab="All Events" key="1">
          
            <div className="main">
           
              <div class="events">
              {events.map((item) => (
                    <>
                <div class="card">
                  
                      <h2 class="name">{item.eventName}</h2>
                      <div class="title">{item.eventId}</div>
                      <div class="date_time">
                        <div class="date">
                          <i class="bi bi-calendar2-check"></i> &nbsp;{" "}
                          {item.eventDate}
                        </div>
                       
                      </div>
                      <div class="actions">
                        <div class="follow-info">
                          <h4>
                            <span>2 Hour Duration</span>
                          </h4>
                        
                        </div>
                        <div class="more-btn">
                          <a href="/eventdetail">
                            <button id="btn">More Details</button>
                          </a>
                        </div>
                      </div>
                   
                </div>
                </>
                  ))}
              </div>
            
            </div>
           
          </TabPane>

          <TabPane tab="Recents Events" key="2">
            <div className="main">
              <div class="events">
                <div class="card">
                  <h2 class="name">Recent Event Name</h2>
                  <div class="title">Event ID</div>
                  <div class="date_time">
                    <div class="date">
                      <i class="bi bi-calendar2-check"></i> &nbsp;27-03-2022
                    </div>
                    <div class="time">
                      <i class="bi bi-clock"></i> &nbsp;2 PM Onwards
                    </div>
                  </div>
                  <div class="actions">
                    <div class="follow-info">
                      <h2>
                        <a href="#">
                          <span>2 Hour</span>
                          <small>Duration</small>
                        </a>
                      </h2>
                      <h2>
                        <a href="#">
                          <span>240</span>
                          <small>Participants</small>
                        </a>
                      </h2>
                    </div>
                    <div class="more-btn">
                      <a href="/eventdetail">
                        <button id="btn">More Details</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Live Events" key="3">
            <div className="main">
              <div class="events">
                <div class="card">
                  <h2 class="name">Live Event Name</h2>
                  <div class="title">Event ID</div>
                  <div class="date_time">
                    <div class="date">
                      <i class="bi bi-calendar2-check"></i> &nbsp;27-03-2022
                    </div>
                    <div class="time">
                      <i class="bi bi-clock"></i> &nbsp;2 PM Onwards
                    </div>
                  </div>
                  <div class="actions">
                    <div class="follow-info">
                      <h2>
                        <a href="#">
                          <span>2 Hour</span>
                          <small>Duration</small>
                        </a>
                      </h2>
                      <h2>
                        <a href="#">
                          <span>240</span>
                          <small>Participants</small>
                        </a>
                      </h2>
                    </div>
                    <div class="more-btn">
                      <a href="/eventdetail">
                        <button id="btn">More Details</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Upcoming Events" key="4">
            <div className="main">
              <div class="events">
                <div class="card">
                  <h2 class="name">Upcoming Event Name</h2>
                  <div class="title">Event ID</div>
                  <div class="date_time">
                    <div class="date">
                      <i class="bi bi-calendar2-check"></i> &nbsp;27-03-2022
                    </div>
                    <div class="time">
                      <i class="bi bi-clock"></i> &nbsp;2 PM Onwards
                    </div>
                  </div>
                  <div class="actions">
                    <div class="follow-info">
                      <h2>
                        <a href="#">
                          <span>2 Hour</span>
                          <small>Duration</small>
                        </a>
                      </h2>
                      <h2>
                        <a href="#">
                          <span>240</span>
                          <small>Participants</small>
                        </a>
                      </h2>
                    </div>
                    <div class="more-btn">
                      <a href="/eventdetail">
                        <button id="btn">More Details</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
