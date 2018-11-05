class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.date :Date
      t.time :Time
      t.string :Service

      t.timestamps
    end
  end
end
