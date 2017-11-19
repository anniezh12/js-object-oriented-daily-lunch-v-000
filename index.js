
let store = {customers:[],deliveries:[],meals:[],employers:[]};
let employerId = 0,customerId = 0,mealId = 0,deliveryId = 0;

class Customer
{
  constructor(name,employer = {})
  {
    this.name = name;
    this.id = ++customerId;
    this.employerId = employer.id;
    store.customers.push(this);
  }

  meals()
  {
    return this.deliveries().map((delivery) => {return delivery.meal();});
  }

  deliveries()
  {
    return store.deliveries.filter((delivery) => {return delivery.customerId == this.id;});
  }

  totalSpent()
  { sum = 0;
     return this.meals
  }
}

class Meal
  {
    constructor(title,price)
    {
      this.id = ++mealId;
      this.title = title;
      this.price = price;
      store.meals.push(this);
    }

    deliveries()
    {
      return store.deliveries.filter(delivery => {return delivery.mealId == this.id;});
    }

    customers()
    {
      return this.deliveries().map(delivery => {return delivery.customer();});
    }

    // static byPrice()
    // {
    //   return store.meals.filter{(meal) => (meal.price);}.sort();
    // // }
   }

class Delivery
{
  constructor(meal= {},customer = {})
  {
     this.id = ++deliveryId;
     this.mealId = meal.id;
     this.customerId = customer.id;
     store.deliveries.push(this);
  }

  meal()
  {
    return store.meals.find(meal => {return meal.id == this.mealId;});
  }

  customer()
  {
    return store.customers.find((customer) => {return customer.id == this.customerId;});
  }

}

class Employer
 {
    constructor(name)
    {
       this.id = ++employerId;
       this.name = name;
       store.employers.push(this);
    }
    employees()
    {
      return store.customers.filter(customer => {return customer.employerId == this.id;});
    }

    deliveries()
    {
      return this.employees().map(customer => { return  customer.deliveries();});//deliveries() in Customer class method
    }
  }
