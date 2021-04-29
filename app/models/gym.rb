class Gym < ApplicationRecord
  has_many :trainers, dependent: :destroy
  has_many :clients, through: :trainers
end
