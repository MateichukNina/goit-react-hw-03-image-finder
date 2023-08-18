import { Component } from 'react';
import { fetchImage } from './api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Toaster, toast } from 'react-hot-toast';
import { Button } from './Button/Button';




export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      const images = fetchImage(this.state.query, this.state.page);
      this.setState({ images });
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
    if (event.target.elements.query.value.trim() === '') {
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
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery/>
        <Button type='button' onClick={this.handleLoadMore}>
          Load more
        </Button>
        <Toaster/>
      </div>
    );
  }
}