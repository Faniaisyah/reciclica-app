import { StoreModule } from '@ngrx/store';
import { loadingReducer } from 'src/loading/loading.reducers';
import { loginReducer } from './login/login.reducers';

// Mendefinisikan AppStoreModule sebagai NgModule untuk mengimpor StoreModule
export const AppStoreModule = [
  StoreModule.forRoot({}, { metaReducers: [] }), // Definisikan reducer root jika ada
  StoreModule.forFeature('loading', loadingReducer), // Menambahkan fitur 'loading'
  StoreModule.forFeature('login', loginReducer) // Menambahkan fitur 'loading'
];
