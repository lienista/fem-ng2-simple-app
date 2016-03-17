import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from './about/about.component';
import {ExperimentsComponent} from './experiments/experiments.component';
import {HomeComponent} from './home/home.component';
import {Widgets} from './widgets/widgets.component';
import {StateService} from './common/state.service';
import {ExperimentsService} from './common/experiments.service';
import {WidgetsService} from './common/widgets.service';
import {PricingService} from "./common/pricing.service";


@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [StateService, ExperimentsService, WidgetsService, PricingService],
})
@RouteConfig([
  {path: '/home',        name: 'Home',        component: HomeComponent, useAsDefault: true },
  {path: '/about',       name: 'About',       component: AboutComponent },
  {path: '/experiments', name: 'Experiments', component: ExperimentsComponent },
  {path: '/widgets',     name: 'Widgets',     component: Widgets }
])
export class AppComponent {}
