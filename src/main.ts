import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function log(message: string) {
  console.log(message);
}
let message = 'Test';
log(message); 

function recursiveBinarySearch(n: number, arr: any) {
  let mid = Math.floor(arr.length / 2);
}