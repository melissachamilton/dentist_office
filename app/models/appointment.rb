class Appointment < ApplicationRecord
  has_many :results, dependent: :destroy

  belongs_to :user
  belongs_to :provider
end
