const testFolder = './traits/';
const fs = require('fs');
const mergeImages = require('merge-images2')
const { Canvas, Image } = require('canvas')


const data = {
    accesories: {
        "EMPTY": 39.06,
        "ACC_GOLDEN_HORN": 13.5,
        "ACC_GOLDEN_BTC": 6.7,
        "ACC_GOLDEN_ETH": 11.25,
        "ACC_GOLDEN_HORN2": 0.99,
        "ACC_infinity_stone": 0.09,
        "ACC_PAJIRT": 5.29,
        "ACC_scar": 7.22,
        "ACC_SILVER_HORN": 15.98
    },
    background: {
        "ALEXANDRITE": 5.1,
        "AMETHYST": 5.1,
        "AQUAMARINE": 5.1,
        "BASIC": 7.00,
        "BG_AURA": 3.20,
        "BLACK_HEAVEN": 3.76,
        "BLUE_SAPPHIRE": 5.62,
        "CITRINE": 5.30,
        "COFFE": 5.07,
        "DARKNESS": 5.32,
        "DRY_LAND": 4.10,
        "EMERALD": 5.00,
        "FANTASY": 3.75,
        "FOREST": 3.50,
        "HEAVEN": 1.78,
        "HELL": 1.78,
        "HOLY_LAND": 3.00,
        "LIME": 5.00,
        "MAGICAL": 1.5,
        "MANGROOVE": 2.4,
        "PEARL": 5.00,
        "RUBY": 5.00,
        "SUNSET": 2.05,
        "UNIVERSE": 0.95,
        "YELLOW_TOPAZ": 4.86
    },
    body: {
        "BODY_ARMOR": 9.02,
        "BODY_captain": 8.4,
        "BODY_ethman_black_suit": 7.94,
        "BODY_ethman_suit": 7.53,
        "BODY_FULL_ARMOR": 7.1,
        "BODY_FUTURE": 6.50,
        "BODY_goku_suit": 6.1,
        "BODY_golden_suit": 5.90,
        "BODY_GREENWINGS": 5.50,
        "BODY_GREYTRACKSUIT": 5.30,
        "BODY_medieval_armor": 5.10,
        "BODY_OVERALL": 4.90,
        "BODY_pico_suit": 4.50,
        "BODY_PINK_army": 2.75,
        "BODY_police": 1.93,
        "BODY_rainbow_wings": 1.93,
        "BODY_RED_ARMYY": 1.9,
        "BODY_romanian": 1.32,
        "BODY_sweatshirt": 1.32,
        "BODY_TRACKSUIT": 1.32,
        "BODY_WHITEWINGS": 1.32,
        "BODY_xray_body": 1.32,
        "BODY_YELLOWWINGS": 1.32,
    },
    skin: {
        "SKIN_BLUE": 10.69,
        "SKIN_BROWN": 16.69,
        "SKIN_COW": 7.69,
        "SKIN_DEEPSEA": 10.69,
        "SKIN_DIAMOND": 1.40,
        "SKIN_GALAXY": 3.37,
        "SKIN_GOLD": 2.10,
        "SKIN_GRADATION": 6.1,
        "SKIN_LEOPARD": 5.96,
        "SKIN_MUTANT": 5.91,
        "SKIN_ORANGE": 4.42,
        "SKIN_PINK": 4.37,
        "SKIN_POLKADOT": 3.9,
        "SKIN_RAINBOW": 4.66,
        "SKIN_STONE": 5.54,
        "SKIN_ZEBRA": 6.66,
    },
    head: {
        "EMPTY": 19.40,
        "HEAD_ASTRONAUT": 2.45,
        "HEAD_BLACKWIZARD_HAT": 3.35,
        "HEAD_BLACK_DRAGON": 1.46,
        "HEAD_BRAIN": 2.45,
        "HEAD_CAP": 2.25,
        "HEAD_CAP_HODL": 1.15,
        "HEAD_CHEF_HAT": 2.05,
        "HEAD_CRAZY_CUP": 1.04,
        "HEAD_crown": 1.03,
        "HEAD_DARK_MASK": 3.0,
        "HEAD_dragon": 1.00,
        "HEAD_FUNGKY": 1.00,
        "HEAD_GOLDEN_LION": 3.80,
        "HEAD_halo": 3.70,
        "HEAD_hat": 1.00,
        "HEAD_INSTINCT": 3.20,
        "HEAD_JAPAN": 2.00,
        "HEAD_kamikaze": 2.54,
        "HEAD_LONG_HAT": 2.00,
        "HEAD_mediavel_helmet": 2.70,
        "HEAD_mushroom": 2.55,
        "HEAD_NARUETH": 3.45,
        "HEAD_NARUETH_RED": 1.44,
        "HEAD_old_wizard": 2.36,
        "HEAD_petrorian": 3.35,
        "HEAD_S": 4.25,
        "HEAD_SAMURAI": 2.24,
        "HEAD_square_army": 0.8,
        "HEAD_square_figures": 2.7,
        "HEAD_SS": 0.66,
        "HEAD_unicorn_colorfull": 4.60,
        "HEAD_VENDETTA": 3.51,
        "HEAD_WIZARD_BLUE_HAT": 3.45,
        "HEAD_xray_head": 2.41,
    },
    mouth: {
        "MOUTH_CHEWING_GUM": 14.9,
        "MOUTH_CIGARETTE": 12.53,
        "MOUTH_HALO": 11.7,
        "MOUTH_HOPE": 17.45,
        "MOUTH_LAZER": 2.4,
        "MOUTH_LAZER_BLUE": 6.4,
        "MOUTH_MED_MASK": 6.10,
        "MOUTH_MOUSTACHE": 6.05,
        "MOUTH_PIPE": 7.96,
        "MOUTH_RAINBOW": 1.91,
        "MOUTH_SURPRISE": 4.42,
        "MOUTH_TONG": 4.4,
        "MOUTH_VAMPIRE": 3.9,
    },
    eyes: {
        "EYES_DOLLAR": 9.53,
        "EYES_ANGRY": 13.97,
        "EYES_ANGRY_RED": 4.23,
        "EYES_BIG": 8.23,
        "EYES_BLUE_LAZER": 7.54,
        "EYES_BTC": 6.78,
        "EYES_CYBER": 6.62,
        "EYES_GREEN": 6.3,
        "EYES_HAPPY": 6.1,
        "EYES_illuminati": 5.98,
        "EYES_MONOCULO": 1.32,
        "EYES_ONE_EYE": 5.71,
        "EYES_OVER9000": 5.58,
        "EYES_PINK_LAZER": 2.18,
        "EYES_pirate": 1.93,
        "EYES_RED_LAZER": 1.93,
        "EYES_SUN_GLASSES": 1.9,
        "EYES_X": 4.34,
    }
}

const traits = {}
const images = {}
const results = []
const tokenIDs = []
const totalTokens = 9999
const generatedBulls = []
const generatedBackgrounds = []

const traitList = ["background", "skin", "body", "head", "eyes", "accesories", "mouth"]

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
          const totalByType = calculateTotal(data[type],key)
          total += totalByType
          totalByName[ key ] = totalByType 
          totalByPercent[ key ] = data[type][key]
          generated[ key ] = 0
        } 

        const resources = {
            imagesArray,
            totalByName,
            totalByPercent,
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

console.log(results)

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