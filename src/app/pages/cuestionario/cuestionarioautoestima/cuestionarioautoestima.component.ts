import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cuestionarioautoestima',
  templateUrl: './cuestionarioautoestima.component.html',
  styleUrls: ['./cuestionarioautoestima.component.css']
})
export class CuestionarioautoestimaComponent implements OnInit {

  constructor(private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  autoestimaForm = this.fb.group({
    autoestima1: [''],
    autoestima2: [''],
    autoestima3: [''],
    autoestima4: [''],
    autoestima5: [''],
    autoestima6: [''],
    autoestima7: [''],
    autoestima8: [''],
    autoestima9: [''],
    autoestima10: [''],
  });

  calcular() {
    //alert(JSON.stringify(this.autoestimaForm.value));
  }

}
