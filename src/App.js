
import { useContext, useEffect } from 'react';
import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import { AppContext } from './Context/AppContext';
import PageChange from './components/PageChange';

export const App = () => {
  const {fetchBlogs} = useContext(AppContext);

  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <div className="App">
     <Header />
     <BlogPage />
     <PageChange />

    </div>
  );
}

export default App;
