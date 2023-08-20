import { Component } from 'react';
import { fetchImage } from '../api';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
 import { toast } from 'react-hot-toast';
import { Button } from '../Button/Button';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchAndSetImages(this.state.query, this.state.page);
    }
  }

   fetchAndSetImages = async (query, page) => {
    console.log(query,page)
    try {
       const images = await fetchImage(query, page);
      this.setState({images});
      console.log(images)
     } catch (error) {
       toast.error('Error fetching images:', error);
     }
   };


  // fetchAndSetImages = async () => {
  //   const searchQuery = this.state.query;
  //   const nexPage = this.state.page;

  //   try {
  //     this.setState({ loading: true });
  //     const img = await fetchImage(searchQuery, nexPage);
  //     if (img.length) {
  //       this.setState(prevState => ({
  //         images: this.state.page > 1 ? [...prevState.images, ...img] : img,
  //       }));
       
  //       this.setState({ loading: false });
  //     } else {
       
  //       this.setState({ loading: false });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     this.setState({ loading: false });
  //   }
  // };




  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  handleSubmit = event => {
    console.log('Form submitted');
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
        <ImageGallery items={images} />
        <Button type='button' onClick={this.handleLoadMore}>
          Load more
        </Button>
       
      </Wrapper>
    );
  }
}