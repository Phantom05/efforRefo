import React, {Component} from 'react';
import './Head.css'

class Head extends Component{
  state={

  }


  render(){
    console.log('render')
    return(
      <div className="head">
        <ul className="head__ul">
          <li className="head__box">Comtent
          </li>
          <li className="head__box">Comtent
          </li>
          <li className="head__box">Comtent
          </li>
        </ul>
        <div className="yeah"></div>
      </div>
    )
  }
}

export default Head;