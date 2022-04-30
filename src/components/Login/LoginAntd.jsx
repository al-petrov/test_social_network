import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';

const LoginAntd = props => {
  console.log('LoginAnt');
  const onFinish = values => {
    props.login(values.username, values.password, values.remember);
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (props.isAuth) {
      message.success('Success!');
      props.history.push(props.redirectAddress || '/profile');
    }
  }, [props.isAuth]);

  useEffect(() => {
    if (props.loginErrors.length > 0) {
      for (let error of props.loginErrors) {
        message.error(error);
        props.deleteErrors(error);
      }
      props.deleteErrors();
    }
  }, [props.loginErrors]);

  return (
    <Form
      name="basic"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 4,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 10,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginAntd;
