import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

// import { BlogCreator } from './components/blog-creator/BlogCreator';
// import { AppRouter } from './components/router/AppRouter';
// import { Aside } from './components/ui/aside/Aside';

import './styles/styles.scss';
import { AppRouter } from './components/router/AppRouter';

export const BlogCreator = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
