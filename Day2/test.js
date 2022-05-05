class Fish {
    constructor(habitat, length) {
      this.habitat = habitat
      this.length = length
    }
    
    present(){
        console.log(`I live in the ${this.habitat} and I am ${this.length} long`)
    }
    
  }
  
class Trout extends Fish {
constructor(habitat, variety) {
    super(habitat)
    this.variety  = variety;
}

present(){
    console.log(`I live in the ${this.habitat}  and am a ${this.variety}`)
}
}
  
var fish = new Trout('water', 'whale');
fish.present();