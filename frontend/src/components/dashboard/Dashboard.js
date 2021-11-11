import classes from "./Dashboard.module.css";
import React, { useState } from "react";
import "./style.css";
import "antd/dist/antd.css";
import { Form, Radio, Modal, Input, Button, Checkbox } from "antd";

function Dashboard() {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    /* this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000); */
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h1 className={classes.mainPageHeading}>Project Budget Management</h1>

      <div className={classes.dashboardHead}>
        <div className="graph-1">12 Managing Project</div>
        <div className="graph-2">1,200,000 total</div>
      </div>

      <div class="dashboard-body">
        <div className={classes.projectContainer}>
          <div className={classes.projects}>
            Projects
            <Button type="primary" onClick={showModal}>
              Add
            </Button>
          </div>
          <div className={classes.listGroup}>
            <div
              className={
                (classes.listGroupItemAction,
                classes.listGroupItem,
                classes.listGroupItem2)
              }
            >
              <div className={classes.projectTitle}>
                RTF
                <div className={classes.projectDescription}>
                  Realtime Face Recognition.
                </div>
              </div>
              <div className={classes.projectBudget}>$12,000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Model">
        <Modal
          visible={visible}
          title="Add New Project Budget"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button
              form="myForm"
              htmlType="submit"
              key="submit"
              type="primary"
              //loading={loading}
              onClick={handleOk}
            >
              Submit
            </Button>,
          ]}
        >
          <Form
            id="myForm"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Project Name"
              name="projectName"
              rules={[
                {
                  required: true,
                  message: "Please input the Project's Name",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Budget"
              name="projectBudget"
              rules={[
                {
                  required: true,
                  message: "Please input the Project's Budget",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="projectDesc"
              rules={[
                {
                  required: true,
                  message: "Please input the Project's Descriptions",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );

  //Example: command to use to re-route on button click
  //window.location.replace("/Login");
}

export default Dashboard;
