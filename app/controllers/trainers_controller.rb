class TrainersController < ApplicationController
  #####Andri : This is how we will do stuff when its nested.. Main difference is CREATE.. we add a merge functionality.////
  before_action :set_trainer, only:[:show,:update,:destroy]
  # GET /users
  # User is the name because our MODEL WE ARE USING HERE is called User....
  #Params is always going to be used for everything EXCEPT for the get method aka index
  def index
    #since trainers is conncected to gym
    #find the gym where the id of gym is equal to the trainer
    #SO THIS WILL TARGET SPECEFIC PEOPLE WHOS GYM.ID IS EQUAL TO TRAINER gym_id
    @gym=Gym.find(params[:gym_id])
    @trainers=Trainer.where(gym_id: @gym.id)
    render json: @trainers, include: :clients, status: :ok
  end

  # GET /users/1
  def show
    render json:@trainer
  end
  # POST /users
  def create 
    # gym_id=params[:gym_id]
    # #make a new param which HOLDS the ID of the gym... 
    # temp_params = trainer_params
    # temp_params[:gym_id] = gym_id
    # @trainer = Trainer.new(temp_params)
    @trainer = Trainer.new(trainer_params)

    if @trainer.save
      render json: @trainer, status: :created
    else
      render json: @trainer.errors, status: :unprocessable_entity
    end
  end

  # PUT AKA UPDATE /users/1
  #Find the ID, and then update the id..
  #Must use params always
  def update
    #@user = User.find(params[:id])
    
    if @trainer.update(trainer_params)
    render json: @trainer
    else
      render json: @trainer.errors, status: :unprocessable_entity
  end
end

  # DELETE /users/1
  #No rendering since we destroy it
  def destroy
    #@user=User.find(params[:id])
    
    @trainer.destroy
    puts "Destroyed"

  end


  #private is useful to keep here for our set_user
  private
  #this method finds a single user in the database
  def set_trainer
    @trainer=Trainer.find(params[:id])
  end
  #permit will ONLY  ALLOW YOU TO return name,age from the .user schema.. nothing else 
  #.require will take in :user because we are in the user controller.. 
  #require: if we were in post controller we should do params.require(:post)
  def trainer_params
    params.require(:trainer).permit(:name,:personality,:specialty,:img).merge(gym_id: params[:gym_id] )
  end
end
