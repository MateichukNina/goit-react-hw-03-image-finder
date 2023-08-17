import { Component } from 'react';
import { fetchImage } from './api';
import { Searchbar } from './Searchbar/Searchbar';
// import { Container } from "react-bootstrap";
//  import { Modal } from "./Modal/Modal";



// export class App extends Component{
//   state = {
//     todos: [],
//     filter: '',
//     showModal: false,
//   }

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal
//     }));
//   };

//   render(){

//     const { showModal} = this.state;

//     return(
//       <Container>
//         <button type="button" onClick={this.toggleModal}>Open modal</button>
//         {showModal && <Modal onClose={this.toggleModal}>
//         <img src="" alt="" />
//           <button type="button" onClick={this.toggleModal}>Close modal</button>
//           </Modal>}
//       </Container>
//     )
//   }
// }

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };


componentDidMount(){
  
}



componentDidUpdate(prevProps, prevState){
  if(prevState.query !== this.state.query || prevState.page !== this.state.page){
    const images = fetchImage();
    this.setState({images})
    
  }
}

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1
    });
  };


  handleSubmit = event => {
    event.preventDefault();
     this.changeQuery(event.target.elements.query.value);
    
    };
 
    handleLoadMore = () =>{
      this.setState(prevState => ({page: prevState.page + 1}))
    }

  render() {
    return (
      <div>
       <Searchbar onSubmit={this.handleSubmit}/>
        <div>Gallrey</div>
        <button type='button' onClick={this.handleLoadMore}>Load more</button>
      </div>
    );
  }
}
