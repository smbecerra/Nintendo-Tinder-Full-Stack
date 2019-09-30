class NewcharactersController < ApplicationController
    def index
        newcharacters = Newcharacter.all
        render json: newcharacters
    end

    def create
        # Create a new character
    newcharacter = Newcharacter.create(newcharacter_params)
    if newcharacter.valid?
   render json: newcharacter
    else
    render json: newcharacter.errors, status: :unprocessable_entity
    end
    # respond with our new character
    # render json: newcharacter
    end

    # Handle strong parameters, so we are secure
    def newcharacter_params
       params.require(:newcharacter).permit(:name, :age, :world, :enjoys)
    end
end
