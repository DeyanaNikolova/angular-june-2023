import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // Promise Demo 
//   const p = new Promise(resolve => {
//     resolve(100);
//   });

//   p.then(data=>{
//     console.log(data);
//   });


// Observable Demo
//   const o$ = new Observable<number>((obs)=>{
//     obs.next(1000);
//     obs.next(2000);
//     obs.next(3000);

//     obs.error(new Error('bad error'));

//     return ()=>{
//       // cleanup
//     }
//   });

// o$.pipe(map((num: number) => num + 1)).subscribe({
//   next: console.log,
//   error: (err)=> console.error(`Error: ${err}`),
//   complete: ()=>console.log('Obs completed!')
// });

// function interval(delay: number, counter?: number){
//   let count = 0;
//   return new Observable((obs)=>{
//     if(count === counter){
//       obs.complete();
//       return;
//     }
//     const i = setInterval(()=>{
//       obs.next(count++);
//     }, delay);

//     return ()=>{
//       clearInterval(i);
//     }
//   });
// }

// const subscribtion = interval(1000, 8).subscribe({
//   next: console.log,
//   error: (err)=>console.error(`Error: ${err}`),
//   complete: ()=> console.log('Obs completed!'),
// });


// setTimeout(() => {
//   subscribtion.unsubscribe();
// }, 3000);

// Subject Demo
const subj$$ = new Subject();
subj$$.subscribe(console.log);
subj$$.next(123);
subj$$.subscribe(console.log);
subj$$.subscribe(console.log);
subj$$.next(400);
// subj$$.subscribe({
//   next: console.log,
//   error: (err)=>console.error(`Error: ${err}`),
//   complete: ()=> console.log('Obs completed!'),
// })