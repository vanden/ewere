class Project < ApplicationRecord

  validates :creator_id, :team_id, :description, presence: true

  # It would be better to scope the uniqueness to the team, wouldn't
  # it? # ThinkMore
  validates :name, presence: true, uniqueness: true

  belongs_to :creator,
             foreign_key: :creator_id,
             class_name: :User

  belongs_to :team,
             foreign_key: :team_id,
             class_name: :Team

  # Should have_many Tasks once Tasks exist


  has_many :members,
           through: :team,
           source: :members

end
