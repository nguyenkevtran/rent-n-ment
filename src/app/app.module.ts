import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StarRatingModule } from 'ionic3-star-rating';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { LoginRegisterPage } from '../pages/login-register/login-register';
import { UserPage } from '../pages/user/user';
import { MediaProvider } from '../providers/media/media';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../pipes/pipes.module';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { ProductProvider } from '../providers/product/product';
import { AddProductPage } from '../pages/add-product/add-product';
import { RegisterLoginPage } from '../pages/register-login/register-login';
import { LoadingProvider } from '../providers/loading/loading';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { MenuPage } from '../pages/menu/menu';
import { Geolocation } from '@ionic-native/geolocation';
import { MapsPage } from '../pages/maps/maps';
import { GoogleMapComponent } from '../components/google-map/google-map';
import { LocationProvider } from '../providers/location/location';
import { Chooser } from '@ionic-native/chooser';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductDetailsPage,
    LoginRegisterPage,
    RegisterLoginPage,
    UserPage,
    AddProductPage,
    EditProfilePage,
    MenuPage,
    GoogleMapComponent,
    MapsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    PinchZoomModule,
    IonicModule.forRoot(MyApp),
    StarRatingModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductDetailsPage,
    LoginRegisterPage,
    RegisterLoginPage,
    UserPage,
    AddProductPage,
    EditProfilePage,
    MenuPage,
    MapsPage,
  ],

  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
   { provide: ErrorHandler, useClass: IonicErrorHandler },
    MediaProvider,
    ProductProvider,
    LoadingProvider,
    Facebook,
    LocationProvider,
    Chooser,

  ]
})
export class AppModule {}
