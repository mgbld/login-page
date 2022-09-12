import "./App.css";
import Login from "./Login";

function App() {
  return (
    <section className='flex flex-row section-login'>
      <div className='basis-1/2 showcase'></div>
      <div className='flex flex-col items-center justify-center basis-1/2'>
        <div className='basis-2/12  mt-10 banner'></div>
        <div className='basis-10/12 mt-10'>
          <Login></Login>
        </div>
      </div>
    </section>
  );
}

export default App;
