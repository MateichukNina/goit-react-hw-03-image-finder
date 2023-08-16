import { Component } from "react";
import { Container } from "react-bootstrap";
 import { Modal } from "./Modal/Modal";


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export class App extends Component{
  state = {
    todos: [],
    filter: '',
    showModal: false,
  }


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };


  render(){
    console.log('App render')

    const { showModal} = this.state;

    return(
      <Container>
        <button type="button" onClick={this.toggleModal}>Open modal</button>
        {showModal && <Modal onClose={this.toggleModal}>
        <img src="" alt="" />
          <button type="button" onClick={this.toggleModal}>Close modal</button>
          </Modal>}
      </Container>
    )
  }
}