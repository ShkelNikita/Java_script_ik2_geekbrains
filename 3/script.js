class Hamburger {
    constructor(size = '' , stuffing= '') {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = []
        this.calculatePrice();
        this.calculateCalories()
    }
    addTopping(topping) {
        if(topping === "Приправа" || topping === "Майонез" ){
            this.toppings.push(topping)
        }else{
            console.log("Введено не существующий топпинг")
        }
    }
    removeTopping(topping) {
        const oldToppings = this.toppings;
        this.toppings = oldToppings.filter(oldTopping => oldTopping !== topping )
    }
    getToppings() {
        return this.toppings;
    }
    getSize() {
        return this.size;
    }
    getStuffing() {
        return this.stuffing
    }
    calculatePrice() {
        let price = 0;
        if (this.size === "Большой"){price += 100}
        else if (this.size === "Маленький"){price += 50}
        else(console.log("Не верно указан размер"))

        if (this.stuffing === "Сыр"){price += 10}
        else if (this.stuffing === "Салат"){price += 20}
        else if (this.stuffing === "Картофель"){price += 15}
        else (console.log("Неверно указана начинка"))

        if (this.toppings){
            for (let topping of this.toppings){
                if (topping === "Специи"){price += 15}
                else if(topping === "Майонез"){price +=20}
                else (console.log("Неверно указан топпинг"))
            }
        }

        return price
    }
    calculateCalories() {
        let calories = 0;
        if (this.size === "Большой"){calories += 40}
        else if (this.size === "Маленький"){calories += 20}
        else(console.log("Не верно указан размер"))

        if (this.stuffing === "Сыр"){calories += 20}
        else if (this.stuffing === "Салат"){calories += 5}
        else if (this.stuffing === "Картофель"){calories += 10}
        else (console.log("Неверно указана начинка"))

        if (this.toppings){
            for (let topping of this.toppings){
                if (topping === "Специи"){calories += 0}
                else if(topping === "Майонез"){calories +=5}
                else (console.log("Неверно указана топпинг"))
            }
        }

        return calories
    }
  }

  const CheeseBurger = new Hamburger("Большой" , "Сыр")
  console.log(CheeseBurger.calculatePrice())
  CheeseBurger.addTopping("Майонез")
  console.log(CheeseBurger.calculatePrice())
  console.log(CheeseBurger.calculateCalories())