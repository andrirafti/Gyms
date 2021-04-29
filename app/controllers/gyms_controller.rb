class GymsController < ApplicationController
  #######ANDRI:::: This will be good for future use if there are NO nested components###
before_action :set_gym, only:[:show,:update,:destroy]

def index
  #simple due to no nesting
  @gyms=Gym.all
  render json:@gyms, include: :trainers, status: :ok
end

# GET /users/1
def show
  render json:@gym
end

# POST /users

def create
  @gym = Gym.new(gym_params)
  if @gym.save
  render json: @gym,status: :created
  else
    render json: @gym.errors ,status: :unprocessable_entity
  end
end

# PUT AKA UPDATE /users/1
#Find the ID, and then update the id..
#Must use params always
def update
  #@user = User.find(params[:id])
  
  if @gym.update(gym_params)
  render JSON: @gym
  else
    render JSON: @gym.errors, status: :unprocessable_entity
end
end

# DELETE /users/1
#No rendering since we destroy it
def destroy
  #@user=User.find(params[:id])
  
  @gym.destroy
  puts "Destroyed"

end


#private is useful to keep here for our set_user
private
#this method finds a single user in the database
def set_gym
  @gym=Gym.find(params[:id])
end
#permit will ONLY  ALLOW YOU TO return name,age from the .user schema.. nothing else 
#.require will take in :user because we are in the user controller.. 
#require: if we were in post controller we should do params.require(:post)
def gym_params
  params.require(:gym).permit(:name,:address,:slogan,:img)
end

end
