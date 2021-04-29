class Trainer < ApplicationRecord
  belongs_to :gym 
  has_many :clients, dependent: :destroy
end
