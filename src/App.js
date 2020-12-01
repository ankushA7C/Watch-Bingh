import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    // Set the initial state to false. This allows the :empty psuedo selector as defined in https://css-tricks.com/building-skeleton-screens-css-custom-properties/ to do it's magic
    this.state = {
      cardContent: false
    };

    this.populateCardContent = this.populateCardContent.bind(this);
    this.resetCardContent = this.resetCardContent.bind(this);
  }
  resetCardContent = (event) => {
    this.setState({
      cardContent: false
    })
  }

  // This function mimics getting data from an api -- binding it to a button click so that you can easily toggle between the on and off state.
  populateCardContent = (event) => {
    const dummyCardData = {
      card: {
        avatarImage: "https://gravatar.com/avatar/f382340e55fa164f1e3aef2739919078?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png",
        avatarName: "Mathias Rechtzigel",
        cardTitle: "Minneapolis",
        cardDescription: "Winter is coming, and it will never leave",
        countComments: "52",
        countViews: "32"
      }
    }
    const cardContent = dummyCardData
    this.setState({
      cardContent
    })
  }
  render() {
    const { version } = React;

    return (
      <div className="container">
        {this.state.cardContent
          ?
          <button className="button--full" onClick={this.resetCardContent}>Click to Reset Card Content</button>
          :
          <button className="button--full" onClick={this.populateCardContent}>Click to Populate Card Content</button>
        }
        <div className="card-grid">
          <CardContainer />
          <CardContainer>
            {this.state.cardContent
              ?
              <CardContent
                avatarImage={this.state.cardContent.card.avatarImage}
                avatarName={this.state.cardContent.card.avatarName}
                cardTitle={this.state.cardContent.card.cardTitle}
                cardDescription={this.state.cardContent.card.cardDescription}
                countComments={this.state.cardContent.card.countComments}
                countViews={this.state.cardContent.card.countViews} />
              :
              null
            }

          </CardContainer>
        </div>
      </div>
    );
  }
}

class CardContainer extends React.Component {
  render() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <div className="card--content">
        <div className="card-content--top">
          <div className="card-avatar">
            <img
              className="card-avatar--image"
              src={this.props.avatarImage}
              alt="" />
            <span>{this.props.avatarName}</span>
          </div>
        </div>
        <div className="card-content--bottom">
          <div className="card-copy">
            <h1 className="card-copy--title">{this.props.cardTitle}</h1>
            <p className="card-copy--description">{this.props.cardDescription}</p>
          </div>
          <div className="card--info">
            <span className="card-icon">
              <svg className="card-icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.354 231.631C512.969 135.948 407.808 72 288 72 168.14 72 63.004 135.994 6.646 231.63a47.999 47.999 0 0 0 0 48.739C63.032 376.053 168.192 440 288 440c119.86 0 224.996-63.994 281.354-159.631a48.002 48.002 0 0 0 0-48.738zM416 228c0 68.483-57.308 124-128 124s-128-55.517-128-124 57.308-124 128-124 128 55.517 128 124zm125.784 36.123C489.837 352.277 393.865 408 288 408c-106.291 0-202.061-56.105-253.784-143.876a16.006 16.006 0 0 1 0-16.247c29.072-49.333 73.341-90.435 127.66-115.887C140.845 158.191 128 191.568 128 228c0 85.818 71.221 156 160 156 88.77 0 160-70.178 160-156 0-36.411-12.833-69.794-33.875-96.01 53.76 25.189 98.274 66.021 127.66 115.887a16.006 16.006 0 0 1-.001 16.246zM224 224c0-10.897 2.727-21.156 7.53-30.137v.02c0 14.554 11.799 26.353 26.353 26.353 14.554 0 26.353-11.799 26.353-26.353s-11.799-26.353-26.353-26.353h-.02c8.981-4.803 19.24-7.53 30.137-7.53 35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64z" /></svg>
              <span className="sr-only">Total views: </span>
              {this.props.countViews}
            </span>
            <span className="card-icon">
              <svg className="card-icon--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 64c123.5 0 224 79 224 176S379.5 416 256 416c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176m0-32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26 3.8 8.8 12.4 14.5 22 14.5 61.5 0 110-25.7 139.1-46.3 29 9.1 60.2 14.3 93 14.3 141.4 0 256-93.1 256-208S397.4 32 256 32z" /></svg>
              <span className="sr-only">Total comments: </span>
              {this.props.countComments}
            </span>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
