// 技能
class Skill {
    name: string
    text: string
    isBold = false
    isItalic = false
    constructor(name: string, text: string) {
        this.name = name
        this.text = text
    }
}

// 插画
class Illastration {
    img: HTMLImageElement
    width: number = 0
    height: number = 0

    scale: number = 1.0
    x: number = 0
    y: number = 0

    isLoad: boolean = false

    constructor() {
        this.img = new Image();
    }

    import(path: string) {
        this.img.src = path
        this.img.onload = () => {
            this.width = this.img.width
            this.height = this.img.height
            this.isLoad = true
        }
    }
}

// 势力
export const Power = {
    wei: '魏',
    shu: '蜀',
    wu: '吴',
    qun: '群',
    shen: '神',
    jin: '晋'
}

export class Card {
    illastration: Illastration = new Illastration() // 插画
    x: number = 0
    y: number = 0
    w: number = 0
    h: number = 0
    scale: number = 100

    isProducer: boolean = false    // 是否绘制制作商
    isIllustrator: boolean = false // 是否绘制插画师
    isCardNum: boolean = false     // 是否绘制编号
    producer: string = '未知版权'    // 制作商
    illastrator: string = '未知画师' // 插画师
    cardNum: string = 'SP'         // 编号
 
    isTranslate: boolean = true    // 是否自动简繁转换
    title: string = '未知称号'      // 称号
    name: string = '劉備'              // 武将名
    
    power: string = Power.shu      // 势力
    isLord: boolean = false        //是否为主公
    heart: number = 4              // 体力值
    isHreatLimit: boolean = false  // 是否绘制体力上限
    hreatLimit: number = 4         // 体力上限

    numSkill: number = 0; // 技能数量
    skills: Skill[] = []  // 技能

    constructor() {
        this.numSkill = 2
        this.skills.push(new Skill('仁德', '出牌阶段每名角色限一次，你可以将任意张手牌交给一名其他角色。当你于此阶段以此法给出第二张牌时，你可以视为使用一张基本牌。'))
        this.skills.push(new Skill('激将', '主公技，当你需要使用或打出一张【杀】时，你可令其他蜀势力角色打出一张【杀】（视为由你使用或打出）。'))
    }

    addSkill() {
        this.skills.push(new Skill('', ''))
    }

    rmSkill(i: number=-1) {
        if (i > 0) {
            this.skills.splice(i, 1)
        } else {
            this.skills.splice(this.skills.length - 1, 1)
        }
        
    }
}