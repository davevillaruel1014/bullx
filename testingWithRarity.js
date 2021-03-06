const testFolder = './traits/';
const fs = require('fs');
const mergeImages = require('merge-images2')
const { Canvas, Image } = require('canvas')


const traits = {}
const images = {}
const results = []
const tokenIDs = []
const totalTokens = 9999
const generatedBulls = []
const generatedBackgrounds = []

const traitList = ["background", "skin", "body", "head", "eyes", "accesories", "mouth"]

const data = {
    accesories: {
        EMPTY: 3905,
        ACC_GOLDEN_HORN: 1349,
        ACC_GOLDEN_BTC: 669,
        ACC_GOLDEN_ETH: 1124,
        ACC_GOLDEN_HORN2: 98,
        ACC_infinity_stone: 8,
        ACC_PAJIRT: 528,
        ACC_scar: 721,
        ACC_SILVER_HORN: 1597
    },
    background: {
        ALEXANDRITE: 509,
        AMETHYST: 509,
        AQUAMARINE: 509,
        BASIC: 699,
        BG_AURA: 319,
        BLACK_HEAVEN: 375,
        BLUE_SAPPHIRE: 561,
        CITRINE: 529,
        COFFE: 506,
        DARKNESS: 531,
        DRY_LAND: 409,
        EMERALD: 499,
        FANTASY: 374,
        FOREST: 349,
        HEAVEN: 177,
        HELL: 177,
        HOLY_LAND: 299,
        LIME: 499,
        MAGICAL: 149,
        MANGROOVE: 239,
        PEARL: 499,
        RUBY: 499,
        SUNSET: 204,
        UNIVERSE: 94,
        YELLOW_TOPAZ: 485
    },
    body: {
        BODY_ARMOR: 901,
        BODY_captain: 839,
        BODY_ethman_black_suit: 793,
        BODY_ethman_suit: 752,
        BODY_FULL_ARMOR: 709,
        BODY_FUTURE: 649,
        BODY_goku_suit: 609,
        BODY_golden_suit: 589,
        BODY_GREENWINGS: 549,
        BODY_GREYTRACKSUIT: 529,
        BODY_medieval_armor: 509,
        BODY_OVERALL: 489,
        BODY_pico_suit: 449,
        BODY_PINK_army: 274,
        BODY_police: 192,
        BODY_rainbow_wings: 192,
        BODY_RED_ARMYY: 189,
        BODY_romanian: 131,
        BODY_sweatshirt: 131,
        BODY_TRACKSUIT: 131,
        BODY_WHITEWINGS: 131,
        BODY_xray_body: 131,
        BODY_YELLOWWINGS: 131
    },
    skin: {
        SKIN_BLUE: 1068,
        SKIN_BROWN: 1668,
        SKIN_COW: 768,
        SKIN_DEEPSEA: 1068,
        SKIN_DIAMOND: 139,
        SKIN_GALAXY: 336,
        SKIN_GOLD: 209,
        SKIN_GRADATION: 609,
        SKIN_LEOPARD: 595,
        SKIN_MUTANT: 590,
        SKIN_ORANGE: 441,
        SKIN_PINK: 436,
        SKIN_POLKADOT: 389,
        SKIN_RAINBOW: 465,
        SKIN_STONE: 553,
        SKIN_ZEBRA: 665
    },
    head: {
        EMPTY: 1939,
        HEAD_ASTRONAUT: 244,
        HEAD_BLACKWIZARD_HAT: 334,
        HEAD_BLACK_DRAGON: 145,
        HEAD_BRAIN: 244,
        HEAD_CAP: 224,
        HEAD_CAP_HODL: 114,
        HEAD_CHEF_HAT: 204,
        HEAD_CRAZY_CUP: 103,
        HEAD_crown: 102,
        HEAD_DARK_MASK: 299,
        HEAD_dragon: 99,
        HEAD_FUNGKY: 99,
        HEAD_GOLDEN_LION: 379,
        HEAD_halo: 369,
        HEAD_hat: 99,
        HEAD_INSTINCT: 319,
        HEAD_JAPAN: 199,
        HEAD_kamikaze: 253,
        HEAD_LONG_HAT: 199,
        HEAD_mediavel_helmet: 269,
        HEAD_mushroom: 254,
        HEAD_NARUETH: 344,
        HEAD_NARUETH_RED: 143,
        HEAD_old_wizard: 235,
        HEAD_petrorian: 334,
        HEAD_S: 424,
        HEAD_SAMURAI: 223,
        HEAD_square_army: 79,
        HEAD_square_figures: 269,
        HEAD_SS: 65,
        HEAD_unicorn_colorfull: 459,
        HEAD_VENDETTA: 350,
        HEAD_WIZARD_BLUE_HAT: 344,
        HEAD_xray_head: 240
    },
    mouth: {
        MOUTH_CHEWING_GUM: 1489,
        MOUTH_CIGARETTE: 1252,
        MOUTH_HALO: 1169,
        MOUTH_HOPE: 1744,
        MOUTH_LAZER: 239,
        MOUTH_LAZER_BLUE: 639,
        MOUTH_MED_MASK: 609,
        MOUTH_MOUSTACHE: 604,
        MOUTH_PIPE: 795,
        MOUTH_RAINBOW: 190,
        MOUTH_SURPRISE: 441,
        MOUTH_TONG: 439,
        MOUTH_VAMPIRE: 389
    },
    eyes: {
        EYES_DOLLAR: 952,
        EYES_ANGRY: 1396,
        EYES_ANGRY_RED: 422,
        EYES_BIG: 822,
        EYES_BLUE_LAZER: 753,
        EYES_BTC: 677,
        EYES_CYBER: 661,
        EYES_GREEN: 629,
        EYES_HAPPY: 609,
        EYES_illuminati: 597,
        EYES_MONOCULO: 131,
        EYES_ONE_EYE: 570,
        EYES_OVER9000: 557,
        EYES_PINK_LAZER: 217,
        EYES_pirate: 192,
        EYES_RED_LAZER: 192,
        EYES_SUN_GLASSES: 189,
        EYES_X: 433
    }
}


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getImageName = (trait) => {
    let generated = false
    const singleTrait = traits[trait]

    while(!generated){    
      const random = getRandomInt(0,singleTrait.imagesArray.length)

      const image = singleTrait.imagesArray[random]      

      const generatedByType = singleTrait.generated[image]
      const totalByType = singleTrait.totalByName[image]

      /*
      console.log(
        "generating",
        totalByType,
        generatedByType, 
        random, 
        singleTrait.imagesArray.length,
        image
      )*/

    
      if(generatedByType < totalByType) {
        generated = true
        singleTrait.generated[image]++
        return image
      }
      else {
        //console.log("removed",results)
        singleTrait.imagesArray = removeFromArray(singleTrait.imagesArray,singleTrait.imagesArray[random])
        results.push({name:singleTrait.imagesArray[random],totalByType,generatedByType})
      }
    }

}

