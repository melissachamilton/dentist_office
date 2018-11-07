class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.date :date
      t.time :time
      t.string :service
      t.references :user, foreign_key: true
      t.references :provider, foreign_key: true

      t.timestamps
    end
  end
end