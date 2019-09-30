class CreateNewcharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :newcharacters do |t|
      t.string :name
      t.string :age
      t.string :world
      t.string :enjoys

      t.timestamps
    end
  end
end
