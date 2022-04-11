// import React from 'react';
import React, { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const pagesDialog = lazy(() => import('./pages/pagesDialog/pagesDialog'));

const RoutesUrl = () => {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/dialog" component={pagesDialog} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default RoutesUrl;
