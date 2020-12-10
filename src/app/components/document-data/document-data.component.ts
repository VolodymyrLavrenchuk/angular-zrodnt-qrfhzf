import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
 import { Location } from "@angular/common";
import { DocumentService } from "../../services/document.service";
// import { FileSizePipe } from "../../pipes/file-size.pipe";
import { Document } from "../../models/document";
import { take } from 'rxjs/operators';

@Component({
  selector: "app-document-data",
  templateUrl: "./document-data.component.html",
  styleUrls: ["./document-data.component.css"]
})
export class DocumentDataComponent implements OnInit {
  document: Document;

  constructor(
    private route: ActivatedRoute,
    private docService: DocumentService,
    private location: Location
  ) { }

  ngOnInit(): void {
      this.docService.getDocument(+this.route.snapshot.params['id'])
          .pipe(take(1))
          .subscribe((document: Document) => this.document = document);
    };

  goBack(): void {
    this.location.back();
  }
}
