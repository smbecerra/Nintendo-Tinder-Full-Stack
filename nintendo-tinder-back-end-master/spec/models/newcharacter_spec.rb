require 'rails_helper'

    RSpec.describe Newcharacter, type: :model do

        it "should validate name" do
            newcharacter = Newcharacter.create
            expect(newcharacter.errors[:name]).to_not be_empty
        end

        it "should validate age" do
            newcharacter = Newcharacter.create
            expect(newcharacter.errors[:age]).to_not be_empty
        end

        it "should validate world" do
            newcharacter = Newcharacter.create
            expect(newcharacter.errors[:world]).to_not be_empty
        end

        it "should validate enjoys" do
            newcharacter = Newcharacter.create
            expect(newcharacter.errors[:enjoys]).to_not be_empty
        end
end
