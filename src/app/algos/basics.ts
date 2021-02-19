export function Evolve(level: number, legendary: boolean): string {
    if (legendary == true) {
        return "legendaries don't evolve!"
    } else {
        if (level > 35) {
            return "it evolved!"
        } else {
            return "it needs more training!"
        }
    }
}

export function Basics():void{

    interface Pokemon {
        name:string,
        type:string,
        level:number
      }
      
      const arr:Pokemon[] = [];
      
      const pokemon1 = {
        name:"latios",
        type:"dragon",
        level:42
      }
      
      const pokemon2 = {
        name:"latias",
        type:"dragon",
        level:40
      }
      
      arr.push(pokemon1);
      arr.push(pokemon2);
      
      // console.log(arr);
      
      type MyPokemon = [string, string, number, boolean]
      
      type Style = string;
      
      const arr2:MyPokemon = ["latios", "latias", 36, false];
      
      console.log(arr2);
      
      console.log(Evolve(36,false));
}



