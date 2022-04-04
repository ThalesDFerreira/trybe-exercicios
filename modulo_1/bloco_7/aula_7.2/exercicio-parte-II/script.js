const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// 1 - Agora você vai fazer alguns exercícios de fixação.
// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// *Note que o parâmetro da função já está sendo passado na chamada da função.

const customerInfo = (a) => {
  // const address = "address";
  const deliveryPerson = a.order.delivery.deliveryPerson; //Ana Silveira
  const customerName = a["name"]; // Rafael Andrade
  const customerPhone = a["phoneNumber"]; //11-98763-1416
  const street = a["address"].street; // Rua das Flores
  const number = a["address"].number; // 389
  const apartment = a["address"].apartment; // 701

  console.log(
    `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`
  );
};

customerInfo(order);

// 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// *Modifique o nome da pessoa compradora.
// **Modifique o valor total da compra para R$ 50,00.

const orderModifier = (a) => {
  const newBuyer = (a.name = "Luiz Silva"); // Luiz Silva
  const pizzas = Object.keys(a.order.pizza); // ["marguerita", "pepperoni"]
  const drinks = a.order.drinks.coke.type; // Coca-Cola Zero
  const newTotal = (a.payment.total = "50"); // 50

  console.log(
    `Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`
  );
};

orderModifier(order);
