class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :First_Name
      t.string :Last_Name
      t.string :Address
      t.string :Insurance

      t.timestamps
    end
  end
end
