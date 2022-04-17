// import React from "react";
// import "./EventListstyle.css";
// export const EventList = () => {
//   return (
//     <div className="main">
//       <h1 class="head">Upcoming Events</h1>
//       <div class="events">
//         <div class="card">
//           <h2 class="name">Event Name</h2>
//           <div class="title">Event ID</div>
//           <div class="date_time">
//             <div class="date">
//               <i class="bi bi-calendar2-check"></i> &nbsp;27-03-2022
//             </div>
//             <div class="time">
//               <i class="bi bi-clock"></i> &nbsp;2 PM Onwards
//             </div>
//           </div>
//           <div class="actions">
//             <div class="follow-info">
//               <h2>
//                 <a href="#">
//                   <span>2 Hour</span>
//                   <small>Duration</small>
//                 </a>
//               </h2>
//               <h2>
//                 <a href="#">
//                   <span>240</span>
//                   <small>Participants</small>
//                 </a>
//               </h2>
//             </div>
//             <div class="more-btn">
//               <a href="/eventdetail">
//                 <button id="btn">More Details</button>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div class="card">
//           <h2 class="name">Event Name</h2>
//           <div class="title">Event ID</div>
//           <div class="date_time">
//             <div class="date">
//               <i class="bi bi-calendar2-check"></i> &nbsp;27-03-2022
//             </div>
//             <div class="time">
//               <i class="bi bi-clock"></i> &nbsp;2 PM Onwards
//             </div>
//           </div>
//           <div class="actions">
//             <div class="follow-info">
//               <h2>
//                 <a href="#">
//                   <span>2 Hour</span>
//                   <small>Duration</small>
//                 </a>
//               </h2>
//               <h2>
//                 <a href="#">
//                   <span>240</span>
//                   <small>Participants</small>
//                 </a>
//               </h2>
//             </div>
//             <div class="more-btn">
//               <a href="/eventdetail">
//                 <button id="btn">More Details</button>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div class="card">
//           <h2 class="name">Event Name</h2>
//           <div class="title">Event ID</div>
//           <div class="date_time">
//             <div class="date">
//               <i class="bi bi-calendar2-check"></i> &nbsp;27-03-2022
//             </div>
//             <div class="time">
//               <i class="bi bi-clock"></i> &nbsp;2 PM Onwards
//             </div>
//           </div>
//           <div class="actions">
//             <div class="follow-info">
//               <h2>
//                 <a href="#">
//                   <span>2 Hour</span>
//                   <small>Duration</small>
//                 </a>
//               </h2>
//               <h2>
//                 <a href="#">
//                   <span>240</span>
//                   <small>Participants</small>
//                 </a>
//               </h2>
//             </div>
//             <div class="more-btn">
//               <a href="/eventdetail">
//                 <button id="btn">More Details</button>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div class="card">
//           <h2 class="name">Event Name</h2>
//           <div class="title">Event ID</div>
//           <div class="date_time">
//             <div class="date">
//               <i class="bi bi-calendar2-check"></i> &nbsp;27-03-2022
//             </div>
//             <div class="time">
//               <i class="bi bi-clock"></i> &nbsp;2 PM Onwards
//             </div>
//           </div>
//           <div class="actions">
//             <div class="follow-info">
//               <h2>
//                 <a href="#">
//                   <span>2 Hour</span>
//                   <small>Duration</small>
//                 </a>
//               </h2>
//               <h2>
//                 <a href="#">
//                   <span>240</span>
//                   <small>Participants</small>
//                 </a>
//               </h2>
//             </div>
//             <div class="more-btn">
//               <a href="/eventdetail">
//                 <button id="btn">More Details</button>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div class="card">
//           <h2 class="name">Event Name</h2>
//           <div class="title">Event ID</div>
//           <div class="date_time">
//             <div class="date">
//               <i class="bi bi-calendar2-check"></i> &nbsp;27-03-2022
//             </div>
//             <div class="time">
//               <i class="bi bi-clock"></i> &nbsp;2 PM Onwards
//             </div>
//           </div>
//           <div class="actions">
//             <div class="follow-info">
//               <h2>
//                 <a href="#">
//                   <span>2 Hour</span>
//                   <small>Duration</small>
//                 </a>
//               </h2>
//               <h2>
//                 <a href="#">
//                   <span>240</span>
//                   <small>Participants</small>
//                 </a>
//               </h2>
//             </div>
//             <div class="more-btn">
//               <a href="/eventdetail">
//                 <button id="btn">More Details</button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { Tabs, Input } from "antd";
import "./EventListstyle.css";
const { TabPane } = Tabs;
const { Search } = Input;
export const EventList = () => {
  function callback(key) {
    console.log(key);
  }
  const onSearch = (value) => console.log(value);

  return (
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
              <div class="card">
                <h2 class="name">All Event Name</h2>
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
  );
};
