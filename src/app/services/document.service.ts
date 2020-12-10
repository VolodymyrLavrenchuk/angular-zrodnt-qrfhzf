import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Document } from "../models/document";

@Injectable({ providedIn: "root" })
export class DocumentService {
  constructor(private httpClient: HttpClient) {}

  getDocuments(): Observable<Document[]> {
    return this.httpClient.get<Document[]>("./assets/documents.json");
  }

  getDocument(id: number): Observable<Document> {
    return this.getDocuments()
        .pipe(
            map((docs: Document[]) => docs.find(d => d.id === id))
        ) as Observable<Document>;
  }
}
