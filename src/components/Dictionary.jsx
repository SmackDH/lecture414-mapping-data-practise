import React from "react";
import emoji from "../emojipedia"




function Dictionary(props) {
    return <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
           {props.meaning}
          </dd>
        </div>
      </dl>
}

export default Dictionary;