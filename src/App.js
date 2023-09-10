import Canvas from "./Components/Canvas/Canvas";

function App() {

  const draw = (context, count) => {
    context.clearRect(0,0, context.canvas.width, context.canvas.height, )
    context.fillStyle = 'blue'
    context.fillRect(150 ,150 , 150, 150)
  }

  return (
    <div className="App">
      <Canvas draw={draw} width="800" height="500"/>
    </div>
  );
}

export default App;
