class Task < ApplicationRecord
  # I would like :author_id, but lets wait
  validates :title, :owner_id, :project_id, presence: true
  validates_uniqueness_of :title, scope: :project_id
  validates :done, inclusion: { in: [ true, false ] }

  belongs_to :user,
             foreign_key: :owner_id

  belongs_to :project,
             foreign_key: :project_id
  
end


