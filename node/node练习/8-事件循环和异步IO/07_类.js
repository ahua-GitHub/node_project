// 创建一个类
class Person {
    // constructor方法是类的默认方法，创建类的实例化对象时自动被调用，一个类必须要有一个constructor方法
    // 默认返回实例对象（this）
    constructor(name, age) {
            this.name = name
            this.age = age
        }
        // 原型方法（可以被所有实例访问）
    say() {
            console.log(`我的名字是${this.name},今年${this.age}岁`)
        }
        // 静态方法（只能由类本身访问）
    static foo() {
            console.log("我是类的静态方法")
        }
        // 静态属性（只能由类本身访问）
    static money = 100
}
// 创建实例
var p1 = new Person("阿花", 3)
var p2 = new Person("ahua", 4)
    // 访问实例属性
console.log(p1.name, p1.age) //阿花 3
console.log(p2.name, p2.age) //ahua 4
    // 修改实例属性
p1.age = 18
p2.age = 20
console.log(p1.name, p1.age) //阿花 18
console.log(p2.name, p2.age) //李四 20

// 访问原型方法
p1.say() //我的名字是阿花,今年18岁
p2.say() //我的名字是ahua,今年20岁
    // 类方法/静态属性（只能由类本身访问）
Person.foo() //"我是类的静态方法"
console.log(Person.money) //100
console.log(p1.title) //undefined
console.log(p2.title) //undefined


// Student类继承Person
class Child extends Person {
    // name,age,school就是创建时传入的参数
    constructor(name, age, height) {
            // super()是父类的构造器,将name和age传递给他
            super(name, age)
                // 添加新的实例属性，接收height参数（Child类可以有自己的实例属性）
            this.height = height
        }
        // 添加原型链方法
    weight() {
            console.log("我四十斤了")
        }
        // 添加类属性
    static money = 50
}
// 创建实例
var ch1 = new Child("阿花", 16, 180)
var ch2 = new Child("ahua", 18, 185)
    // 访问实例属性
console.log(ch1.name, ch1.age, ch1.height) //阿花 16 180
console.log(ch2.name, ch2.age, ch2.height) //ahua 18 185
    // 修改实例属性
ch1.age = 20
ch2.age = 22
console.log(ch1.name, ch1.age, ch1.height) //阿花 20 180
console.log(ch2.name, ch2.age, ch2.height) //ahua 22 185

// 访问原型链方法
ch1.say() //我的名字是阿花,今年20岁
ch2.say() //我的名字是ahua,今年22岁
ch2.weight() //我四十斤了
ch1.weight() //我四十斤了



// 子类的原型指向了父类
console.log(ch1)
    // Child { name: '阿花', age: 20, height: 180 }