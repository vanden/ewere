class Project < ApplicationRecord

  validates :owner_id, :team_id, :description, presence: true

  # It would be better to scope the uniqueness to the team, wouldn't
  # it? # ThinkMore
  validates :name, presence: true, uniqueness: true

  belongs_to :owner,
             foreign_key: :owner_id,
             class_name: :User

  belongs_to :team,
             foreign_key: :team_id,
             class_name: :Team

  # Should have_many Tasks once Tasks exist


  has_many :members,
           through: :team,
           source: :members

end
