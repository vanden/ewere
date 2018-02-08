class User < ApplicationRecord

  validates :username, :session_token, :email, uniqueness: true, presence: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password


  has_many :created_teams,
           class_name: 'Team',
           foreign_key: :creator_id

  has_many :team_memberships,
           foreign_key: :member_id

  has_many :teams, through: :team_memberships, source: :team

  has_many :owned_projects,
           class_name: :Project,
           foreign_key: :owner_id

  has_many :projects, through: :teams

  has_many :tasks,
           foreign_key: :owner_id


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    unless user then return nil end

    if user.is_password?(password) then return user end

    return nil
  end


  def password=(password)
    @password=password
    self.password_digest = BCrypt::Password.create(password)
  end


  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end


  def reset_session_token!
    self.session_token = generate_unique_session_token
    save!
    self.session_token
  end


  private

  def generate_unique_session_token
    loop do
      self.session_token = SecureRandom::urlsafe_base64
      unless User.find_by(session_token: self.session_token) then break end
    end
    self.session_token
  end
end
