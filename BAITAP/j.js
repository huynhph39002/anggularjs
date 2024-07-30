function saveGame() {
    localStorage.setItem('snakeGameState', JSON.stringify(game.getState()));
  }
  function loadGame() {
    const savedState = localStorage.getItem('snakeGameState');
    if (savedState) {
      game.setState(JSON.parse(savedState));
      game.init();
    }
  }