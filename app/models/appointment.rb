class Appointment < ApplicationRecord
  has_many :reults, dependent: :destroy

  belongs_to :user
  belongs_to :provider
end
