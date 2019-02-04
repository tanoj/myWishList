import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { graphql, compose } from 'react-apollo';
import { favouriteArticle } from '../actions/article';
import Snackbar from '@material-ui/core/Snackbar';
import { listArtickesQuery } from '../queries/queries';


import {
  ContainerDiv,
  ContentDiv,
  ItemDiv,
  AnchorDiv,
  Heading,
  FavouriteLink,
  AddedDiv,
} from './styles';

class QueryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.navigateToDetailsPage = this.navigateToDetailsPage.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
    this.navigateToFavouriteArticlePage = this.navigateToFavouriteArticlePage.bind(this);
  }

  navigateToDetailsPage(articleId) {
    const { history } = this.props;
    history.push(`article/${articleId}`);
  }

  addToFavourite(item, vertical, horizontal) {
    let { requestfavouriteArticle } = this.props;
    requestfavouriteArticle(item);
    this.setState({ open: true, vertical, horizontal });
    setTimeout(
      function() {
          this.setState({open: false});
      }
      .bind(this),
      3000
    );
  }

  navigateToFavouriteArticlePage() {
    const { history } = this.props;
    history.push('favourite');
  }

  render() {
    let { collection } = this.props;
    const { open, vertical, horizontal  } = this.state;
    const { listArtickesQuery } = this.props;
    console.log(listArtickesQuery);
    return (
      <ContainerDiv>
        <Heading>List Of Article's</Heading>
        <FavouriteLink onClick={this.navigateToFavouriteArticlePage}>View Favourite Article's</FavouriteLink>
        {collection && collection.map((item) => {
          return (
            <ContentDiv key={item.id}>
              <ItemDiv>
                {item.title}
              </ItemDiv>
              <AnchorDiv onClick={() => this.navigateToDetailsPage(item.id)}> 
                Veiw Details 
              </AnchorDiv>
              {!item.favourite ? 
                <AnchorDiv onClick={() => this.addToFavourite(item, 'bottom', 'right' )}> 
                  Add to Favourite
                 </AnchorDiv> : 
                 <AddedDiv> 
                  Already added to Favourite List
                 </AddedDiv> 
              }
            </ContentDiv>
          );
        })}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Added to Favourite List</span>}
        />
      </ContainerDiv>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestfavouriteArticle(item) {
    dispatch(favouriteArticle(item));
  },
});


export default withRouter(compose(
  graphql(listArtickesQuery, { name: 'listArtickesQuery' }),
)(
  connect(null, mapDispatchToProps)(QueryList),
));