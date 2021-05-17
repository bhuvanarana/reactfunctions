import Sidebar from './requriments/Sidebar'
import Navbar from './requriments/Navbar'
import Header from './requriments/Header'
import Learn from './requriments/Learn'
import Cards from './requriments/Cards'
import Footer from './requriments/Footer'

function App() {
  return(
    <div style={{display:"flex"}}>
      <Sidebar/>
      <div className="mainclass">
        <Navbar/>
        <Header/>
        <Learn/>
        <Cards/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
