import React from 'react';
import '../Email/email.css';

const Email=()=>(
    <div className="ctr">
      <div className="myemail">
        <a href="mailto:kozovski.a@gmail.com?Subject=Hello%20again" target="_top">EMAIL</a>
      </div>
      <div className="myemail">
        <a href="http://www.github.com/rbtkoz">GITHUB</a>
      </div>
      <div className="myemail">
        <a href="http://www.linkedin.com/in/kozovski">LINKEDIN</a>
      </div>
    </div>
);


export default Email;
