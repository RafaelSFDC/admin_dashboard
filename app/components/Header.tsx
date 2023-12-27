import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="w-full bg-sky-400 p-3 flex items-center justify-center text-white text-bold text-2xl  drop-shadow">
      Admin Pannel
    </div>
  );
}

export default Header;
