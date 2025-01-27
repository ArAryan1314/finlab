import React from "react";
import styles from "./faqdata.module.scss";
import { CiCircleChevDown } from "react-icons/ci";

const FaqData = () => {
  const ArrayData = [
    {
      id: 1,
      heading: "How does Saas world make money",
    },

    {
      id: 2,
      heading: "Can i sell already made solutions?",
    },
    {
      id: 3,
      heading: "What is the top rated program?",
    },

    {
      id: 4,
      heading: "How does Saas world make money",
    },

    {
      id: 5,
      heading: "How does Saas world make money",
    },
  ];

  return (
    <div>
      {ArrayData.map((task) => (
        <div className={styles.view}>
          {task.heading} <CiCircleChevDown />
        </div>
      ))}
    </div>
  );
};

export default FaqData;
