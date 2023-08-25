import { Route, Routes } from 'react-router-dom';
import Message from './components/Message';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>

  )
}

export default App
