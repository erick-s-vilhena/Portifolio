import SectionContextProvider from "./context/SectionContext";
import HabilidadeContextProvider from './context/HabilidadeContext';

import Header from './components/Header/Header';
import Section from './components/Sections/Section';
import MenuLateral from './components/MenuLateral/MenuLateral';

function App() {
  return (
     <div className="App">
        <SectionContextProvider>
          <HabilidadeContextProvider>

            <Header/>

            <main>
              <Section/>
              <MenuLateral/>
            </main>

          </HabilidadeContextProvider>
        </SectionContextProvider>
     </div>
  )
}

export default App
