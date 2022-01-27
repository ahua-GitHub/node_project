// 每个函数创建时都会关联一个对象，那个对象就是他的原型
// const obj=new Object()
// 新建对象obj  obj的原型{}  {}==obj.prototype


// 每一个构造函数(函数也是一个对象)都有一个prototype的属性指向它的原型对象
// 构造函数animal  animal原型{}   {}==animal.prototype
function animal(weight) {
    this.weight = weight
}

animal.prototype.height = 10;
//实例化一个对象
// 每个实例都会从原型中继承属性
const cat = new animal()
console.log(cat.height)

// 每个实例都有一个属性__proto__指向该对象的原型
console.log(cat.__proto__ === animal.prototype)

// 每一个原型都有一个constructor的属性指向其关联的构造函数   cat.__proto__==animal.prototype都表示原型 
// 所以  cat.__proto__.constructor===animal.prototype.constructor===animal
console.log(cat.__proto__.constructor === animal)

// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。这样就形成了原型链
// 当属性找到顶层原型都没有属性那就是没有这个属性