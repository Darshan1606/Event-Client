import moment from "moment";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./PreEventstyle.css";
import axios from "axios";
import shortId from 'shortid'
import { Form, Input, Button, Select, DatePicker, TimePicker } from "antd";
import { url } from "../../serverUrl";
const { Option } = Select;

const PreEvent = () => {
  const [form] = Form.useForm();
  const [eUid, setEUid] = useState(shortId.generate())
  const [formLayout, setFormLayout] = useState("horizontal");

  const handleSubmit = async (event) => {
    // eslint-disable-next-line no-console
    console.log(event);
    try {
      const res = await axios.post(`${url}/preevent`, {
        eID: eUid,
        eName: event.eventName,
        eType: event.eventType,
        eDateF: event.eventDate,
        eDateT: event.eventTo,
        timeF: event.timeFrom,
        timeT: event.timeTo,
        locat: event.location,
        eLevel: event.eventLevel,
        orgIn: event.orgInst,
        dName: event.deptName,
        cName: event.cordName,
        cEmail: event.cordEmail,
        cNumber: event.cordNumber,
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  return (
    <div className="pre">
      <h1 className="eventLabel">Pre Event</h1>
      <hr /> <br />
      <Form
        className="container"
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={handleSubmit}
      >
        <div className="row">
          <div className="column">
            <Form.Item name="eventId" label="Event ID">
              <Input
                disabled
                type="text"
                defaultValue={eUid}
                placeholder="Event ID"
              />
            </Form.Item>
            <Form.Item name="eventName" label="Event Name">
              <Input placeholder="Event Name" />
            </Form.Item>
            <Form.Item name="eventType" label="Type of Event">
              <Select
                placeholder="Select type of Event"
                allowClear
              >
                <Option value="Webinar">Webinar</Option>
                <Option value="Seminar">Seminar</Option>
                <Option value="Confrence">Confrence</Option>
                <Option value="Technical">Technical</Option>
                <Option value="Nontechnical">Nontechnical</Option>
                <Option value="Cultural">Cultural</Option>
              </Select>
            </Form.Item>

            <Form.Item name="eventDate" label="Event Start Date">
              <DatePicker
                format="YYYY-MM-DD"
                disabledDate={disabledDate}
              />
            </Form.Item>
            <Form.Item name="eventTo" label="Event End Date">
              <DatePicker
                format="YYYY-MM-DD"
                disabledDate={disabledDate}
              />
            </Form.Item>

            <Form.Item name="timeFrom" label="Event Time From">
              <TimePicker
                use12Hours
                format="h:mm:ss A"
                onChange={onChange}
                style={{ width: 140 }}
              />
            </Form.Item>
            <Form.Item name="timeTo" label="Event Time To">
              <TimePicker
                use12Hours
                format="h:mm:ss A"
                onChange={onChange}
                style={{ width: 140 }}
              />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary">
                Create Event
              </Button>
            </Form.Item>
          </div>

          <div className="column">
            <Form.Item name="location" label="Event Location">
              <Select
                placeholder="Select Location of Event"
                allowClear
              >
                <Option value="Institute">Labs</Option>
                <Option value="University">Seminar Hall</Option>
                <Option value="International">Sports Ground</Option>
                <Option value="National">Central Loan</Option>
                <Option value="State">Outside University</Option>
              </Select>
            </Form.Item>

            <Form.Item name="eventLevel" label="Level of Event">
              <Select
                placeholder="Select Level Of Event"
                allowClear
              >
                <Option value="Institute">Institute</Option>
                <Option value="University">University</Option>
                <Option value="International">International</Option>
                <Option value="National">National</Option>
                <Option value="State">State</Option>
              </Select>
            </Form.Item>
            <Form.Item name="orgInst" label="Organising Institute">
              <Select
                placeholder="Select Organizing Institute"
                allowClear
              >
                <Option value="CSPIT">CSPIT</Option>
                <Option value="DEPSTAR">DEPSTAR</Option>
                <Option value="PDPIAS">PDPIAS</Option>
                <Option value="CMPICA">CMPICA</Option>
                <Option value="I2IM">I2IM</Option>
                <Option value="RPCP">RPCP</Option>
                <Option value="ARIP">ARIP</Option>
                <Option value="MTIN">MTIN</Option>
                <Option value="CIPS">CIPS</Option>
              </Select>
            </Form.Item>

            <Form.Item name="deptName" label="Department Name">
              <Select
                placeholder="Select Department Name"
                allowClear
              >
                <Option value="CSE">CSE</Option>
                <Option value="CE">CE</Option>
                <Option value="IT">IT</Option>
                <Option value="ME">ME</Option>
                <Option value="CL">CL</Option>
                <Option value="EC">EC</Option>
                <Option value="EE">EE</Option>
                <Option value="MBA">MBA</Option>
              </Select>
            </Form.Item>

            <Form.Item name="cordName" label="Cordinator Name">
              <Input
                placeholder="Enter Cordinator Name"
              />
            </Form.Item>
            <Form.Item name="cordEmail" label="Cordinator Email">
              <Input
                placeholder="Enter Cordinator Email"
              />
            </Form.Item>
            <Form.Item name="cordNumber" label="Cordinator Contact No.">
              <Input
                placeholder="Enter Cordinator Contact No."
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default PreEvent;
// eslint-disable-next-line no-undef
// ReactDOM.render(<FormLayoutDemo />, mountNode);
