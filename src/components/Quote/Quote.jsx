import { PureComponent } from 'react';

const Quotes = [
  ['"Programming isn\'t about what you know; it\'s about what you can figure out.” - Chris Pine'],
  ['"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie'],
  ['"Sometimes it\'s better to leave something alone, to pause, and that\'s very true of programming." - Joyce Wheeler'],
  ['"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them." - Andrew Hunt'],
  ['"Testing leads to failure, and failure leads to understanding." - Burt Rutan'],
  ['"The best error message is the one that never shows up." - Thomas Fuchs'],
  ['“The most damaging phrase in the language is.. it\'s always been done this way” - Grace Hopper'],
];

class Quote extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      quote: '"Mathematics is not about numbers, equations, computations, or algorithms: it\'s about understanding" - William Paul Thurston',
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        quote: Quotes[Math.floor(Math.random() * Quotes.length)],
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { quote } = this.state;
    return (
      <div className="secondary-container">
        <div className="paragraph quote">{quote}</div>
      </div>
    );
  }
}

export default Quote;
