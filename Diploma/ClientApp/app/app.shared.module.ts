import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';

import { AgmOverlays } from "agm-overlays";
import { MapService } from './services/map/map.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        FetchDataComponent,
        HomeComponent,
        MapComponent
    ],
    providers: [
        MapService
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'map', component: MapComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        AgmOverlays,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD8NfCza0ZJpP6v6rwEbp_Sh7FrsHn6Mqo'
        })
    ]
})
export class AppModuleShared {
}
