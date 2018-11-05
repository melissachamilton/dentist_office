class CreateProviders < ActiveRecord::Migration[5.2]
  def change
    create_table :providers do |t|
      t.string :First_Name
      t.string :Last_Name
      t.string :Title
      t.string :Role
      t.references :appointment, foreign_key: true

      t.timestamps
    end
  end
end
