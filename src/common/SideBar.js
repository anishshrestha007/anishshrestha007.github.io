import React, { useState, useEffect } from "react";
import "../css/sidebar.css";
export default function SideBar() {
  return (
    <div orientation="right" className="right-sidebar">
      <div className="right-sidebar-email">
        <a href="mailto:anishronnie@gmail.com">anishronnie@gmail.com</a>
      </div>
    </div>
  );
}
