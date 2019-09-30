require 'rails_helper'

describe "Characters API", type: :request do
    it "gets a list of Characters" do
        # Create a new character in the test database (not the same development)
        Newcharacter.create(name: 'Samus', age: '28', world: 'Metroid', enjoys:'Being a mercenary')

        #Make a request to the API
        get '/newcharacters'

        # Convert the response into a Ruby hash
        json = JSON.parse(response.body)

        # Assure that we got a successful response
        expect(response).to have_http_status(:ok)

        # Assure that we got one result back as expected
        expect(json.length).to eq 1
    end

    it "creates a newcharacter" do
    # The params we are going to send with the request
    newcharacter_params = {
      newcharacter: {
        name: 'Pikachu',
        age: '10',
        world: 'Kanto',
        enjoys: 'Electrocuting my trainer Ash'
      }
    }

    # Send the request to the server
    post '/newcharacters', params: newcharacter_params

    # Assure that we get a success back
    expect(response).to have_http_status(:ok)

    # Look up the newcharacter we expect to be created in the Database
    new_character = Newcharacter.first

    # Assure that the created newcharcter has the correct attributes
    expect(new_character.name).to eq('Pikachu')
  end

      it "doesn't create a newcharacter without a name" do
      newcharacter_params = {
        newcharacter: {
          age: '4',
          world: 'mushroom kingdom',
          enjoys: 'life'
        }
      }

      post '/newcharacters', params: newcharacter_params

      # This is a new test to make sure that our status is correct when the record can't be created
      # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      expect(response.status).to eq 422

      # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
      json = JSON.parse(response.body)
      # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
      expect(json['name']).to include "can't be blank"
    end

    it "doesn't create a newcharacter without an age" do
    newcharacter_params = {
      newcharacter: {
        name: 'wario',
        world: 'mushroom kingdom',
        enjoys: 'farting'
      }
    }

    post '/newcharacters', params: newcharacter_params

    # This is a new test to make sure that our status is correct when the record can't be created
    # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    expect(response.status).to eq 422

    # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['age']).to include "can't be blank"
    end

    it "doesn't create a newcharacter without a world" do
    newcharacter_params = {
      newcharacter: {
        name: 'wario',
        age: '70',
        enjoys: 'farting'
      }
    }

    post '/newcharacters', params: newcharacter_params

    # This is a new test to make sure that our status is correct when the record can't be created
    # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    expect(response.status).to eq 422

    # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['world']).to include "can't be blank"
    end

    it "doesn't create a newcharacter without an enjoys" do
    newcharacter_params = {
      newcharacter: {
        name: 'wario',
        age: '70',
        world: 'mushroom kingdom'
      }
    }

    post '/newcharacters', params: newcharacter_params

    # This is a new test to make sure that our status is correct when the record can't be created
    # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    expect(response.status).to eq 422

    # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['enjoys']).to include "can't be blank"
    end
end
