import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { DocumentService } from "../../services/document.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { FileSizePipe } from "../../pipes/file-size.pipe";

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
  ) {}

  ngOnInit(): void {
    // this.docService.getDocument(1).subscribe((document: any) => {
    //   console.log(document);
    //   this.document = document;
    // });

    this.route.params.subscribe(routeParams => {
      const docId: number = +routeParams.id
      this.docService.getDocument(docId).subscribe((document: any) => {
        console.log(document);
        this.document = document;
      });
    });
  }

  goBack(): void {}
}
