import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ProfTest } from './components/ProfTest';
import { TestInfo } from './components/TestInfo';
//import { TestResult } from './components/TestResult';
import { ProfTestQuiz } from './components/ProfTestQuiz';



export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/profTest' component={ProfTest} />
    <Route path='/testInfo/:id' component={TestInfo} />
    <Route path='/quiz/:id' component={ProfTestQuiz} />

</Layout>;

