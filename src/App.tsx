import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles/global.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@store/store';
import { switchMode } from './reducers/AppSlice';
import React from 'react';
import useLang from './hooks/useLang';
import { fetchPosts } from './actions/AppActions';

function App() {
  const { t, i18n } = useTranslation();
  const { changeHtml } = useLang();
  const mode = useSelector((state: RootState) => state.App.mode);
  const apper = useSelector((state: RootState) => state.App);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchPosts());
    // Check for any existed theme mode and update it
    const siteMode = localStorage.getItem('site-mode');
    dispatch(switchMode(siteMode ? JSON.parse(siteMode) : 'dark'));
    // Chnage HTML dir onLaod
    changeHtml(i18n.language);
  }, []);

  return (
    <div className=" h-full" style={{ height: '100vh' }}>
      <NavBar />
      {JSON.stringify(apper)}
      <div
        onClick={() => i18n.changeLanguage(i18n.language == 'ar' ? 'en' : 'ar')}
      ></div>
      <div>
        <h1 className=" dark:bg-black dark:text-white text-center text-2xl my-5">
          {t('Welcome to React')}
        </h1>
      </div>
      <Routes>
        <Route path="contactus" element={<NavBar />}>
          <Route path=":id" />
        </Route>
      </Routes>
      <span
        onClick={() => dispatch(switchMode(mode == 'dark' ? 'light' : 'dark'))}
      >
        {mode}
      </span>
    </div>
  );
}

export default App;