const calculateTotal = (collection, name) => {
    return parseInt(collection[name] * 9999 / 100)
}

const calculateGenerated = (type, name) => {

    const generated = generatedBulls.filter((elem) => {
        return elem[type] === name
    })
    return generated.length
}

const removeFromArray = (typeArray, name) => {
    return typeArray.filter((elem) => {
        return elem !== name
    })
}

//console.log(results)
//console.log(generatedBackgrounds[generatedBackgrounds.length - 1])

const initTraits = () => {

    for (var i = 0; i < traitList.length; i++) {
        const type = traitList[i]
        const imagesArray = Object.keys(data[type])
        const totalByName = {}
        const totalByPercent = {}
        const generated = {}

        let total = 0

        for ( key in data[type]){
          const totalByType = data[type][key]
          total += totalByType 
          totalByName[ key ] = totalByType 
          
          generated[ key ] = 0
        } 

        const resources = {
            imagesArray,
            totalByName,
            generated,
            total
        }

        traits[type] = resources
    }
}

const generateBullsImages = () => {

  for(var i = 0; i < traitList.length;i++){
    const type = traitList[i]
    images[type] = []
  }

  for (var j = 0; j < traitList.length; j++) {
    for(var i = 0; i < totalTokens; i++){
    
      const type = traitList[j]
      const background = getImageName(type)
      images[type].push(background)
    }
  }
}


initTraits()
generateBullsImages()

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


shuffle(images["eyes"])

console.log(images["eyes"][9988])
console.log(images["eyes"][9989])
console.log(images["eyes"][9990])
console.log(images["eyes"][9991])
console.log(images["eyes"][9992])
console.log(images["eyes"][9993])
console.log(images["eyes"][9994])
console.log(images["eyes"][9995])
console.log(images["eyes"][9996])
console.log(images["eyes"][9997])
console.log(images["eyes"][9998])

return


for (var i = 0; i < totalTokens; i++) {

    const background = getImageName("background")
    /*
    const skin = getImageName(skinArray)
    const body = getImageName(bodyArray)
    const eye = getImageName(eyesArray) 
    const head = getImageName(headsArray)
    const accesory = getImageName(accesoriesArray)
    const mth = getImageName(mouthArray)*/

    const backgroundPath = `traits/${ background }.png`
    /*const skinPath = `traits/${ skin }.png`
    const bodyPath = `traits/${ body }.png`
    const eyePath = `traits/${ eye }.png`
    const headPath = `traits/${ head }.png`
    const accesoryPath = `traits/${ accesory }.png`
    const mthPath = `traits/${ mth }.png`*/



    /*
    generatedBulls.push(data)
    const data = {
        id: `${ i + 1}`,
        name: ``,
        background: background,
        /*skin:skin,
        body:body,
        eyes:eye,
        head:head,
        accesories:accesory,
        mouth:mth,
        attack: getRandomInt(1, 15)
    }
    mergeImages([background,skin,body,head,eye,accesory,mth], {
      Canvas: Canvas,
      Image: Image
    })
    .then(b64 => {
      var base64Data = b64.replace(/^data:image\/png;base64,/, "")

      const number = getRandomInt(0,1000)
      const token = `results/token#${ number }`
      
      fs.writeFile(`${token}.png`, base64Data, 'base64', function(err) {
        if (err) {
          console.log(err)  
        }
      })
      const data = {
        name: `Token #${ number }`,
        background:background.replace("traits/","").replace(".png",""),
        skin:skin.replace("traits/","").replace(".png",""),
        body:body.replace("traits/","").replace(".png",""),
        eyes:eye.replace("traits/","").replace(".png",""),
        head:head.replace("traits/","").replace(".png",""),
        accesories:accesory.replace("traits/","").replace(".png",""),
        mouth:mth.replace("traits/","").replace(".png",""),
        attack: getRandomInt(1,15)
      }
      fs.writeFile(`${token}.json`, JSON.stringify(data), (err) => {
        if (err) {
          console.log(err)  
        }
      })
    })
    */
}

for (var i = 0; i < generatedBulls.length; i++) {
  //if(generatedBulls[i].background === undefined )
  console.log(generatedBulls[i])
}

console.log(results)