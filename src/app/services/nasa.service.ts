import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Config } from "../models/Config"


@Injectable({
  providedIn: "root",
})
export class NasaService {
  apiKey: string = "";

  constructor(private http: HttpClient) {}

  public Search(q,description): Observable<Config>{

    const URL = `https://images-api.nasa.gov/search?q=${q}`;
    return this.http.get<Config>(URL);
  }

}
