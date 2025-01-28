"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./page.module.scss";

import React from "react";

const FormLayout = () => {
  const schema = yup.object().shape({
    fistName: yup.string().required("Fist Name is Required"),
    lastName: yup.string().required("Last Name is Required"),
    email: yup.string().required("Email is Required"),
    phone: yup.number().positive().integer().required("Phone is Required"),
    address: yup.string().required("Address is Required"),
    subject: yup.string().required("Subject is Required"),
    message: yup.string().required("Message is Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className={styles.form_layout}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="firstname">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="Your First Name..."
              {...register("fistName")}
            />{" "}
            {errors.fistName?.message}
          </div>
          <div className="lastname">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Your Last Name..."
              {...register("lastName")}
            />{" "}
            {errors.lastName?.message}
          </div>
          <div className="femail">
            <label htmlFor=""> Email</label>
            <input
              type="email"
              placeholder="Your Email..."
              {...register("email")}
            />{" "}
            {errors.email?.message}
          </div>
          <div className="fphone">
            <label htmlFor="">Phone</label>
            <input
              type="number"
              placeholder="Your Phone..."
              {...register("phone")}
            />
            {errors.phone?.message}
          </div>
          <div className="faddress">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Your Address..."
              {...register("address")}
            />
            {errors.address?.message}
          </div>
          <div className="fsub">
            <label htmlFor="">Subject</label>
            <input
              type="text"
              placeholder="Your Subject..."
              {...register("subject")}
            />
            {errors.subject?.message}
          </div>
          <div className={styles.fmessage}>
            <label htmlFor="">Message</label>
            <input
              type="textarea"
              placeholder="Your Message..."
              {...register("message")}
            />
            {errors.message?.message}
          </div>

          <input type="submit" value="Please Wait..." />
        </form>
      </div>
    </div>
  );
};

export default FormLayout;
