class CreateResults < ActiveRecord::Migration[5.2]
  def change
    create_table :results do |t|
      t.string :category
      t.string :title
      t.string :image_url
      t.string :description
      t.references :appointment, foreign_key: true

      t.timestamps
    end
  end
end
