import React from 'react';

const styles = {
    footer: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    font: {
      color: 'rgb(255, 194, 68)',
    }
};

class Footer extends React.Component {
  render() {
    return (
      <footer className="fixed-bottom" style={styles.footer}>
        <div className="container text-center">
          <small style={styles.font}> Copyright &copy; {this.props.appName} </small>
        </div>
      </footer>
    )
  }
};

export default Footer;
