import React from "react";

const sidebarContent = [
  { title: "REFFERAL USER", Icon: "fa fa-address-book fa-2x", id: "1" },
  { title: "BILLING PLAN", Icon: "fa fa-money", id: "2" },
  { title: "CREDIT", Icon: "fa fa-credit-card", id: "3" },
  {
    title: "USER REFFERAL HIERARCHY",
    Icon: "fa fa-address-book-o fa-2x",
    id: "4",
  },
  {
    title: "DRIVER REFFERAL HIERARCHY",
    Icon: "fa fa-user-circle fa-2x",
    id: "5",
  },
  { title: "REFFERAL SETTING", Icon: "fa fa-gear fa-2x", id: "6" },
  { title: "NOTIFICATION", Icon: "fa fa-envelope-o", id: "5" },
  { title: "DELIVERY FEE", Icon: "fa fa-anchor fa-2x", id: "7" },
  { title: "TAX", Icon: "fa fa-university fa-2x", id: "8" },
  { title: "LOCATIONS", Icon: "fa fa-cubes fa-2x", id: "9" },
  { title: "GIFT TYPES", Icon: "fa fa-download fa-2x", id: "10" },
  {
    title: "USER ROLE MANAGEMENT",
    Icon: "fa fa-flag-checkered fa-2x",
    id: "11",
  },
  { title: "USER MANAGEMENT", Icon: "fa fa-gavel fa-2x", id: "12" },
];

const SideBar = () => {
  return (
    <div className="sidebar">
      {sidebarContent.map((functions) => (
        <div className="each-funtion" key={functions.id}>
          <i class={functions.Icon} aria-hidden="true"></i>
          <a href={"/" + functions.title}>{functions.title}</a>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
