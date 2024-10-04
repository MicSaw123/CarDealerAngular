import { Component } from '@angular/core';
import {CarColorDto} from "../../DataTransferObjects/Cars/CarColorDto";
import {FormControl, FormGroup } from '@angular/forms';
import {CarColorApiService} from "../../CarDealerAngular.ApiHandlers/Cars/CarColorApi.service";
import {ErrorResponse} from "../../Responses/ErrorResponse";

@Component({
  selector: 'app-carcolor',
  templateUrl: './carcolor.component.html',
  styleUrls: ['./carcolor.component.css']
})
export class CarcolorComponent {
  carColor = new CarColorDto();
  carColorForm!: FormGroup;

  constructor(private carColorService: CarColorApiService) {
    this.carColorForm = new FormGroup({
      'Name': new FormControl(null)
    })
  }

  addCarColor(carColorDto: any) {
    let obj  = new CarColorDto();
    obj = {
      Name: "Purple"
    }
    let formData = new FormData();
    formData.append("Name", carColorDto.Name);
    this.carColorService.AddCarColor(formData).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (response: ErrorResponse) =>{
        console.log(response);
      }
    })
  }
}
