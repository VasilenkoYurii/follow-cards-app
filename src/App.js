import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { TweetsPage } from 'pages/TweetsPage/TweetsPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
