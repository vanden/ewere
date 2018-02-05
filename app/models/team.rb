class Team < ApplicationRecord
  validates :creator_id, :description, presence: true
  validates :name, presence: true, uniqueness: true

  belongs_to :creator,
             foreign_key: :creator_id,
             class_name: :User

  has_many :team_memberships,
           foreign_key: :team_id

  has_many :members, through: :team_memberships, source: :user
end
