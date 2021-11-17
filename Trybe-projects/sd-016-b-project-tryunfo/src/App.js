import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.buttonValidation = this.buttonValidation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      // onInputChange=() => 'test',
      // onSaveButtonClick={ () => 'test'},
      cardSave: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;

    this.setState({
      [name]: value,

    }, this.buttonValidation);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    const cardIsTrunfo = cardTrunfo === true;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const newObj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare: '',
    };

    this.setState((currentState) => {
      const { cardSave } = currentState;
      const saveState = {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        hasTrunfo: { cardIsTrunfo },
        cardSave: [...cardSave, newObj],
      };
      return saveState;
    });
  }

  buttonValidation() {
    const maxPoints = 90;
    const minPoints = 0;
    const totalPoints = 210;
    const disableFalse = this.setState({ isSaveButtonDisabled: false });
    // const disableTrue = this.setState({ isSaveButtonDisabled: true });

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const sumAllAttrs = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if ((cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length !== 0)
      && cardAttr1 >= minPoints && cardAttr2 >= minPoints && cardAttr3 >= minPoints
      && cardAttr1 <= maxPoints && cardAttr2 <= maxPoints && cardAttr3 <= maxPoints
      && (sumAllAttrs <= totalPoints)) {
      return disableFalse;
    } this.setState({ isSaveButtonDisabled: true });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardSave,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <h1>Cartas Salvas </h1>
        { cardSave.map((card) => (
          <Card
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />))}
      </div>
    );
  }
}
export default App;
