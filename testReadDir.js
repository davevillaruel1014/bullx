const testFolder = './traits/';
const fs = require('fs');
const mergeImages = require('merge-images2')
const { Canvas, Image } = require('canvas')


const accesories = {
  "EMPTY":39.06,
  "ACC_GOLDEN_HORN":13.47,
  "ACC_GOLDEN_BTC":6.65,
  "ACC_GOLDEN_ETH":11.25,
  "ACC_GOLDEN_HORN2":0.99,
  "ACC_infinity_stone":0.09,
  "ACC_PAJIRT":5.29,
  "ACC_scar":7.22,
  "ACC_SILVER_HORN":15.98
}

const backgrounds = {
    "ALEXANDRITE":5.05,
    "AMETHYST":5.05,
    "AQUAMARINE":5.05,
    "BASIC":7.00,
    "BG_AURA":3.20,
    "BLACK_HEAVEN":3.76,
    "BLUE_SAPPHIRE":5.62,
    "CITRINE":5.30,
    "COFFE":5.03,
    "DARKNESS":5.32,
    "DRY_LAND":4.10,
    "EMERALD":5.00,
    "FANTASY":3.75,
    "FOREST":3.50,
    "HEAVEN":1.78,
    "HELL":1.78,
    "HOLY_LAND":3.00,
    "LIME":5.00,
    "MAGICAL":1.48,
    "MANGROOVE":2.38,
    "PEARL":5.00,
    "RUBY":5.00,
    "SUNSET":2.05,
    "UNIVERSE":0.95,
    "YELLOW_TOPAZ":4.86
}

const bodies = {
  "BODY_ARMOR":9.02,
  "BODY_captain":8.35,
  "BODY_ethman_black_suit":7.95,
  "BODY_ethman_suit":7.50,
  "BODY_FULL_ARMOR":7.05,
  "BODY_FUTURE":6.50,
  "BODY_goku_suit":6.05,
  "BODY_golden_suit":5.90,
  "BODY_GREENWINGS":5.50,
  "BODY_GREYTRACKSUIT":5.30,
  "BODY_medieval_armor":5.10,
  "BODY_OVERALL":4.90,
  "BODY_pico_suit":4.50,
  "BODY_PINK_army":2.72,
  "BODY_police":1.93,
  "BODY_rainbow_wings":1.93,
  "BODY_RED_ARMYY":1.88,
  "BODY_romanian":1.32,
  "BODY_sweatshirt":1.32,
  "BODY_TRACKSUIT":1.32,
  "BODY_WHITEWINGS":1.32,
  "BODY_xray_body":1.32,
  "BODY_YELLOWWINGS":1.32,
}

const skins = {
  "SKIN_BLUE":10.67,
  "SKIN_BROWN":16.67,
  "SKIN_COW":7.67,
  "SKIN_DEEPSEA":10.67,
  "SKIN_DIAMOND":1.40,
  "SKIN_GALAXY":3.37,
  "SKIN_GOLD":2.10,
  "SKIN_GRADATION":6.05,
  "SKIN_LEOPARD":5.96,
  "SKIN_MUTANT":5.91,
  "SKIN_ORANGE":4.42,
  "SKIN_PINK":4.37,
  "SKIN_POLKADOT":3.88,
  "SKIN_RAINBOW":4.66,
  "SKIN_STONE":5.54,
  "SKIN_ZEBRA":6.66,
}

const eyes = {
  "EYES_DOLLAR":9.52,
  "EYES_ANGRY":13.96,
  "EYES_ANGRY_RED":4.23,
  "EYES_BIG":8.23,
  "EYES_BLUE_LAZER":7.54,
  "EYES_BTC":6.76,
  "EYES_CYBER":6.62,
  "EYES_GREEN":6.30,
  "EYES_HAPPY":6.03,
  "EYES_illuminati":5.98,
  "EYES_MONOCULO":1.32,
  "EYES_ONE_EYE":5.71,
  "EYES_OVER9000":5.57,
  "EYES_PINK_LAZER":2.17,
  "EYES_pirate":1.93,
  "EYES_RED_LAZER":1.93,
  "EYES_SUN_GLASSES":1.88,
  "EYES_X":4.32,
}

