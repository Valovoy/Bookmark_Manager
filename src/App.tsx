import { Route, Routes } from 'react-router'
import Navigation from './components/Navigation/Navigation'
import { BookmarksProvider } from './context/BookmarksContext'
import QueryProvider from './context/QueryProvider'
import BookmarksPage from './pages/BookmarksPage'
import SearchPage from './pages/SearchPage'

import './App.css'

function App() {
  return (
    <QueryProvider>
      <Navigation />

      <BookmarksProvider>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
          </Routes>
        </div>
      </BookmarksProvider>
    </QueryProvider>
  )
}

export default App
