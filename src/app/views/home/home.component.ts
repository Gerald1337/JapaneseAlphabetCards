import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HiraganaTranslationsService } from 'src/app/services/hiragana-translations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private hiraganaLearningService: HiraganaTranslationsService, private router: Router) { }

  startLearningEnabled:boolean = false
  randomizeOrder:boolean = false
  hiragana:any

  hiragana_vowels:any
  hiragana_k:any
  hiragana_s:any
  hiragana_t:any
  hiragana_n:any
  hiragana_h:any
  hiragana_m:any
  hiragana_y:any
  hiragana_r:any
  hiragana_w:any
  hiragana_g:any
  hiragana_z:any
  hiragana_d:any
  hiragana_b:any
  hiragana_p:any

  masterLearningList:any[] = []

  ngOnInit() {
    this.initGetHiragana().then(value=>{
      this.createCategories()
    })
  }

  initGetHiragana(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.hiraganaLearningService.getHiraganaTranslations().subscribe(
        hiraganasChars => {
          // do something with the hiraganas
          console.log("Got hiragana characters")
          this.hiragana = hiraganasChars;
          resolve(hiraganasChars); // resolve the Promise with the hiraganasChars value
        },
        error => {
          // handle the error
          console.log(error);
          reject(error); // reject the Promise with the error object
        }
      );
    });
  }

  createCategories(){
    this.hiragana_vowels = this.hiragana.vowels
    this.hiragana_k = this.hiragana.k
    this.hiragana_s = this.hiragana.s
    this.hiragana_t = this.hiragana.t;
    this.hiragana_n = this.hiragana.n;
    this.hiragana_h = this.hiragana.h;
    this.hiragana_m = this.hiragana.m;
    this.hiragana_y = this.hiragana.y;
    this.hiragana_r = this.hiragana.r;
    this.hiragana_w = this.hiragana.w;
    this.hiragana_g = this.hiragana.g;
    this.hiragana_z = this.hiragana.z;
    this.hiragana_d = this.hiragana.d;
    this.hiragana_b = this.hiragana.b;
    this.hiragana_p = this.hiragana.p;
  }

  startLearning(){
    this.setLocalStorageWithFlashCardData()
    this.router.navigate(['/learning']);
    
  }

  modifyLearningList(input:any){
    input.forEach((character: { char: any; romaji: any; })=>{
      const index = this.masterLearningList.findIndex((item) => item.char === character.char && item.romaji === character.romaji);
      if (index !== -1) {
        this.masterLearningList.splice(index, 1);
      } else {
        this.masterLearningList.push(character);
      }
    })

    this.checkIfStartLearningButtonNeedsTobeEnabled()
  }

  checkIfStartLearningButtonNeedsTobeEnabled(){
    if(this.masterLearningList.length <= 0){
      console.log("here")
      this.startLearningEnabled = false
    }
    else{
      this.startLearningEnabled = true
    }
  }

  setLocalStorageWithFlashCardData(){
    var masterListAsString = ""
    this.masterLearningList.forEach((letter)=>{
      console.log(letter.char + " " + letter.romaji)
      masterListAsString = masterListAsString + letter.char + " " + letter.romaji + " ; "
    })

    sessionStorage.setItem("listToLearn", masterListAsString)
  }
  
}