const heads = {
  "EMPTY":19.40,
  "HEAD_ASTRONAUT":2.45,
  "HEAD_BLACKWIZARD_HAT":3.35,
  "HEAD_BLACK_DRAGON":1.46,
  "HEAD_BRAIN":2.45,
  "HEAD_CAP":2.25,
  "HEAD_CAP_HODL":1.16,
  "HEAD_CHEF_HAT":2.05,
  "HEAD_CRAZY_CUP":1.04,
  "HEAD_crown":1.03,
  "HEAD_DARK_MASK":3.02,
  "HEAD_dragon":1.00,
  "HEAD_FUNGKY":1.00,
  "HEAD_GOLDEN_LION":3.80,
  "HEAD_halo":3.70,
  "HEAD_hat":1.00,
  "HEAD_INSTINCT":3.20,
  "HEAD_JAPAN":2.00,
  "HEAD_kamikaze":2.55,
  "HEAD_LONG_HAT":2.00,
  "HEAD_mediavel_helmet":2.70,
  "HEAD_mushroom":2.55,
  "HEAD_NARUETH":3.45,
  "HEAD_NARUETH_RED":1.44,
  "HEAD_old_wizard":2.36,
  "HEAD_petrorian":3.35,
  "HEAD_S":4.25,
  "HEAD_SAMURAI":2.24,
  "HEAD_square_army":0.81,
  "HEAD_square_figures":2.71,
  "HEAD_SS":0.66,
  "HEAD_unicorn_colorfull":4.60,
  "HEAD_VENDETTA":3.51,
  "HEAD_WIZARD_BLUE_HAT":3.45,
  "HEAD_xray_head":2.41,
}

const mouth = {
  "MOUTH_CHEWING_GUM":14.89,
  "MOUTH_CIGARETTE":12.53,
  "MOUTH_HALO":11.67,
  "MOUTH_HOPE":17.45,
  "MOUTH_LAZER":2.40,
  "MOUTH_LAZER_BLUE":6.37,
  "MOUTH_MED_MASK":6.10,
  "MOUTH_MOUSTACHE":6.05,
  "MOUTH_PIPE":7.96,
  "MOUTH_RAINBOW":1.91,
  "MOUTH_SURPRISE":4.42,
  "MOUTH_TONG":4.37,
  "MOUTH_VAMPIRE":3.88,
}

const keys = (obj) => {
  let array = []
  for( let key in obj){
    array.push(key)
  }
  return array
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getImageName = (obj) => {
  const index = getRandomInt(0,obj.length)
  return obj[index]
}

for (var i = 0; i < 5; i++) {
  const backgroundArray = keys(backgrounds)
  const skinArray = keys(skins)
  const bodyArray = keys(bodies)
  const eyesArray = keys(eyes)
  const headsArray = keys(heads)
  const accesoriesArray = keys(accesories)

  const background = `traits/${ getImageName(backgroundArray) }.png`
  const skin = `traits/${ getImageName(skinArray) }.png`
  const body = `traits/${ getImageName(bodyArray) }.png`
  const eye = `traits/${ getImageName(eyesArray) }.png`
  const head = `traits/${ getImageName(headsArray) }.png`
  const accesory = `traits/${ getImageName(accesoriesArray) }.png`


  mergeImages([background,skin,body,head,eye,accesory], {
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
      accesories:accesory.replace("traits/","").replace(".png","")
    }
    fs.writeFile(`${token}.json`, JSON.stringify(data), (err) => {
      if (err) {
        console.log(err)  
      }
    })
  });
}