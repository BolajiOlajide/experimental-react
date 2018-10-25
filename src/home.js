import React, { Fragment, Component, lazy, Suspense } from 'react';
import { clearInterval } from 'timers';


const Counter = lazy(() => import('./counter'));


class Home extends Component {
  state = { time: '', ready: false }

  componentDidMount() {
    document.title = 'Experimental React';

    setInterval(() => {
      this.setState({ time: this.formatTime() }, () => {
        console.log('djsdks');
      });
    }, 1000);

    setTimeout(() => {
      this.setState({ ready: true }, () => {
        console.log('ready to display counter');
      });
    }, 5000);

    setTimeout(() => {
      throw new Error('I just feel like erroring lol! 💩');
      console.log('throwing error');
    }, 10000);

    return false;
  }

  componentWillUnmount() {
    clearInterval();
  }

  formatTime = () => {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  }

  renderCounter = () => {
    return (
      <Suspense fallback={<p>Loading Counter component</p>}>
        <Counter />
      </Suspense>
    );
  }

  componentDidCatch() {
    console.log('Error is thrown but I\'m smart enough to not let you know!')
    // return <h1>Error is thrown but I'm smart enough to not let you know!</h1>;
  }

  render() {
    return (
      <Fragment>
        {this.state.ready && this.renderCounter()}
        <h1>{this.state.time}  😜</h1>
      </Fragment>
    )
  }
}

export default Home;
