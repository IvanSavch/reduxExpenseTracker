import Root from './containers/root'
import mainSaga from './sagas'
import HomeComp from './components/home';

export const moduleName = 'home';

export { default as reducer } from './reducer'

export const sagas = {
    mainSaga,
};


export const containers = {
    HomeComp,
    Root
};
