import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-card-screen',
  templateUrl: './flash-card-screen.component.html',
  styleUrls: ['./flash-card-screen.component.css']
})
export class FlashCardScreenComponent {

  flashCardData = [
    {char: "Session Storage Failed To Load/Missing Session Storage", romaji: ""},
  ]
  isFlipped: boolean = false;

  ngOnInit() {
    this.parseLocalStorageForFlashCardData()
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  parseLocalStorageForFlashCardData(){
    var flashCardDataAsString = sessionStorage.getItem("listToLearn")!
    const pairs = flashCardDataAsString.trim().split(';');
    const result = pairs.map(pair => {
      const [char, romaji] = pair.trim().split(' ');
      return { char, romaji };
    });
    this.flashCardData = result
    return result;
  }
}


// か ka ; き ki ; く ku ; け ke ; こ ko ; 