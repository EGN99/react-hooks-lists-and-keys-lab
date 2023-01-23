import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksList = links.map((link, index) =>
  {
    const href = `#${link}`;
     return <a key={index} href={href} >{link}</a>
  });

  return( 
  <nav>
    {linksList}
  </nav>
  );
}

export default NavBar;
