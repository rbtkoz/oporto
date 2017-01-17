/**
 * Created by alex.kozovski on 1/13/17.
 */
import React from 'react';
import '../Section/section.css';


var Section=React.createClass({

  render: function() {
    var color=this.props.color;
    console.log(color);

    return(
      <div className="ctr">
      <div className={color}>

          <div className="vertical-text">{this.props.title}</div>
        </div>
        </div>
    );
  }
});

export default Section;
