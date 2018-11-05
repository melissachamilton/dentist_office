class CreateResults < ActiveRecord::Migration[5.2]
  def change
    create_table :results do |t|
      t.string :Type
      t.string :Title
      t.string :Image_url
      t.string :Description
      t.references :appointment, foreign_key: true

      t.timestamps
    end
  end
end
