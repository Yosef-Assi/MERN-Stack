const express = require("express");
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createRandomUser = () => {
  // console.log(faker.person)
    const newFake = {
      userId: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.number(),
    };
    return newFake;
};




const createRandomCompany = () => {
  // console.log(faker.person)
    const newFake = {
      compId: faker.datatype.uuid(),
      companyName: faker.company.name(),
      Address: [{"street":faker.address.street(),"city":faker.address.city(),"state":faker.address.state(),"zipcode":faker.address.zipCode(),"country":faker.address.country()}]
    };
    return newFake;
};
app.get("/api/users/new", (req, res) => {
  res.json( createRandomUser() );
  console.log( "the person :" + faker.vehicle.vehicle())
});

app.get("/api/companies/new", (req, res) => {
  res.json( createRandomCompany() );
});

app.get("/api/user/company", (req, res) => {
  const user = createRandomUser();
  const company = createRandomCompany();
  const userPlusCompany = {
    user,
    company
};
  res.json(userPlusCompany);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
const newFakeProduct = createRandomUser();
console.log(newFakeProduct);
const newFakeComp = createRandomCompany() ;
console.log(newFakeComp);
