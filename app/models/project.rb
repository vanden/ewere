class Project < ApplicationRecord

  validates :owner_id, :team_id, :description, :name, presence: true
  validates_uniqueness_of :name, scope: :team_id

  belongs_to :owner,
             foreign_key: :owner_id,
             class_name: :User

  belongs_to :team,
             foreign_key: :team_id,
             class_name: :Team

  has_many :tasks,
           foreign_key: :project_id


  has_many :members,
           through: :team,
           source: :members

end
