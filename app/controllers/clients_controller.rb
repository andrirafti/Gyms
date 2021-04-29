class ClientsController < ApplicationController
  before_action :set_client, only:[:show,:update,:destroy]
  # GET /users
  ### MAKE SURE JSON: always ligted up blue!!!######
  def index
    #deeply nested... so starts with gyms,goes to trainers,goes to clients.
    #since clients belongs to trainer we use trainer here..
    #but in trainers_controller the trainers belongs to gyms so gyms is used orignally.
    @trainer=Trainer.find(params[:trainer_id])
    @clients=Client.where(trainer_id: @trainer.id)
    render json:@clients, status: :ok
  end

  # GET /users/1
  def show
    render json:@client
  end

  # POST /users
  
  def create
    # puts params[:trainer_id] this will fetch the trainer_id from trainers_container for THE SPECEFIC person you are on 
    # trainer_id = params[:trainer_id]
    # temp_params = client_params   # make client_params into temp_params because for some reason client_params cant grab trainer_id
    # temp_params[:trainer_id] = trainer_id # now we take  temp_params(client_params)[13 aka trainer_id] and equal it to trainer_id
    #  @client = Client.new(temp_params)
     @client = Client.new(client_params)

    if @client.save
    render json: @client,status: :created
    else
      render json: @client.errors ,status: :unprocessable_entity
    end
  end

  # PUT AKA UPDATE /users/1
  def update
    if @client.update(client_params)
    render json: @client
    else
      render json: @client.errors, status: :unprocessable_entity
  end
end

  # DELETE /users/1
  def destroy    
    @client.destroy
    puts "Destroyed"

  end


  private
  #this method finds a single user in the database
  def set_client
    @client=Client.find(params[:id])
  end
  #permit will ONLY  ALLOW YOU TO return name,age from the .user schema.. nothing else 
  #.require will take in :client because we are in the clients controller.. 
  #require: if we were in trainers controller we should do params.require(:trainer)
  def client_params
    #reason i am putting trainer_id is because this is nested! and trainer is its father.
    #if you look at trainers gym_id is in there becasue gym is that ones father. 
    trainer_id = params[:trainer_id]

    #trainer_id is what we need to find since its the father of this repo..
    #so to make a create a client we must FIND the ID of the trainer  to be that specefic IDS
    #child.

    params.require(:client).permit(:name,:goal).merge(trainer_id: trainer_id) 
    #using merge since there was an issue with trainer_id using permit.. so do it this way 
  end
end
