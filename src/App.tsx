import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import MainContentContainer from './components/MainContentContainer/MainContentContainer';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import DirectoryTitle from './components/DirectoryTitle/DirectoryTitle';
import DirectorySubTitle from './components/DirectorySubTitle/DirectorySubTitle';
import TabMenu from './components/TabMenu/TabMenu';
import Grid from './components/Grid/Grid';
import Footer from './components/Footer/Footer';
import { State } from './Store/reducers/Reducer';

import './components/Theme/Theme.css';
import './components/Grid/Menu/Grid-Menu.css';
import withPathProp from './HOCs/withPathProp';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { getGitRepos } from './Store/requests';
import { useDispatch, useSelector } from 'react-redux';
import loadable from '@loadable/component';

const Blob = loadable(() => import('./components/Blob/Blob'));
const NotFound = loadable(() => import('./components/NotFound/NotFound'));

function App() {
  const dispatch = useDispatch();
  const repos = useSelector((state: State) => state.repos);
  const repoName = useSelector((state: State) => state.repoName);

  useEffect(() => {
    const fn = async () => {
      const reposList = await getGitRepos();
      dispatch({ type: 'SET_REPOS', repos: reposList });
      if (repoName.length === 0) {
        dispatch({ type: 'SET_REPO_NAME', repoName: reposList.data[0] });
      }
    };
    fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(repos), JSON.stringify(repoName)]);

  const GridWithPathProp = withPathProp(Grid as any, repoName);
  const BlobWithPathProp = withPathProp(Blob as any);

  return (
    <BrowserRouter>
      <Layout
        mix={[
          'Theme',
          { color: 'project-default', space: 'default', font: 'default' },
        ]}
      >
        <Header
          repoName={repoName}
          repos={repos ? repos.data : []}
          mix={['Layout-Container', { border: 'b', 'space-h': 'xxl' }]}
        />

        <MainContentContainer mix={['Layout-Container', { 'space-h': 'xxl' }]}>
          <Breadcrumbs path={window.location.pathname} mod={{ border: 'b' }} />

          <DirectoryTitle />
          <DirectorySubTitle />
          <TabMenu
            mod={{ border: 'b' }}
            mix={['Grid-Menu']}
            tabs={['FILES', 'BRANCHES']}
          />
          <Switch>
            <Route exact path="/tree/:path(.*)?" component={GridWithPathProp} />
            <Route exact path="/blob/:path(.+)" component={BlobWithPathProp} />
            <Redirect from="/" to="/tree/" />
            <Route component={NotFound} />
          </Switch>
        </MainContentContainer>
        <Footer mix={['Layout-Container', { border: 't', 'space-h': 'l' }]} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
