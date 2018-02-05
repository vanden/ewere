class TeamMembership < ApplicationRecord

  validates :team_id, :member_id, presence: true
  validates_uniqueness_of :member_id, scope: :team_id

  belongs_to :user,
             class_name: 'User',
             foreign_key: :member_id,
             primary_key: :id

  belongs_to :team,
             class_name: 'Team',
             foreign_key: :team_id,
             primary_key: :id

end
