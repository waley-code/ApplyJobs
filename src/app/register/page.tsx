"use client"

import { Form, Radio, Button, message } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import React from 'react'
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { SetLoading } from '@/redux/loadersSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const router = useRouter();
    const onFinish = async (values: any) => {
      try {
        dispatch(SetLoading(true));
        const response = await axios.post("/api/users/register", values);
        message.success(response.data.message);
        router.push("/");
      } catch (error: any) {
        message.error(error.response.data.message || "Something went wrong");
      } finally {
        dispatch(SetLoading(false));
      }
    };

  return (
    <div className="login-page flex justify-center h-screen items-center bg-primary">
      <div className="card p-5 w-450">
        <h1 className="text-xl">ApplyJobs - Register</h1>
        <hr />

        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-5"
          onFinish={onFinish}
        >
          <Form.Item label="Register As" name="userType">
            <Radio.Group>
              <Radio value="employer">Employer</Radio>
              <Radio value="employee">Employee</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name" name="name">
            <input type="text" className="input" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" className="input" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <input type="password" className="input" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Register
          </Button>

          <Link href="/login">Already have an account? Login</Link>
        </Form>
      </div>
    </div>
  );
}

export default Register