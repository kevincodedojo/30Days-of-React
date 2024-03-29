import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
