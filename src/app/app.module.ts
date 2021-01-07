import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Importar rutas
import { routes } from './app.routes';

//pipes
import { NoimagePipe } from './core/pipes/noimage.pipe';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//Interceptors
import { BasicHttpInterceptor } from './core/helpers/basic-http.interceptor ';
import { ErrorHttpInterceptor } from './core/helpers/error-http.interceptor ';
import { SafeDomPipe } from './core/pipes/safe-dom.pipe';
import { ErrorComponent } from './components/shared/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    SafeDomPipe,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicHttpInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
