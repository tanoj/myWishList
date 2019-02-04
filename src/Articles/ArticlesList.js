import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { favouriteArticle } from '../actions/article';
import Snackbar from '@material-ui/core/Snackbar';
import { Table } from 'antd';

import {
  ContainerDiv,
  ContainerIn,
  ContentDiv,
  ItemDiv,
  AnchorDiv,
  Heading,
  ItemImg,
  FavouriteLink,
  AddedDiv,
} from './styles';

const columns = [{
  title: 'Id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Author',
  dataIndex: 'author',
  key: 'author',
}];


class ArticlesList extends Component {
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
    let { requestfavouriteArticle, history } = this.props;
    requestfavouriteArticle(item);
    this.setState({ open: true, vertical, horizontal });
    setTimeout(
      function() {
          this.setState({open: false});
          history.push('favourite');
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
    return (
      <ContainerDiv>
        <Heading>List Of Articles</Heading>
        <FavouriteLink onClick={this.navigateToFavouriteArticlePage}>View Favourite Article</FavouriteLink>
        <ContainerIn>
		{collection && collection.map((item) => {
          return (
            <ContentDiv key={item.id}>
              <ItemDiv>
                {item.title}
              </ItemDiv>
			<ItemImg src={item.urlToImage} />
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
</ContainerIn>
        <Table dataSource={collection} columns={columns}  pagination={{ pageSize: 5 }}/>
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


export default withRouter(connect(
  null,
  mapDispatchToProps,
)((ArticlesList)));
