import React, { useState } from "react";
import { url } from "../../serverUrl";
import axios from "axios";
import shortId from "shortid";
import "antd/dist/antd.css";
// import "./PreEventstyle.css";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const PostEvent = () => {
  const [form] = Form.useForm();
  const [eUid, setEUid] = useState(shortId.generate());
  const [formLayout, setFormLayout] = useState("horizontal");

  const handleSubmit = async (event) => {
    // eslint-disable-next-line no-console
    console.log(event);
    try {
      const res = await axios.post(`${url}/postEvent`, {
        pId: eUid,
        pName: event.eventName,
        pDate: event.eventDate,
        pDateTo: event.eventTo,
        plocation: event.location,
        pDesc: event.eDesc,
        pnoOfStud: event.noOfStud,
        pspeakName: event.speakName,
        pspeakEmail: event.speakEmail,
        pspeakNumber: event.speakNumber,
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }



  return (
    <div className="pre">
      <h1 className="eventLabel">Post Event</h1>
      <hr /> <br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={handleSubmit}
      >
        <div className="row">
          <div className="column">
            <Form.Item label="Event ID">
              <Input type="text" placeholder="Event ID" defaultValue={eUid} />
            </Form.Item>
            <Form.Item name="eventName" label="Event Name">
              <Input placeholder="Event Name" />
            </Form.Item>

            <Form.Item name="eventDate" label="Event Start Date">
              <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} />
            </Form.Item>
            <Form.Item name="eventTo" label="Event End Date">
              <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} />
            </Form.Item>

            <Form.Item name="location" label="Event Location">
              <Select placeholder="Select Location of Event" allowClear>
                <Option value="Institute">Labs</Option>
                <Option value="University">Seminar Hall</Option>
                <Option value="International">Sports Ground</Option>
                <Option value="National">Central Loan</Option>
                <Option value="State">Outside University</Option>
              </Select>
            </Form.Item>

            <Form.Item name="speakName" label="Speaker's Name">
              <Input placeholder="Enter Cordinator Name" />
            </Form.Item>
            <Form.Item name="speakEmail" label="Speaker's Email">
              <Input placeholder="Enter Cordinator Email" />
            </Form.Item>
            <Form.Item name="speakNumber" label="Speaker's Contact No.">
              <Input placeholder="Enter Cordinator Contact No." />
            </Form.Item>
            <Form.Item label="Speaker's Photo">
              <Input type="file" placeholder="Enter Speaker's Photo" />
            </Form.Item>

            <Form.Item name="noOfStud" label="No. of Student Participents">
              <Input
                type="number"
                placeholder="Enter No. of Student Participents"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Post Event
              </Button>
            </Form.Item>
          </div>
          <div className="column">
            <Form.Item name="eDesc" label="Event Description">
              <TextArea showCount maxLength={1000} onChange={onChange} />
            </Form.Item>
            <Form.Item label="Events Photo"></Form.Item>
            {/* <Form.List
              name="names"
              rules={[
                {
                  validator: async (_, names) => {
                    if (!names || names.length < 2) {
                      return Promise.reject(new Error("At most 5 photos"));
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0
                        ? formItemLayout
                        : formItemLayoutWithOutLabel)}
                      label={index === 0 ? "Photos" : ""}
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please upload more photos from here.",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          type="file"
                          placeholder="Evet Photo"
                          style={{ width: "60%" }}
                        />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "60%" }}
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>

                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List> */}

            <Form.Item label="Event Poster Photo">
              <Input type="file" placeholder="Enter Event Poster Photo" />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default PostEvent;
