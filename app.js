db.restaurant.find();

db.restaurant.find().limit(10).sort({name: 1});

db.restaurant.find({"_id": ObjectId("58bdc6dc796240fe74f27baf")});

db.restaurant.find({"borough": "Queens"});

db.restaurant.count();

db.restaurant.find({"address.zipcode":"11206"}).count();

db.restaurant.remove({"_id": ObjectId("58bdc6dc796240fe74f27baf")});

db.restaurant.update({"_id": ObjectId("58bdc6dc796240fe74f27bad")},{$set : {"name": "Bizz Bar Bang"}});

db.restaurant.updateMany({"address.zipcode": "10036"},{$set: {"address.zipcode":"10036"}});
