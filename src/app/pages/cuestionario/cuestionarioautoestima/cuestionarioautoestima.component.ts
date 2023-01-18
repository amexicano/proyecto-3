import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

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
    autoestima1: ['', Validators.required],
    autoestima2: ['', Validators.required],
    autoestima3: ['', Validators.required],
    autoestima4: ['', Validators.required],
    autoestima5: ['', Validators.required],
    autoestima6: ['', Validators.required],
    autoestima7: ['', Validators.required],
    autoestima8: ['', Validators.required],
    autoestima9: ['', Validators.required],
    autoestima10: ['', Validators.required],
  });

  calcular() {
    alert(JSON.stringify(this.autoestimaForm.value))
    if (this.autoestimaForm.invalid) {
      return false;
    }

    let respuestas = [
      this.autoestimaForm.value.autoestima1,
      this.autoestimaForm.value.autoestima2,
      this.autoestimaForm.value.autoestima3,
      this.autoestimaForm.value.autoestima4,
      this.autoestimaForm.value.autoestima5,
      this.autoestimaForm.value.autoestima6,
      this.autoestimaForm.value.autoestima7,
      this.autoestimaForm.value.autoestima8,
      this.autoestimaForm.value.autoestima9,
      this.autoestimaForm.value.autoestima10
    ];

    return false;
  }

}
