import React from 'react';


class Button extends React.Component{ 
render () {
  console.log(this.props.text)
  return (
    <button className={this.props.className}>{this.props.text}</button>
  )
}

}

export default Button;