class Newcharacter < ApplicationRecord
  #Here is the new line of code
  validates :name, :age, :world, :enjoys, presence: true
  validates :enjoys, length: { minimum: 10 }
end
