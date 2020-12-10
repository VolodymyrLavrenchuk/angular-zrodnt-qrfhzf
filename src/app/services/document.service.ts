import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { filter, map, tap, catchError } from "rxjs/operators";

import { Document } from "../models/document";

@Injectable({ providedIn: "root" })
export class DocumentService {
  constructor(private httpClient: HttpClient) {}

  getDocuments(): Observable<Document[]> {
    return this.httpClient.get<Document[]>("./assets/documents.json");
  }

  getDocument(id: number): Observable<Document> {
    return this.getDocuments().pipe(
      tap(data => console.log(data)),
      tap(data => console.log(id)),
      filter((data: any) => data.id == id),
      tap(data => console.log("after filter")),
      tap(data => console.log(data)),
      map(res => res),
      tap(data => console.log(data)),
      catchError(err => {
        console.error(err);
        return of("");
      })
    );
  }
}
