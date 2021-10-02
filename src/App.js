import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './containers/Layout';
import MainPage from './pages/MainPage';
import School from './pages/School';
import Government from './pages/Government';
import Church from './pages/Church';
import Gallery from './pages/Gallery';
import News from './pages/News';
import History from './pages/History';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import paths from './shared/paths';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path={paths.main.wtelno} exact>
                        <MainPage />
                    </Route>
                    <Route path={paths.main.school}>
                        <School />
                    </Route>
                    <Route path={paths.main.government}>
                        <Government />
                    </Route>
                    <Route path={paths.church.churchInfo}>
                        <Church />
                    </Route>
                    <Route path={paths.gallery}>
                        <Gallery />
                    </Route>
                    <Route path={paths.news}>
                        <News />
                    </Route>
                    <Route path={paths.history}>
                        <History />
                    </Route>
                    <Route path={paths.contact}>
                        <Contact />
                    </Route>
                    <Route path={paths.notFound}>
                        <NotFound />
                    </Route>
                    <Redirect to="/nie-znaleziono-strony" />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
