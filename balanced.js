if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to balanced.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {

  balanced.configure('ak-test-1MqCfUZYtuJouaTedQHrAcmPJ2mj80hkz');
  var customer = balanced.marketplace.customers.create();
  var card = balanced.marketplace.cards.create({
      'number': '4111111111111111',
      'expiration_year': '2016',
      'expiration_month': '12',
      'cvv': '123'
  });
  card.associate_to_customer(customer).debit(760).then(function (debit) {
    // save the result of the debit
  }, function (err) {
    // record the error message
  });

  /**
  var Future = Npm.require("fibers/future");
  function extractFromPromise(promise) {
    var fut = new Future();
    promise.then(function (result) {
      fut["return"](result);
    }, function (error) {
      fut["throw"](error);
    });
    return fut.wait();
  }
  Meteor.methods({
    createCustomer: function () {
      balanced.configure(Meteor.settings.balancedPaymentsAPI);
      //console.log(balanced.marketplace.customers);
      var customer = balanced.marketplace.customers.create();
      
      return extractFromPromise(customer);
    }
  });
  Meteor.startup(function () {
    // code to run on server at startup
    
    console.log(balanced.marketplace);
    new balanced.MakeTestMarket(function(err, payments){
      console.log(err, payments, 'payments');
    });

    payments = new balanced({
      secret: "ak-test-zHHerxNh2lJ5Gl0xSMJIOT60V9V1tapm",
      marketplace_uri: "/v1/marketplaces/TEST-MP1CGhNZJRjKnrIlwXC6a6l7"
    });
    console.log(payments.Customers.balanced.toString());
    
    payments.Customers.create({}, function(err, customer){
      if(err)
        throw err;
      if(customer){
        console.log(EJSON.stringify(customer), 'customers');
      }
      payments.Cards.create({
          'card_number': '4111111111111111',
          'expiration_year': '2016',
          'expiration_month': '12',
          'cvv': '123'
      }, function(err, card){
        if(err)
          throw err;
        if(card){
          card.associate_to_customer(customer);
          console.log(EJSON.stringify(card), 'cards');
        }
        //.associate_to_customer(c).debit(500);
      });
    });
    payments.BankAccounts.create({
        "name": "Johann Bernoulli",
        "account_number": "9900000001",
        "routing_number": "121000358",
        "type": "checking"
    }, function(err, res, res2){
      if(err)
        console.error(err)
      if(res)
        console.log(EJSON.stringify(res), 'bank accounts');
    });
    //console.log(payments.BankAccounts.create.toString());
    //console.log(payments, 'zzzzzzzz');

  });
  */
}
