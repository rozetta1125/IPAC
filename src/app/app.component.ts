import { Component } from '@angular/core';
import { Config } from './models/Config';
import { NasaService } from './services/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IPACVN';

  constructor(private nasaApi: NasaService){}

  QInput: String = "saturn wave";
  DescriptionInput: String

  public Collection: any;

  search(){
    this.nasaApi.Search(this.QInput,this.DescriptionInput).subscribe((response: Config)=>{
      this.Collection = response.collection;
      console.log(this.Collection)
    });

  }
}
