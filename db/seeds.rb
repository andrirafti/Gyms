# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@Retro=Gym.create!(name:'Retro Fitness',address:'Hylan BLVD, Staten Island,NY',img:"https://retrofitness.com/franchising/wp-content/uploads/2020/09/Retro-Fitness-CEO-on-Fox-News-Online.jpg",slogan:'Never Give Up')
@LAFit=Gym.create!(name:'LA Fitness',address:'Richmond AVE, Staten Island,NY',img:"https://upload.wikimedia.org/wikipedia/commons/f/f2/LA_Fitness_building.jpg",slogan:'Push Yourself!')
@CrunchFit=Gym.create!(name:'Crunch Fitness',address:'South AVE, Staten Island,NY',img:"https://myareanetwork-photos.s3.amazonaws.com/editorphotos/f/222950_20623_1486672252.jpg",slogan:'DONT UNDERESTIMATE YOURSELF!')
####
@Arnold=Trainer.create!(name:'Arnold',personality:'Tough',specialty:'Strength Gain',img:"https://i.pinimg.com/originals/17/26/84/172684605faa898d92d94a644acf56fc.jpg",gym:@CrunchFit)
@Steven=Trainer.create!(name:'Steven',personality:'Nice Guy',specialty:'Weight Loss',img:"https://img.freepik.com/free-photo/bodybuilder-showing-his-muscles_136403-5511.jpg?size=626&ext=jpg",gym:@LAFit)
@Lisa=Trainer.create!(name:'Lisa',personality:'Aggresive',specialty:'Weight Loss ',img:"https://images.unsplash.com/photo-1609899494145-417d7327ea9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGd5bSUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",gym:@Retro)
###
@Bob=Client.create!(name:"Bob",goal:"Lose weight!",trainer:@Arnold)
@Billy=Client.create!(name:"Billy",goal:"Gain Muscle!",trainer:@Steven)
@Jane=Client.create!(name:"Jane",goal:"Lose weight!",trainer:@Arnold)
@William=Client.create!(name:"William",goal:"Stay lean!",trainer:@Lisa)
@John=Client.create!(name:"John",goal:"Stay Strong!",trainer:@Arnold)


puts "#{Gym.count} Gyms have been found! With a total of #{Trainer.count} trainers to choose from! And we are proud to have #{Client.count} clients!"