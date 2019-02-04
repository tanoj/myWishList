import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { fetchArticles } from '../actions/article';
import {
  Cards,
  CardItem,
  CardImg,
  CardContent,
} from './styles';


class Details extends Component {
  constructor(props) {
    super(props);
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }
  

  componentDidMount() {
    let { requestArticles } = this.props;
    requestArticles();
  }

  navigateToHomePage() {
    const { history } = this.props;
    history.goBack();
  }

render() {
    let { item } = this.props;
      return (
        <Cards>
          <CardItem>
          {item &&
            <div>
              <CardImg src={item.urlToImage} alt="Sample photo" />
              <CardContent>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.url} target='_blank'>Go to Article Page</a>
                <button onClick={this.navigateToHomePage}>Back</button>
              </CardContent>
            </div>
          }
          </CardItem>
         </Cards>
      );
    }
}


const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 0);
  let item = state.articles.items.filter((m) => {
    return m.id === id;
  })[0];
  return {
    item,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestArticles() {
    dispatch(fetchArticles());
  },
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details));
