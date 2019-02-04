import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import {
  ContainerDiv,
  ContentDiv,
  ItemDiv,
  Heading,
  FavouriteLink,
  ResetLink,
  AnchorDiv,
  ItemImg,
  ContainerIn,
} from './styles';


class FavouriteList extends Component {
  constructor(props) {
    super(props);
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
    this.navigateToDetailsPage = this.navigateToDetailsPage.bind(this);
    this.resetHistory = this.resetHistory.bind(this);
  }

  navigateToHomePage() {
    const { history } = this.props;
    history.push('articles');
  }
 
  navigateToDetailsPage(articleId) {
    const { history } = this.props;
    history.push(`article/${articleId}`);
  }


  resetHistory(props) {
    //const { history } = this.props;
  console.log("Reset the history");
  }


  render() {
    let { favourite } = this.props;
    return (
      <ContainerDiv>
        <Heading>List Of favourite Articles</Heading>
        <FavouriteLink onClick={this.navigateToHomePage}>Go Back</FavouriteLink>
        <ResetLink onClick={this.resetHistory}>Reset Favourites</ResetLink>
{favourite && favourite.map((item) => {
          return (
			<ContainerIn>
            <ContentDiv key={item.id}>
              <ItemDiv>
                {item.title}
              </ItemDiv>
              <ItemImg src={item.urlToImage} />
              <AnchorDiv onClick={() => this.navigateToDetailsPage(item.id)}> 
                Veiw Details 
              </AnchorDiv>

            </ContentDiv>
            </ContainerIn>
          );
        })}
      </ContainerDiv>
    );
  }
}


const mapStateToProps = (state) => ({
    favourite: state.favourite,
  });


export default withRouter(connect(
  mapStateToProps,
  null,
)(FavouriteList));

