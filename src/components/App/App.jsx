import { Component } from 'react';
import { fetchImage } from '../api';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
 import { toast } from 'react-hot-toast';
import { Button } from '../Button/Button';
import { Wrapper } from './App.styled';
import { GlobalStyle } from 'components/GlobalStyle';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

 

   async componentDidUpdate(prevPrpos, prevState) {
    if (
       prevState.query !== this.state.query ||
      prevState.page !== this.state.page
     ) {
      const img = await fetchImage(
         this.state.query.slice(this.state.query.indexOf('/') + 1),
         this.state.page
       );

       this.setState(prevState => ({
        images: [...prevState.images, ...img],
      }));
     }
   }




  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
     if (event.target.elements.query.value === '') {
     toast.error('Please enter a valid query');
       return;
     }
    this.changeQuery(event.target.elements.query.value);
     event.target.reset();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
     const { images } = this.state;
    
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        {images.length > 0 && (
          <Button type="button" onClick={this.handleLoadMore}>
            Load more
          </Button>
        )}
       <GlobalStyle/>
      </Wrapper>
    );
  }
}