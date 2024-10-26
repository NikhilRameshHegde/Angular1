import { Component } from '@angular/core';

@Component({
  selector: 'app-akatsuki',
  templateUrl: './akatsuki.component.html',
  styleUrls: ['./akatsuki.component.css']
})
export class AkatsukiComponent {
  name: string = "Nikhil"
  village: string = "Konoha"
  abilities: string = "Sharingan"
  quote: string = "It is what it is"

  selectedCharacter: any = null;

  characters: any[] = [{
    name: "Pain (Nagato)",
    village: "Amegakure",
    abilities: "Rinnegan, Six Paths of Pain",
    quote: "Feel pain. Contemplate pain. Accept pain."},
    {
      name: "Itachi Uchiha",
      village: "Konohagakure",
      abilities: "Sharingan, Mangekyo Sharingan",
      quote: "People live their lives bound by what they accept as correct and true."
    },
    {
      name: "Kisame Hoshigaki",
      village: "Kirigakure",
      abilities: "Samehada Sword, Water Style Jutsu",
      quote: "The weaker you are, the louder you bark."
    },
    {
      name: "Deidara",
      village: "Iwagakure",
      abilities: "Explosive Clay, C0 Suicide Bomb",
      quote: "Art is an explosion!"
    }
  ]

  selectCharacter(character: any) {
    this.selectedCharacter = character;
  }
}