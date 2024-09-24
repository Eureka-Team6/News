import Content from './components/Content';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
