import { Component, OnInit } from '@angular/core';
import { HospedeService } from '../shared/hospede.service';

@Component({
  selector: 'app-hospedes',
  templateUrl: './hospedes.component.html',
  // styleUrls: ['./hospedes.component.css']
})
export class HospedesComponent implements OnInit {

  hospedes$: [];

  constructor(private hs: HospedeService) { }

  submitted: boolean;
  formControls = this.hs.form.controls;
  showSuccessMessage: boolean;

  ngOnInit() {
    this.hs.getHospedes().subscribe(
      hs => this.hospedes$ = hs.content
    );
  }

  onSubmit() {
    this.submitted = true;
      let result = this.hs.postHospede(this.hs.form.value);
      console.log(result);
      if (result) {
        this.showSuccessMessage = true;
        this.submitted = false;
        setTimeout(() => {
          this.showSuccessMessage = false
        }, 3000);
        this.hs.form.reset();
      }
    window.location.reload();
  }

}
