import React from "react";
import { getActiveUsersByRole } from "./getActiveUsersByRole";

const Page = () => {
  const users = [
    { id: 1, name: "Alice", role: "admin", isActive: true },
    { id: 2, name: "Bob", role: "editor", isActive: false },
    { id: 3, name: "Charlie", role: "admin", isActive: true },
    { id: 4, name: "Dave", role: "admin", isActive: false },
    { id: 5, name: "Cat", role: "editor", isActive: true },
  ];

  console.log(getActiveUsersByRole(users, "admin"));

  return <div>Page</div>;
};

export default Page;
